export function simulateAIDecision(amount: number) {
  const reasonsApproved = [
    "Fully compliant with PPADA 2015 procurement standards",
    "Supplier is active and compliant with PPRA registry",
    "Amount falls within approved departmental ceilings",
    "No conflict with PFM Act expenditure controls",
    "Historical payments show normal spending behavior",
  ];

  const reasonsReview = [
    "Missing supporting documents required under PPADA Regulation 48",
    "Invoice requires confirmation under PFM Act Section 68 compliance checks",
    "Supplier flagged for irregular pricing in past audit cycle",
    "Needs verification of IFMIS commitment entry",
    "Amount slightly exceeds internal threshold — Treasury Circular review needed",
  ];

  const reasonsDeclined = [
    "Violates PFM Act Section 149 — expenditure without proper approval",
    "Contravenes PPADA 2015 Section 53 — procurement without a valid LPO",
    "Supplier not listed in the PPRA compliant vendor registry",
    "Fails audit check: missing inspection & acceptance report (PPRA Reg. 62)",
    "Amount exceeds allowable procurement limit set by Treasury Circular 7/2022",
    "Duplicate invoice detected — conflicts with PFM Act internal control requirements",
  ];

  // ----------- Decision Logic -----------
  if (amount > 800000) {
    return {
      status: "DECLINED",
      score: Math.floor(Math.random() * 20) + 1,
      reasoning: pickRandom(reasonsDeclined, 3),
    };
  }

  if (amount < 200000) {
    return {
      status: "APPROVED",
      score: Math.floor(Math.random() * 30) + 70,
      reasoning: pickRandom(reasonsApproved, 3),
    };
  }

  return {
    status: "HUMAN_REVIEW",
    score: Math.floor(Math.random() * 50) + 30,
    reasoning: pickRandom(reasonsReview, 3),
  };
}

// Utility to randomize reasoning
function pickRandom(list: string[], count: number) {
  const shuffled = [...list].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
