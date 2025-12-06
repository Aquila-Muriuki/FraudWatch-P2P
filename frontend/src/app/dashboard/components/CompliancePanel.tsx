"use client";

import { motion } from "framer-motion";
import ComplianceCard from "./ComplianceCard";

const summary = { passed: 320, failed: 12, lastChecked: new Date().toISOString() };

export default function CompliancePanel() {
  return (
    <section className="glass p-4 rounded-xl border border-white/6 flex flex-col">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-2">
        <h3 className="text-lg font-semibold">Compliance Validation</h3>
        <div className="text-sm text-slate-400">PFM Act • PPDA • Budget rules</div>
      </div>

      <div className="overflow-auto">
        <ComplianceCard summary={summary} />
      </div>
    </section>
  );
}
