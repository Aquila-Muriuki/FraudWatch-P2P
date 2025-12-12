"use client";

const items = [
  {
    id: "INV-2024-1932",
    action: "Blocked",
    person: "CFO - Treasury",
    rule: "Duplicate Match (91%)",
    time: "4m ago",
  },
  {
    id: "INV-2024-1924",
    action: "Sent for Review",
    person: "Internal Auditor",
    rule: "Exceeds Limit (PFM Sec 149(2))",
    time: "12m ago",
  },
  {
    id: "INV-2024-1887",
    action: "Approved",
    person: "Procurement Officer",
    rule: "No Anomaly",
    time: "23m ago",
  },
];

export default function AuditTrail() {
  return (
    <section className="glass p-5 rounded-xl border border-white/6 flex flex-col gap-4">
      <h3 className="text-lg font-semibold">Immutable Audit Trail</h3>

      <div className="space-y-3">
        {items.map((item) => (
          <div key={item.id} className="flex flex-col gap-1 p-3 rounded-lg bg-white/5">
            <div className="flex justify-between">
              <span className="font-semibold">{item.id}</span>
              <span className="text-slate-400 text-sm">{item.time}</span>
            </div>
            <div className="text-sm text-teal-300">{item.action}</div>
            <div className="text-xs text-slate-300">{item.rule}</div>
            <div className="text-xs text-yellow-300">Reviewer: {item.person}</div>
          </div>
        ))}
      </div>

      <div className="text-xs text-slate-500 text-right">
        Stored in immutable ledger
      </div>
    </section>
  );
}
