"use client";

import { motion } from "framer-motion";

export default function Demo() {
  return (
    <section
      id="demo"
      className="py-32 bg-gradient-to-b from-black to-slate-900 text-white"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold mb-10"
        >
          Interactive AI Dashboard
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="p-8 rounded-3xl bg-slate-800/40 border border-white/10 shadow-2xl"
        >
          <img
            src="/assets/mock-dashboard.png"
            className="w-full rounded-xl shadow-lg"
            alt="Dashboard Preview"
          />
        </motion.div>
      </div>
    </section>
  );
}
