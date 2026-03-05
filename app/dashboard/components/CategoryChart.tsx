"use client"

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts"

interface RecordType {
  electricity: number
  diesel: number
  gas: number
  water: number
  travel: number
  waste: number
  purchase: number
  employees: number
}

const COLORS = ["#10b981", "#3b82f6", "#f59e0b"]

export default function CategoryChart({
  records,
}: {
  records: RecordType[]
}) {
  if (!records || records.length === 0) {
    return (
      <div className="h-[350px] flex items-center justify-center text-muted-foreground">
        No Data Available
      </div>
    )
  }

  const scope1 = records.reduce(
    (sum, r) => sum + r.diesel + r.gas,
    0
  )

  const scope2 = records.reduce(
    (sum, r) => sum + r.electricity,
    0
  )

  const scope3 = records.reduce(
    (sum, r) =>
      sum + r.water + r.travel + r.waste + r.purchase + r.employees,
    0
  )

  const total = scope1 + scope2 + scope3

  const data = [
    { name: "Scope 1", value: scope1 },
    { name: "Scope 2", value: scope2 },
    { name: "Scope 3", value: scope3 },
  ]

  const renderLabel = ({
    percent,
  }: {
    percent: number
  }) => `${(percent * 100).toFixed(0)}%`

  return (
    <div className="w-full h-[350px] relative">
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            innerRadius={90}
            outerRadius={130}
            paddingAngle={4}
            stroke="hsl(var(--background))"
            strokeWidth={2}
            label={renderLabel}
            labelLine={false}
          >
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>

          <Tooltip
            formatter={(value: number) => `${value.toFixed(0)} kg`}
            contentStyle={{
              background: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "12px",
              color: "hsl(var(--foreground))",
            }}
          />
        </PieChart>
      </ResponsiveContainer>

      {/* Center Total */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <p className="text-sm text-muted-foreground">Total</p>
        <p className="text-xl font-semibold">
          {total.toFixed(0)} kg
        </p>
      </div>
    </div>
  )
}