"use client";

import WhitepaperModal from "@/app/Landing/components/whitepaper/WhitepaperModel";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ArrowRight, FileText } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Cta() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.from(sectionRef.current, {
      opacity: 0,
      y: 60,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 85%",
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-28 bg-gradient-to-b from-blue-950 to-slate-950 text-white overflow-hidden"
    >
      {/* Glow background */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[220px]" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
        >
          Transform Public Finance With AI
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-slate-300 max-w-2xl mx-auto text-lg mb-10"
        >
          Automate compliance, detect fraud patterns early, and enable real-time
          audit-ready public financial management at national scale.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-black font-medium px-6 py-3 rounded-xl text-sm md:text-base transition-all duration-300"
          >
            Request a Demo <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => setOpen(true)}
            className="flex items-center gap-2 border border-cyan-400 hover:bg-cyan-400/10 text-cyan-400 font-medium px-6 py-3 rounded-xl text-sm md:text-base transition-all duration-300"
          >
            Read Whitepaper <FileText className="w-4 h-4" />
          </button>
        </motion.div>
      </div>

      {/* Modal */}
      <WhitepaperModal open={open} onClose={() => setOpen(false)} />
    </section>
  );
}
