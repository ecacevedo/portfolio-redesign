import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import fullBikeFinderImage from "../assets/fullbikefinder.png"
import desktopPDPImage from "../assets/Desktop PDP MVP.png"
import autoModeImage from "../assets/automode.png"

export default function Projects() {
  


  return (
    <main className="bg-[#000007] text-gray-100 max-w-5xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold mb-16 tracking-tight text-white">
        Selected Work
      </h1>

      <div className="grid md:grid-cols-2 gap-16">
      

        {/* Project 2: Trailhead */}
        <Link to="/projects/trailhead" className="group">
          <div className="overflow-hidden rounded-xl mb-4">
            <img
              src={desktopPDPImage}
              alt="Trailhead Preview"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <h2 className="text-xl font-semibold text-white mb-2">Trailhead</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
           Made suspension tuning make sense again.
          </p>
        </Link>

        {/* Project 3: Flight Attendant */}
        <Link to="/projects/flightattendant" className="group">
          <div className="overflow-hidden rounded-xl mb-4">
            <img
              src={autoModeImage}
              alt="Flight Attendant Preview"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <h2 className="text-xl font-semibold text-white mb-2">Flight Attendant</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Made smart suspension readable and human.
          </p>
        </Link>

          {/* Project 1: Bike Finder */}
        <Link to="/projects/bikefinder" className="group">
          <div className="overflow-hidden rounded-xl mb-4">
            <img
              src={fullBikeFinderImage}
              alt="Bike Finder Preview"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <h2 className="text-xl font-semibold text-white mb-2">Bike Finder</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Redesigned product matching to boost clarity and confidence.
          </p>
        </Link>

        {/* Project 4: AXS Overhaul Placeholder */}
        <Link to="/projects/axs" className="group block bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">
          <div className="h-52 bg-gradient-to-br from-zinc-800 to-zinc-700 flex items-center justify-center text-gray-500 text-sm italic">
            *Image: Placeholder for AXS Overhaul*
          </div>
          <div className="p-6">
            <h2 className="text-xl font-semibold text-white group-hover:underline">[Coming Soon] AXS Overhaul</h2>
            <p className="text-sm text-gray-400 mt-1">E‑MTB control, clarified.</p>
          </div>
        </Link>
      </div>
    </main>
  )
}
