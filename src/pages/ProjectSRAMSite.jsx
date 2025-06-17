import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function ProjectSRAMSite() {
  return (
    <motion.main 
      className="pt-20 max-w-3xl mx-auto px-6"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4">SRAM.com Website Overhaul</h2>
      <p className="text-gray-700 mb-4">
        <strong>Role:</strong> UI/UX Designer – led the overhaul of SRAM’s flagship website, focusing on improving the product discovery and purchase experience. 
        I coordinated with marketing and development teams to align the design with brand guidelines while enhancing usability.
      </p>
      <p className="text-gray-700 mb-4">
        <strong>Design Approach:</strong> We treated the website redesign as an opportunity to modernize the look and feel and to implement a more intuitive navigation system. 
        I started by analyzing site analytics and customer feedback to identify pain points – users struggled with finding compatible components and comparing products. 
        I developed a cleaner information architecture and created interactive prototypes of a new navigation menu and product filtering system.
      </p>
      <p className="text-gray-700 mb-4">
        <strong>Challenges & Solutions:</strong> A key challenge was balancing the needs of different user groups – from hardcore cyclists who know exactly what they need, to newcomers who are overwhelmed by technical specs. 
        To solve this, I introduced user-friendly guides and a dynamic quiz to help beginners find the right products, while giving power-users advanced filters and search tools. 
        Ensuring mobile responsiveness for a data-rich site was also critical; I employed a mobile-first design strategy and tested extensively on various devices to guarantee a smooth experience across breakpoints.
      </p>
      <p className="text-gray-700 mb-4">
        <strong>Outcome:</strong> The new SRAM.com launched with a fresh interface and significantly improved navigation. 
        Early analytics showed increased time-on-site and higher conversion rates. 
        The redesign not only made it easier for riders to find and purchase products, but it also told a more cohesive brand story, blending content and commerce in a user-centric way.
      </p>
      <div className="mt-8 pt-4 border-t border-gray-200 text-sm text-gray-600">
        <p className="mb-2">Other Projects:</p>
        <ul className="flex flex-wrap gap-4">
          <li><Link to="/projects/trailhead" className="hover:underline">RockShox Trailhead Redesign</Link></li>
          <li><Link to="/projects/flight-attendant" className="hover:underline">Flight Attendant – SRAM AXS App</Link></li>
          <li><Link to="/projects/axs-overhaul" className="hover:underline">AXS App Architecture Overhaul</Link></li>
        </ul>
      </div>
    </motion.main>
  );
}
