"use client"

import { useEffect, useState } from "react"

interface Props {
  value: number
  duration?: number
  suffix?: string
  decimals?: number
}

export default function CountUp({
  value,
  duration = 1200,
  suffix = "",
  decimals = 0,
}: Props) {
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    let start = 0
    const startTime = performance.now()

    const animate = (currentTime: number) => {
      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      )

      const current = progress * value
      setDisplay(current)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [value, duration])

  return (
    <span>
      {display.toLocaleString("en-IN", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  )
}