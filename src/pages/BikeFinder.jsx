import React from 'react'
import DotNav from "../components/DotNav"

export default function CaseStudyBikeFinder() {
  return (
    <>
      <DotNav />
      <main className="bg-[#000007] text-gray-100 max-w-3xl mx-auto px-6 py-20 text-base leading-relaxed">
        <h1 className="text-4xl font-bold mb-6 text-white">Bike Finder 2.0: From Limitation to Launchpad</h1>

        <div className="bg-gray-900 text-white p-4 rounded-xl shadow-md mb-8">
          <p><strong>Role:</strong> Lead Product Designer</p>
          <p><strong>Timeline:</strong> 4 months</p>
          <p><strong>Results:</strong> 50x traffic increase, deep link adoption across marketing, reduced dev maintenance</p>
        </div>

        <p className="italic text-gray-400 mb-8">*Image: UI showing filters and SRAM bike cards in use*</p>

        <section className="mb-12">
          <p className="text-lg font-semibold mb-1 text-white">What We Built and Why It Mattered</p>
          <p className="text-gray-300">
            "I just want to see gravel bikes with Force AXS — why is that so hard?" That question kept showing up, and we didn’t have a good answer. The old Bike Finder couldn’t keep up. So we rebuilt it from the ground up.
          </p>
          <p className="mt-4 text-gray-300">
            We turned SRAM's Bike Finder from a brittle no code tool into a modular, coded platform. Riders got intuitive filters. Marketers got deep linking. Content teams got autonomy. Traffic scaled 50x during launches. The system is now flexible enough to grow with the brand.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-2">Who, What, and How Fast</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li><strong>Role:</strong> Lead Product Designer</li>
            <li><strong>Team:</strong> 1 PM, 5 Engineers, Brand and Content Stakeholders</li>
            <li><strong>Timeline:</strong> 4 months (concept to ship)</li>
            <li><strong>Platform:</strong> Web tool at <a href="https://bikefinder.sram.com" className="underline text-white">bikefinder.sram.com</a></li>
          </ul>

          <div className="mt-4">
            <p className="mb-1 text-white"><strong>Impact:</strong></p>
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              <li>Unified multiple product paths into one intuitive hub</li>
              <li>Enabled linkable filters for more powerful launch campaigns</li>
              <li>Reduced reliance on engineering for content and brand updates</li>
              <li>Built an extensible foundation for comparison tools and localization</li>
            </ul>
          </div>

          <p className="mt-4 italic text-gray-400">“This tool helped me find a bike with Rival AXS in minutes. Super intuitive.” — Rider feedback, Eagle Transmission launch</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-2">Why the Old Tool Was Holding Everyone Back</h2>
          <p className="text-gray-300">
            The original Bike Finder was duct taped together in a no code platform. It worked, barely. But it couldn’t scale. Filter logic had to be hard coded, deep linking wasn’t possible, and the user flow was fractured across MTB, UDH, and road bikes.
          </p>
          <p className="mt-4 text-gray-300">
            The tipping point came when our content team asked: "Can we just link to a page showing gravel bikes with Force AXS?" The answer was no. That’s when it became clear we needed to rebuild. Fast.
          </p>
          <div className="bg-gray-800 border-l-4 border-gray-500 px-4 py-2 my-6 italic text-gray-400">
            Before: Three separate pages, no deep linking<br />
            After: Unified UI with adaptive filtering and live URLs
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-2">How We Made It Fast, Flexible, and Human</h2>
          <p className="text-gray-300">
            We ditched the no code backend but kept Airtable as the data source. It gave content teams live control without engineering overhead. I designed a filter system that scaled cleanly across categories and rider intents.
          </p>
          <p className="mt-4 text-gray-300">
            We considered going full CMS. Too much weight. Airtable gave us just enough structure, just enough chaos, and the speed we needed.
          </p>

          <ul className="list-disc list-inside space-y-2 mt-4 text-gray-300">
            <li><strong>Deep Linking:</strong> Filter states create shareable URLs like <code className="bg-gray-700 text-white px-1">?brand=Specialized&amp;groupset=ForceAXS</code></li>
            <li><strong>Unified UX:</strong> We collapsed MTB and UDH flows into one clean UI</li>
            <li><strong>Smart Sorting:</strong> Brands can feature bikes without disrupting the user’s flow</li>
            <li><strong>Conversational Filters:</strong> Replaced jargon with friendly prompts like “Who makes your dream bike?”</li>
            <li><strong>Accessibility:</strong> Designed for keyboard nav and screen readers from the start</li>
          </ul>

          <p className="mt-4 italic text-gray-400">*Image: Deep link URL structure shown with selected filters*</p>
          <div className="bg-gray-800 border-l-4 border-gray-500 px-4 py-2 my-6 italic text-gray-400">
            Design principle: Show power without intimidation
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-2">What Riders Needed, and How We Knew</h2>
          <p className="text-gray-300">
            We ran surveys with over 100 riders and held deep dives with content creators. The takeaway was loud: if users couldn’t find a bike with the groupset they wanted in under a minute, they bounced.
          </p>
          <p className="mt-4 text-gray-300">
            We tested filter logic, labels, and sorting behavior internally every sprint. And we kept refining based on real-time product launch data.
          </p>
          <p className="mt-4 italic text-gray-400">“Now I can link straight to Rival AXS gravel builds. Game changer.” — SRAM Content Team</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-2">Translating Between Engineers and Marketers</h2>
          <p className="text-gray-300">
            My job was often that of translator. Prototypes lived in Figma, but the logic traveled by Loom and Slack. Engineers needed interaction patterns that were state-aware. Brand teams needed copy that was voice aligned and testable.
          </p>
          <p className="mt-4 text-gray-300">
            I worked closely with devs on URL serialization and filter behavior — everything from edge cases to how the back button should feel. We paired often and worked fast.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-2">The Wins That Proved It Worked</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li>Traffic jumped from 200 to 10,000+ daily visits during launches</li>
            <li>Deep links embedded across product pages and email campaigns</li>
            <li>Filter maintenance offloaded from devs to content editors</li>
            <li>Brand teams gained control without cluttering the user experience</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-2">What I’d Add If I Had One More Week</h2>
          <p className="text-gray-300">
            The system is designed to scale. We’re looking at comparisons, variant previews, and localization. If I could rewind, I’d add version control and rollback for content editors — a lightweight safety net with big payoff.
          </p>
          <div className="bg-gray-800 border-l-4 border-gray-500 px-4 py-2 my-6 italic text-gray-400">
            Future opportunity: lightweight versioning for content editors
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-2">What This Taught Me About Designing for Everyone</h2>
          <p className="text-gray-300">
            This wasn’t just about filters. It was about designing a shared space — one that helped riders find what they needed while letting marketers tell sharper stories. A tool that quietly does the heavy lifting for everyone.
          </p>
          <p className="mt-4 text-gray-300">
            I’m proud of the simplicity, but more proud of the adaptability. This system didn’t just meet today’s needs. It gave SRAM a framework to grow with.
          </p>
        </section>
      </main>
    </>
  )
}
