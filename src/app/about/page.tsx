/* eslint-disable @next/next/no-img-element */

import type { Metadata } from "next";
import { SITE_URL } from "@/lib/seo";

const TITLE =
  "About Neolokam | Sustainable Carbon Capture Farm & Canine Wellness";
const DESCRIPTION =
  "Neolokam is an independently developed ecological initiative in Trivandrum focused on carbon capture, tropical fruit cultivation, and ethical animal welfare.";
const KEYWORDS = [
  "Sustainable dog park",
  "carbon capture farm Kerala",
  "indigenous plant conservation",
  "ethical animal care Trivandrum",
];

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: KEYWORDS,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/about`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  alternates: { canonical: `${SITE_URL}/about` },
};

export default function AboutPage() {
  return (
    <div className="bg-forest-overlay min-h-screen">
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 pt-20 pb-12">
        {/* ========== Section 1: NEOLOKAM TRIVANDRUM DOG PARK ========== */}
        <section className="mb-12 sm:mb-20 text-center">
          <div className="relative inline-block px-4 py-6 sm:px-10 sm:py-8 md:px-14 md:py-10 bg-wood-brown border-4 md:border-8 border-[#5d2e0a] rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.3)] transform -rotate-1">
            <div className="absolute -top-4 left-1/4 w-2 h-8 bg-slate-400 rounded-full" />
            <div className="absolute -top-4 right-1/4 w-2 h-8 bg-slate-400 rounded-full" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-poster-yellow drop-shadow-lg uppercase tracking-tighter mb-2">
              NEOLOKAM TRIVANDRUM DOG PARK
            </h1>
            <p className="text-paper-cream font-bold text-lg sm:text-xl mb-4">
              1 ACRE TROPICAL FRUIT FARM • VILLAGE ATMOSPHERE
            </p>
            <div className="bg-poster-blue text-white py-2 px-6 inline-block font-black text-xl mb-4 transform skew-x-[-10deg]">
              DOG PARK &amp; STAYCATION
            </div>
            <p className="text-paper-cream font-bold">
              Contact:{" "}
              <span className="underline text-poster-yellow">7736390719</span>
            </p>
          </div>

          {/* Services Offered - 5 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 mt-10 sm:mt-14 max-w-6xl mx-auto">
            {[
              { icon: "pets", label: "Dog Boarding", sub: "Dog in a house" },
              { icon: "yard", label: "Farm Stay", sub: "Barn / Farmhouse" },
              { icon: "content_cut", label: "Grooming", sub: "Scissors" },
              {
                icon: "sports_martial_arts",
                label: "Off-Leash Play",
                sub: "Two dogs playing",
              },
              {
                icon: "cake",
                label: "Dog Birthdays",
                sub: "Cake & paw in heart",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-paper-cream border-2 sm:border-4 border-[#5d2e0a] rounded-lg p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <span className="material-symbols-outlined text-5xl text-poster-blue block mb-2">
                  {item.icon}
                </span>
                <h3 className="font-black text-slate-800 uppercase text-lg">
                  {item.label}
                </h3>
                <p className="text-base text-slate-600 italic">{item.sub}</p>
              </div>
            ))}
          </div>

          {/* Key Features strip */}
          <div className="mt-8 sm:mt-12 bg-[#a0522d] p-1 border-2 sm:border-4 border-[#5d2e0a] rounded-sm max-w-5xl mx-auto">
            <div className="bg-paper-cream p-4 sm:p-6 border-2 sm:border-4 border-[#5d2e0a] flex flex-wrap justify-center gap-4 sm:gap-6 text-center">
              <p className="font-black text-slate-800 uppercase">
                Off-Leash &amp; Cage Free Fun For Your Pets
              </p>
              <p className="font-black text-slate-800 uppercase">
                Vacation &amp; Night Outs For Dogs
              </p>
              <p className="font-black text-neolokam-green uppercase">
                Zero Pollution • Sustainable
              </p>
              <p className="font-black text-poster-red uppercase">
                Carbon Capture
              </p>
              <p className="font-black text-slate-800">
                Contact:{" "}
                <span className="underline text-poster-blue">7736390719</span>
              </p>
            </div>
          </div>
        </section>

        {/* ========== Section 2: The Initiative & Vision ========== */}
        <section className="mb-12 sm:mb-20">
          <div className="bg-[#a0522d] p-1 border-2 sm:border-4 border-[#5d2e0a] shadow-2xl rounded-sm">
            <div className="bg-paper-cream p-6 sm:p-8 lg:p-12 border-2 sm:border-4 border-[#5d2e0a]">
              <div className="text-center mb-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-poster-red uppercase tracking-tight mb-2">
                  NEOLOKAM
                </h2>
                <p className="text-base sm:text-lg md:text-xl font-bold text-slate-700 mb-2">
                  Agro • Animal Care • Wellness • Sustainability
                </p>
                <p className="text-lg text-slate-600 italic">
                  An Independently Developed, Future-Ready Ecological Initiative
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                <div>
                  <h3 className="text-poster-blue font-black text-lg uppercase border-b-2 border-poster-blue pb-2 mb-4">
                    About the Initiative
                  </h3>
                  <ul className="space-y-2 text-slate-800">
                    <li className="flex items-start gap-2">
                      <span className="text-neolokam-green mt-0.5">•</span>
                      Sustainable Tropical Fruit Cultivation
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-neolokam-green mt-0.5">•</span>
                      Indigenous Plant Conservation
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-neolokam-green mt-0.5">•</span>
                      Ethical Animal Care &amp; Dog Wellness
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-neolokam-green mt-0.5">•</span>
                      Nature-Based Retreat &amp; Learning
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-neolokam-green mt-0.5">•</span>
                      Focused on Environmental Responsibility &amp; Carbon
                      Capture
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-poster-blue font-black text-lg uppercase border-b-2 border-poster-blue pb-2 mb-4">
                    Vision &amp; Environmental Focus
                  </h3>
                  <ul className="space-y-2 text-slate-800">
                    <li className="flex items-start gap-2">
                      <span className="text-neolokam-green mt-0.5">•</span>
                      Carbon Capture &amp; Native Planting
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-neolokam-green mt-0.5">•</span>
                      Climate-Resilient Land Use
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-neolokam-green mt-0.5">•</span>
                      Biodiversity Preservation
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-neolokam-green mt-0.5">•</span>
                      Eco-Friendly Practices &amp; Community Awareness
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-neolokam-green mt-0.5">•</span>
                      Working in Harmony with Local Self-Governing Institutions
                    </li>
                  </ul>
                </div>
                <div className="md:col-span-2 lg:col-span-1 space-y-6">
                  <div>
                    <h3 className="text-poster-blue font-black text-lg uppercase border-b-2 border-poster-blue pb-2 mb-4">
                      Governance &amp; Collaboration
                    </h3>
                    <ul className="space-y-2 text-slate-800">
                      <li className="flex items-start gap-2">
                        <span className="text-neolokam-green mt-0.5">•</span>
                        Open to Guidance &amp; Cooperation
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-neolokam-green mt-0.5">•</span>
                        Registrations &amp; Compliance
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-neolokam-green mt-0.5">•</span>
                        Operational Clarity
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-neolokam-green mt-0.5">•</span>
                        Sustainable Development Alignment
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-poster-blue font-black text-lg uppercase border-b-2 border-poster-blue pb-2 mb-4">
                      Purpose
                    </h3>
                    <ul className="space-y-2 text-slate-800">
                      <li className="flex items-start gap-2">
                        <span className="text-neolokam-green mt-0.5">•</span>
                        Environmental Stewardship
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-neolokam-green mt-0.5">•</span>
                        Ethical Animal Welfare
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-neolokam-green mt-0.5">•</span>
                        Sustainable Livelihoods
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-neolokam-green mt-0.5">•</span>
                        Community Well-Being
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-neolokam-green mt-0.5">•</span>
                        Long-Term Ecological Resilience
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== Section 3: Home Grooming Services ========== */}
        <section className="mb-12 sm:mb-20">
          <div className="bg-poster-red text-white py-3 sm:py-4 px-4 sm:px-6 rounded-t-lg text-center shadow-lg">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-tight">
              NEOLOKAM Dog Park, Boarding &amp; Grooming
            </h2>
          </div>
          <div className="bg-paper-cream border-2 sm:border-4 border-[#5d2e0a] border-t-0 p-6 sm:p-8 lg:p-12 rounded-b-lg shadow-xl">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-poster-red mb-2 text-center">
              HOME GROOMING FOR DOGS – Yes. At YOUR home.
            </h3>
            <p className="text-center text-slate-600 italic text-lg mb-2">
              (Because your dog deserves better than your bathroom.)
            </p>
            <p className="text-center font-black text-2xl text-neolokam-green mb-8">
              Starting at 1500/-{" "}
              <span className="text-slate-600 font-normal text-lg">
                (Cheaper than replacing your sofa.)
              </span>
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {[
                "Nail cutting (without screaming...)",
                "Ear cleaning (bye-bye mystery smell)",
                "Hygiene cut (important areas, you know)",
                "Paw trimming (no more floor scratches)",
                "Combing (goodbye tumbleweeds of fur)",
                "Bathing & drying (Instagram-ready finish)",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 bg-white border-2 border-poster-yellow/50 rounded-lg p-3"
                >
                  <span className="material-symbols-outlined text-poster-blue">
                    check_circle
                  </span>
                  <span className="font-bold text-slate-800">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-center font-black text-xl text-slate-800 mb-2">
              Suitable for ALL DOGS: Small. Big. Moody. Dramatic. Judgemental.
            </p>
            <p className="text-center text-poster-red font-black text-2xl mb-2">
              Call / WhatsApp Now!{" "}
              <a href="tel:7736390719" className="underline">
                7736390719
              </a>
            </p>
            <p className="text-center text-slate-600 italic">
              Book now before your dog starts smelling like wet regret.
            </p>
          </div>
        </section>

        {/* ========== Section 4: Guidelines for Staycation & Park Usage ========== */}
        <section className="mb-12 sm:mb-20">
          <div className="bg-[#a0522d] p-1 border-2 sm:border-4 border-[#5d2e0a] shadow-2xl rounded-sm max-w-5xl mx-auto">
            <div className="bg-paper-cream p-4 sm:p-6 md:p-8 border-2 sm:border-4 border-[#5d2e0a] relative">
              <div className="absolute top-0 left-0 w-full h-2 bg-black/10" />
              <div className="bg-poster-red text-white py-3 px-4 sm:px-6 -mx-4 sm:-mx-10 mb-6 sm:mb-8 transform -rotate-1 text-center shadow-lg">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-widest">
                  Neolokam DOG PARK &amp; STAYCATION
                </h2>
                <p className="text-poster-yellow font-bold mt-1">
                  Visiting Time: 6AM - 9AM | Contact: 7736390719
                </p>
              </div>
              <div className="space-y-6">
                {[
                  "Rabies & Vaccination Required!",
                  "Collar Up, No Harness Hokey Pokey!",
                  "Bring Poop Scooper & Poop Bags",
                  "Tough Leash Only - No Wimpy Strings!",
                  "Healthy & Disease-Free Dogs",
                  "Ticked Off? Use Tick Protection!",
                ].map((text, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 border-b-2 border-dotted border-slate-300 pb-4 last:border-0"
                  >
                    <span className="text-poster-blue material-symbols-outlined font-black">
                      check_circle
                    </span>
                    <p className="font-black text-base sm:text-lg md:text-xl text-slate-800 uppercase">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-8 bg-poster-yellow/20 p-4 border-2 border-poster-yellow rounded text-center">
                <p className="font-black text-slate-800">
                  Honesty Alert! Be Clear About Your Dog&apos;s Behavior &amp;
                  History!
                </p>
                <p className="text-slate-600 mt-2">
                  Categories: Angel (halo), Devil?, Drama Queen?
                </p>
              </div>
              <div className="mt-4 bg-paper-cream p-4 border-2 border-slate-300 rounded text-center">
                <p className="font-bold text-slate-800">
                  No Bowls, No Toys, No Pajamas - Just Your Dog &amp; Good
                  Vibes!
                </p>
              </div>
              <div className="mt-4 bg-poster-red/10 border-2 border-poster-red rounded p-3 text-center">
                <p className="font-black text-poster-red uppercase">
                  Break the Rules, Expect the &quot;Ruff&quot; Consequences!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Temperament selector - keep existing */}
        <section className="bg-[#fffdf0] p-4 sm:p-6 rounded-2xl sm:rounded-3xl border-2 sm:border-4 border-poster-yellow shadow-xl mb-12 sm:mb-16 max-w-4xl mx-auto relative">
          <div className="bg-poster-red text-white py-2 px-4 sm:px-6 rounded-full w-fit mx-auto -mt-10 sm:-mt-12 mb-6 sm:mb-8 shadow-lg">
            <h3 className="text-lg sm:text-xl md:text-2xl font-black text-center">
              Honesty Alert! Be Clear About Your Dog&apos;s Behavior
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-center">
            <div className="group cursor-pointer hover:scale-105 transition-transform">
              <div className="relative inline-block mb-2">
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-poster-yellow text-slate-900 px-3 py-1 rounded-full font-bold text-sm">
                  Angel?
                </span>
                <div className="w-28 h-28 sm:w-40 sm:h-40 bg-white rounded-full border-4 border-poster-yellow overflow-hidden mx-auto flex items-center justify-center">
                  <p className="p-2 text-xs sm:text-sm italic">
                    Friendly &amp; Calm
                  </p>
                </div>
              </div>
              <p className="font-black text-base sm:text-xl text-slate-800">
                The Saint
              </p>
            </div>
            <div className="group cursor-pointer hover:scale-105 transition-transform">
              <div className="relative inline-block mb-2">
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-poster-red text-white px-3 py-1 rounded-full font-bold text-sm">
                  Devil?
                </span>
                <div className="w-28 h-28 sm:w-40 sm:h-40 bg-white rounded-full border-4 border-poster-red overflow-hidden mx-auto flex items-center justify-center">
                  <p className="p-2 text-xs sm:text-sm italic">
                    High Energy/Sassy
                  </p>
                </div>
              </div>
              <p className="font-black text-base sm:text-xl text-slate-800">
                The Fireball
              </p>
            </div>
            <div className="group cursor-pointer hover:scale-105 transition-transform">
              <div className="relative inline-block mb-2">
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-poster-blue text-white px-3 py-1 rounded-full font-bold text-sm">
                  Drama Queen?
                </span>
                <div className="w-28 h-28 sm:w-40 sm:h-40 bg-white rounded-full border-4 border-poster-blue overflow-hidden mx-auto flex items-center justify-center">
                  <p className="p-2 text-xs sm:text-sm italic">
                    Sensitive Soul
                  </p>
                </div>
              </div>
              <p className="font-black text-base sm:text-xl text-slate-800">
                The Star
              </p>
            </div>
          </div>
        </section>

        {/* ========== Section 5: Benefits & Activities ========== */}
        <section className="mb-12 sm:mb-20">
          <div className="bg-poster-blue text-white py-4 sm:py-6 px-4 sm:px-8 rounded-t-lg text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight mb-2">
              WHY YOUR DOG NEEDS NEOLOKAM IN THEIR LIFE!
            </h2>
            <p className="text-poster-yellow font-bold text-xl">
              NEOLOKAM DOG PARK &amp; STAYCATION – THE ULTIMATE CANINE RESORT!
            </p>
          </div>
          <div className="bg-paper-cream border-2 sm:border-4 border-[#5d2e0a] border-t-0 p-6 sm:p-8 lg:p-12 rounded-b-lg shadow-xl">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
              {[
                { title: "Socialisation Training", tag: "Let's Paw-ty!" },
                { title: "Leash Walking Training", tag: "" },
                { title: "Swimming", tag: "Paw-sitively refreshing!" },
                { title: "Food Aggression Prevention", tag: "" },
                {
                  title: "Character & Confidence Building",
                  tag: "From Timid to Top Dog!",
                },
                { title: "Fitness", tag: "From Fluff to Buff!" },
                { title: "Stress & Anxiety Reduction", tag: "" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3 bg-white border-2 border-poster-blue/30 rounded-lg p-4"
                >
                  <span className="material-symbols-outlined text-poster-blue text-3xl">
                    pets
                  </span>
                  <div>
                    <h4 className="font-black text-slate-800 uppercase">
                      {item.title}
                    </h4>
                    {item.tag && (
                      <p className="text-slate-600 italic text-base">
                        {item.tag}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-poster-yellow text-slate-900 py-4 sm:py-6 px-4 sm:px-8 rounded-lg text-center border-2 sm:border-4 border-[#5d2e0a]">
              <p className="text-xl sm:text-2xl lg:text-3xl font-black uppercase mb-2">
                WHERE EVERY DOG HAS A HOWLING GOOD TIME!
              </p>
              <p className="text-xl font-bold">
                SWIMMING • TRAINING • FITNESS • FUN!
              </p>
            </div>
          </div>
        </section>

        {/* We Beg You Section */}
        <section className="grid md:grid-cols-2 gap-0 bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 sm:border-4 border-slate-900 max-w-5xl mx-auto mb-12 sm:mb-16">
          <div className="p-6 sm:p-8 space-y-4 sm:space-y-6 flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-poster-red leading-none">
              WE BEG YOU!
            </h2>
            <p className="text-xl font-semibold text-slate-600 italic">
              Pretty please, with puppy dog eyes...
            </p>
            <div className="space-y-4 text-lg">
              <p className="bg-poster-yellow/20 p-2 border-l-4 border-poster-yellow">
                <strong>VISIT US</strong> with your dog before boarding!
              </p>
              <ul className="list-disc list-inside space-y-2 font-bold text-slate-800">
                <li>Let your dog think it&apos;s their idea.</li>
                <li>Sniff around, make sure we don&apos;t smell weird.</li>
                <li>
                  Meet our staff, so we&apos;re not &quot;Stranger Danger.&quot;
                </li>
                <li>See if your dog fits in (No pawful surprises!)</li>
              </ul>
            </div>
          </div>
          <div className="bg-slate-900 relative min-h-[240px]">
            <img
              alt="Puppy Eyes"
              className="w-full h-full object-cover opacity-90 min-h-[240px]"
              src="/images/about-puppy-eyes.jpg"
            />
            <div className="absolute bottom-4 right-4 bg-poster-yellow text-slate-900 p-2 font-bold rotate-3 shadow-lg">
              Don&apos;t just drop &amp; go!
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
