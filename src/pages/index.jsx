import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#000007] text-gray-100 px-6 py-24 flex flex-col items-center justify-center space-y-20">
      <section className="text-center max-w-2xl">
        <h1 className="text-5xl font-bold mb-4">Design that disappears into the ride</h1>
        <p className="text-lg text-gray-400">
          I help riders trust their tools. Calm UI, clear language, and products that feel like second nature.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-10 w-full max-w-5xl">
        <Link to="/trailhead" className="group block bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">
          <div className="h-52 bg-gradient-to-br from-zinc-800 to-zinc-700 flex items-center justify-center text-gray-500 text-sm italic">
            *Image: Trailhead UI showing tuning wizard*
          </div>
          <div className="p-6">
            <h2 className="text-xl font-semibold text-white group-hover:underline">Trailhead 2.0</h2>
            <p className="text-sm text-gray-400 mt-1">Redesigning tuning from confusion to clarity</p>
          </div>
        </Link>

        <Link to="/bikefinder" className="group block bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">
          <div className="h-52 bg-gradient-to-br from-zinc-800 to-zinc-700 flex items-center justify-center text-gray-500 text-sm italic">
            *Image: Bike Finder filter interface*
          </div>
          <div className="p-6">
            <h2 className="text-xl font-semibold text-white group-hover:underline">Bike Finder 2.0</h2>
            <p className="text-sm text-gray-400 mt-1">From brittle tool to branded experience</p>
          </div>
        </Link>

        <Link to="/flightattendant" className="group block bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">
          <div className="h-52 bg-gradient-to-br from-zinc-800 to-zinc-700 flex items-center justify-center text-gray-500 text-sm italic">
            *Image: App UI showing Flight Attendant mode states*
          </div>
          <div className="p-6">
            <h2 className="text-xl font-semibold text-white group-hover:underline">Flight Attendant</h2>
            <p className="text-sm text-gray-400 mt-1">Making smart suspension feel human</p>
          </div>
        </Link>

        <Link to="/axs-overhaul" className="group block bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">
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
