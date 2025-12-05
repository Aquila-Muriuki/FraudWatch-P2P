"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

const metrics = [
  {
    value: "87%",
    label: "Reduction in procurement fraud",
  },
  {
    value: "40%",
    label: "Faster audit cycles",
  },
  {
    value: "99.2%",
    label: "Policy compliance accuracy",
  },
  {
    value: "60M+",
    label: "Recovered/budget leakages",
  },
];

export default function ImpactMetrics() {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.from(cardsRef.current, {
      opacity: 0,
      y: 30,
      duration: 1,
      stagger: 0.15,
      ease: "power4.out",
    });
  }, []);

  return (
    <section className="py-28 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Impact Where It Matters
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {metrics.map((m, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el!)}
              className="bg-slate-900/50 border border-white/10 p-8 rounded-2xl shadow-xl"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                {m.value}
              </div>
              <div className="text-slate-300 text-sm mt-2">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
