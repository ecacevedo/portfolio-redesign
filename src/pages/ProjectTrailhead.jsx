import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function ProjectTrailhead() {
  return (
    <motion.main 
      className="pt-20 max-w-3xl mx-auto px-6"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4">RockShox Trailhead Redesign</h2>
      <p className="text-gray-700 mb-4">
        <strong>Role:</strong> Lead UX/UI Designer – spearheaded the end-to-end redesign of RockShox Trailhead, a web app for mountain bikers to tune their suspension. 
        I collaborated with product managers and engineers to simplify a previously confusing process into a user-friendly interface.
      </p>
      <p className="text-gray-700 mb-4">
        <strong>Design Thinking:</strong> I began with user research, interviewing both novice and expert riders to identify pain points in the original Trailhead tool. 
        Using these insights, I sketched and prototyped a streamlined workflow that guides users step-by-step. Throughout the project, I iterated using feedback from usability tests, ensuring the solution remained intuitive.
      </p>
      <p className="text-gray-700 mb-4">
        <strong>Challenges & Solutions:</strong> One major challenge was conveying complex suspension setup data in a digestible way. 
        I tackled this by introducing clear visuals and personalized recommendations – for example, a color-coded sag meter and an interactive setup checklist. 
        Performance on mobile was another concern; I optimized assets and simplified interactions for quick load times even on the trail. 
        The redesign eliminated information overload and significantly reduced the time users needed to get tuning results.
      </p>
      <p className="text-gray-700 mb-4">
        <strong>Outcome:</strong> The revamped Trailhead app received positive feedback from the biking community. 
        User engagement increased, with riders reporting that they felt more confident tuning their suspension. 
        The project not only enhanced the user experience but also reinforced RockShox’s reputation for rider-centric innovation.
      </p>
      {/* Links to other projects */}
      <div className="mt-8 pt-4 border-t border-gray-200 text-sm text-gray-600">
        <p className="mb-2">Other Projects:</p>
        <ul className="flex flex-wrap gap-4">
          <li><Link to="/projects/flight-attendant" className="hover:underline">Flight Attendant – SRAM AXS App</Link></li>
          <li><Link to="/projects/sram-site" className="hover:underline">SRAM.com Website Overhaul</Link></li>
          <li><Link to="/projects/axs-overhaul" className="hover:underline">AXS App Architecture Overhaul</Link></li>
        </ul>
      </div>
    </motion.main>
  );
}
