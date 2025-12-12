// @core/scoring/riskEngine.ts
import { evaluateRules } from '../../core/rules/engine';
import { runAIChecks } from './aiChecks';
import { jaroWinkler } from './utils/similarity';
import type { ExtendedPrismaClient } from '@core/prisma/prismaClient';

/**
 * runRiskEngine
 * - tx: transaction object (as read from DB)
 * - prisma: ExtendedPrismaClient instance
 * - activeRules: rules loaded from DB (optional)
 * - vendorIn: optional vendor object (if already fetched by caller)
 *
 * Returns: { combined, riskLevel, status, flags, triggered, auditSnapshot, modelVersion }
 */
export async function runRiskEngine(
  tx: any,
  prisma: ExtendedPrismaClient,
  activeRules: any[] = [],
  vendorIn?: any
) {
  // ----------------------------
  // 0️⃣ Defensive sanity
  // ----------------------------
  if (!tx) throw new Error('runRiskEngine: tx is required');

  // ----------------------------
  // 1️⃣ Deterministic rule engine (DB-driven)
  // ----------------------------
  const { triggered = [], deterministicScore: rulesScore = 0, flags: rulesFlags = [] } =
    evaluateRules(tx, activeRules || []);

  // We'll start deterministicScore from DB rule engine, then augment with built-in heuristics
  let deterministicScore = Number(rulesScore || 0);

  // ----------------------------
  // 1B: Built-in deterministic heuristics (quick, transparent rules)
  // These are intentionally on by default so the system behaves even without DB rules.
  // ----------------------------
  try {
    // Amount thresholds (tunable)
    if (typeof tx.amount === 'number') {
      if (tx.amount > 1_000_000) {
        deterministicScore += 60; // urgent
        triggered.push({
          ruleCode: 'BUILTIN_AMOUNT_OVER_1M',
          reason: `Amount ${tx.amount} > 1,000,000`,
          points: 60
        });
      } else if (tx.amount > 200_000) {
        deterministicScore += 35;
        triggered.push({
          ruleCode: 'BUILTIN_AMOUNT_OVER_200K',
          reason: `Amount ${tx.amount} > 200,000`,
          points: 35
        });
      } else if (tx.amount > 50_000) {
        deterministicScore += 10;
        triggered.push({
          ruleCode: 'BUILTIN_AMOUNT_OVER_50K',
          reason: `Amount ${tx.amount} > 50,000`,
          points: 10
        });
      }
    }

    // Missing or suspicious invoice number
    if (!tx.invoiceNumber || String(tx.invoiceNumber).trim().length < 3) {
      deterministicScore += 8;
      triggered.push({
        ruleCode: 'BUILTIN_MISSING_INVOICE',
        reason: 'Missing or short invoice number',
        points: 8
      });
    }

    // Department unusual heuristics (example)
    if (tx.department === 'Procurement' && Number(tx.amount) > 100_000) {
      deterministicScore += 6;
      triggered.push({
        ruleCode: 'BUILTIN_PROCUREMENT_HIGH',
        reason: 'Procurement payment > 100,000',
        points: 6
      });
    }

    // Description red flags (if available in rawPayload or description)
    const desc = (tx.rawPayload?.description || tx.description || '') + '';
    if (desc && /urgent|cash|immediate|transfer|off-book/i.test(desc)) {
      deterministicScore += 12;
      triggered.push({
        ruleCode: 'BUILTIN_DESC_RED_FLAG',
        reason: `Description contains suspicious keywords`,
        points: 12
      });
    }
  } catch (err) {
    // never blow up scoring on heuristic errors
    console.error('Builtin heuristic error', err);
  }

  // Cap deterministic portion (so AI/vendor still influence)
  deterministicScore = Math.min(100, deterministicScore, 70); // keep deterministic capped (70)

  // ----------------------------
  // 2️⃣ AI checks
  // ----------------------------
  let aiRes: any = { aiScore: 0, aiFlags: [], aiDetails: {} };
  try {
    aiRes = (await runAIChecks(tx, prisma as any)) || aiRes;
  } catch (err) {
    console.error('AI checks error:', err);
  }
  const aiScore = Math.min(40, Number(aiRes.aiScore ?? 0)); // aiScore max 40 by design

  // ----------------------------
  // 3️⃣ Vendor signals
  // ----------------------------
  let vendor = vendorIn ?? null;
  try {
    if (!vendor && tx.vendorId) {
      vendor = await prisma.vendor.findUnique({ where: { id: tx.vendorId } });
    }
    if (!vendor && tx.supplierName) {
      // non-blocking fuzzy match (first match)
      vendor = await prisma.vendor.findFirst({
        where: {
          name: { contains: tx.supplierName, mode: 'insensitive' }
        }
      });
    }
  } catch (err) {
    console.error('Vendor lookup failed:', err);
  }

  let vendorScore = 0;
  const vendorFlags: any[] = [];
  try {
    if (vendor) {
      // historical risky transactions
      const riskyCount = await prisma.transaction.count({
        where: {
          vendorId: vendor.id,
          status: { in: ['BLOCK', 'REVIEW'] }
        }
      });

      if (riskyCount > 0) {
        const pts = Math.min(25, riskyCount * 8);
        vendorScore += pts;
        vendorFlags.push({
          type: 'VENDOR',
          rule: 'VENDOR_RISK_HISTORY',
          reason: `${riskyCount} prior high-risk transactions`,
          points: pts
        });
      }

      // name similarity check
      try {
        const sim = jaroWinkler(tx.supplierName || '', vendor.name || '');
        if (sim < 0.85) {
          vendorScore += 20;
          vendorFlags.push({
            type: 'VENDOR',
            rule: 'VENDOR_NAME_MISMATCH',
            reason: 'Supplier name differs from registered vendor name',
            evidence: { supplier: tx.supplierName, vendor: vendor.name, similarity: sim },
            points: 20
          });
        }
      } catch (_) {}

      // small vendor (few transactions)
      const totalVendorTx = await prisma.transaction.count({ where: { vendorId: vendor.id } });
      if (totalVendorTx <= 2) {
        vendorScore += 10;
        vendorFlags.push({
          type: 'VENDOR',
          rule: 'NEW_VENDOR',
          reason: 'Vendor has <= 2 transactions',
          points: 10
        });
      }

      // historic vendor riskScore
      if ((vendor.riskScore ?? 0) >= 70) {
        vendorScore += 15;
        vendorFlags.push({
          type: 'VENDOR',
          rule: 'VENDOR_HISTORIC_HIGH_RISK',
          reason: 'Vendor has high historical risk score',
          points: 15
        });
      }
    } else {
      // If vendor not found, that's slightly suspicious
      vendorScore += 6;
      vendorFlags.push({
        type: 'VENDOR',
        rule: 'VENDOR_NOT_FOUND',
        reason: 'No vendor record matched supplierName',
        points: 6
      });
    }
  } catch (err) {
    console.error('Vendor signals error:', err);
  }

  // Cap vendor contributions (so vendor doesn't dominate)
  vendorScore = Math.min(35, vendorScore);

  // ----------------------------
  // 4️⃣ Weighted combine
  // ----------------------------
  const WEIGHTS = {
    deterministic: 0.50, // 50%
    ai: 0.35,            // 35%
    vendor: 0.15         // 15%
  };

  // apply weights to scaled components (deterministicScore is max 70, aiScore max 40, vendorScore max 35)
  const weighted =
    (deterministicScore * WEIGHTS.deterministic) +
    (aiScore * WEIGHTS.ai) +
    (vendorScore * WEIGHTS.vendor);

  const combined = Math.round(Math.min(100, weighted));

  // ----------------------------
  // 5️⃣ Risk level mapping
  // ----------------------------
  const riskLevel =
    combined >= 75 ? 'HIGH' :
    combined >= 45 ? 'WARNING' : 'LOW';

  const status =
    combined >= 75 ? 'BLOCK' :
    combined >= 45 ? 'REVIEW' : 'APPROVE';

  // ----------------------------
  // 6️⃣ Flags aggregation
  // ----------------------------
  const flags = [
    // DB rule triggers already in 'triggered' array (converted)
    ...triggered.map((t: any) => ({
      type: 'RULE',
      rule: t.ruleCode,
      reason: t.reason,
      points: t.points
    })),

    // rulesFlags strings (if evaluateRules returned flags)
    ...(Array.isArray(rulesFlags) ? rulesFlags.map((f: any) => ({ type: 'RULE_FLAG', flag: f })) : []),

    // AI flags
    ...(aiRes.aiFlags ?? []).map((f: any) => ({
      type: 'AI',
      rule: f.name,
      reason: f.message,
      evidence: f.evidence,
      points: f.points
    })),

    // vendor flags
    ...vendorFlags
  ];

  // ----------------------------
  // 7️⃣ Audit snapshot
  // ----------------------------
  const auditSnapshot = {
    transaction: {
      id: tx.id,
      amount: tx.amount,
      supplierName: tx.supplierName,
      vendorId: tx.vendorId ?? null,
      invoiceNumber: tx.invoiceNumber ?? null,
      department: tx.department ?? null
    },
    scoring: {
      deterministic: {
        triggered,
        deterministicScore
      },
      ai: {
        flags: aiRes.aiFlags ?? [],
        aiScore
      },
      vendor: {
        vendorId: vendor?.id ?? null,
        vendorName: vendor?.name ?? null,
        vendorScore,
        vendorFlags
      },
      combined: {
        score: combined,
        riskLevel,
        status
      }
    },
    meta: {
      modelVersion: 'v2.0',
      timestamp: new Date().toISOString()
    }
  };

  // ----------------------------
  // 8️⃣ Debug log (helpful while testing)
  // ----------------------------
  try {
    // Use console.debug to keep logs less noisy
    console.debug('runRiskEngine summary', {
      txId: tx.id,
      deterministicScore,
      aiScore,
      vendorScore,
      combined,
      riskLevel,
      status,
      vendor: vendor ? { id: vendor.id, name: vendor.name } : null
    });
  } catch (_) {}

  // ----------------------------
  // Return canonical result
  // ----------------------------
  return {
    combined,
    riskLevel,
    status,
    flags,
    triggered,
    auditSnapshot,
    modelVersion: 'v2.0'
  };
}
