"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { applyGsapScrollAnimations } from "../gsap/gsapAnimations";

export default function TransactionsTable({
  data = [],
  refresh,
  onView
}: {
  data: any[];
  refresh?: () => void;
  onView?: (id: string) => void;
}) {
  const tbodyRef = useRef<HTMLTableSectionElement | null>(null);

  useEffect(() => {
    if (tbodyRef.current) {
      applyGsapScrollAnimations(tbodyRef.current);
    }
  }, []);

  const rowVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.03 }
    })
  };

  return (
    <div className="overflow-x-auto rounded-xl border border-white/10 bg-[#0b111a]/60 backdrop-blur-md shadow-xl">
      <table className="min-w-full text-sm text-slate-300">
        <thead className="text-xs text-slate-400 uppercase bg-white/5">
          <tr>
            <th className="p-3 text-left">Supplier</th>
            <th className="p-3 text-left">Department</th>
            <th className="p-3 text-right">Amount</th>
            <th className="p-3 text-left">Invoice</th>
            <th className="p-3 text-center">Status</th>
            <th className="p-3 text-center">Risk</th>
            <th className="p-3 text-right">View</th>
          </tr>
        </thead>

        <tbody ref={tbodyRef}>
          {data.map((t: any, i: number) => {
            const decision = t.decisions?.[0] || null;
            const riskLevel = decision?.riskLevel || "PENDING";

            const riskClass =
              riskLevel === "HIGH"
                ? "bg-red-500/25 text-red-300"
                : riskLevel === "WARNING"
                ? "bg-yellow-500/20 text-yellow-300"
                : decision
                ? "bg-green-500/20 text-green-300"
                : "bg-slate-700/20 text-slate-300";

            return (
              <motion.tr
                key={t.id}
                initial="hidden"
                animate="visible"
                variants={rowVariants}
                custom={i}
                whileHover={{ scale: 1.003, backgroundColor: "rgba(255,255,255,0.03)" }}
                className="transition-colors"
              >
                <td className="p-3">{t.supplierName}</td>
                <td className="p-3">{t.department}</td>
                <td className="p-3 text-right font-semibold">
                  {Number(t.amount).toLocaleString()}
                </td>
                <td className="p-3">{t.invoiceNumber}</td>
                <td className="p-3 text-center">
                  <span className="px-2 py-1 rounded text-xs bg-white/10">
                    {t.status}
                  </span>
                </td>
                <td className="p-3 text-center">
                  <span className={`px-2 py-1 rounded text-xs ${riskClass}`}>
                    {riskLevel}
                  </span>
                </td>
                <td className="p-3 text-right">
                  <button
                    onClick={() => onView?.(t.id)}
                    className="px-3 py-1 rounded-md bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 text-xs transition"
                  >
                    View
                  </button>
                </td>
              </motion.tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
