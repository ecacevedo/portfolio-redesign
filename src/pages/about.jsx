import React from "react"
import profileImage from "../assets/profile.jpeg"
import { motion, useReducedMotion } from "framer-motion"

export default function About() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <main className="min-h-screen bg-[#000007] text-white px-6 py-12 md:py-20 flex flex-col items-start justify-center space-y-10 md:space-y-16 font-sans max-w-5xl mx-auto">

      {/* Header with image and name */}
      <motion.div
        className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 w-full"
        initial={{ opacity: 0, y: -24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.8,
          ease: [0.33, 1, 0.68, 1],
          opacity: { delay: 0.2 },
        }}
        viewport={{ once: true }}
      >
        <motion.img
          src={profileImage}
          alt="Portrait of Estevan Acevedo"
          className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover border border-zinc-700 shadow-md"
          initial={shouldReduceMotion ? {} : { opacity: 0 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1 }}
          transition={shouldReduceMotion ? {} : { duration: 1.6, ease: [0.33, 1, 0.68, 1] }}
          viewport={{ once: true }}
        />
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight">
            Hi, I’m Estevan Acevedo
          </h1>
        </div>
      </motion.div>

      {/* Subhead with principles */}
      <motion.div
        className="text-zinc-400 tracking-tight text-lg sm:text-xl md:text-6xl leading-relaxed space-y-2 md:space-y-3"
        initial={{ opacity: 0, y: -24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.8,
          ease: [0.33, 1, 0.68, 1],
          opacity: { delay: 0.2 },
        }}
        viewport={{ once: true }}
      >
        <p>🤝 I design with you, not at you.</p>
        <p>
          🧠 Strategic. <span className="whitespace-nowrap">🎨 Visual.</span>{" "}
          <span className="whitespace-nowrap">🧪 Curious.</span>
        </p>
      </motion.div>

      {/* Quick facts and links */}
      <motion.div
        className="text-zinc-500 space-y-1 text-lg sm:text-xl md:text-lg pt-4 leading-relaxed"
        initial={{ opacity: 0, y: -24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.8,
          ease: [0.33, 1, 0.68, 1],
          opacity: { delay: 0.2 },
        }}
        viewport={{ once: true }}
      >
        <p>📍 Based in Colorado Springs</p>
        <p>🚲 Designing at SRAM</p>
        <div className="pt-4 flex flex-wrap gap-x-6 gap-y-2">
          {[
            {
              href: "/v7-design-resume.pdf",
              label: "📄 Resume",
              external: true,
            },
            {
              href: "mailto:estevancacevedo@gmail.com",
              label: "✉️ Email",
              external: false,
            },
            {
              href: "https://linkedin.com/in/estevan-acevedo",
              label: "💼 LinkedIn",
              external: true,
            },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="relative inline-block font-semibold text-zinc-500 hover:text-white transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transform-none transform hover:scale-105"
            >
              {link.label}
            </a>
          ))}
        </div>
      </motion.div>

      {/* Scroll cue — temporarily disabled */}
      {/*
      <motion.div
        className="text-zinc-500 text-sm mt-10 animate-bounce"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.5 }}
        transition={{ delay: 2, duration: 1.4 }}
        viewport={{ once: true }}
      >
        ↓ Scroll to see work
      </motion.div>
      */}
    </main>
  )
}
