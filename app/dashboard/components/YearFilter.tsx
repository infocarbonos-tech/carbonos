"use client"

import { useRouter, useSearchParams } from "next/navigation"

export default function YearFilter({
  current,
}: {
  current: number
}) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const currentYear = new Date().getFullYear()

  const handleChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("year", value)
    router.push(`/dashboard?${params.toString()}`)
  }

  return (
    <select
      value={current}
      onChange={(e) => handleChange(e.target.value)}
      className="border border-border bg-background px-3 py-2 rounded-md text-sm"
    >
      {[currentYear, currentYear - 1, currentYear - 2].map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </select>
  )
}