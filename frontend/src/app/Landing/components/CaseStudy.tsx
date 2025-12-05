"use client";

import { motion } from "framer-motion";

export default function CaseStudy() {
  return (
    <section className="py-28 bg-slate-950 text-white">
      <div className="max-w-5xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-14"
        >
          Case Study: IFMIS Ethiopia
        </motion.h2>

        <div className="space-y-6 text-slate-300 text-lg">
          <p>
            The Ministry of Finance deployed an AI-enabled IFMIS system 
            to improve transparency, automate compliance, and detect early-stage fraud patterns.
          </p>

          <p>
            😎 Result: Audit cycles reduced by 40%, policy compliance automated, 
            and manual reviews dropped significantly due to risk scoring engine.
          </p>

          <p>
            👌 The platform demonstrated how AI can protect public funds
            at scale across ministries, agencies, and local government.
          </p>
        </div>
      </div>
    </section>
  );
}
