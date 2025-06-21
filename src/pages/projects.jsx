import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

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
    <main className="min-h-screen bg-[#000007] text-white px-6 py-24 flex flex-col items-center">
      <section className="max-w-2xl text-center mb-20">
        <h1 className="text-4xl font-bold">Projects</h1>
      </section>

      <section className="grid md:grid-cols-2 gap-10 w-full max-w-5xl">
        <Link to="/projects/trailhead" className="group block bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">
          <div className="h-52 bg-gradient-to-br from-zinc-800 to-zinc-700 flex items-center justify-center text-gray-500 text-sm italic">
            *Image: Trailhead UI showing tuning wizard*
          </div>
          <div className="p-6">
            <h2 className="text-xl font-semibold text-white group-hover:underline">Trailhead 2.0</h2>
            <p className="text-sm text-gray-400 mt-1">Redesigning tuning from confusion to clarity</p>
          </div>
        </Link>

        <Link to="/projects/bikefinder" className="group block bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">
          <div className="h-52 bg-gradient-to-br from-zinc-800 to-zinc-700 flex items-center justify-center text-gray-500 text-sm italic">
            *Image: Bike Finder filter interface*
          </div>
          <div className="p-6">
            <h2 className="text-xl font-semibold text-white group-hover:underline">Bike Finder 2.0</h2>
            <p className="text-sm text-gray-400 mt-1">From brittle tool to branded experience</p>
          </div>
        </Link>

        <Link to="/projects/flightattendant" className="group block bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">
          <div className="h-52 bg-gradient-to-br from-zinc-800 to-zinc-700 flex items-center justify-center text-gray-500 text-sm italic">
            *Image: App UI showing Flight Attendant mode states*
          </div>
          <div className="p-6">
            <h2 className="text-xl font-semibold text-white group-hover:underline">Flight Attendant</h2>
            <p className="text-sm text-gray-400 mt-1">Making smart suspension feel human</p>
          </div>
        </Link>

        <Link to="/projects/axs" className="group block bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">
          <div className="h-52 bg-gradient-to-br from-zinc-800 to-zinc-700 flex items-center justify-center text-gray-500 text-sm italic">
            *Image: Placeholder for AXS Overhaul*
          </div>
          <div className="p-6">
            <h2 className="text-xl font-semibold text-white group-hover:underline">[Coming Soon] AXS Overhaul</h2>
            <p className="text-sm text-gray-400 mt-1">E‑MTB control, clarified</p>
          </div>
        </Link>
      </section>
    </main>
  )
}
