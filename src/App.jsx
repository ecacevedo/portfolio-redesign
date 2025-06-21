import React from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"

import Navbar from "./components/NavBar"


import About from "./pages/about"
import Projects from "./pages/projects"
import ProjectTrailhead from "./pages/ProjectTrailhead"
import ProjectFlightAttendant from "./pages/ProjectFlightAttendant"
import ProjectSRAMSite from "./pages/ProjectSRAMSite"
import ProjectAXSOverhaul from "./pages/ProjectAXSOverhaul"
import Contact from "./pages/Contact"
import Resume from "./pages/Resume"

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/trailhead" element={<ProjectTrailhead />} />
        <Route path="/projects/flightattendant" element={<ProjectFlightAttendant />} />
        <Route path="/projects/sramsite" element={<ProjectSRAMSite />} />
        <Route path="/projects/axs" element={<ProjectAXSOverhaul />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <div className="bg-[#000007] text-white min-h-screen scroll-smooth font-sans">
      <Navbar />
     
      <main className="relative z-10">
        <AnimatedRoutes />
      </main>
    </div>
  )
}
