// src/app/dashboard/components/TopNav.tsx
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
        <div className="text-sm text-slate-300">Financial Intelligence</div>
        <div className="text-xs text-slate-500">IFMIS → AI layer → Audit outcomes</div>
      </div>

      <div className="flex items-center gap-3">
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="p-2 rounded-md bg-white/6"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
        </motion.button>

        <button className="p-2 rounded-md bg-white/6"><Bell size={16} /></button>

        <UserButton afterSignOutUrl="/" />
      </div>
    </header>
  );
}
