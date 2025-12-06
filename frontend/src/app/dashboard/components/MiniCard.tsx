"use client";

export default function MiniCard({ title, value, subtitle }: { title:string; value:string; subtitle?:string }) {
  return (
    <div className="p-4 rounded-xl bg-gradient-to-br from-white/3 to-white/2 border border-white/6 shadow-sm">
      <div className="text-sm text-slate-300">{title}</div>
      <div className="text-2xl font-bold mt-2">{value}</div>
      {subtitle && <div className="text-xs text-slate-400 mt-1">{subtitle}</div>}
    </div>
  );
}
