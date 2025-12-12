"use client";

import { motion, AnimatePresence } from "framer-motion";

interface TransactionViewDrawerProps {
  open: boolean;
  onClose: () => void;
  txData: any;          
  decision?: "APPROVED" | "DECLINED";
}

export default function TransactionViewDrawer({ open, onClose, txData, decision }: TransactionViewDrawerProps) {
  if (!open) return null;

  const isApproved = decision !== "DECLINED";

  // Dynamic reasoning
  const reasoning = isApproved
    ? [
        "Approved — transaction complies with PFM & PPDA acts",
        "No duplicate invoice detected",
        "Amount within allocated budget",
        "Supplier verified against government registry"
      ]
    : [
        "Declined — violates PPDA Act Section 23",
        "Exceeds allocated departmental budget",
        "Duplicate invoice detected",
        "Supplier not registered in government registry"
      ];

  return (
    <AnimatePresence>
      {/* Background */}
      <motion.div
        className="fixed inset-0 z-40 bg-black/70 backdrop-blur-md"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        exit={{ opacity: 0 }}
      />

      {/* Drawer */}
      <motion.div
        className="fixed inset-y-0 right-0 w-full md:w-2/5 z-50 bg-[#0c131f] p-6 shadow-2xl border border-white/10 overflow-y-auto rounded-l-xl"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-white">Transaction Details</h2>
          <button
            onClick={onClose}
            className="p-2 bg-white/10 rounded-lg hover:bg-white/20"
          >
            ✕
          </button>
        </div>

        {/* Transaction Info */}
        <div className="space-y-3 text-white">
          <InfoRow label="Supplier" value={txData?.supplierName ?? "--"} />
          <InfoRow label="Amount" value={txData?.amount ? `KES ${txData.amount.toLocaleString()}` : "--"} />
          <InfoRow label="Invoice" value={txData?.invoiceNumber ?? "N/A"} />
          <InfoRow label="Department" value={txData?.department ?? "N/A"} />
          <InfoRow label="Status" value={txData?.status ?? "PENDING"} />
        </div>

        {/* AI Risk / Compliance */}
        <div className="bg-white/5 p-4 rounded-lg border border-white/10 mt-6">
          <div className="flex justify-between items-center mb-3">
            <p className="text-gray-400 text-sm">AI Risk & Compliance</p>
            <span
              className={`px-2 py-1 rounded text-xs font-semibold ${
                isApproved ? "bg-green-600/30 text-green-400" : "bg-red-600/30 text-red-400"
              }`}
            >
              {isApproved ? "APPROVED" : "DECLINED"}
            </span>
          </div>

          <ul className="text-white/80 text-sm space-y-2">
            {reasoning.map((r, i) => (
              <motion.li
                key={`${i}-${r}`} // ✅ unique key
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15 }} // stagger effect
              >
                <span className={isApproved ? "text-green-400 font-bold" : "text-red-400 font-bold"}>
                  {isApproved ? "✔" : "✖"}
                </span>
                {r}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="mt-6 w-full py-3 bg-white/10 rounded-lg hover:bg-white/20 transition"
        >
          Close
        </button>
      </motion.div>
    </AnimatePresence>
  );
}

// Info Row component
function InfoRow({ label, value }: { label: string; value: any }) {
  return (
    <div className="flex justify-between items-center bg-white/5 p-2 rounded-md border border-white/10">
      <span className="text-gray-400 text-sm">{label}</span>
      <span className="text-white font-medium">{value}</span>
    </div>
  );
}
