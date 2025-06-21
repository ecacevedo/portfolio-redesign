import React from 'react'
import useScrollSpy from '../hooks/useScrollSpy'

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'projects', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' }
]

export default function DotNav() {
  const active = useScrollSpy(sections.map(s => s.id))

  const scrollToSection = id => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav className="fixed top-1/2 right-6 transform -translate-y-1/2 z-50 hidden md:flex flex-col items-center space-y-4">
      {sections.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => scrollToSection(id)}
          className="group relative w-3 h-3 focus:outline-none"
        >
          <span
            className={`block w-3 h-3 rounded-full transition-all ${
              active === id ? 'bg-white scale-125' : 'bg-gray-600'
            }`}
          />
          <span className="absolute right-6 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 text-xs text-gray-400 bg-zinc-900 px-2 py-1 rounded whitespace-nowrap transition-all">
            {label}
          </span>
        </button>
      ))}
    </nav>
  )
}
