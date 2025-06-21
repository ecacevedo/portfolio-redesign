import React from "react"
import profileImage from "../assets/profile.jpeg"
import { motion } from "framer-motion"

export default function About() {
  return (
    <main className="min-h-screen bg-[#000007] text-white px-6 py-20 flex flex-col items-start justify-center space-y-16 font-sans max-w-5xl mx-auto">
      {/* Header with image */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-8 w-full">
        <img
          src={profileImage}
          alt="Portrait of Estevan Acevedo"
          className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover border border-zinc-700 shadow-md"
        />
        <h1 className="text-6xl font-bold leading-tight tracking-tight">
          Hi, I’m Estevan Acevedo
        </h1>
      </div>

      {/* Subhead with motion */}
      <motion.div
        className="text-zinc-400 tracking-tight text-base md:text-6xl leading-relaxed space-y-3"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
      >
        <p>🤝 I design with you, not at you.</p>
        <p>
          🧠 Strategic. <span className="whitespace-nowrap">🎨 Visual.</span>{" "}
          <span className="whitespace-nowrap">🧪 Curious.</span>
        </p>
      </motion.div>

      {/* Quick facts and links */}
      <div className="text-zinc-500 space-y-2 text-base md:text-lg pt-6 leading-relaxed">
        <p>📍 Based in Colorado Springs</p>
        <p>🚲 Designing at SRAM</p>
        <div className="pt-4 space-x-6">
          <a
            href="/v7-design-resume.pdf"
            className="hover:text-white transition font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            📄 Resume
          </a>
          <a
            href="mailto:estevancacevedo@gmail.com"
            className="hover:text-white transition font-semibold"
          >
            ✉️ Email
          </a>
          <a
            href="https://linkedin.com/in/estevan-acevedo"
            className="hover:text-white transition font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            💼 LinkedIn
          </a>
        </div>
      </div>
    </main>
  )
}
