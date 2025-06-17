import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Projects() {
  const [entered, setEntered] = useState(false);
  const [password, setPassword] = useState('');
  const correctPassword = 'rockshox'; // change this to whatever you like

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      setEntered(true);
    } else {
      alert('Incorrect password');
    }
  };

  const projectList = [
    { 
      slug: 'trailhead', 
      title: 'RockShox Trailhead Redesign', 
      tagline: 'Redesigning a MTB suspension tuning guide for simplicity' 
    },
    { 
      slug: 'flight-attendant', 
      title: 'Flight Attendant – SRAM AXS App', 
      tagline: 'Integrating auto-suspension tuning into the AXS mobile experience' 
    },
    { 
      slug: 'sram-site', 
      title: 'SRAM.com Website Overhaul', 
      tagline: 'Reimagining an e-commerce platform for a leading cycling brand' 
    },
    { 
      slug: 'axs-overhaul', 
      title: 'AXS App Architecture Overhaul', 
      tagline: 'Improving performance and UX by redesigning app architecture' 
    }
  ];

  if (!entered) {
    return (
      <motion.div
        className="flex flex-col items-center justify-center min-h-screen p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-sm">
          <h2 className="text-xl font-semibold text-gray-800">Enter password to view projects</h2>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          <button
            type="submit"
            className="w-full bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
          >
            Unlock
          </button>
        </form>
      </motion.div>
    );
  }

  return (
    <motion.main 
      className="pt-20 max-w-4xl mx-auto px-6"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-8">Projects & Case Studies</h2>
      <ul className="space-y-6">
        {projectList.map(project => (
          <li key={project.slug}>
            <Link to={`/projects/${project.slug}`} className="group block p-4 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition">
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 mt-1">{project.tagline}</p>
            </Link>
          </li>
        ))}
      </ul>
    </motion.main>
  );
}
