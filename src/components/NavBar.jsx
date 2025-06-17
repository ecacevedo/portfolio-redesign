import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="fixed top-0 w-full backdrop-blur bg-white/60 z-10 border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Site Title / Logo */}
        <Link to="/" className="text-xl font-bold text-gray-800 hover:text-gray-900">
          Estevan Acevedo
        </Link>
        {/* Navigation Links */}
        <div className="space-x-6 text-gray-700 text-lg">
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              isActive ? 'font-semibold text-gray-900' : 'hover:text-gray-900 transition-colors'
            }
          >
            About
          </NavLink>
          <NavLink 
            to="/projects" 
            className={({ isActive }) => 
              isActive ? 'font-semibold text-gray-900' : 'hover:text-gray-900 transition-colors'
            }
          >
            Projects
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
