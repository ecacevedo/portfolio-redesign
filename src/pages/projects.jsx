import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import fullBikeFinderImage from "../assets/fullbikefinder.png"
import desktopPDP from "../assets/Desktop PDP MVP.png"
import autoModeImage from "../assets/automode.png"

export default function Projects() {
  const PASSWORD = "designonly"
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [input, setInput] = useState("")

  useEffect(() => {
    const stored = sessionStorage.getItem("authorized")
    if (stored === "true") setIsAuthorized(true)
  }, [])

  const handleAuth = () => {
    if (input === PASSWORD) {
      sessionStorage.setItem("authorized", "true")
      setIsAuthorized(true)
    } else {
      alert("Incorrect password")
    }
  }

  if (!isAuthorized) {
    return (
      <main className="min-h-screen bg-[#000007] text-white px-6 py-32 flex flex-col items-center justify-center text-center space-y-6">
        <h1 className="text-2xl font-semibold">🔒 Protected Area</h1>
        <input
          type="password"
          placeholder="Enter password"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="px-4 py-2 rounded bg-zinc-800 text-white border border-zinc-600 focus:outline-none"
        />
        <button
          onClick={handleAuth}
          className="mt-2 px-4 py-2 bg-zinc-700 rounded hover:bg-zinc-600 transition"
        >
          Submit
        </button>
      </main>
    )
  }

  return (
    <main className="bg-[#000007] text-gray-100 max-w-5xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold mb-16 tracking-tight text-white">
        Selected Work
      </h1>

      <div className="grid md:grid-cols-2 gap-16">
        {/* Project 1: Bike Finder */}
        <Link to="/bikefinder" className="group">
          <div className="overflow-hidden rounded-xl mb-4">
            <img
              src={fullBikeFinderImage}
              alt="Bike Finder Redesign Preview"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <h2 className="text-xl font-semibold text-white mb-2">Bike Finder 2.0</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Rebuilt the product-finding experience from the ground up. Boosted conversion, reduced support churn, and clarified buying decisions across complex drivetrain ecosystems.
          </p>
        </Link>

        {/* Project 2: Trailhead */}
        <Link to="/trailhead" className="group">
          <div className="overflow-hidden rounded-xl mb-4">
            <img
              src={desktopPDP}
              alt="Trailhead Redesign Preview"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <h2 className="text-xl font-semibold text-white mb-2">Trailhead Redesign</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Unified RockShox and SRAM AXS fitment into a single, modern product page. Improved comprehension, mobile usability, and team handoff velocity.
          </p>
        </Link>

        {/* Project 3: Flight Attendant */}
        <Link to="/flightattendant" className="group">
          <div className="overflow-hidden rounded-xl mb-4">
            <img
              src={autoModeImage}
              alt="Flight Attendant Preview"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <h2 className="text-xl font-semibold text-white mb-2">Flight Attendant UI</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Helped riders trust the tech behind RockShox’s automatic suspension. Designed real-time feedback, override previews, and simplified setup across iOS and Android.
          </p>
        </Link>

        {/* Project 4: AXS Overhaul (Coming Soon) */}
        <Link to="/projects/axs" className="group block bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">
          <div className="h-52 bg-gradient-to-br from-zinc-800 to-zinc-700 flex items-center justify-center text-gray-500 text-sm italic">
            *Image: Placeholder for AXS Overhaul*
          </div>
          <div className="p-6">
            <h2 className="text-xl font-semibold text-white group-hover:underline">[Coming Soon] AXS Overhaul</h2>
            <p className="text-sm text-gray-400 mt-1">E‑MTB control, clarified</p>
          </div>
        </Link>
      </div>
    </main>
  )
}
