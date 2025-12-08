import { Rule } from '@prisma/client';

export type RuleTrigger = { ruleCode: string; reason: string; legalRef?: string; points: number; extra?: any };

export function evaluateRules(transaction: any, rules: Rule[]): { triggered: RuleTrigger[]; deterministicScore: number } {
  const triggered: RuleTrigger[] = [];
  let deterministicScore = 0;

  for (const r of rules) {
    if (!r.active) continue;
    const payload = typeof r.payload === 'string' ? JSON.parse(r.payload) : r.payload;

    if (r.ruleType === 'threshold' && payload.field === 'amount') {
      const limits = payload.limitByDept || {};
      const deptLimit = transaction.department ? limits[transaction.department] : undefined;
      if (deptLimit && transaction.amount > deptLimit) {
        triggered.push({
          ruleCode: r.code,
          reason: `Amount ${transaction.amount} exceeds delegated limit ${deptLimit} for ${transaction.department}`,
          legalRef: payload.legalRef,
          points: r.severity
        });
        deterministicScore += r.severity;
      }
    }

    if (r.ruleType === 'custom' && payload.threshold) {
      if (transaction.amount > payload.threshold) {
        triggered.push({
          ruleCode: r.code,
          reason: `Amount ${transaction.amount} > threshold ${payload.threshold}`,
          legalRef: payload.legalRef,
          points: r.severity
        });
        deterministicScore += r.severity;
      }
    }

    if (r.ruleType === 'regex' && payload.field && payload.pattern) {
      const v = String(transaction[payload.field] ?? '');
      const patt = new RegExp(payload.pattern, 'i');
      if (patt.test(v)) {
        triggered.push({
          ruleCode: r.code,
          reason: `Field ${payload.field} matches forbidden pattern`,
          legalRef: payload.legalRef,
          points: r.severity
        });
        deterministicScore += r.severity;
      }
    }
  }

  deterministicScore = Math.min(deterministicScore, 70); // cap deterministic part a bit higher
  return { triggered, deterministicScore };
}
