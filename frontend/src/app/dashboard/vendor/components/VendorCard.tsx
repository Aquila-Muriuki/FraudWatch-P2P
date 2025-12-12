"use client";

import { motion } from "framer-motion";

interface VendorCardProps {
  vendor: {
    id: string;
    name: string;
    category?: string;
    riskScore: number;
  };
  onClick?: () => void;
}

export default function VendorCard({ vendor, onClick }: VendorCardProps) {
  const getRiskColor = (score: number) => {
    if (score >= 70) return "bg-red-500";
    if (score >= 40) return "bg-yellow-400";
    return "bg-green-500";
  };

  return (
    <motion.div
      layout
      whileHover={{ scale: 1.03 }}
      className="p-4 rounded-xl shadow-lg bg-white cursor-pointer border border-gray-200"
      onClick={onClick}
    >
      <div className="flex justify-between items-center mb-2">
        <h2 className="font-semibold text-lg">{vendor.name}</h2>
        <span
          className={`px-3 py-1 rounded-full text-white font-bold ${getRiskColor(
            vendor.riskScore
          )}`}
        >
          {vendor.riskScore}
        </span>
      </div>
      {vendor.category && (
        <p className="text-gray-500 text-sm">{vendor.category}</p>
      )}
    </motion.div>
  );
}
