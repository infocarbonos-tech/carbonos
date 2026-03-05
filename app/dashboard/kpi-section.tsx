"use client"

import { Card, CardContent } from "@/components/ui/card"
import CountUp from "./CountUp"
import { ArrowUpRight, ArrowDownRight } from "lucide-react"

interface Props {
  totalRecords: number
  totalEmissions: number
  latestDate: string
  growth: number
}

export default function KpiSection({
  totalRecords,
  totalEmissions,
  latestDate,
  growth,
}: Props) {
  const isPositive = growth >= 0

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

      {/* Total Records */}
      <Card className="transition-all duration-300 hover:scale-[1.02]">
        <CardContent className="p-6 space-y-2">
          <p className="text-sm text-muted-foreground">
            Total Records
          </p>
          <h2 className="text-3xl font-bold">
            <CountUp value={totalRecords} />
          </h2>
        </CardContent>
      </Card>

      {/* Total Emissions */}
      <Card className="transition-all duration-300 hover:scale-[1.02]">
        <CardContent className="p-6 space-y-2">
          <p className="text-sm text-muted-foreground">
            Total Emissions
          </p>

          <h2 className="text-3xl font-bold text-emerald-500">
            <CountUp value={totalEmissions} suffix=" kg" />
          </h2>

          {/* Growth Indicator */}
          {growth !== 0 && (
            <div
              className={`flex items-center gap-1 text-sm ${
                isPositive
                  ? "text-emerald-500"
                  : "text-red-500"
              }`}
            >
              {isPositive ? (
                <ArrowUpRight size={16} />
              ) : (
                <ArrowDownRight size={16} />
              )}
              {Math.abs(growth).toFixed(1)}% vs last entry
            </div>
          )}
        </CardContent>
      </Card>

      {/* Latest Entry */}
      <Card className="transition-all duration-300 hover:scale-[1.02]">
        <CardContent className="p-6 space-y-2">
          <p className="text-sm text-muted-foreground">
            Latest Entry
          </p>
          <h2 className="text-lg font-semibold">
            {latestDate}
          </h2>
        </CardContent>
      </Card>

    </div>
  )
}