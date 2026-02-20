/* eslint-disable @next/next/no-img-element */

import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedCard from "@/components/AnimatedCard";
import { SITE_URL } from "@/lib/seo";

const TITLE = "Neolokam | Cage-Free Dog Boarding & 1.5 Acre Park in Trivandrum";
const DESCRIPTION =
  "Experience a real dog vacation at Neolokam. We offer cage-free boarding, swimming, and nature walks on a sustainable 1.5-acre tropical fruit farm. No cages, just good vibes.";
const KEYWORDS = [
  "Dog boarding Trivandrum",
  "cage-free dog park",
  "pet resort Kerala",
  "Neolokam dog staycation",
];

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: KEYWORDS,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  alternates: { canonical: SITE_URL },
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden border-b-4 md:border-b-8 border-wood">
        <div className="absolute inset-0">
          <img
            alt="Neolokam Tropical Paradise"
            className="w-full h-full object-cover"
            src="/images/hero-tropical.jpg"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest/40 via-transparent to-forest/60"></div>
        </div>
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl">
          <div className="bg-forest/70 backdrop-blur-md p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl border-2 border-primary/30 shadow-2xl">
            <div className="inline-block px-4 py-1 bg-primary/20 border border-primary/30 rounded-full text-primary font-bold mb-6 tracking-widest text-xs uppercase">
              EST. 2024 • THE CANINE PARADISE
            </div>
            <h1 className="text-5xl md:text-7xl font-[800] text-white mb-6 leading-[1.1]">
              Neolokam: The Ultimate{" "}
              <span className="text-primary italic font-serif">
                Canine Resort
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              A 1.5 Acre Pet Paradise where nature meets luxury. Immerse your
              companion in a curated village atmosphere designed for the modern
              superstar.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button className="min-h-[48px] bg-primary text-forest px-6 sm:px-10 py-3 sm:py-4 rounded-xl font-[800] text-base sm:text-lg flex items-center justify-center gap-2 hover:bg-white transition-all shadow-xl">
                <span className="material-symbols-outlined">explore</span>
                EXPLORE THE VILLAGE
              </button>
              <button className="min-h-[48px] bg-white/10 backdrop-blur-md border border-white/30 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-xl font-[800] text-base sm:text-lg flex items-center justify-center hover:bg-white/20 transition-all">
                WATCH TOUR
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* NEOLOKAM Initiative Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-background-light">
        <header className="py-8 sm:py-12 px-4 flex flex-col items-center text-center">
          <div className="mb-6">
            <div className="flex justify-center mb-2">
              <svg
                className="w-12 h-12 sm:w-16 sm:h-16 text-neolokam-green"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z" />
              </svg>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-widest text-neolokam-green uppercase">
              NEOLOKAM
            </h2>
            <p className="text-base sm:text-lg md:text-xl font-medium tracking-tight mt-2 text-neolokam-green">
              Agro • Animal Care • Wellness • Sustainability
            </p>
          </div>
          <div className="brush-stroke-green px-8 py-3 max-w-2xl mx-auto shadow-lg">
            <p className="text-lg md:text-xl font-semibold italic text-white">
              An Independently Developed, Future-Ready Ecological Initiative
            </p>
          </div>
        </header>
      </section>

      {/* Services Grid */}
      <AnimatedSection
        id="services"
        className="py-16 sm:py-24 px-4 sm:px-6 paper-texture"
        delay={0.1}
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 sm:mb-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-[800] text-forest mb-4">
              Village Services
            </h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Boarding */}
            <AnimatedCard
              delay={0}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg border-2 border-forest/5 p-2"
            >
              <div className="aspect-square rounded-xl overflow-hidden mb-6 relative">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  alt="Cage-free canine boarding illustration"
                  src="/images/home-boarding.jpg"
                />
                <div className="absolute top-4 left-4 bg-forest text-primary p-2 rounded-lg">
                  <span className="material-symbols-outlined">home</span>
                </div>
              </div>
              <div className="px-4 pb-6">
                <h3 className="text-xl font-bold text-forest mb-2">
                  Boarding (Cage-free)
                </h3>
                <p className="text-slate-600 text-base leading-relaxed">
                  Village-style living where every dog enjoys freedom in a safe,
                  monitored rustic environment.
                </p>
              </div>
            </AnimatedCard>

            {/* Swimming */}
            <AnimatedCard
              delay={0.08}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg border-2 border-forest/5 p-2"
            >
              <div className="aspect-square rounded-xl overflow-hidden mb-6 relative">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  alt="Dog swimming in mineral pool illustration"
                  src="/images/home-swimming.jpg"
                />
                <div className="absolute top-4 left-4 bg-forest text-primary p-2 rounded-lg">
                  <span className="material-symbols-outlined">pool</span>
                </div>
              </div>
              <div className="px-4 pb-6">
                <h3 className="text-xl font-bold text-forest mb-2">Swimming</h3>
                <p className="text-slate-600 text-base leading-relaxed">
                  Paw-sitively refreshing mineral pools designed for joint
                  health and pure aquatic joy.
                </p>
              </div>
            </AnimatedCard>

            {/* Training */}
            <AnimatedCard
              delay={0.16}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg border-2 border-forest/5 p-2"
            >
              <div className="aspect-square rounded-xl overflow-hidden mb-6 relative">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  alt="Professional canine training session illustration"
                  src="/images/home-training.jpg"
                />
                <div className="absolute top-4 left-4 bg-forest text-primary p-2 rounded-lg">
                  <span className="material-symbols-outlined">school</span>
                </div>
              </div>
              <div className="px-4 pb-6">
                <h3 className="text-xl font-bold text-forest mb-2">Training</h3>
                <p className="text-slate-600 text-base leading-relaxed">
                  Character building for the modern canine. Positive
                  reinforcement meets village wisdom.
                </p>
              </div>
            </AnimatedCard>

            {/* Grooming */}
            <Link href="/grooming" className="block h-full">
              <AnimatedCard
                delay={0.24}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg border-2 border-forest/5 p-2 h-full hover:border-primary/30 transition-colors"
              >
                <div className="aspect-square rounded-xl overflow-hidden mb-6 relative">
                  <img
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    alt="Premium canine grooming styling illustration"
                    src="/images/home-grooming.jpg"
                  />
                  <div className="absolute top-4 left-4 bg-forest text-primary p-2 rounded-lg">
                    <span className="material-symbols-outlined">
                      content_cut
                    </span>
                  </div>
                </div>
                <div className="px-4 pb-6">
                  <h3 className="text-xl font-bold text-forest mb-2">
                    Home Grooming
                  </h3>
                  <p className="text-slate-600 text-base leading-relaxed">
                    Instagram-ready styling delivered at your doorstep or in our
                    luxury salon huts.
                  </p>
                </div>
              </AnimatedCard>
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Reality Check Banner */}
      <AnimatedSection
        className="bg-forest py-12 sm:py-20 px-4 sm:px-6 relative overflow-hidden"
        delay={0.15}
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="max-w-5xl mx-auto relative z-10 border-2 border-primary/20 p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl bg-forest/50 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="text-primary flex-shrink-0">
              <span className="material-symbols-outlined text-[60px] md:text-[120px] opacity-80">
                warning
              </span>
            </div>
            <div>
              <h2 className="text-primary font-bold tracking-widest text-sm mb-4 uppercase">
                The Neolokam Manifesto
              </h2>
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-[800] text-white mb-6 leading-tight">
                Your dog is a{" "}
                <span className="text-primary underline decoration-wood decoration-4 underline-offset-8">
                  living superstar
                </span>
                , not a suitcase.
              </h3>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                We reject the clinical, storage-unit approach to pet care. At
                Neolokam, we demand a partnership. We handle the luxury, you
                handle the responsibility. No shortcuts, no cages, just pure
                village living.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-white/80">
                  <span className="material-symbols-outlined text-primary">
                    check_circle
                  </span>
                  <span>Mandatory Health Clearance</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <span className="material-symbols-outlined text-primary">
                    check_circle
                  </span>
                  <span>Transparent Parent Policy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Membership Section */}
      <AnimatedSection
        id="membership"
        className="py-16 sm:py-24 px-4 sm:px-6 bg-background-light"
        delay={0.1}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <span className="text-forest/60 font-bold uppercase tracking-widest text-sm">
              Join the Elite
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-[800] text-forest mt-2 mb-4">
              Exclusive Village Memberships
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto text-base">
              Select a tier that matches your superstar&apos;s lifestyle.
              Premium care, predictable pricing.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Tier 1 */}
            <AnimatedCard
              delay={0}
              className="paper-texture wood-border rounded-2xl p-8 flex flex-col items-center text-center"
            >
              <span className="bg-forest text-primary px-4 py-1 rounded-full text-xs font-bold mb-6">
                ESSENTIAL
              </span>
              <div className="text-5xl font-[800] text-forest mb-2">
                ₹11,111
                <span className="text-base font-normal text-slate-500">
                  /mo
                </span>
              </div>
              <p className="text-slate-600 mb-8 font-medium">
                Standard Village Access
              </p>
              <ul className="w-full space-y-4 mb-10 text-left">
                <li className="flex items-center gap-3 text-forest/80">
                  <span className="material-symbols-outlined text-primary">
                    done
                  </span>{" "}
                  2 Days Boarding / Month
                </li>
                <li className="flex items-center gap-3 text-forest/80">
                  <span className="material-symbols-outlined text-primary">
                    done
                  </span>{" "}
                  1 Mineral Pool Session
                </li>
                <li className="flex items-center gap-3 text-forest/80">
                  <span className="material-symbols-outlined text-primary">
                    done
                  </span>{" "}
                  Basic Health Report
                </li>
              </ul>
              <button className="w-full min-h-[48px] py-3 sm:py-4 flex items-center justify-center bg-wood text-cream font-bold rounded-xl hover:bg-forest transition-all text-base">
                CHOOSE PLAN
              </button>
            </AnimatedCard>

            {/* Tier 2 */}
            <AnimatedCard
              delay={0.1}
              className="bg-forest rounded-3xl p-8 flex flex-col items-center text-center transform scale-105 shadow-2xl relative border-4 border-primary/30"
            >
              <div className="absolute -top-4 bg-primary text-forest px-6 py-1 rounded-full text-sm font-black shadow-lg">
                MOST POPULAR
              </div>
              <span className="bg-primary/20 text-primary px-4 py-1 rounded-full text-xs font-bold mb-6">
                VILLAGER ELITE
              </span>
              <div className="text-5xl font-[800] text-white mb-2">
                ₹15,555
                <span className="text-base font-normal text-slate-400">
                  /mo
                </span>
              </div>
              <p className="text-slate-300 mb-8 font-medium">
                Enhanced Resort Comforts
              </p>
              <ul className="w-full space-y-4 mb-10 text-left">
                <li className="flex items-center gap-3 text-white/90">
                  <span className="material-symbols-outlined text-primary">
                    verified
                  </span>{" "}
                  5 Days Boarding / Month
                </li>
                <li className="flex items-center gap-3 text-white/90">
                  <span className="material-symbols-outlined text-primary">
                    verified
                  </span>{" "}
                  4 Mineral Pool Sessions
                </li>
                <li className="flex items-center gap-3 text-white/90">
                  <span className="material-symbols-outlined text-primary">
                    verified
                  </span>{" "}
                  1 Styling Session / Month
                </li>
                <li className="flex items-center gap-3 text-white/90">
                  <span className="material-symbols-outlined text-primary">
                    verified
                  </span>{" "}
                  Priority Booking
                </li>
              </ul>
              <button className="w-full min-h-[48px] py-3 sm:py-4 flex items-center justify-center bg-primary text-forest font-black rounded-xl hover:scale-105 transition-all text-base">
                JOIN THE VILLAGE
              </button>
            </AnimatedCard>

            {/* Tier 3 */}
            <AnimatedCard
              delay={0.2}
              className="paper-texture wood-border rounded-2xl p-8 flex flex-col items-center text-center"
            >
              <span className="bg-forest text-primary px-4 py-1 rounded-full text-xs font-bold mb-6">
                ROYAL RESIDENT
              </span>
              <div className="text-5xl font-[800] text-forest mb-2">
                ₹22,222
                <span className="text-base font-normal text-slate-500">
                  /mo
                </span>
              </div>
              <p className="text-slate-600 mb-8 font-medium">
                The Ultimate Village Lifestyle
              </p>
              <ul className="w-full space-y-4 mb-10 text-left">
                <li className="flex items-center gap-3 text-forest/80">
                  <span className="material-symbols-outlined text-primary">
                    stars
                  </span>{" "}
                  10 Days Boarding / Month
                </li>
                <li className="flex items-center gap-3 text-forest/80">
                  <span className="material-symbols-outlined text-primary">
                    stars
                  </span>{" "}
                  Unlimited Pool Access
                </li>
                <li className="flex items-center gap-3 text-forest/80">
                  <span className="material-symbols-outlined text-primary">
                    stars
                  </span>{" "}
                  Full Grooming Package
                </li>
                <li className="flex items-center gap-3 text-forest/80">
                  <span className="material-symbols-outlined text-primary">
                    stars
                  </span>{" "}
                  Dedicated Concierge
                </li>
              </ul>
              <button className="w-full min-h-[48px] py-3 sm:py-4 flex items-center justify-center bg-wood text-cream font-bold rounded-xl hover:bg-forest transition-all text-base">
                GO ROYAL
              </button>
            </AnimatedCard>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
