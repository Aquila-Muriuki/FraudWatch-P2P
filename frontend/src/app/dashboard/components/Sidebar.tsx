"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import gsap from "gsap";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { sidebarItems } from "./lib/sidebarData";

export default function Sidebar({ collapsed, setCollapsed }: { collapsed: boolean; setCollapsed: (v:boolean)=>void }) {
  const el = useRef<HTMLDivElement | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!el.current) return;
    // Only animate sidebar on desktop (md and up)
    if (window.matchMedia("(min-width: 768px)").matches) {
      gsap.to(el.current, { width: collapsed ? 76 : 260, duration: 0.32, ease: "power2.out" });
    }
  }, [collapsed]);

  return (
    <>
      {/* Mobile hamburger */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button onClick={() => setMobileOpen(v => !v)} className="p-2 rounded bg-white/6">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </div>

      {/* Overlay */}
      {mobileOpen && <div className="md:hidden fixed inset-0 z-40 bg-black/50" onClick={()=>setMobileOpen(false)} />}

      {/* Desktop sidebar */}
      <aside
        ref={el}
        className={clsx(
          "fixed left-0 top-0 h-full z-50 bg-[#071018] border-r border-white/6 flex flex-col justify-between",
          "hidden md:flex" // Only show on md and up
        )}
        style={{ width: collapsed ? 76 : 260 }}
      >
        <div>
          <div className="flex items-center gap-3 px-4 py-5">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center font-bold text-black">FW</div>
            {!collapsed && <div className="text-white font-semibold">FraudWatch</div>}
          </div>

          <nav className="mt-4 px-2 space-y-1">
            {sidebarItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <motion.div whileHover={{ x: 6 }} className="flex items-center gap-3 px-3 py-3 rounded-md text-slate-200 hover:bg-white/5 mx-2 cursor-pointer">
                  <item.icon size={18} />
                  {!collapsed && <span className="text-sm">{item.label}</span>}
                </motion.div>
              </Link>
            ))}
          </nav>
        </div>

        <div className="p-3">
          <button onClick={() => setCollapsed(!collapsed)} className="w-full px-3 py-2 rounded-md bg-white/6 hover:bg-white/8 text-sm">
            {collapsed ? "Expand" : "Collapse"}
          </button>
        </div>
      </aside>

      {/* Mobile drawer */}
      <motion.aside
        initial={{ x: -320 }}
        animate={{ x: mobileOpen ? 0 : -320 }}
        transition={{ duration: 0.28 }}
        className="md:hidden fixed left-0 top-0 h-full z-50 bg-[#071018] border-r border-white/6 w-72"
      >
        <div className="px-4 py-5 flex items-center gap-3 justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center font-bold text-black">FW</div>
            <div className="text-white font-semibold">FraudWatch</div>
          </div>
          {/* Close button */}
          <button onClick={() => setMobileOpen(false)} className="p-2 rounded bg-white/6 ml-2">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
              <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6"/>
            </svg>
          </button>
        </div>
        <nav className="mt-4 px-2">
          {sidebarItems.map(item => (
            <Link key={item.path} href={item.path} onClick={() => setMobileOpen(false)}>
              <div className="flex items-center gap-3 px-3 py-3 rounded-md text-slate-200 hover:bg-white/5 mx-2 cursor-pointer">
                <item.icon size={18} />
                <span className="text-sm">{item.label}</span>
              </div>
            </Link>
          ))}
        </nav>
      </motion.aside>
    </>
  );
}
