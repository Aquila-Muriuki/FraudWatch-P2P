// apps/worker/src/processors/score.ts

import type { ExtendedPrismaClient } from '@core/prisma/prismaClient';
import { runRiskEngine } from '@core/scoring/riskEngine';

export async function processScoreJob(
  prisma: ExtendedPrismaClient,
  jobBody: any
) {

  const txId = jobBody.transactionId || jobBody.id;
  if (!txId) throw new Error("Missing transactionId in worker job");

  // Get latest transaction
  const tx = await prisma.transaction.findUnique({
    where: { id: txId }
  });

  if (!tx) throw new Error(`Transaction not found: ${txId}`);

  // 🔥 STEP 1 — Try match vendor using supplierName (non-breaking)
  let vendor = null;

  if (tx.supplierName) {
    vendor = await prisma.vendor.findFirst({
      where: { name: tx.supplierName }
    });
  }

  // 🔥 STEP 2 — Attach vendorId if found (NON-BREAKING)
  if (vendor && !tx.vendorId) {
    await prisma.transaction.update({
      where: { id: tx.id },
      data: { vendorId: vendor.id }
    });
  }

  // Load rules
  const rules = await prisma.rule.findMany({
    where: { active: true }
  });

  // Run your AI + rule engine
  const result = await runRiskEngine(tx, prisma, rules);

  // 🔥 STEP 3 — Update vendor risk score (if matched)
  if (vendor) {
    try {
      await prisma.vendor.update({
        where: { id: vendor.id },
        data: {
          riskScore: Math.min(100, Math.max(0, result.combined)) // clamp to 0–100
        }
      });
    } catch (e) {
      console.error("Vendor score update failed:", e);
    }
  }

  // 🔥 STEP 4 — Create decision
  const decision = await prisma.decision.create({
    data: {
      transactionId: tx.id,
      score: result.combined,
      riskLevel: result.riskLevel,
      status: result.status,
      flags: result.flags,
      rulesTriggered: result.triggered,
      auditSnapshot: result.auditSnapshot,
      modelVersion: result.modelVersion ?? "v1"
    }
  });

  // 🔥 STEP 5 — Update transaction
  await prisma.transaction.update({
    where: { id: tx.id },
    data: {
      processedAt: new Date(),
      status: result.status
    }
  });

  return {
    success: true,
    decisionId: decision.id,
    score: result.combined,
    vendorMatched: vendor ? vendor.name : null
  };
}
