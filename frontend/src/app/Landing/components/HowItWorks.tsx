"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FileSearch, BrainCircuit, Scale, CheckCircle2, Banknote } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: "1. Data Ingestion",
    desc: "Collects procurement documents, supplier records, invoices, and payment data securely.",
    icon: FileSearch,
  },
  {
    title: "2. AI Risk Analysis",
    desc: "Detects ghost suppliers, duplicate invoices, abnormal patterns, and collusion indicators.",
    icon: BrainCircuit,
  },
  {
    title: "3. Compliance Validation",
    desc: "Automatically checks PFM Act, PPDA rules, budget limits, and policy safeguards.",
    icon: Scale,
  },
  {
    title: "4. Decision Automation",
    desc: "Flags risky transactions, approves safe ones, and generates audit-ready explanations.",
    icon: CheckCircle2,
  },
   {
    title: "5. Payment Execution",
    desc: "Secure P2P workflow connects to finance systems for clean, compliant disbursements.",
    icon: Banknote,
  },
];

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".timeline-step",
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.3,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".timeline-line",
        { height: 0 },
        {
          height: "100%",
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
          },
        }
      );
    }, ref);

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={ref}
      className="relative py-28 bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden"
    >
      {/* Floating Gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-1/3 w-[35rem] h-[35rem] bg-cyan-600/10 blur-3xl rounded-full" />
        <div className="absolute bottom-10 right-1/4 w-[30rem] h-[30rem] bg-blue-500/10 blur-3xl rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
        >
          How The AI Engine Works
        </motion.h2>

        <p className="text-blue-100 max-w-2xl mx-auto text-center mb-20">
          A fully automated end-to-end pipeline designed for government
          Procure-to-Pay oversight.
        </p>

        <div className="relative grid md:grid-cols-2 gap-16">
          {/* Vertical Line */}
          <div className="timeline-line absolute left-1/2 top-0 -translate-x-1/2 w-1 bg-cyan-500/20 rounded-full" />

          {steps.map((step, index) => (
            <div
              key={index}
              className={`timeline-step relative p-8 bg-slate-800/40 border border-white/10 rounded-2xl shadow-md hover:shadow-cyan-400/20 
                backdrop-blur-md transition-all duration-300 ${
                  index % 2 === 0 ? "md:mr-10" : "md:ml-10"
                }`}
            >
              <step.icon className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                {step.title}
              </h3>
              <p className="text-blue-200 text-sm">{step.desc}</p>

              {/* Dot */}
              <div className="absolute top-8 left-[-0.75rem] w-4 h-4 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/40" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
