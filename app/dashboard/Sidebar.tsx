"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import {
  LayoutDashboard,
  BarChart3,
  Settings,
  ChevronLeft,
  PlusCircle,
} from "lucide-react"

export default function Sidebar() {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)

  const links = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Add Emission", href: "/dashboard/add", icon: PlusCircle },
    { name: "Reports", href: "#", icon: BarChart3 },
    { name: "Settings", href: "#", icon: Settings },
  ]

  return (
    <aside
      className={`relative hidden lg:flex flex-col transition-all duration-300 border-r border-zinc-800 bg-zinc-950/60 backdrop-blur-xl
        ${collapsed ? "w-20" : "w-64"}`}
    >
      {/* Collapse Button */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-6 bg-zinc-900 border border-zinc-700 rounded-full p-1 hover:bg-zinc-800 transition"
      >
        <ChevronLeft
          className={`w-4 h-4 transition-transform ${
            collapsed ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Logo */}
      <div className="p-6">
        {!collapsed && (
          <h1 className="text-xl font-semibold tracking-tight">
            CarbonOS
          </h1>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2 px-3">
        {links.map((link) => {
          const Icon = link.icon

          // Active for exact match OR nested route
          const active =
            pathname === link.href ||
            pathname.startsWith(link.href + "/")

          return (
            <Link
              key={link.name}
              href={link.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all
                ${
                  active
                    ? "bg-zinc-800 text-white"
                    : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
                }`}
            >
              <Icon className="w-5 h-5" />
              {!collapsed && <span>{link.name}</span>}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}