import React from 'react'
import DotNav from "../components/DotNav"

export default function FlightAttendantCaseStudy() {
  return (
    <>
      <DotNav />
      <main className="bg-[#000007] text-gray-100 max-w-3xl mx-auto px-6 py-20 text-base leading-relaxed">
        <h1 className="text-4xl font-bold mb-6 text-white">
          Flight Attendant: Making Suspension Feel Human
        </h1>

        <blockquote className="italic text-lg border-l-4 border-gray-500 pl-4 text-gray-300 mb-12">
          “I just want to know what my suspension is doing — and trust it’s doing the right thing.”
        </blockquote>

        <section className="mb-12">
          <ul className="text-sm space-y-1 text-gray-400">
            <li><strong className="text-white">Role:</strong> Lead Product Designer</li>
            <li><strong className="text-white">Team:</strong> 1 PM, 4 engineers, QA, RockShox hardware team, marketing, support</li>
            <li><strong className="text-white">Timeline:</strong> 5 months (design, validation, and testing for iOS and Android)</li>
            <li><strong className="text-white">Impact:</strong>
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>30% reduction in support tickets related to setup</li>
                <li>20% increase in engagement among FA-equipped riders</li>
                <li>Expanded compatibility to over 10 new models</li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-2">The Problem</h2>
          <p>Flight Attendant is RockShox’s automatic suspension system that adapts in real time to rider inputs and terrain. The hardware was cutting-edge. But the software experience lagged behind.</p>
          <ul className="list-disc pl-6 mt-4 space-y-1">
            <li>Unclear mode feedback led to second-guessing</li>
            <li>Settings like Bias and Override felt intimidating and opaque</li>
            <li>Battery and system status were too hidden or hard to find</li>
          </ul>
          <p className="mt-4">Riders weren’t asking for more features. They wanted clarity. That shaped our mission: make a technical system feel intuitive, responsive, and calm.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-2">Before vs After</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Before:</strong> A black box of automation, buried settings, rising support frustration</li>
            <li><strong>After:</strong> Clear visual feedback, plain-language controls, real-time confidence</li>
          </ul>
          <p className="italic text-sm text-gray-400 mt-2">*Image: Rider viewing new FA status UI trailside*</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-2">Design Moves That Mattered</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Visual Mode Indicators:</strong> Iconography, subtle motion, and color cues reinforced what the system was doing — no guesswork.</li>
            <li><strong>Plain-Language Bias Slider:</strong> We reframed the numerical input into a tactile slider labeled “Comfort to Efficiency” to shift focus from numbers to feel.</li>
            <li><strong>Override Preview:</strong> Created a real-time flow that let riders preview the effect of a manual override before committing.</li>
          </ul>
          <p className="mt-4">We leaned into progressive disclosure: power users could access advanced telemetry, but newer riders weren’t overwhelmed.</p>
          <p className="italic text-sm text-gray-400 mt-2">*Image: New Bias slider labeled 'Comfort — Balanced — Efficiency' with live feedback*</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-2">Cross-Team Decisions</h2>
          <p>I partnered with engineering to prototype UI states and animations that respected our real-time system constraints. In parallel, I collaborated with support and QA to rewrite in-app help content and simplify key flows.</p>
          <p className="mt-4">One high-leverage fix: we surfaced battery status and system connection on the default screen. That single change cut down “is it working?” tickets almost overnight.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-2">What Changed</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Support tickets dropped 30%, especially around setup confusion</li>
            <li>System interaction rose by 20% among active riders</li>
            <li>Positive feedback from riders, shop techs, and internal teams</li>
          </ul>
          <blockquote className="italic border-l-4 border-gray-500 pl-4 text-gray-300 mt-4">
            “Honestly, I used to leave everything on default. Now I feel like I know what’s happening — and I can dial it in without stress.”
          </blockquote>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-2">Looking Ahead</h2>
          <p>Flight Attendant now feels less like a black box and more like a partner. With another sprint or two, I’d explore low-energy battery alerts, ambient system status on wearables, and voice-assisted setup for first-time users.</p>
          <p className="italic text-sm text-gray-400 mt-2">*Future idea: WatchOS widget with real-time suspension status*</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-2">What I Took With Me</h2>
          <p>Designing for trust isn’t about hiding complexity — it’s about making complexity feel understandable. Clarity builds confidence. When riders feel seen and supported, they engage more. They explore. And they ride better.</p>
          <blockquote className="italic border-l-4 border-gray-500 pl-4 text-gray-300 mt-4">
            “Tech should feel like a partner, not a puzzle.”
          </blockquote>
        </section>
      </main>
    </>
  )
}
