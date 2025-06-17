import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/image001.jpg';

export default function About() {
  return (
    <motion.main
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-12 py-20 gap-12 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      {/* Profile Image */}
      <div className="flex-shrink-0">
        <img
          src={profileImage}
          alt="Estevan Acevedo"
          className="w-48 h-48 md:w-60 md:h-60 rounded-full object-cover shadow-lg border dark:border-gray-700"
        />
      </div>

      {/* Text Block */}
      <div className="max-w-xl text-center md:text-left">
        <h1 className="text-4xl font-black mb-4 tracking-tight">
          Estevan Acevedo
        </h1>

        <p className="text-lg md:text-xl mb-6 leading-relaxed">
          Product designer focused on clarity, systems, and long-term impact. I work across product, engineering, and brand to make digital experiences feel honest, useful, and quietly elegant.
        </p>

        <div className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
          <p>Based in Colorado Springs</p>
          <p>Designing at SRAM</p>
        </div>
      </div>
    </motion.main>
  );
}
