"use client";

import { motion } from "framer-motion";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1.4, ease: "power4.out" }
    );
  }, []);

  return (
    <section
      ref={heroRef}
      className="min-h-screen w-full flex flex-col justify-center items-center text-center
      bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white p-6"
    >
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-5xl md:text-7xl font-bold tracking-tight max-w-4xl"
      >
        AI-Powered Public Finance Threat Intelligence
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-6 text-lg md:text-xl max-w-3xl text-slate-300"
      >
        Real-time fraud detection, automated auditing, and policy-driven compliance 
        for government Procure-to-Pay systems.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 1.2 }}
        className="mt-10 flex gap-4"
      >
        <button className="px-8 py-4 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold shadow-lg">
          Get Started
        </button>

        <button className="px-8 py-4 rounded-xl border border-white/30 hover:bg-white/10 text-white font-semibold">
          View Demo
        </button>
      </motion.div>
    </section>
  );
}
