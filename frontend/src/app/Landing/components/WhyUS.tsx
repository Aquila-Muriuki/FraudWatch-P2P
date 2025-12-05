"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import {
  Shield,
  Cpu,
  Activity,
  Radar,
  Lock,
  Gauge,
  Brain,
  CheckCircle2,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".why-card",
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="why-us"
      className="relative py-28 bg-slate-950 overflow-hidden"
    >
      {/* Futuristic Floating Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-1/4 w-[40rem] h-[40rem] bg-purple-600/20 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-10 right-1/4 w-[30rem] h-[30rem] bg-cyan-500/20 blur-[150px] rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6 
            bg-gradient-to-r from-purple-400 to-cyan-400 
            bg-clip-text text-transparent"
        >
          Why Choose Our AI Finance System?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-blue-100 max-w-2xl mx-auto mb-20"
        >
          A next-generation threat intelligence platform engineered for secure,
          transparent, and fully compliant public financial management.
        </motion.p>

        {/* ---------------- TOP PREMIUM CARD ROW (A) ---------------- */}
        <div className="grid gap-10 md:grid-cols-3 mb-24">
          <div className="why-card group bg-slate-900/40 p-10 rounded-3xl border border-white/10 
              backdrop-blur-xl shadow-xl hover:shadow-purple-500/20 
              hover:border-purple-400/30 transition-all duration-300">
            <Shield className="w-14 h-14 text-purple-400 mx-auto mb-6 
                group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-semibold text-white mb-3">
              Built for Government Security
            </h3>
            <p className="text-blue-200">
              Designed for ministries, counties, and state agencies with the
              highest audit and compliance standards.
            </p>
          </div>

          <div className="why-card group bg-slate-900/40 p-10 rounded-3xl border border-white/10 
              backdrop-blur-xl shadow-xl hover:shadow-cyan-500/20 
              hover:border-cyan-400/30 transition-all duration-300">
            <Cpu className="w-14 h-14 text-cyan-400 mx-auto mb-6 
                group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-semibold text-white mb-3">
              24/7 Autonomous Monitoring
            </h3>
            <p className="text-blue-200">
              AI detects fraud, anomalies, and compliance risks instantly —
              not weeks later like manual audits.
            </p>
          </div>

          <div className="why-card group bg-slate-900/40 p-10 rounded-3xl border border-white/10 
              backdrop-blur-xl shadow-xl hover:shadow-purple-500/20 
              hover:border-purple-400/30 transition-all duration-300">
            <Activity className="w-14 h-14 text-purple-400 mx-auto mb-6 
                group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-semibold text-white mb-3">
              Real-Time Intelligence
            </h3>
            <p className="text-blue-200">
              Continuous risk scoring, supplier analysis, and P2P compliance
              insights delivered instantly.
            </p>
          </div>
        </div>

        {/* ---------------- SECOND ROW (B): ENTERPRISE GRID ---------------- */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Compliance-First System",
              desc: "Always aligned with PFM Act, PPDA, and procurement policies.",
              icon: CheckCircle2,
            },
            {
              title: "Predictive Analytics",
              desc: "Forecasts budget overruns, fraud risks, and policy breaches.",
              icon: Gauge,
            },
            {
              title: "Advanced Risk Detection",
              desc: "AI-powered anomaly detection across suppliers, payments, and tenders.",
              icon: Radar,
            },
            {
              title: "Enterprise-Grade Security",
              desc: "Encrypted workflows, access controls, and secure audit trails.",
              icon: Lock,
            },
          ].map((item, index) => (
            <div
              key={index}
              className="why-card group bg-slate-900/30 p-8 rounded-2xl 
                border border-white/10 backdrop-blur 
                hover:border-cyan-400/30 hover:shadow-cyan-500/20 
                hover:-translate-y-2 transition-all duration-300"
            >
              <item.icon className="w-10 h-10 text-cyan-400 mb-4 
                  group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-blue-200 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
