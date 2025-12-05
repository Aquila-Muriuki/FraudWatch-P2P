// src/app/dashboard/components/AlertsFeed.tsx
"use client";

import { motion } from "framer-motion";

const SAMPLE = [
  { id: "A-1001", msg: "Duplicate invoice detected — INV-45532", score: 0.92, time: "2m" },
  { id: "A-1002", msg: "Vendor mismatch across departments — Vendor: ACME", score: 0.81, time: "9m" },
  { id: "A-1003", msg: "Unusually large payment above threshold — $50,000", score: 0.79, time: "45m" },
];

export default function AlertsFeed() {
  return (
    <div className="space-y-3">
      {SAMPLE.map((s, i) => (
        <motion.div key={s.id} initial={{opacity:0, x: -8}} animate={{opacity:1, x:0}} transition={{delay: i*0.06}} className="p-3 rounded-md bg-black/40 border border-white/6">
          <div className="flex justify-between items-start">
            <div>
              <div className="text-sm font-medium">{s.msg}</div>
              <div className="text-xs text-slate-400 mt-1">#{s.id} • {s.time} ago</div>
            </div>
            <div className="text-sm font-semibold">{Math.round(s.score*100)}%</div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
