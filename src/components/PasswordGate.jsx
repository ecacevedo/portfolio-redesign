import React, { useState, useEffect } from "react"

const PASSWORD = "design12!"   // change this

export default function PasswordGate({ children }) {
  const [unlocked, setUnlocked] = useState(false)
  const [input, setInput] = useState("")
  const [error, setError] = useState("")

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = window.localStorage.getItem("projectsUnlocked")
      if (stored === "true") {
        setUnlocked(true)
      }
    }
  }, [])

  function handleSubmit(event) {
    event.preventDefault()
    if (input === PASSWORD) {
      setUnlocked(true)
      if (typeof window !== "undefined") {
        window.localStorage.setItem("projectsUnlocked", "true")
      }
    } else {
      setError("Wrong password")
      setInput("")
    }
  }

  if (unlocked) {
    return children
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#000007] text-gray-100 px-4">
      <div className="w-full max-w-sm border border-gray-800 rounded-2xl p-6 bg-black/60 backdrop-blur">
        <h1 className="text-xl font-semibold mb-4 text-white">
          Projects are currently private
        </h1>
        <p className="text-sm text-gray-400 mb-6">
          Enter the password to view this case study.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            className="w-full rounded-lg bg-gray-900 border border-gray-700 px-3 py-2 text-sm outline-none focus:border-gray-300"
            value={input}
            onChange={(event) => {
              setInput(event.target.value)
              setError("")
            }}
            autoFocus
          />
          {error && (
            <p className="text-xs text-red-400">
              {error}
            </p>
          )}
          <button
            type="submit"
            className="w-full rounded-lg bg-white text-black text-sm font-medium py-2 hover:bg-gray-200 transition-colors"
          >
            Unlock projects
          </button>
        </form>
      </div>
    </div>
  )
}
