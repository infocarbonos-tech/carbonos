"use client"

import { useRouter, useSearchParams } from "next/navigation"

export default function PeriodFilter({
  current,
}: {
  current: string
}) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("period", value)
    router.push(`/dashboard?${params.toString()}`)
  }

  return (
    <select
      value={current}
      onChange={(e) => handleChange(e.target.value)}
      className="border border-border bg-background px-3 py-2 rounded-md text-sm"
    >
      <option value="all">All Time</option>
      <option value="month">This Month</option>
      <option value="3months">Last 3 Months</option>
    </select>
  )
}