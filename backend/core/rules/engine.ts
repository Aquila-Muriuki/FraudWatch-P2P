// core/rules/engine.ts
export type RuleTrigger = { ruleCode: string; reason: string; legalRef?: string; points: number; extra?: any };

export function evaluateRules(tx: any, rules: any[]): { triggered: RuleTrigger[]; deterministicScore: number } {
  const triggered: RuleTrigger[] = [];
  let deterministicScore = 0;

  for (const r of rules) {
    if (!r.active) continue;
    const payload = typeof r.payload === 'string' ? JSON.parse(r.payload) : r.payload;

    if (r.ruleType === 'threshold' && payload.field === 'amount') {
      const limits = payload.limitByDept || {};
      const deptLimit = tx.department ? limits[tx.department] : undefined;
      if (deptLimit && tx.amount > deptLimit) {
        triggered.push({
          ruleCode: r.code,
          reason: `Amount ${tx.amount} exceeds delegated limit ${deptLimit} for ${tx.department}`,
          legalRef: payload.legalRef,
          points: r.severity
        });
        deterministicScore += r.severity;
      }
    }

    if (r.ruleType === 'custom' && payload.threshold) {
      if (tx.amount > payload.threshold) {
        triggered.push({
          ruleCode: r.code,
          reason: `Amount ${tx.amount} > threshold ${payload.threshold}`,
          legalRef: payload.legalRef,
          points: r.severity
        });
        deterministicScore += r.severity;
      }
    }

    if (r.ruleType === 'regex' && payload.field && payload.pattern) {
      const v = String(tx[payload.field] ?? '');
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

  deterministicScore = Math.min(deterministicScore, 70); // cap
  return { triggered, deterministicScore };
}
