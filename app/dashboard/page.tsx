import { prisma } from "@/lib/prisma"
import EmissionChart from "./components/EmissionChart"
import ESGReport from "./components/ESGReport"
import ESGScore from "./components/ESGScore"
import DashboardClient from "./components/DashboardClient"

export default async function DashboardPage() {

const records = await prisma.emissionRecord.findMany({
orderBy: {
createdAt: "desc",
},
})

const totalEmission = records.reduce(
(sum, r) => sum + Number(r.total),
0
)

// ================= Trend Calculation =================

const last = Number(records[0]?.total || 0)
const previous = Number(records[1]?.total || 0)

const trend =
previous === 0
? 0
: (((last - previous) / previous) * 100).toFixed(1)

// ================= Carbon Credit Estimation =================

const carbonCredits = (totalEmission / 1000).toFixed(2)

const creditPrice = 800

const offsetCost = (Number(carbonCredits) * creditPrice).toFixed(0)

// ================= AI Climate Insight =================

const electricityTotal = records.reduce(
(sum, r) => sum + Number(r.electricity),
0
)

const dieselTotal = records.reduce(
(sum, r) => sum + Number(r.diesel),
0
)

const gasTotal = records.reduce(
(sum, r) => sum + Number(r.gas),
0
)

let aiInsight = "Your emissions are balanced across categories."

if (electricityTotal > dieselTotal && electricityTotal > gasTotal) {
aiInsight =
"Electricity usage is your biggest emission source. Switching to renewable energy or improving energy efficiency could significantly reduce emissions."
}

if (dieselTotal > electricityTotal) {
aiInsight =
"Diesel usage is the highest contributor to emissions. Consider optimizing logistics or switching to electric vehicles."
}

if (gasTotal > electricityTotal) {
aiInsight =
"Gas consumption is high. Energy efficiency upgrades or alternative fuels could reduce emissions."
}

return (

<DashboardClient>

<div className="space-y-6">

{/* ================= ESG Report Download ================= */}

<div className="flex justify-between items-center">

<h1 className="text-2xl font-bold">
Carbon Dashboard
</h1>

<ESGReport
records={records}
totalEmission={totalEmission}
/>

</div>


{/* ================= Stats Cards ================= */}

<div className="grid grid-cols-5 gap-6">

<div className="bg-black/40 p-6 rounded-xl border border-white/10">

<p className="text-gray-400 text-sm">Total Records</p>

<h2 className="text-3xl font-bold mt-2">
{records.length}
</h2>

</div>


<div className="bg-black/40 p-6 rounded-xl border border-white/10">

<p className="text-gray-400 text-sm">Total Emissions</p>

<h2 className="text-3xl font-bold text-emerald-400 mt-2">
{totalEmission} kg
</h2>

<p className={`text-sm mt-2 ${Number(trend) >= 0 ? "text-red-400" : "text-emerald-400"}`}>

{Number(trend) >= 0 ? "▲" : "▼"} {trend}% vs last entry

</p>

</div>


<div className="bg-black/40 p-6 rounded-xl border border-white/10">

<p className="text-gray-400 text-sm">Latest Entry</p>

<h2 className="text-xl font-bold mt-2">
{records[0]?.createdAt.toLocaleDateString() || "No data"}
</h2>

</div>


<div className="bg-black/40 p-6 rounded-xl border border-white/10">

<p className="text-gray-400 text-sm">
Carbon Credits Needed
</p>

<h2 className="text-3xl font-bold text-blue-400 mt-2">
{carbonCredits}
</h2>

<p className="text-xs text-gray-500 mt-2">
Estimated offset cost ₹{offsetCost}
</p>

</div>


{/* ESG SCORE */}

<ESGScore score={82} />

</div>


{/* ================= Emission Chart ================= */}

<div className="bg-black/40 p-6 rounded-xl border border-white/10">

<h2 className="text-xl font-semibold mb-4">
Emission Trend
</h2>

<EmissionChart records={records} />

</div>


{/* ================= Records Table ================= */}

<div className="bg-black/40 p-6 rounded-xl border border-white/10">

<h2 className="text-xl font-semibold mb-4">
Emission Records
</h2>

<table className="w-full text-sm">

<thead className="text-gray-400 border-b border-white/10">

<tr className="text-left">

<th className="py-2">Date</th>
<th>Electricity</th>
<th>Diesel</th>
<th>Gas</th>
<th>Total</th>

</tr>

</thead>

<tbody>

{records.map((r) => (

<tr
key={r.id}
className="border-t border-white/5 hover:bg-white/5 transition"
>

<td className="py-2">
{r.createdAt.toLocaleDateString()}
</td>

<td>{r.electricity}</td>
<td>{r.diesel}</td>
<td>{r.gas}</td>

<td className="text-emerald-400 font-semibold">
{r.total} kg
</td>

</tr>

))}

</tbody>

</table>

</div>


{/* ================= AI Climate Advisor ================= */}

<div className="bg-black/40 p-6 rounded-xl border border-white/10">

<h2 className="text-xl font-semibold mb-4 text-purple-400">
AI Climate Insight
</h2>

<p className="text-gray-300">
{aiInsight}
</p>

</div>

</div>

</DashboardClient>

)
}