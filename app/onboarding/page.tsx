"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function OnboardingPage() {

const router = useRouter()

const [company,setCompany] = useState("")
const [industry,setIndustry] = useState("")
const [employees,setEmployees] = useState("")

function handleSubmit(e:any){
e.preventDefault()

localStorage.setItem("company",company)
localStorage.setItem("industry",industry)
localStorage.setItem("employees",employees)

router.push("/dashboard")
}

return (

<div className="min-h-screen bg-black text-white flex items-center justify-center">

<div className="w-full max-w-xl bg-white/5 border border-white/10 p-10 rounded-xl">

<h1 className="text-3xl font-bold mb-6">
Welcome to CarbonOS
</h1>

<p className="text-gray-400 mb-8">
Let's set up your company profile to start tracking emissions.
</p>

<form onSubmit={handleSubmit} className="space-y-5">

<input
placeholder="Company Name"
value={company}
onChange={(e)=>setCompany(e.target.value)}
className="w-full p-3 rounded-lg bg-black border border-white/10"
/>

<input
placeholder="Industry"
value={industry}
onChange={(e)=>setIndustry(e.target.value)}
className="w-full p-3 rounded-lg bg-black border border-white/10"
/>

<input
placeholder="Number of Employees"
value={employees}
onChange={(e)=>setEmployees(e.target.value)}
className="w-full p-3 rounded-lg bg-black border border-white/10"
/>

<button
className="w-full bg-emerald-500 py-3 rounded-lg text-black font-semibold"
>
Continue
</button>

</form>

</div>

</div>

)
}