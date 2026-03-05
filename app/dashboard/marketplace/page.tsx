
import { Leaf, Sun, Wind } from "lucide-react"

const projects = [
  {
    id: 1,
    name: "Mangrove Restoration",
    location: "Sundarbans, India",
    price: 720,
    reduction: "1 Credit = 1000kg CO₂",
    icon: Leaf,
  },
  {
    id: 2,
    name: "Solar Energy Project",
    location: "Rajasthan Solar Park",
    price: 810,
    reduction: "1 Credit = 1000kg CO₂",
    icon: Sun,
  },
  {
    id: 3,
    name: "Wind Farm Offset",
    location: "Tamil Nadu Wind Corridor",
    price: 790,
    reduction: "1 Credit = 1000kg CO₂",
    icon: Wind,
  },
]

export default function MarketplacePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Carbon Credit Marketplace</h1>

      <p className="text-gray-400">
        Offset your emissions by supporting verified climate projects.
      </p>

      <div className="grid grid-cols-3 gap-6">
        {projects.map((project) => {
          const Icon = project.icon

          return (
            <div
              key={project.id}
              className="bg-black/40 border border-white/10 p-6 rounded-xl space-y-4 hover:border-emerald-500 transition"
            >
              <Icon className="text-emerald-400" size={32} />

              <h2 className="text-xl font-semibold">{project.name}</h2>

              <p className="text-gray-400 text-sm">{project.location}</p>

              <p className="text-gray-500 text-sm">{project.reduction}</p>

              <p className="text-2xl font-bold text-emerald-400">
                ₹{project.price}
              </p>

              <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-black font-semibold py-2 rounded-lg transition">
                Buy Credit
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}