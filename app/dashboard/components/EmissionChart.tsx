"use client"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts"

export default function EmissionChart({ records }: any) {

  if (!records || records.length === 0) {
    return (
      <div className="h-[300px] flex items-center justify-center text-gray-400">
        No Data Available
      </div>
    )
  }

  const chartData = records
    .slice(0, 7)
    .map((r: any) => ({
      date: new Date(r.createdAt).toLocaleDateString(),
      total: Number(r.total),
    }))
    .reverse()

  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
          <XAxis dataKey="date" stroke="#888" />
          <YAxis stroke="#888" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="total"
            stroke="#10b981"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}