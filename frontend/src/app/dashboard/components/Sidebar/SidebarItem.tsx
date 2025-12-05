"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  label: string;
  Icon: any;
  path: string;
}

export default function SidebarItem({ label, Icon, path }: Props) {
  const pathname = usePathname();
  const active = pathname === path;

  return (
    <Link href={path}>
      <motion.div
        className={`
          flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm cursor-pointer
          transition-all duration-300
          ${active
            ? "bg-cyan-500/20 text-cyan-400"
            : "text-slate-300 hover:bg-white/5 hover:text-white"
          }
        `}
        whileHover={{ x: 4 }}
      >
        <Icon className="w-4 h-4" />
        {label}
      </motion.div>
    </Link>
  );
}
