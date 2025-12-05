"use client";

import { ShieldCheck, FileCheck, Lock, Scale } from "lucide-react";
import { motion } from "framer-motion";

const standards = [
  { icon: ShieldCheck, label: "ISO 27001" },
  { icon: Lock, label: "NIST CSF" },
  { icon: FileCheck, label: "PPDA Act" },
  { icon: Scale, label: "PFM Act" },
];

export default function ComplianceBadges() {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {standards.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center gap-2"
            >
              <s.icon className="w-7 h-7 text-cyan-400" />
              <span className="text-sm font-medium">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
