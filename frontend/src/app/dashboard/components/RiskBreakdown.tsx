"use client";

import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";

const data = [
  { name: "Duplicate Invoice", value: 28 },
  { name: "Conflict of Interest", value: 22 },
  { name: "Inflated Pricing", value: 20 },
  { name: "Vendor History", value: 17 },
  { name: "Policy Violation", value: 13 },
];

const COLORS = ["#22d3ee", "#a855f7", "#f59e0b", "#ef4444", "#10b981"];

export default function RiskBreakdown() {
  return (
    <section className="glass p-4 sm:p-5 rounded-xl border border-white/10 flex flex-col gap-4 w-full">
      <h3 className="text-lg font-semibold text-white/90">AI Reason Breakdown</h3>

      <div className="w-full h-60 sm:h-72">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius="45%"
              outerRadius="70%"
              paddingAngle={4}
              dataKey="value"
            >
              {data.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>

            <Tooltip
              contentStyle={{
                background: "white",
                border: "none",
                borderRadius: "8px",
                color: "white",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
