"use client"

import { useState, useEffect } from "react"
import { prisma } from "@/lib/prisma"
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Menu } from "lucide-react"

export default function DashboardPage({ records }: any) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="relative min-h-screen flex bg-black text-white overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-black" />
      <div className="absolute inset-0 -z-10 
        bg-[radial-gradient(circle_at_15%_20%,rgba(16,185,129,0.18),transparent_40%),
            radial-gradient(circle_at_85%_80%,rgba(6,182,212,0.15),transparent_40%)]"
      />

      {/* Sidebar */}
      <aside className={`
        fixed lg:static top-0 left-0 h-full w-64 
        bg-zinc-950/80 backdrop-blur-xl border-r border-zinc-800/80 p-8 
        transform transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}>
        <h2 className="text-xl font-semibold tracking-tight mb-10">
          CarbonOS
        </h2>

        <nav className="space-y-6 text-zinc-400 text-sm">
          <div className="text-white font-medium">Dashboard</div>
          <div className="hover:text-white transition">Reports</div>
          <div className="hover:text-white transition">Analytics</div>
          <div className="hover:text-white transition">Settings</div>
        </nav>
      </aside>

      {/* Overlay (Mobile Only) */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/60 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 px-6 lg:px-16 py-10 space-y-10">

        {/* Top Bar */}
        <div className="flex items-center justify-between">
          <button 
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden text-zinc-400 hover:text-white"
          >
            <Menu size={24} />
          </button>

          <div>
            <h1 className="text-3xl font-semibold tracking-tight">
              Dashboard
            </h1>
            <p className="text-zinc-400 mt-2 text-sm">
              Monitor and analyze your carbon performance.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}