import React, { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import profileImage from "../assets/profile.jpg"

export default function About() {
  const { scrollY } = useScroll()
  const yImage = useTransform(scrollY, [0, 300], [0, -20])
  const yText = useTransform(scrollY, [0, 300], [0, -10])
  const opacityBackground = useTransform(scrollY, [0, 300], [0.6, 0.3])

  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updatePos = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", updatePos)
    return () => window.removeEventListener("mousemove", updatePos)
  }, [])

  return (
    <main className="min-h-screen bg-[#000007] text-white px-6 py-24 flex flex-col items-center justify-center text-center space-y-10 overflow-hidden relative">
      {/* Animated ambient background */}
      <motion.div
        className="absolute w-[600px] h-[600px] bg-[#1c1c33] rounded-full blur-[200px] opacity-40 z-0"
        animate={{ scale: [1, 1.05, 1], x: [0, 10, 0], y: [0, -10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{ opacity: opacityBackground }}
      />

      {/* Cursor-follow glow */}
      <motion.div
        className="fixed pointer-events-none z-0 w-96 h-96 rounded-full blur-[180px] bg-indigo-600 opacity-20"
        style={{
          left: cursorPos.x - 192,
          top: cursorPos.y - 192,
        }}
      />

      {/* Profile image */}
      <motion.img
        src={profileImage}
        alt="Estevan Acevedo"
        className="w-44 h-44 md:w-52 md:h-52 rounded-full object-cover shadow-lg z-10"
        style={{ y: yImage }}
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      {/* Text */}
      <motion.div
        className="z-10 space-y-4"
        style={{ y: yText }}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-3xl md:text-4xl font-bold">Thoughtful design for systems that move.</h1>
        <p className="text-gray-400 text-base md:text-lg">
          Product designer focused on clarity, utility, and creative restraint.
        </p>
      </motion.div>

      {/* Contact + Resume */}
      <div className="z-10 space-y-2 text-sm text-gray-400">
        <p>Based in Colorado Springs • Designing at SRAM</p>
        <div className="flex justify-center gap-6 mt-2">
          <a href="/v7-design-resume.pdf" className="hover:underline" target="_blank" rel="noreferrer">Download Resume</a>
          <a href="mailto:estevancacevedo@gmail.com" className="hover:underline">Email</a>
          <a href="https://linkedin.com/in/estevan-acevedo" className="hover:underline" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </main>
  )
}
