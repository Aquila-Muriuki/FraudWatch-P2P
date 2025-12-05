// src/app/dashboard/components/MiniCard.tsx
"use client";

export default function MiniCard({ title, value, hint }: { title:string; value:string; hint?:string }) {
  return (
    <div className="p-5 rounded-xl bg-gradient-to-br from-white/3 to-white/2 border border-white/6 shadow-lg">
      <div className="text-sm text-slate-300">{title}</div>
      <div className="text-3xl font-bold mt-2">{value}</div>
      {hint && <div className="text-xs text-slate-400 mt-1">{hint}</div>}
    </div>
  );
}
