import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function ProjectAXSOverhaul() {
  return (
    <motion.main 
      className="pt-20 max-w-3xl mx-auto px-6"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4">AXS App Architecture Overhaul</h2>
      <p className="text-gray-700 mb-4">
        <strong>Role:</strong> Product Designer – drove the UX design for a major overhaul of the AXS mobile app’s architecture and interface. 
        In this project, I teamed up with architects and developers to refactor the app’s structure for scalability and better user experience.
      </p>
      <p className="text-gray-700 mb-4">
        <strong>Design Strategy:</strong> The aim was to reorganize the app’s features (which had grown complex over time) into a more coherent, user-friendly whole. 
        I conducted a UX audit of the current app, mapping out flows and identifying points of friction. Armed with this insight, I helped devise a new app navigation model and dashboard. 
        Wireframes and user testing were crucial here – we validated the new IA with existing users before moving into high-fidelity design.
      </p>
      <p className="text-gray-700 mb-4">
        <strong>Challenges & Solutions:</strong> One big challenge was ensuring that existing users would not be lost after the reorganization. 
        To address this, I incorporated onboarding cues (like tooltips and a brief walkthrough) in the updated app to explain what changed. 
        Another challenge was performance – the previous app suffered slow load times. By simplifying screens and reducing complexity (sometimes less is more), the new design was lighter and faster. 
        I also worked with the devs to prioritize features for the MVP, deferring less-used features to keep the app focused.
      </p>
      <p className="text-gray-700 mb-4">
        <strong>Outcome:</strong> The architecture overhaul led to a cleaner, faster AXS app. 
        Users appreciated the simplified navigation and snappier performance. 
        The redesign laid a solid foundation for future features and proved that a user-centered restructuring can dramatically improve an app’s usability and perception. 
        This project reinforced the value of collaboration between design and engineering from the ground up.
      </p>
      <div className="mt-8 pt-4 border-t border-gray-200 text-sm text-gray-600">
        <p className="mb-2">Other Projects:</p>
        <ul className="flex flex-wrap gap-4">
          <li><Link to="/projects/trailhead" className="hover:underline">RockShox Trailhead Redesign</Link></li>
          <li><Link to="/projects/flight-attendant" className="hover:underline">Flight Attendant – SRAM AXS App</Link></li>
          <li><Link to="/projects/sram-site" className="hover:underline">SRAM.com Website Overhaul</Link></li>
        </ul>
      </div>
    </motion.main>
  );
}
