"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { sidebarItems, utilityItems } from "./SidebarData";
import SidebarItem from "./SidebarItem";
import Image from "next/image";
import { X, Menu } from "lucide-react";

export default function Sidebar() {
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open && sidebarRef.current) {
      gsap.fromTo(
        sidebarRef.current,
        { x: -300, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power4.out",
        }
      );
    }
  }, [open]);

  // glow
  useEffect(() => {
    gsap.to(".sidebar-glow", {
      opacity: 0.5,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <>
      {/* Toggle button (mobile only) */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-slate-900/70 text-white"
        onClick={() => setOpen(true)}
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm lg:hidden z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        ref={sidebarRef}
        className={`fixed left-0 top-0 h-screen w-72 bg-slate-950/95 border-r border-white/10 backdrop-blur-xl flex flex-col justify-between p-5 z-50
        ${open ? "" : " -translate-x-full lg:translate-x-0"}
        transition-transform duration-300`}
      >
        {/* glow */}
        <div className="sidebar-glow absolute -top-24 -left-20 w-[400px] h-[400px] bg-cyan-500/20 blur-[120px] rounded-full pointer-events-none" />

        {/* close (mobile) */}
        <button
          className="lg:hidden absolute top-4 right-4 p-2 rounded-lg bg-white/10"
          onClick={() => setOpen(false)}
        >
          <X className="w-6 h-6 text-white" />
        </button>

        {/* Logo */}
        <div className="flex items-center gap-3 mb-8">
          <Image src="/logo-dark.svg" width={32} height={32} alt="logo" />
          <span className="text-white font-semibold text-lg">FinAI Gov</span>
        </div>

        {/* Main Nav */}
        <div className="flex flex-col gap-1">
          {sidebarItems.map((item) => (
            <SidebarItem
              key={item.path}
              label={item.label}
              Icon={item.icon}
              path={item.path}
            />
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 my-5" />

        {/* Utilities */}
        <div className="flex flex-col gap-1">
          {utilityItems.map((item) => (
            <SidebarItem
              key={item.path}
              label={item.label}
              Icon={item.icon}
              path={item.path}
            />
          ))}
        </div>

        {/* User */}
        <div className="mt-6">
          <div className="flex items-center gap-3 px-3 py-3 bg-white/5 rounded-xl">
            <div className="w-8 h-8 rounded-full bg-cyan-400/30 flex items-center justify-center text-cyan-300 font-medium">
              A
            </div>
            <div>
              <p className="text-sm text-white">Aquila</p>
              <p className="text-xs text-slate-400">Auditor</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
