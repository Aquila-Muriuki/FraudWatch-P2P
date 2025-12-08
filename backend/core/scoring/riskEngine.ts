import { evaluateRules } from '../../core/rules/engine';
import { runAIChecks } from './aiChecks';
import type { PrismaClient } from '@prisma/client/edge';

export async function runRiskEngine(tx: any, prisma: PrismaClient, activeRules: any[]) {
  const { triggered, deterministicScore } = evaluateRules(tx, activeRules || []);
  const ai = await runAIChecks(tx, prisma);
  const aiScore = ai.aiPoints;

  const combined = Math.min(Math.round(deterministicScore + aiScore), 100);
  const riskLevel = combined >= 61 ? 'HIGH' : combined >= 31 ? 'WARNING' : 'LOW';
  const status = combined >= 61 ? 'BLOCK' : combined >= 31 ? 'REVIEW' : 'APPROVE';

  const flags = [
    ...triggered.map(t => ({
      rule: t.ruleCode,
      reason: t.reason,
      legalRef: t.legalRef,
      points: t.points
    })),
    ...ai.flags.map((f: any) => ({
      rule: f.name,
      reason: f.message,
      evidence: f.evidence,
      points: f.points
    }))
  ];

  const auditSnapshot = {
    transaction: tx,
    deterministic: { triggered, deterministicScore },
    ai: { flags: ai.flags, aiPoints: ai.aiPoints },
    combined: { combined, riskLevel, status },
    timestamp: new Date().toISOString()
  };

  return { combined, riskLevel, status, flags, triggered, auditSnapshot };
}
