"use client";

import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import TopNav from "./TopNav";
import { ThemeProvider } from "next-themes";
import clsx from "clsx";

export default function ClientShell({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("fw_sidebar_collapsed");
    if (saved === "true") setCollapsed(true);
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <div className="flex h-screen text-white bg-[#071018] overflow-hidden">
        
        {/* Sidebar always rendered */}
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

        {/* Page Content */}
        <div
          className={clsx(
            "flex flex-col flex-1 transition-all duration-300",
            collapsed ? "md:ml-[76px]" : "md:ml-[260px]", // desktop push
            "ml-0" // mobile always 0
          )}
        >
          <TopNav collapsed={collapsed} setCollapsed={setCollapsed} />

          <main className="flex-1 overflow-auto p-6">
            {children}
          </main>
        </div>

      </div>
    </ThemeProvider>
  );
}
