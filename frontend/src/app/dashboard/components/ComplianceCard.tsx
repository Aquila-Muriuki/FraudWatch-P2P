"use client";

import { ShieldCheck, FileText } from "lucide-react";

export default function ComplianceCard({ summary }: { summary: { passed: number; failed: number; lastChecked: string } }) {
  const summaryItems = [
    { label: "Passed", value: summary.passed, icon: ShieldCheck },
    { label: "Failed", value: summary.failed, icon: FileText },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {summaryItems.map((item) => (
        <div key={item.label} className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
          <item.icon size={24} className="text-cyan-400" />
          <div>
            <div className="text-sm text-slate-300">{item.label}</div>
            <div className="text-xl font-bold">{item.value}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
