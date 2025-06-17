import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Import all the page components
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Projects from './pages/Projects';
import ProjectTrailhead from './pages/ProjectTrailhead';
import ProjectFlightAttendant from './pages/ProjectFlightAttendant';
import ProjectSRAMSite from './pages/ProjectSRAMSite';
import ProjectAXSOverhaul from './pages/ProjectAXSOverhaul';


function AnimatedRoutes() {
  const location = useLocation();
  return (
    // AnimatePresence enables exit animations on route change
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/trailhead" element={<ProjectTrailhead />} />
        <Route path="/projects/flight-attendant" element={<ProjectFlightAttendant />} />
        <Route path="/projects/sram-site" element={<ProjectSRAMSite />} />
        <Route path="/projects/axs-overhaul" element={<ProjectAXSOverhaul />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <NavBar />
      <AnimatedRoutes />
    </Router>
  );
}

