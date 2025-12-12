// core/rules/engine.ts

export type RuleTrigger = {
  ruleCode: string;
  reason: string;
  legalRef?: string;
  points: number;
  category?: string;
  extra?: any;
};

export type RuleEvaluationResult = {
  triggered: RuleTrigger[];
  deterministicScore: number;
  flags: string[];
};

export function evaluateRules(
  tx: any,
  rules: any[]
): RuleEvaluationResult {
  const triggered: RuleTrigger[] = [];
  const flags: string[] = [];
  let deterministicScore = 0;

  for (const r of rules) {
    if (!r.active) continue;

    // Safe JSON parse
    const payload =
      typeof r.payload === "string"
        ? JSON.parse(r.payload || "{}")
        : r.payload || {};

    const severity = Number(r.severity || 0);
    const category = r.category || "GENERAL";

    // Normalize push helper (prevents duplicates)
    const pushFlag = (f: string) => {
      if (!flags.includes(f)) flags.push(f);
    };

    // ----------------------------------------------------
    // 1️⃣ THRESHOLD RULE (department-based)
    // ----------------------------------------------------
    if (r.ruleType === "threshold" && payload.field === "amount") {
      const limits = payload.limitByDept || {};
      const deptLimit =
        tx.department && limits[tx.department]
          ? Number(limits[tx.department])
          : undefined;

      if (deptLimit && Number(tx.amount) > deptLimit) {
        triggered.push({
          ruleCode: r.code,
          reason: `Amount ${tx.amount} exceeds delegated limit ${deptLimit} for department ${tx.department}`,
          legalRef: payload.legalRef,
          points: severity,
          category,
        });

        pushFlag(`LIMIT_EXCEEDED:${tx.department}`);
        deterministicScore += severity;
      }
    }

    // ----------------------------------------------------
    // 2️⃣ CUSTOM AMOUNT THRESHOLD (simple)
    // ----------------------------------------------------
    if (r.ruleType === "custom" && payload.threshold != null) {
      if (Number(tx.amount) > Number(payload.threshold)) {
        triggered.push({
          ruleCode: r.code,
          reason: `Amount ${tx.amount} > threshold ${payload.threshold}`,
          legalRef: payload.legalRef,
          points: severity,
          category,
        });

        pushFlag(`CUSTOM_THRESHOLD`);
        deterministicScore += severity;
      }
    }

    // ----------------------------------------------------
    // 3️⃣ REGEX MATCHING RULES
    // ----------------------------------------------------
    if (r.ruleType === "regex" && payload.field && payload.pattern) {
      const value = String(tx[payload.field] ?? "");

      const patterns = Array.isArray(payload.pattern)
        ? payload.pattern
        : [payload.pattern];

      for (const p of patterns) {
        const patt = new RegExp(p, "i");

        if (patt.test(value)) {
          triggered.push({
            ruleCode: r.code,
            reason: `Field "${payload.field}" matched pattern "${p}"`,
            legalRef: payload.legalRef,
            points: severity,
            category,
            extra: { matchedValue: value, pattern: p },
          });

          pushFlag(`REGEX:${payload.field}`);
          deterministicScore += severity;
          break;
        }
      }
    }

    // ----------------------------------------------------
    // 4️⃣ SUPPLIER / VENDOR BLACKLIST RULE (NEW — optional)
    // ----------------------------------------------------
    if (r.ruleType === "blacklist" && payload.list && Array.isArray(payload.list)) {
      const list = payload.list.map((x: string) => x.toLowerCase());
      const supplier = String(tx.supplierName || "").toLowerCase();

      if (list.includes(supplier)) {
        triggered.push({
          ruleCode: r.code,
          reason: `Supplier "${tx.supplierName}" is blacklisted.`,
          points: severity,
          category,
        });

        pushFlag("BLACKLIST_HIT");
        deterministicScore += severity;
      }
    }

    // ----------------------------------------------------
    // 5️⃣ CATEGORY WEIGHTING (future)
    // ----------------------------------------------------
    // Not applied yet — structure ready.
    // E.g. procurement rules can have extra weight.
  }

  // ----------------------------------------------------
  // FINAL SCORING CAP (never exceed 70)
  // ----------------------------------------------------
  deterministicScore = Math.min(deterministicScore, 70);

  return {
    triggered,
    deterministicScore,
    flags,
  };
}
