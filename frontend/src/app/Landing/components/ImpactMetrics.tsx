"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
// 1. Import ScrollTrigger
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin globally
gsap.registerPlugin(ScrollTrigger);

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
  // 2. Fix Ref Type: Allow null in the array elements
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // 3. Use gsap.context for cleanup
    let ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.15,
        ease: "power4.out",
        // 4. Use ScrollTrigger to define when the animation should start
        scrollTrigger: {
          trigger: sectionRef.current, // The parent section is the trigger
          start: "top 80%", // Start animation when the top of the section hits 80% down the viewport
          // toggleActions: "play none none none", // Optional: Control behavior on scroll
        },
      });
    }, sectionRef); // Scopes the context to the sectionRef element

    return () => ctx.revert(); // Revert the animation on component unmount
  }, []);

  return (
    // 5. Attach the sectionRef to the parent section
    <section ref={sectionRef} className="py-28 bg-slate-950 text-white">
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
              // 6. Fix Ref Callback: Use a block statement and handle null
              ref={(el) => {
                // Assign the element to the array position
                cardsRef.current[i] = el;
              }}
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
