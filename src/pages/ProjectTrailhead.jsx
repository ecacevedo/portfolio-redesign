import React from "react"
import DotNav from "../components/DotNav"

import serialDrawing from "../assets/deskop-serial-with-drawings.png"
import modelCode from "../assets/Desktop Model Code.png"
import wizardUI from "../assets/Screenshot 2025-06-24 at 1.40.12 PM.png"
import mobilePDP from "../assets/Mobile PDP MVP1.png"
import desktopPDP from "../assets/Desktop PDP MVP.png"
import lyrikProduct from "../assets/image001.png"

export default function ProjectTrailhead() {
  return (
    <>
      <DotNav />
      <main className="bg-[#000007] text-gray-100 max-w-3xl mx-auto px-6 py-24 text-base leading-relaxed prose prose-invert">
        <h1 className="text-4xl font-bold mb-10 tracking-tight text-white">
          Trailhead 2.0: Rebuilding Trust in Suspension Tuning
        </h1>

        <section className="mb-8 text-sm space-y-2 text-gray-400">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2">
            <li><strong className="text-white">Role:</strong> Lead Product Designer</li>
            <li><strong className="text-white">Team:</strong> 1 PM, 2 engineers, RockShox marketing</li>
            <li><strong className="text-white">Timeline:</strong> 6 months, iOS and Android</li>
            <li><strong className="text-white">Live Version:</strong> <a href="https://trailhead.rockshox.com" className="underline">trailhead.rockshox.com</a></li>
            <li><strong className="text-white">Impact:</strong> 100,000+ new users, rating from 2.0 to 4.7, support tickets down</li>
          </ul>
        </section>

        <blockquote className="italic text-lg border-l-4 border-gray-500 pl-4 text-gray-300 mb-16 leading-loose">
          “I used to leave it at factory settings. Now I tune before every ride.”
        </blockquote>

        <section className="space-y-20">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-6 tracking-normal">Why We Had to Rebuild It</h2>
            <p>Trailhead wasn’t doing what it needed to. Riders opened it, then dropped off. Shops stopped pointing people to it. The interface didn’t help. The language didn’t guide. Confidence faded. People tuned by guessing or didn’t tune at all.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-6 tracking-normal">Getting Close to the Problem</h2>
            <p>I was new to mountain biking. That helped. I came in with questions, not assumptions. I went to Sea Otter, the biggest event in the country, and walked the booths with early designs in hand. Cyclists and shop techs gave feedback on the spot. Some rolled their bikes right up. I watched them tip frames sideways, scrape off dirt, and dig for serial numbers hidden under cables and grime.</p>

            <div className="flex justify-center my-10">
              <img src={serialDrawing} alt="Hand-drawn serial number diagram" className="rounded-xl w-full max-w-md" />
            </div>

            <p>Watching riders search for serial numbers taught me a lot. So I illustrated the fork, shock, and seat post, and added clear messaging. It came straight from testing. But not everyone had a clean serial number. Some were scratched. Others, gone entirely. So we added model code as another way in.</p>

            <div className="flex justify-center my-10">
              <img src={modelCode} alt="Backup entry via model code" className="rounded-xl w-full max-w-2xl" />
            </div>

            <p>We led with images. Not to decorate, but to orient. Riders needed to know where to look, what to touch, how to begin. That shift gave the experience shape and voice. It matched the brand’s tone, but more than that, it removed friction. What used to feel like a wall now felt like a way in.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-6 tracking-normal">Clarifying the Interface</h2>
            <p>The original detail page tried to do too much. We simplified the architecture. The path then unfolded through the structure. Users didn’t need to guess what information was available or scan irrelevant product details.</p>

            <div className="flex flex-col md:flex-row md:items-start md:gap-6 my-10">
       <img
    src={desktopPDP}
    alt="Desktop product detail page"
    className="rounded-xl w-full md:w-1/2 h-auto max-h-[480px] object-contain"
  />
  <img
    src={mobilePDP}
    alt="Mobile product detail page"
    className="rounded-xl w-full md:w-1/2 h-auto max-h-[480px] object-contain"
  />
            </div>

            <p>Instead of layering information, we led with action. What would make a rider feel confident in the next ten seconds? That’s what we built toward.</p>
         <br/>
            <p>That same principle shaped the tuning flow. We stripped it down to one question: your weight. From that, the app gave back pressure, rebound, and setup defaults. It didn’t require math or past experience. It just worked.</p>

            <div className="flex justify-center my-10">
              <img src={wizardUI} alt="Suggested tuning UI" className="rounded-xl w-full max-w-2xl" />
            </div>

            <p>The tuning UI turned uncertainty into action. Riders told us they finally felt like they could tune without second guessing.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-6 tracking-normal">What Changed</h2>
        

<ul className="list-disc pl-6 space-y-1">
  <li>100,000+ new users in the first 3 months</li>
  <li>App rating jumped from 2.0 to 4.7</li>
  <li>Support tickets for setup dropped sharply</li>
  <li>Riders reported higher confidence and repeat use</li>
            </ul>
                <div className="flex justify-center my-10">
              <img src={lyrikProduct} alt="Refreshed product visuals" className="rounded-xl w-full max-w-2xl" />
            </div>

<p className="mt-12 leading-loose text-gray-300">
  The numbers climbed. But what mattered more was this: riders returned. Not with questions, but with trust. They opened the app, got what they needed, and kept riding. Trailhead wasn’t a barrier anymore. It was part of the motion.
</p>






            
          </div>

     
        </section>
      </main>
    </>
  )
}
