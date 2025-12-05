"use client";

import ParticleBackground from "@/app/Landing/components/ParticleBackground";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BarChart3, ScanSearch, ShieldCheck, Workflow } from "lucide-react";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "AI Fraud Detection",
    description:
      "Detects ghost suppliers, invoice fraud, collusion patterns, and abnormal financial behavior in real-time.",
    icon: ScanSearch,
  },
  {
    title: "GenAI Compliance Agent",
    description:
      "Checks PFM Act, PPDA Act, and procurement policies automatically before approving transactions.",
    icon: ShieldCheck ,
  },
  {
    title: "Real-Time Dashboards",
    description:
      "Live insights, risk scoring, red-flag alerts, and automated audit summaries.",
    icon: BarChart3,
  },
  {
    title: "Procure-to-Pay Automation",
    description:
      "AI-driven verification, document extraction, supplier vetting, and policy enforcement.",
    icon: Workflow,
  },
];

   
 
 
  

export default function Features() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".feature-card",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.to(".floating-bg", {
        yPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-950 overflow-hidden"
    >

        <ParticleBackground />
      {/* Floating animated background layers */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="floating-bg absolute top-0 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-cyan-600/10 blur-3xl rounded-full" />
        <div className="floating-bg absolute bottom-0 right-1/3 w-[30rem] h-[30rem] bg-blue-500/10 blur-3xl rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
        >
           Powering Secure Public Financial Management
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-blue-100 max-w-2xl mx-auto mb-16"
        >
            Comprehensive AI-driven features to safeguard government Procure-to-Pay systems and ensure compliance with public finance regulations.
        </motion.p>

        {/* Features Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="feature-card bg-slate-800/50 hover:bg-slate-800/70 transition-all p-8 rounded-2xl border border-white/10 shadow-md hover:shadow-cyan-400/20 hover:-translate-y-2 transform duration-300 cursor-pointer"
            >
              <feature.icon className="w-10 h-10 text-cyan-400 mb-6 mx-auto" />
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-blue-200 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
