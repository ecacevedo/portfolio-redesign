import React from 'react'
import DotNav from "../components/DotNav"

export default function TrailheadCaseStudy() {
  return (
    <>
      <DotNav />
      <main className="bg-[#000007] text-gray-100 max-w-3xl mx-auto px-6 py-20 text-base leading-relaxed">
        <h1 className="text-4xl font-bold mb-6 text-white">
          Trailhead 2.0: Rebuilding Trust in Suspension Tuning
        </h1>

        <blockquote className="italic text-lg border-l-4 border-gray-500 pl-4 text-gray-300 mb-12">
          “I used to leave it at factory settings. Now I tune before every ride.”
        </blockquote>

        <section className="mb-12">
          <ul className="text-sm space-y-1 text-gray-400">
            <li><strong className="text-white">Role:</strong> Lead Product Designer</li>
            <li><strong className="text-white">Team:</strong> 1 PM, 5 engineers, QA, RockShox marketing and support</li>
            <li><strong className="text-white">Timeline:</strong> 6 months, iOS and Android</li>
            <li><strong className="text-white">Platform:</strong> RockShox Trailhead app</li>
            <li><strong className="text-white">Launch Impact:</strong> 100,000+ new users in 3 months, App Store rating jumped from 2.0 to 4.7, tuning sessions up 60%, support tickets down</li>
          </ul>
        </section>

        <section className="space-y-10">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">The Problem Riders Faced</h2>
            <p>Trailhead 1.0 was a leftover experience. It looked like a dated web wrapper, riddled with logic bugs, unclear flows, and a UI that didn’t scale. Users didn’t trust it. Shops stopped recommending it. What should have been a helpful tool had become invisible—and worse, irrelevant.</p>
            <ul className="list-disc pl-6 mt-4 space-y-1">
              <li>Navigation loops and dead ends</li>
              <li>Outdated visuals with poor legibility in sunlight</li>
              <li>No onboarding, no explanation of values or logic</li>
              <li>Backend was fragile, making iteration slow and risky</li>
            </ul>
            <div className="bg-gray-900 border border-gray-700 text-gray-400 text-sm px-4 py-2 italic mt-4">
              [Visual: Screenshot of Trailhead 1.0 showing the cluttered interface with dense data and no onboarding]
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">Reframing the Challenge</h2>
            <p>Early research revealed something deeper: riders weren’t ignoring tuning because they didn’t care—they just didn’t feel confident. “Suspension feels like a dark art,” one said. That insight reshaped the project. This wasn’t a feature gap. It was a trust gap.</p>
            <p className="mt-4">In interviews and shop visits, I kept hearing the same tension: people liked tech but didn’t want to mess up their setup. A mechanic told me, “Riders aren’t afraid of buttons, they’re afraid of making the ride worse.” That stuck with me. I reoriented the experience around support and clarity, not control.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">Designing a Better On-Ramp</h2>
            <p>I led a cross-functional push to rebuild Trailhead as a mobile-first companion that felt like a coach. Every screen had to earn trust, whether you were tuning for the first time or tweaking a race setup.</p>
            <ul className="list-disc pl-6 mt-4 space-y-1">
              <li><strong>Setup Wizard:</strong> Broke tuning into calm, guided steps with visual cues and prefilled defaults</li>
              <li><strong>Integrated Support:</strong> Added in-context help, videos, and copy co-written with support</li>
              <li><strong>Modern UI:</strong> Rebuilt layouts for clarity and outdoor readability</li>
              <li><strong>Ride History:</strong> Let users log and reflect on settings over time</li>
            </ul>
            <div className="bg-gray-900 border border-gray-700 text-gray-400 text-sm px-4 py-2 italic mt-4">
              [Visual: Side-by-side of the new wizard showing pressure suggestions and friendly tone]
            </div>
            <p className="mt-4">I worked closely with engineering to decouple brittle frontend logic and improve feedback loops between design and QA. We used iterative builds to test with internal SRAM riders, then rolled out broader in-person validation at bike shops.</p>
            <p className="mt-4">Our content team was critical. We rewrote every label and microcopy to shift tone from mechanical to intuitive. Instead of “Air Spring Compression: 92psi,” you’d see “We recommend 92psi based on your weight and bike model.” It helped users feel guided rather than graded.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">What Riders Said</h2>
            <p>We tested the new experience with 15 riders, most of whom had abandoned the old version. Feedback was immediate and positive. The word that kept coming up was “reassuring.”</p>
            <blockquote className="border-l-4 pl-4 italic text-gray-300 border-gray-500 mt-4">“I finally feel good handing this to a customer.”</blockquote>
            <blockquote className="border-l-4 pl-4 italic text-gray-300 border-gray-500 mt-2">“This is the first time I actually understand what my bike is doing.”</blockquote>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">Real-World Impact</h2>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Over 100,000 new users in the first 3 months post-launch</li>
              <li>App Store rating increased from 2.0 to 4.7</li>
              <li>60 percent increase in tuning sessions per user</li>
              <li>Significant reduction in support tickets related to setup confusion</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">Reflection</h2>
            <p>What I learned on Trailhead 2.0 has stayed with me: users don’t remember interfaces, they remember how they felt. Our job was to help riders shift from hesitation to habit. That emotional journey—from “I don’t touch that” to “I just tuned this morning”—was our true success metric.</p>
            <p className="mt-4">Looking ahead, I still see possibilities: predictive defaults based on past rides, seasonal tuning suggestions, and better connections with the rest of the AXS ecosystem. But the foundation we laid was solid, and it brought the product back to life in a way that mattered to real people on real trails.</p>
            <blockquote className="border-l-4 pl-4 italic text-gray-300 border-gray-500 mt-4">“We used to hear, ‘I don’t touch that.’ Now it’s ‘I just tuned this morning.’”</blockquote>
          </div>
        </section>
      </main>
    </>
  )
}
