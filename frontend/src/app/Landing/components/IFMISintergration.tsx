"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Database,
  Server,
  Link2,
  Zap,
  ShieldCheck,
  Cloud,
  FileSearch,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function IFMISIntegration() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade + slide in blocks
      gsap.from(".ifmis-card", {
        opacity: 0,
        y: 30,
        stagger: 0.18,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          once: true,
        },
      });

      // Subtle glow on the connecting arrows path (pulse)
      gsap.to(".integrate-path", {
        boxShadow: "0 0 40px rgba(124, 58, 237, 0.18)",
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, ref);

    return () => {
      // Clean up ScrollTriggers (prevents double-registration)
      ScrollTrigger.getAll().forEach((t) => t.kill());
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={ref}
      id="ifmis-integration"
      className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden"
    >
      {/* floating glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -left-10 top-10 w-[28rem] h-[28rem] bg-purple-600/12 blur-3xl rounded-full" />
        <div className="absolute right-0 bottom-0 w-[24rem] h-[24rem] bg-cyan-400/8 blur-3xl rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-4 bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent"
        >
          Integration with Existing IFMIS & ERP Systems
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.12 }}
          viewport={{ once: true }}
          className="text-blue-100 text-center max-w-3xl mx-auto mb-12"
        >
          Our AI Engine is designed as a non-intrusive intelligence layer — it connects securely to IFMIS, extracts transactional data, runs real-time risk scoring and compliance checks, and sends back audit-ready outcomes.
        </motion.p>

        {/* ARCHITECTURE ROW */}
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          {/* Left: Benefits / integration bullets */}
          <div className="space-y-6">
            <div className="ifmis-card p-6 rounded-2xl bg-slate-800/40 border border-white/6 shadow-md">
              <div className="flex items-start gap-4">
                <FileSearch className="w-9 h-9 text-cyan-400 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    Non-intrusive Data Ingestion
                  </h4>
                  <p className="text-blue-200 text-sm">
                    Pull data via secure API connectors, SFTP batch drops, or direct database replication (read-only). No changes to IFMIS core needed.
                  </p>
                </div>
              </div>
            </div>

            <div className="ifmis-card p-6 rounded-2xl bg-slate-800/40 border border-white/6 shadow-md">
              <div className="flex items-start gap-4">
                <ShieldCheck className="w-9 h-9 text-purple-400 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    Secure & Auditable
                  </h4>
                  <p className="text-blue-200 text-sm">
                    End-to-end encryption, role-based access control, and immutable audit logs that map back to IFMIS transactions.
                  </p>
                </div>
              </div>
            </div>

            <div className="ifmis-card p-6 rounded-2xl bg-slate-800/40 border border-white/6 shadow-md">
              <div className="flex items-start gap-4">
                <Zap className="w-9 h-9 text-yellow-300 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-white">Real-time Alerts</h4>
                  <p className="text-blue-200 text-sm">
                    Red-flag alerts, risk scores, and suggested actions delivered to your finance workflow and audit systems in real-time.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Simple responsive diagram */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-2xl">
              {/* IFMIS box (top) */}
              <div className="flex justify-center mb-8">
                <div className="p-4 ifmis-card bg-slate-900/60 border border-white/8 rounded-xl shadow-lg flex items-center gap-3">
                  <Database className="w-7 h-7 text-purple-400" />
                  <div>
                    <div className="text-sm text-blue-200">IFMIS / ERP</div>
                    <div className="text-xs text-slate-400">System of record</div>
                  </div>
                </div>
              </div>

              {/* connectors and AI layer */}
              <div className="flex items-center gap-6">
                {/* left connector */}
                <div className="flex-1 flex justify-center">
                  <div className="integrate-path w-20 h-1 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400" />
                </div>

                {/* AI Engine center */}
                <div className="bg-gradient-to-br from-purple-700/40 to-cyan-600/20 border border-white/8 rounded-2xl p-6 shadow-xl w-72 text-center">
                  <Server className="mx-auto w-8 h-8 text-cyan-300 mb-3" />
                  <div className="text-white font-semibold">AI Integrity Engine</div>
                  <div className="text-blue-200 text-xs mt-1">Risk scoring · Compliance · Audit reports</div>

                  <div className="mt-6 flex gap-3 justify-center">
                    <div className="p-2 rounded-md bg-slate-800/40 text-xs text-blue-100">Anomaly</div>
                    <div className="p-2 rounded-md bg-slate-800/40 text-xs text-blue-100">Policy</div>
                    <div className="p-2 rounded-md bg-slate-800/40 text-xs text-blue-100">Explain</div>
                  </div>
                </div>

                {/* right connector */}
                <div className="flex-1 flex justify-center">
                  <div className="integrate-path w-20 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400" />
                </div>
              </div>

              {/* bottom connectors to Analytics / Auditor */}
              <div className="mt-8 flex justify-between items-start gap-6">
                <div className="flex-1 flex justify-center">
                  <div className="p-3 rounded-lg bg-slate-900/50 border border-white/6 shadow-md w-44 text-center">
                    <Cloud className="mx-auto w-6 h-6 text-cyan-300 mb-2" />
                    <div className="text-sm text-white font-semibold">Analytics Dashboard</div>
                    <div className="text-xs text-slate-400">Live insights & alerts</div>
                  </div>
                </div>

                <div className="flex-1 flex justify-center">
                  <div className="p-3 rounded-lg bg-slate-900/50 border border-white/6 shadow-md w-44 text-center">
                    <Link2 className="mx-auto w-6 h-6 text-purple-300 mb-2" />
                    <div className="text-sm text-white font-semibold">Auditor / ERP Sync</div>
                    <div className="text-xs text-slate-400">Export audit-ready reports</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Integration notes */}
        <div className="mt-10 text-sm text-blue-200 max-w-3xl mx-auto text-center">
          <strong className="text-white">Integration options:</strong>{" "}
          Secure REST APIs, SFTP batch, CDC (change-data-capture) replication, or event-driven connectors. We deploy read-only adapters that never modify IFMIS data.
        </div>
      </div>
    </section>
  );
}
