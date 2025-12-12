"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function VendorAutocomplete({ value, setValue, onSelect }: any) {
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [open, setOpen] = useState(false);
  const timer = useRef<any>(null);

  useEffect(() => {
    if (!value || value.length < 2) { setSuggestions([]); return; }
    clearTimeout(timer.current);
    timer.current = setTimeout(async () => {
      const res = await fetch(`/api/vendors?query=${encodeURIComponent(value)}`);
      const json = await res.json();
      setSuggestions(json);
      setOpen(true);
    }, 180);
    return () => clearTimeout(timer.current);
  }, [value]);

  return (
    <div className="relative">
      <input value={value} onChange={(e)=> setValue(e.target.value)} onFocus={()=> value.length>1 && setOpen(true)} className="input" placeholder="Type supplier name..." />

      <motion.ul initial={{ opacity: 0, y: -6 }} animate={open ? { opacity: 1, y: 0 } : { opacity: 0 }} className="absolute left-0 right-0 bg-[#071018] border border-white/8 rounded mt-1 max-h-60 overflow-auto z-50">
        {suggestions.map((s:any)=> (
          <li key={s.id}>
            <button onClick={()=> { onSelect?.(s); setValue(s.name); setOpen(false); }} className="w-full text-left px-3 py-2 hover:bg-white/4">
              <div className="flex justify-between">
                <div>{s.name}</div>
                <div className="text-xs text-slate-400">{s.riskScore ?? 0}</div>
              </div>
            </button>
          </li>
        ))}
        {suggestions.length === 0 && <li className="px-3 py-2 text-slate-500">No matches</li>}
      </motion.ul>
    </div>
  );
}
