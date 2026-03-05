"use client"

import { Bell, Search } from "lucide-react"
import ThemeToggle from "./components/ThemeToggle"

export default function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/80 border-b border-border px-6 lg:px-10 h-16 flex items-center justify-between">
      
      {/* Left Side */}
      <div className="flex items-center gap-6">
        <h1 className="text-lg font-semibold tracking-tight">
          Dashboard
        </h1>

        <div className="hidden md:flex items-center bg-muted border border-border rounded-lg px-3 py-1.5">
          <Search className="w-4 h-4 text-muted-foreground mr-2" />
          <input
            placeholder="Search..."
            className="bg-transparent outline-none text-sm w-40"
          />
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-5">
        <ThemeToggle />

        <button className="relative text-muted-foreground hover:text-foreground transition">
          <Bell className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-500 rounded-full"></span>
        </button>

        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center text-black font-semibold text-sm">
          M
        </div>
      </div>
    </header>
  )
}