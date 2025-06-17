import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function ProjectFlightAttendant() {
  return (
    <motion.main 
      className="pt-20 max-w-3xl mx-auto px-6"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Flight Attendant – SRAM AXS App</h2>
      <p className="text-gray-700 mb-4">
        <strong>Role:</strong> UX Designer – integrated the RockShox Flight Attendant technology into the SRAM AXS mobile app. 
        I worked closely with firmware engineers and the app team to design a seamless user experience for controlling and monitoring the smart suspension system.
      </p>
      <p className="text-gray-700 mb-4">
        <strong>Design Thinking:</strong> We approached this project by first understanding how riders interact with the AXS app and what new needs Flight Attendant introduced. 
        I mapped out user journeys for setup, real-time suspension tuning, and ride review. Sketching and wireframing helped align the team on the new interface components, and I used interactive prototypes to conduct user tests with beta riders.
      </p>
      <p className="text-gray-700 mb-4">
        <strong>Challenges & Solutions:</strong> One challenge was presenting live suspension data without overwhelming the user. 
        I solved this by using an **adaptive UI** – simple indicators when the rider just wants to ride, with the option to tap for detailed graphs when needed. 
        Another challenge was ensuring the new features didn’t clutter the app’s existing navigation. I introduced a contextual menu for Flight Attendant that appears only when a Flight Attendant-equipped bike is connected, keeping the interface clean for other users.
      </p>
      <p className="text-gray-700 mb-4">
        <strong>Outcome:</strong> The integration was a success – riders could effortlessly control and monitor their Flight Attendant suspension through the familiar AXS app. 
        The design balanced **automation and manual control**, earning praise for making a high-tech system feel user-friendly. 
        The project contributed to increased app engagement and showcased how thoughtful UX can make advanced features accessible.
      </p>
      <div className="mt-8 pt-4 border-t border-gray-200 text-sm text-gray-600">
        <p className="mb-2">Other Projects:</p>
        <ul className="flex flex-wrap gap-4">
          <li><Link to="/projects/trailhead" className="hover:underline">RockShox Trailhead Redesign</Link></li>
          <li><Link to="/projects/sram-site" className="hover:underline">SRAM.com Website Overhaul</Link></li>
          <li><Link to="/projects/axs-overhaul" className="hover:underline">AXS App Architecture Overhaul</Link></li>
        </ul>
      </div>
    </motion.main>
  );
}
