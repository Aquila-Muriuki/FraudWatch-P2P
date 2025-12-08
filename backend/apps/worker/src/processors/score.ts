import type { PrismaClient } from '@prisma/client/edge';
import { runRiskEngine } from '@core/scoring/riskEngine';

export async function processScoreJob(prisma: PrismaClient, jobBody: any) {
  const txId = jobBody.transactionId || jobBody.id;

  const tx = await prisma.transaction.findUnique({
    where: { id: txId }
  });

  if (!tx) throw new Error(`transaction not found: ${txId}`);

  const rules = await prisma.rule.findMany({
    where: { active: true }
  });

  const result = await runRiskEngine(tx, prisma, rules);

  const decision = await prisma.decision.create({
    data: {
      transactionId: tx.id,
      score: result.combined,
      riskLevel: result.riskLevel,
      status: result.status,
      flags: result.flags,
      rulesTriggered: result.triggered,
      auditSnapshot: result.auditSnapshot
    }
  });

  await prisma.transaction.update({
    where: { id: tx.id },
    data: {
      processedAt: new Date(),
      status: result.status
    }
  });

  return {
    decisionId: decision.id,
    score: result.combined
  };
}
