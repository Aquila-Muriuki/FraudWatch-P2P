"use client";

import { motion } from "framer-motion";

const invoices = [
  {
    id: "INV-2024-1932",
    supplier: "Mara Supplies Ltd",
    amount: "Ksh 4,200,000",
    score: 82,
    status: "BLOCK",
    reason: "Duplicate match 91%",
  },
  {
    id: "INV-2024-1924",
    supplier: "CoastTech Traders",
    amount: "Ksh 2,120,400",
    score: 68,
    status: "REVIEW",
    reason: "Exceeds department limit",
  },
  {
    id: "INV-2024-1887",
    supplier: "Nyota Engineering",
    amount: "Ksh 530,000",
    score: 32,
    status: "APPROVE",
    reason: "Pricing normal",
  },
];

export default function InvoiceTable() {
  return (
    <section className="glass p-5 rounded-xl border border-white/6 flex flex-col gap-4 min-w-0">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold">Invoice Screening</h3>
        <div className="text-sm text-slate-400">Last 10 processed</div>
      </div>

      <div className="overflow-x-auto min-w-full">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-slate-400 border-b border-white/10">
              <th className="text-left py-2 pr-4">Invoice</th>
              <th className="text-left py-2 pr-4">Supplier</th>
              <th className="text-left py-2 pr-4">Amount</th>
              <th className="text-left py-2 pr-4">Score</th>
              <th className="text-left py-2 pr-4">Decision</th>
              <th className="text-left py-2 pr-4">Reason</th>
              <th />
            </tr>
          </thead>

          <tbody>
            {invoices.map((inv, i) => {
              const badgeColor =
                inv.score >= 70 ? "text-red-400" :
                inv.score >= 40 ? "text-yellow-400" :
                "text-green-400";

              return (
                <motion.tr
                  key={inv.id}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="border-b border-white/5"
                >
                  <td className="py-3 pr-4 font-medium">{inv.id}</td>
                  <td className="py-3 pr-4">{inv.supplier}</td>
                  <td className="py-3 pr-4">{inv.amount}</td>
                  <td className={`py-3 pr-4 font-semibold ${badgeColor}`}>
                    {inv.score}
                  </td>
                  <td className="py-3 pr-4">{inv.status}</td>
                  <td className="py-3 pr-4 text-slate-300">{inv.reason}</td>
                  <td className="py-3 pr-4">
                    <button className="px-3 py-1 rounded bg-white/10 hover:bg-white/20 transition">
                      View
                    </button>
                  </td>
                </motion.tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
