"use client";

import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

export default function DeptSpendChart({ data }: { data: any[] }) {
  // map backend groupBy rows to Recharts friendly
  const chartData = (data || []).map((r:any) => ({ department: r.department || "Unknown", amount: Number(r._sum?.amount ?? r._sum_amount ?? 0) }));

  return (
    <div className="w-full min-h-[260px] h-[260px] min-w-0">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData} margin={{ top: 8, right: 16, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="department" tick={{ fontSize: 12 }} />
          <YAxis />
          <Tooltip />
          <Bar dataKey="amount" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
