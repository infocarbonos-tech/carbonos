import Link from "next/link"

export default function HomePage() {

  return (
    <div className="min-h-screen bg-black text-white">

{/* NAVBAR */}

<nav className="flex items-center justify-between px-12 py-6 border-b border-white/10">

<div className="flex items-center gap-3">

<div className="w-9 h-9 bg-gradient-to-r from-emerald-400 to-green-600 rounded-full"></div>

<h1 className="text-xl font-bold tracking-wide">
CarbonOS
</h1>

</div>

<div className="flex items-center gap-8 text-sm text-gray-300">

<a href="#features">Features</a>
<a href="#product">Product</a>
<a href="#pricing">Pricing</a>

<Link
href="/dashboard"
className="bg-emerald-500 px-5 py-2 rounded-lg text-black font-semibold hover:bg-emerald-400 transition"
>
Dashboard
</Link>

</div>

</nav>



{/* HERO */}

<section className="px-12 py-32 max-w-7xl mx-auto relative">

<div className="absolute blur-[120px] opacity-30 bg-emerald-500 w-[600px] h-[600px] -top-40 -left-40"></div>

<h1 className="text-6xl font-bold leading-tight max-w-4xl">

Carbon Intelligence  
for the Modern Enterprise

</h1>

<p className="mt-8 text-gray-400 text-lg max-w-2xl">

Track emissions, generate ESG reports, and offset carbon
with verified climate projects — all inside one intelligent
climate platform.

</p>

<div className="flex gap-5 mt-10">

<Link
href="/dashboard"
className="bg-emerald-500 px-8 py-4 rounded-xl text-black font-semibold text-lg hover:bg-emerald-400 transition"
>
Launch Dashboard
</Link>

<button className="border border-white/20 px-8 py-4 rounded-xl hover:bg-white/5">
View Demo
</button>

</div>

</section>



{/* TRUST */}

<section className="px-12 py-12 border-t border-white/10 text-center">

<p className="text-gray-500 text-sm mb-6">
Trusted for climate reporting and carbon intelligence
</p>

<div className="flex justify-center gap-10 text-gray-400 text-sm">

<span>ClimateTech</span>
<span>Carbon Registry</span>
<span>Green Analytics</span>
<span>ESG Alliance</span>

</div>

</section>



{/* FEATURES */}

<section id="features" className="px-12 py-24 border-t border-white/10">

<h2 className="text-4xl font-bold mb-14">
Platform Features
</h2>

<div className="grid grid-cols-3 gap-10">

<div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-emerald-500 transition">

<h3 className="text-xl font-semibold mb-3">
Emission Tracking
</h3>

<p className="text-gray-400">
Track electricity, diesel, gas and operational emissions
in real time across your organisation.
</p>

</div>



<div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-emerald-500 transition">

<h3 className="text-xl font-semibold mb-3">
Automated ESG Reports
</h3>

<p className="text-gray-400">
Generate investor-ready sustainability reports in seconds
with automatic emissions analysis.
</p>

</div>



<div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-emerald-500 transition">

<h3 className="text-xl font-semibold mb-3">
Carbon Marketplace
</h3>

<p className="text-gray-400">
Offset emissions by purchasing verified carbon credits
from climate projects around the world.
</p>

</div>

</div>

</section>



{/* PRODUCT PREVIEW */}

<section id="product" className="px-12 py-24 border-t border-white/10">

<h2 className="text-4xl font-bold mb-8">
CarbonOS Dashboard
</h2>

<p className="text-gray-400 mb-12 max-w-xl">

A powerful analytics dashboard helping organisations
measure, understand and reduce their carbon footprint.

</p>

<div className="bg-white/5 p-12 rounded-2xl border border-white/10">

<div className="grid grid-cols-4 gap-8">

<div className="bg-black/40 p-8 rounded-xl border border-white/10">

<p className="text-gray-400 text-sm">
Total Emissions
</p>

<h2 className="text-3xl font-bold text-emerald-400 mt-2">
10,184 kg
</h2>

</div>


<div className="bg-black/40 p-8 rounded-xl border border-white/10">

<p className="text-gray-400 text-sm">
Carbon Credits
</p>

<h2 className="text-3xl font-bold text-blue-400 mt-2">
10.18
</h2>

</div>


<div className="bg-black/40 p-8 rounded-xl border border-white/10">

<p className="text-gray-400 text-sm">
Projects Offset
</p>

<h2 className="text-3xl font-bold mt-2">
3
</h2>

</div>


<div className="bg-black/40 p-8 rounded-xl border border-white/10">

<p className="text-gray-400 text-sm">
ESG Score
</p>

<h2 className="text-3xl font-bold text-emerald-400 mt-2">
82
</h2>

</div>

</div>

</div>

</section>



{/* PRICING */}

<section id="pricing" className="px-12 py-24 border-t border-white/10">

<h2 className="text-4xl font-bold mb-16 text-center">
Pricing
</h2>

<div className="grid grid-cols-3 gap-10 max-w-6xl mx-auto">

<div className="bg-white/5 p-10 rounded-2xl border border-white/10">

<h3 className="text-xl font-semibold mb-4">
Starter
</h3>

<p className="text-gray-400 mb-6">
For small businesses
</p>

<h2 className="text-4xl font-bold mb-6">
Free
</h2>

<ul className="text-gray-400 space-y-2">

<li>Emission tracking</li>
<li>Basic ESG report</li>
<li>Limited analytics</li>

</ul>

</div>



<div className="bg-emerald-500 text-black p-10 rounded-2xl">

<h3 className="text-xl font-semibold mb-4">
Growth
</h3>

<p className="mb-6">
For scaling companies
</p>

<h2 className="text-4xl font-bold mb-6">
₹4,999/mo
</h2>

<ul className="space-y-2">

<li>Advanced ESG reports</li>
<li>AI climate insights</li>
<li>Carbon marketplace</li>

</ul>

</div>



<div className="bg-white/5 p-10 rounded-2xl border border-white/10">

<h3 className="text-xl font-semibold mb-4">
Enterprise
</h3>

<p className="text-gray-400 mb-6">
Large organisations
</p>

<h2 className="text-4xl font-bold mb-6">
Custom
</h2>

<ul className="text-gray-400 space-y-2">

<li>Unlimited data</li>
<li>Custom ESG analytics</li>
<li>Enterprise integrations</li>

</ul>

</div>

</div>

</section>



{/* CTA */}

<section className="px-12 py-28 border-t border-white/10 text-center">

<h2 className="text-5xl font-bold">
Start Your Carbon Journey
</h2>

<p className="text-gray-400 mt-6 text-lg">
Measure emissions. Generate ESG reports. Offset carbon.
</p>

<Link
href="/dashboard"
className="inline-block mt-10 bg-emerald-500 px-10 py-5 rounded-xl text-black font-semibold text-lg hover:bg-emerald-400 transition"
>
Get Started
</Link>

</section>



{/* FOOTER */}

<footer className="px-12 py-10 border-t border-white/10 text-gray-500 text-sm">

<div className="flex justify-between">

<p>
© 2026 CarbonOS
</p>

<p>
Climate Intelligence Platform
</p>

</div>

</footer>


    </div>
  )
}