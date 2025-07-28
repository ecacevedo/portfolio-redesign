import React from "react"


import lscImage from "../assets/lsc.png"
import overrideImage from "../assets/override.jpg"
import pedalImage from "../assets/pedal.png"
import automodeImage from "../assets/automode.png"

export default function FlightAttendantCaseStudy() {
  return (
    <>
      <main className="bg-[#000007] text-gray-100 max-w-3xl mx-auto px-6 py-24 text-base leading-relaxed prose prose-invert">
        <h1 className="text-4xl font-bold mb-10 tracking-tight text-white">
          Flight Attendant: Making Suspension Feel Human
        </h1>

        <section className="mb-8 text-sm space-y-2 text-gray-400">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 bg-gray-900 text-white p-4 rounded-xl shadow-md mb-8">
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

        <blockquote className="italic text-lg border-l-4 border-gray-500 pl-4 text-gray-300 mb-16 leading-loose">
          “I just want to know what my suspension is doing and trust it’s doing the right thing.”
        </blockquote>

        <section className="space-y-20">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-6 tracking-normal">The Problem</h2>
            <p>Flight Attendant is RockShox’s automatic suspension system. The hardware was far ahead, reactive, fast, deeply integrated. But the software didn’t keep pace. What should have felt alive often felt confusing.</p>
            <ul className="list-disc pl-6 mt-4 space-y-1">
              <li>Auto Mode gave no clear signal of what was happening</li>
              <li>Settings like LSC and Override felt buried and technical</li>
              <li>Adding a new Pedal sensor was a major pain point</li>
            </ul>
            <p className="mt-4">The ask wasn’t for more features. Riders wanted to understand the system they relied on. Our mission became clear. Make automation feel intuitive, readable, and human.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-6 tracking-normal">Before vs After</h2>
            <p>Before, Auto Mode felt like riding with a ghost. Riders didn’t know which mode was active, when it shifted, or why. It worked, but you couldn’t feel that it worked. Some ignored it. Others turned it off entirely.</p>
            <p className="mt-4">After, we gave the system a voice. The interface displayed current mode, system activity, and what was coming next. Riders could select which modes to include and see behavior unfold in real time. Auto Mode didn’t disappear, it became legible.</p>
            <div className="flex justify-center my-10">
              <img src={automodeImage} alt="Flight Attendant Auto Mode UI" className="rounded-xl w-2/5 max-w-sm" />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-6 tracking-normal">Design Moves That Mattered</h2>
            <p>We built toward clarity. Each pattern, label, and behavior had to make the ride feel understandable.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Visual Mode Indicators:</strong> We layered in iconography, subtle motion, and color cues. The system’s thinking became visible, not just functional.</li>
              <li><strong>Low-Speed Compression (LSC) Reframed:</strong> We moved it out of the depths of the settings and made it tangible. A simple stepper let riders make fine-tuned changes, with plain labels and real-time feedback that showed what each step did.</li>
              <li><strong>Override Preview:</strong> Previously, activating Override was a leap of faith. We added a preview flow so riders could see what would change before committing.</li>
            </ul>
            <div className="flex flex-col md:flex-row md:items-start md:gap-6 my-10">
              <img src={lscImage} alt="LSC Bias slider UI" className="rounded-xl w-full md:w-1/2 h-auto max-h-[320px] object-contain" />
              <img src={overrideImage} alt="Override preview UI" className="rounded-xl w-full md:w-1/2 h-auto max-h-[320px] object-contain" />
            </div>
            <p>We didn’t strip away complexity. We surfaced it with care. Advanced telemetry lived deeper in the flow, where it belonged. For most riders, the defaults just worked. For others, the door was open.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-6 tracking-normal">Cross-Team Decisions</h2>
            <p>Real-time systems don’t wait. I partnered closely with engineers to design animations and transitions that matched hardware constraints without dropping frames. We prototyped timing, movement, and fallback states.</p>
            <p className="mt-4">At the same time, I worked with support and QA to rethink the onboarding and diagnostic experience. The big win: surfacing battery, firmware, and connection states on the home screen. That cut setup-related tickets by nearly a third.</p>
            <div className="flex justify-center my-10">
              <img src={pedalImage} alt="Pedal sensor UI" className="rounded-xl w-full max-w-md" />
            </div>
            <p>We also introduced pedal sensor status for the first time. It’s essential for capturing cadence-based input and improving automatic mode response. Making it visible gave riders deeper confidence in what the system was responding to.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-6 tracking-normal">What Changed</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Support tickets dropped 30%, especially around setup confusion</li>
              <li>System interaction rose by 20% among active riders</li>
              <li>Positive feedback from riders, shop techs, and internal teams</li>
            </ul>
            <blockquote className="italic border-l-4 border-gray-500 pl-4 text-gray-300 mt-4">
              “Honestly, I used to leave everything on default. Now I feel like I know what’s happening and I can dial it in without stress.”
            </blockquote>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-6 tracking-normal">What I Took With Me</h2>
            <p>Trust isn’t built through features. It’s built through clarity. You don’t need to explain every behavior. But if the system feels quiet, reliable, and clear, riders will feel it. They’ll ride more. They’ll push harder. They’ll stop wondering if it’s working, and just ride.</p>
          </div>
        </section>
      </main>
    </>
  )
}
