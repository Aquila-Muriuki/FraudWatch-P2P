"use client";

import { motion } from "framer-motion";
import MiniCard from "./MiniCard";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { t: "00:00", score: 30 },
  { t: "02:00", score: 28 },
  { t: "04:00", score: 45 },
  { t: "06:00", score: 60 },
  { t: "08:00", score: 55 },
  { t: "10:00", score: 72 },
  { t: "12:00", score: 65 },
];

export default function RiskOverview() {
  return (
    <section className="glass p-5 rounded-xl border border-white/6 flex flex-col gap-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
        <h3 className="text-lg font-semibold">Real-Time Risk Overview</h3>
        <div className="text-sm text-slate-400">Last 24 hours</div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
        <MiniCard title="Risk Score" value="72" subtitle="High" />
        <MiniCard title="Anomalies (24h)" value="312" subtitle="12 high" />
        <MiniCard title="Funds at Risk" value="$212,400" subtitle="Est. exposure" />
      </div>

      <div className="w-full h-56 sm:h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="t" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip />
            <Line type="monotone" dataKey="score" stroke="#22d3ee" strokeWidth={2} dot={{ r: 2 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
