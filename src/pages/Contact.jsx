import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <motion.main
      className="pt-20 max-w-2xl mx-auto px-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Contact</h1>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        className="space-y-6"
      >
        <input type="hidden" name="form-name" value="contact" />

        <div>
          <label className="block text-gray-700 mb-1">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Message</label>
          <textarea
            name="message"
            rows="5"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          ></textarea>
        </div>

        <button
          type="submit"
          className="mt-4 px-6 py-2 bg-black text-white rounded hover:bg-gray-900 transition"
        >
          Send Message
        </button>
      </form>

      {/* LinkedIn CTA */}
      <div className="mt-10 text-center">
        <p className="text-gray-600 mb-3">Prefer networking?</p>
        <a
          href="https://www.linkedin.com/in/estevancacevedo"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-5 py-2.5 border border-gray-800 text-gray-800 rounded-full hover:bg-gray-900 hover:text-white transition"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8.98h5V24H0V8.98zM7.5 8.98h4.78v2.05h.07c.66-1.25 2.27-2.56 4.67-2.56 5 0 5.93 3.3 5.93 7.6V24h-5v-6.76c0-1.61-.03-3.7-2.26-3.7-2.27 0-2.62 1.77-2.62 3.6V24h-5V8.98z" />
          </svg>
          Connect on LinkedIn
        </a>
      </div>
    </motion.main>
  );
}
