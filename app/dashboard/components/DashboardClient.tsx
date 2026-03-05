"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function DashboardClient({ children }: any) {

const router = useRouter()

useEffect(() => {

const company = localStorage.getItem("company")

if (!company) {
router.push("/onboarding")
}

}, [])

return children
}