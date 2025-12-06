"use client";

import { UserButton } from "@clerk/nextjs";
import { useTheme } from "next-themes";
import { Moon, Sun, Bell } from "lucide-react";
import { motion } from "framer-motion";

export default function TopNav({ collapsed, setCollapsed }: { collapsed:boolean, setCollapsed:(v:boolean)=>void }) {
  const { theme, setTheme } = useTheme();

  return (
    <header className="h-16 flex items-center justify-between px-6 border-b border-white/6 bg-black/20 backdrop-blur sticky top-0 z-40">
      <div className="flex items-center gap-4">
        <button onClick={() => setCollapsed(!collapsed)} className="p-2 rounded-md bg-white/6"><svg className="w-5 h-5" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h8M4 18h16"/></svg></button>
        <div>
          <div className="text-sm text-slate-300">Financial Intelligence</div>
          <div className="text-xs text-slate-500">IFMIS → AI layer → Audit outcomes</div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <motion.button whileTap={{ scale: 0.95 }} onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="p-2 rounded-md bg-white/6">
          {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
        </motion.button>

        <button className="p-2 rounded-md bg-white/6"><Bell size={16} /></button>

        <UserButton afterSignOutUrl="/" />
      </div>
    </header>
  );
}
