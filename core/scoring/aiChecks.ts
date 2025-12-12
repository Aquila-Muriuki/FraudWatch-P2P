import { jaroWinkler, tokenJaccard } from './utils/similarity';
import type { ExtendedPrismaClient } from '@core/prisma/prismaClient'; // ✅

function getPayloadField(obj: any, key: string): string {
  const payload = obj?.rawPayload;
  if (payload && typeof payload === 'object' && !Array.isArray(payload)) {
    const v = payload[key];
    return v ? String(v) : '';
  }
  return '';
}

export async function runAIChecks(tx: any, prisma: ExtendedPrismaClient) {
  const aiFlags: any[] = [];
  const aiDetails: any = {};
  let aiScore = 0;

  // ---------------------------------------------------------
  // 1. Fetch last N supplier transactions (context window)
  // ---------------------------------------------------------
  const recent = await prisma.transaction.findMany({
    where: { supplierName: tx.supplierName },
    orderBy: { createdAt: 'desc' },
    take: 200
  });

  aiDetails.recentCount = recent.length;

  // Extract safe-text
  const txText =
    getPayloadField(tx, 'invoiceText') || tx.description || tx.invoiceNumber || '';

  // ---------------------------------------------------------
  // 2. DUPLICATE / SIMILAR INVOICE CHECK (Jaro + Token Jaccard)
  // ---------------------------------------------------------
  for (const r of recent) {
    const rText =
      getPayloadField(r, 'invoiceText') || tx.description || r.invoiceNumber || '';

    const jaro = jaroWinkler(tx.invoiceNumber ?? '', r.invoiceNumber ?? '');
    const tokenSim = tokenJaccard(txText, rText);

    const amountMatch = Math.abs((tx.amount ?? 0) - (r.amount ?? 0)) < 1e-6;

    let local = 0;

    if (jaro > 0.92 && amountMatch) local = 20;
    else if (jaro > 0.85 && amountMatch) local = 15;
    else if (tokenSim > 0.8 && amountMatch) local = 12;
    else if (
      tokenSim > 0.85 &&
      Math.abs((tx.amount - r.amount) / Math.max(1, r.amount)) < 0.01
    )
      local = 10;

    if (local > 0) {
      aiFlags.push({
        name: 'DUPLICATE_SIMILAR',
        message: `Possible duplicate with transaction ${r.id}`,
        points: local,
        evidence: {
          compareInvoice: r.invoiceNumber,
          simJaro: jaro,
          simToken: tokenSim,
          compareAmount: r.amount
        }
      });

      aiScore += local;

      // Prevent multi-trigger inflation
      if (aiScore >= 40) break;
    }
  }

  // ---------------------------------------------------------
  // 3. SUPPLIER AVERAGE ANOMALY
  // ---------------------------------------------------------
  const agg = await prisma.transaction.aggregate({
    _avg: { amount: true },
    where: { supplierName: tx.supplierName }
  });

  const avg = agg._avg?.amount ?? 0;
  aiDetails.avgAmount = avg;

  if (avg > 0 && tx.amount > avg * 3) {
    aiFlags.push({
      name: 'ANOMALOUS_AMOUNT',
      message: `Amount ${tx.amount} is >3x supplier average ${avg}`,
      points: 12,
      evidence: { avg }
    });
    aiScore += 12;
  } else if (avg > 0 && tx.amount > avg * 1.6) {
    aiFlags.push({
      name: 'AMOUNT_HIGH',
      message: `Amount ${tx.amount} >1.6x supplier average ${avg}`,
      points: 6,
      evidence: { avg }
    });
    aiScore += 6;
  }

  // ---------------------------------------------------------
  // 4. LARGEST PAYMENTS FLAG
  // ---------------------------------------------------------
  if ((tx.amount ?? 0) > 2_000_000) {
    aiFlags.push({
      name: 'VERY_LARGE',
      message: 'Very large payment',
      points: 8
    });
    aiScore += 8;
  }

  // ---------------------------------------------------------
  // 5. SUPPLIER FREQUENCY SPIKE (e.g., 5+ transactions in 24h)
  // ---------------------------------------------------------
  const last24h = recent.filter(
    (r) => Date.now() - new Date(r.createdAt).getTime() < 24 * 3600 * 1000
  );

  if (last24h.length >= 5) {
    aiFlags.push({
      name: 'SUPPLIER_ACTIVITY_SPIKE',
      message: `Supplier has ${last24h.length} transactions in last 24h`,
      points: 5,
      evidence: { last24hCount: last24h.length }
    });

    aiScore += 5;
  }

  aiDetails.last24hCount = last24h.length;

  // ---------------------------------------------------------
  // OPTIONAL: MAD Outlier Detection (more stable than averages)
  // ---------------------------------------------------------
  if (recent.length >= 6) {
    const amounts = recent.map((t) => Number(t.amount || 0));
    const median =
      amounts.slice().sort((a, b) => a - b)[Math.floor(amounts.length / 2)];

    const deviations = amounts.map((a) => Math.abs(a - median));
    const mad =
      deviations.sort((a, b) => a - b)[Math.floor(deviations.length / 2)] || 0;

    aiDetails.median = median;
    aiDetails.mad = mad;

    if (mad > 0 && Math.abs(tx.amount - median) > 6 * mad) {
      aiFlags.push({
        name: 'MAD_OUTLIER',
        message: `Amount ${tx.amount} is a strong outlier (median=${median}, MAD=${mad})`,
        points: 10
      });

      aiScore += 10;
    }
  }

  // ---------------------------------------------------------
  // CAP AI SCORE
  // ---------------------------------------------------------
  aiScore = Math.min(aiScore, 40);

  return {
    aiScore,
    aiFlags,
    aiDetails
  };
}
