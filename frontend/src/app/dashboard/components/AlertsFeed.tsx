"use client";

import { motion } from "framer-motion";

const SAMPLE = [
  { id: "A-1001", msg: "Duplicate invoice detected — INV-45532", score: 0.92, time: "2m" },
  { id: "A-1002", msg: "Vendor mismatch across departments — Vendor: ACME", score: 0.81, time: "9m" },
  { id: "A-1003", msg: "Unusually large payment above threshold — $50,000", score: 0.79, time: "45m" },
  { id: "A-1004", msg: "Invoice missing approval — INV-45540", score: 0.85, time: "1h" },
  { id: "A-1005", msg: "High-risk vendor flagged — Vendor: XYZ Corp", score: 0.77, time: "2h" },
];

export default function AlertsFeed() {
  return (
    <div className="glass p-4 sm:p-4 p-2 rounded-xl border border-white/6 h-full flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg sm:text-lg text-base font-semibold">Live Alerts</h3>
        <div className="text-xs text-slate-400">Real-time</div>
      </div>

      <div className="space-y-3 overflow-auto flex-1 max-h-[420px]">
        {SAMPLE.map((s, i) => (
          <motion.div
            key={s.id}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.06 }}
            className="p-3 sm:p-3 p-2 rounded-md bg-black/40 border border-white/6"
          >
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <div>
                <div className="text-sm sm:text-sm text-xs font-medium">{s.msg}</div>
                <div className="text-xs text-slate-400 mt-1">
                  #{s.id} • {s.time} ago
                </div>
              </div>
              <div className="text-sm sm:text-sm text-xs font-semibold">{Math.round(s.score * 100)}%</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
