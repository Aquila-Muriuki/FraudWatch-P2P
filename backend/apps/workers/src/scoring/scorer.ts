import { evaluateRules } from './rulesEngine';
import { runAIChecks } from './aiChecks';
import { prisma } from '../prisma';

export async function runImmediateScore(txRecord: any) {
  const rules = await prisma.rule.findMany({ where: { active: true } });

  const { triggered, deterministicScore } = evaluateRules(txRecord, rules as any);
  const ai = await runAIChecks(txRecord);
  const aiScore = ai.aiPoints;

  // Weighted combine: deterministic (max 70) + AI (max 40) -> cap 100
  const combined = Math.min(Math.round(deterministicScore + aiScore), 100);

  const riskLevel = combined >= 61 ? 'HIGH' : combined >= 31 ? 'WARNING' : 'LOW';
  const status = combined >= 61 ? 'BLOCK' : combined >= 31 ? 'REVIEW' : 'APPROVE';

  // Merge flags for persistence
  const flags = [
    ...triggered.map(t => ({ rule: t.ruleCode, reason: t.reason, legalRef: t.legalRef, points: t.points })),
    ...ai.flags.map((f: any) => ({ rule: f.name, reason: f.message, evidence: f.evidence, points: f.points }))
  ];

  const decision = await prisma.decision.create({
    data: {
      transactionId: txRecord.id,
      score: combined,
      riskLevel,
      status,
      flags: flags,
      rulesTriggered: triggered
    }
  });

  await prisma.transaction.update({ where: { id: txRecord.id }, data: { processedAt: new Date(), decisionId: decision.id } });
  return decision;
}

