// src/app/dashboard/components/ClientShell.tsx
"use client";

import { useEffect, useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import TopNav from "./TopNav";

// Keep this minimal; children contains page content
export default function ClientShell({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);

  // remember preference
  useEffect(() => {
    const saved = localStorage.getItem("fw_sidebar_collapsed");
    if (saved === "true") setCollapsed(true);
  }, []);
  useEffect(() => {
    localStorage.setItem("fw_sidebar_collapsed", String(collapsed));
  }, [collapsed]);

  return (
    <div className="flex h-screen w-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#020617] via-[#071226] to-[#04040a] text-slate-100">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <div className="flex-1 flex flex-col">
        <TopNav collapsed={collapsed} setCollapsed={setCollapsed} />
        <main className="p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
