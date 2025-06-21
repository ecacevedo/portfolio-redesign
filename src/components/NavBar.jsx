import React from "react"
import { NavLink } from "react-router-dom"

export default function Navbar() {
  const navItems = [

    { name: "Projects", path: "/projects" },


  ]

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#000007] z-50 border-b border-zinc-800">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center text-sm font-medium text-gray-400">
        <NavLink to="/" className="text-white text-base font-bold hover:text-gray-300">
          Estevan Acevedo
        </NavLink>

        <div className="flex space-x-6">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "text-white"
                  : "hover:text-gray-200 transition-colors"
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  )
}

