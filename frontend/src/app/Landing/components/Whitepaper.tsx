"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";

export default function Whitepaper() {
  return (
    <section className="py-28 bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <FileText className="w-14 h-14 mx-auto text-cyan-400 mb-6" />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold mb-6"
        >
          Download the Technical Whitepaper
        </motion.h2>

        <p className="text-slate-300 max-w-xl mx-auto mb-8">
          Deep dive into our architecture, fraud detection models, 
          compliance engine design, and IFMIS integration blueprint.
        </p>

        <a
          href="#"
          className="inline-block px-6 py-3 bg-cyan-500 text-slate-900 font-semibold rounded-xl hover:bg-cyan-400 transition-all"
        >
          Download PDF
        </a>
      </div>
    </section>
  );
}
