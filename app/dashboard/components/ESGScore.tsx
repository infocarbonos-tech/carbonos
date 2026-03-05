"use client"

export default function ESGScore({ score }: { score: number }) {

const rotation = (score / 100) * 180

return (

<div className="bg-black/40 border border-white/10 p-6 rounded-xl">

<p className="text-gray-400 text-sm mb-2">
ESG Score
</p>

<div className="flex justify-center">

<div className="w-40 h-20 bg-white/10 rounded-t-full relative overflow-hidden">

<div
style={{ transform: `rotate(${rotation}deg)` }}
className="absolute bottom-0 left-1/2 w-1 h-20 bg-emerald-400 origin-bottom"
/>

</div>

</div>

<p className="text-center text-2xl font-bold text-emerald-400 mt-3">
{score}/100
</p>

</div>

)
}