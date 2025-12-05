"use client";

import { motion } from "framer-motion";
import { Mail, Globe, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 text-white border-t border-white/10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12"
      >
        {/* Brand + mission */}
        <div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-3">
            AI for Public Finance
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed">
            Transforming national Public Finance systems with AI-driven audit,
            compliance intelligence, and fraud prevention — enabling accountable,
            transparent governance.
          </p>
        </div>

        {/* Quick links */}
        <div className="flex flex-col">
          <h4 className="text-lg font-semibold mb-4">Explore</h4>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li>
              <a href="#features" className="hover:text-cyan-400 transition">
                Features
              </a>
            </li>
            <li>
              <a href="#how-it-works" className="hover:text-cyan-400 transition">
                How It Works
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-cyan-400 transition">
                FAQ
              </a>
            </li>
            <li>
              <a href="#whitepaper" className="hover:text-cyan-400 transition">
                Whitepaper
              </a>
            </li>
          </ul>
        </div>

        {/* Contact + socials */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <div className="space-y-3 text-slate-300 text-sm">
            <a
              href="mailto:contact@example.com"
              className="flex items-center gap-2 hover:text-cyan-400 transition"
            >
              <Mail className="w-4 h-4" /> info@govfinance.ai
            </a>
            <a
              href="https://example.com"
              className="flex items-center gap-2 hover:text-cyan-400 transition"
            >
              <Globe className="w-4 h-4" /> www.govfinance.ai
            </a>
          </div>

          {/* Social icons */}
          <div className="flex gap-4 mt-4">
            <a
              href="#"
              className="p-2 rounded-lg border border-white/10 hover:border-cyan-400/20 hover:bg-cyan-400/10 transition"
            >
              <Linkedin className="w-4 h-4 text-cyan-400" />
            </a>
            <a
              href="#"
              className="p-2 rounded-lg border border-white/10 hover:border-cyan-400/20 hover:bg-cyan-400/10 transition"
            >
              <Twitter className="w-4 h-4 text-cyan-400" />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between text-sm text-slate-400">
          <p>© {new Date().getFullYear()} GovFinance — All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-cyan-400">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-cyan-400">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
