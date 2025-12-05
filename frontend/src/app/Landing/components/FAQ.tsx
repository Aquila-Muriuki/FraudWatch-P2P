"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: "How does the AI ensure compliance with Public Finance regulations?",
    answer:
      "The system has a GenAI compliance engine trained on the PFM Act, PPDA Act, procurement policies and Treasury circulars. Every transaction is checked before approval with a traceable compliance log for audit readiness.",
  },
  {
    question: "Does this replace existing IFMIS or integrate with it?",
    answer:
      "It integrates seamlessly with a secure API connection to your existing IFMIS, enhancing its capabilities with AI-powered fraud detection and automated auditing.",
  },
  {
    question: "How does the AI detect fraud or ghost suppliers?",
    answer:
      "The model identifies patterns such as: Duplicate invoices, shell companies, conflict-of-interest clusters, bid rigging, supplier collusion networks. Every red flag includes evidence-based reasoning.",
  },
  {
    question: "Whats makes it different from traditional IFMIS systems?",
    answer:
      "Traditional systems record transactions. This system understands them, analyzes risk, flags fraud, and prevents bad spending before it happens.",
  },
  {
    question: "What about data security and sovereignty?",
    answer:
      "All data is stored on government-approved cloud or on-prem infrastructure with full sovereignty. Encryption is applied end-to-end.",
  },
  {
    question: "How fast is deployment?",
    answer:
      "Typical deployment takes 4–6 weeks depending on integrations. You can start with compliance automation and expand into full P2P intelligence.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".faq-card",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
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
      className="relative py-24 bg-gradient-to-b from-slate-950 to-blue-950 text-white"
    >
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="faq-card bg-slate-800/40 border border-white/10 rounded-xl p-6 hover:bg-slate-800/60 transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex justify-between items-center w-full text-left"
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-cyan-400" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mt-3 text-blue-200 text-sm"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
