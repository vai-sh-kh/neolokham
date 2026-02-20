/* eslint-disable @next/next/no-img-element */

import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedCard from "@/components/AnimatedCard";
import { APP_CONTACT } from "@/lib/contact";
import { SITE_URL } from "@/lib/seo";

const TITLE =
  "Neolokam | Sustainable Pet Farm Kerala – Cage-Free Dog Boarding & 1.5-Acre Carbon Capture Park";
const DESCRIPTION =
  "Trivandrum's only 1.5-acre carbon capture dog park. Sustainable tropical fruit farming meets ethical, cage-free canine wellness. Zero pollution, zero concrete—a real vacation for your dog.";
const KEYWORDS = [
  "Sustainable Pet Farm Kerala",
  "Cage-Free Dog Boarding",
  "carbon capture dog park Trivandrum",
  "dog boarding Trivandrum",
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
      <section className="relative min-h-[70vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden border-b-4 md:border-b-8 border-wood">
        <div className="absolute inset-0">
          <img
            alt="Neolokam Home Banner"
            className="w-full h-full object-cover object-center scale-[1.02]"
            src="/images/home-banner.png"
          />
          <div className="absolute inset-0 bg-black/30 md:bg-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-forest/40 via-transparent to-forest/60"></div>
        </div>
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl">
          <div className="bg-forest/70 backdrop-blur-md p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl border-2 border-primary/30 shadow-2xl">
            <div className="inline-block px-4 py-1 bg-primary/20 border border-primary/30 rounded-full text-primary font-bold mb-6 tracking-widest text-xs uppercase">
              Trivandrum • 1.5 Acres • Zero Concrete
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-[800] text-white mb-6 leading-[1.1]">
              Trivandrum&apos;s Only 1.5-Acre{" "}
              <span className="text-primary">Carbon Capture Dog Park</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Sustainable tropical fruit farming meets ethical, cage-free canine
              wellness. Give your dog a real vacation in a zero-pollution,
              zero-concrete environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                href="/contact"
                className="min-h-[48px] bg-primary text-forest px-6 sm:px-10 py-3 sm:py-4 rounded-xl font-[800] text-base sm:text-lg flex items-center justify-center gap-2 hover:bg-white transition-all shadow-xl"
              >
                <span className="material-symbols-outlined">
                  calendar_today
                </span>
                Book a Stay
              </Link>
              <Link
                href="/about"
                className="min-h-[48px] bg-white/10 backdrop-blur-md border border-white/30 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-xl font-[800] text-base sm:text-lg flex items-center justify-center hover:bg-white/20 transition-all"
              >
                Our Eco-Mission
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* NEOLOKAM Initiative Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-background-light">
        <header className="py-8 sm:py-12 px-4 flex flex-col items-center text-center">
          <div className="mb-6">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-[1320px] mx-auto">
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
                  Boarding (Cage-Free)
                </h3>
                <p className="text-slate-600 text-sm italic mb-2">
                  Village-style living with structured freedom.
                </p>
                <p className="text-slate-600 text-base leading-relaxed">
                  Open 1.5-acre farmland boarding where dogs live naturally in
                  supervised groups. Behaviour-based placement, calm routines,
                  and constant human oversight ensure safety without
                  confinement.
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
                <p className="text-slate-600 text-sm italic mb-2">
                  Paw-sitively refreshing wellness sessions.
                </p>
                <p className="text-slate-600 text-base leading-relaxed">
                  Supervised splash pools designed for joint health, confidence
                  building, stress release, and pure canine happiness — because
                  movement is medicine.
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
                <p className="text-slate-600 text-sm italic mb-2">
                  Positive reinforcement meets village wisdom.
                </p>
                <p className="text-slate-600 text-base leading-relaxed">
                  From leash manners to social confidence, our training focuses
                  on emotional balance, character building, and calm behaviour
                  through real-world interaction — not force.
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
                  <p className="text-slate-600 text-sm italic mb-2">
                    Luxury grooming, wherever your dog feels safest.
                  </p>
                  <p className="text-slate-600 text-base leading-relaxed">
                    Professional hygiene care delivered at your home or inside
                    our salon huts. Includes bathing, paw trimming, ear
                    cleaning, hygiene cuts, nail care, and coat conditioning.
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
                THE NEOLOKAM MANIFESTO
              </h2>
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-[800] text-white mb-6 leading-tight">
                Your dog is a living being, not a booking slot.
              </h3>
              <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                <p>
                  We do not run a storage facility for pets. Neolokam is a
                  structured, cage-free village built on open agricultural land
                  where dogs live in supervised groups, follow real routines,
                  and experience nature safely.
                </p>
                <p>
                  Freedom here is earned through responsibility. Every dog is
                  assessed. Every stay begins with a visit. Every parent
                  participates honestly.
                </p>
                <p>
                  No shortcuts. No overcrowding. No chaos disguised as
                  &quot;cage-free.&quot; Just structured freedom, trained
                  supervision, and ethical care.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="flex items-center gap-3 text-white/90">
                  <span className="material-symbols-outlined text-primary shrink-0">
                    check_circle
                  </span>
                  <span>Mandatory Trial Visit &amp; Behaviour Assessment</span>
                </div>
                <div className="flex items-center gap-3 text-white/90">
                  <span className="material-symbols-outlined text-primary shrink-0">
                    check_circle
                  </span>
                  <span>
                    Updated Vaccination &amp; Health Clearance Required
                  </span>
                </div>
                <div className="flex items-center gap-3 text-white/90">
                  <span className="material-symbols-outlined text-primary shrink-0">
                    check_circle
                  </span>
                  <span>Transparent Parent Responsibility Policy</span>
                </div>
                <div className="flex items-center gap-3 text-white/90">
                  <span className="material-symbols-outlined text-primary shrink-0">
                    check_circle
                  </span>
                  <span>Limited Capacity for Calm, Safe Groups</span>
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
            <span className="inline-block px-3 py-1 rounded-full bg-forest/10 text-forest text-xs font-bold uppercase tracking-widest mb-4">
              Annual Memberships
            </span>
            <span className="text-forest/60 font-bold uppercase tracking-widest text-sm block">
              Join the Elite
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-[800] text-forest mt-2 mb-4">
              Exclusive Village Memberships
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto text-base">
              Select a tier that matches your superstar&apos;s lifestyle.
              Premium care, predictable pricing. 30 usable boarding days per
              year.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Tier 1: ESSENTIAL */}
            <AnimatedCard
              delay={0}
              className="paper-texture wood-border rounded-2xl p-8 flex flex-col items-center text-center"
            >
              <span className="bg-forest text-primary px-4 py-1 rounded-full text-xs font-bold mb-6">
                ESSENTIAL
              </span>
              <div className="text-4xl sm:text-5xl font-[800] text-forest mb-1">
                ₹11,111
              </div>
              <p className="text-base font-normal text-slate-500 mb-6">
                / Year
              </p>
              <p className="text-slate-700 mb-2 font-semibold">
                Village Starter Access
              </p>
              <p className="text-slate-600 text-sm mb-6">
                Perfect for first-time visitors and calm companions.
              </p>
              <ul className="w-full space-y-3 mb-10 text-left text-sm sm:text-base">
                <li className="flex items-center gap-3 text-forest/80">
                  <span className="material-symbols-outlined text-primary shrink-0">
                    done
                  </span>
                  Trial Visit &amp; Behaviour Assessment
                </li>
                <li className="flex items-center gap-3 text-forest/80">
                  <span className="material-symbols-outlined text-primary shrink-0">
                    done
                  </span>
                  30 Days Boarding (usable within 1 year)
                </li>
                <li className="flex items-center gap-3 text-forest/80">
                  <span className="material-symbols-outlined text-primary shrink-0">
                    done
                  </span>
                  4 Supervised Play Sessions
                </li>
                <li className="flex items-center gap-3 text-forest/80">
                  <span className="material-symbols-outlined text-primary shrink-0">
                    done
                  </span>
                  4 Swimming Splash Sessions
                </li>
                <li className="flex items-center gap-3 text-forest/80">
                  <span className="material-symbols-outlined text-primary shrink-0">
                    done
                  </span>
                  Basic Health &amp; Activity Report
                </li>
              </ul>
              <Link
                href={APP_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-h-[48px] py-3 sm:py-4 flex items-center justify-center bg-wood text-cream font-bold rounded-xl hover:bg-forest transition-all text-base"
              >
                Choose Plan
              </Link>
            </AnimatedCard>

            {/* Tier 2: VILLAGER ELITE (Most Popular) */}
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
              <div className="text-4xl sm:text-5xl font-[800] text-white mb-1">
                ₹15,555
              </div>
              <p className="text-base font-normal text-slate-400 mb-6">
                / Year
              </p>
              <p className="text-slate-200 mb-2 font-semibold">
                Enhanced Village Comforts
              </p>
              <p className="text-slate-400 text-sm mb-6">
                Our balanced care package combining freedom, training, and
                wellness.
              </p>
              <ul className="w-full space-y-3 mb-10 text-left text-sm sm:text-base">
                <li className="flex items-center gap-3 text-white/90">
                  <span className="material-symbols-outlined text-primary shrink-0">
                    verified
                  </span>
                  30 Days Cage-Free Boarding
                </li>
                <li className="flex items-center gap-3 text-white/90">
                  <span className="material-symbols-outlined text-primary shrink-0">
                    verified
                  </span>
                  Behaviour-Based Group Allocation
                </li>
                <li className="flex items-center gap-3 text-white/90">
                  <span className="material-symbols-outlined text-primary shrink-0">
                    verified
                  </span>
                  8 Swimming Sessions
                </li>
                <li className="flex items-center gap-3 text-white/90">
                  <span className="material-symbols-outlined text-primary shrink-0">
                    verified
                  </span>
                  1 Professional Grooming
                </li>
                <li className="flex items-center gap-3 text-white/90">
                  <span className="material-symbols-outlined text-primary shrink-0">
                    verified
                  </span>
                  Socialisation Training
                </li>
                <li className="flex items-center gap-3 text-white/90">
                  <span className="material-symbols-outlined text-primary shrink-0">
                    verified
                  </span>
                  Diet Monitoring
                </li>
                <li className="flex items-center gap-3 text-white/90">
                  <span className="material-symbols-outlined text-primary shrink-0">
                    verified
                  </span>
                  Priority Booking
                </li>
              </ul>
              <Link
                href={APP_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-h-[48px] py-3 sm:py-4 flex items-center justify-center bg-primary text-forest font-black rounded-xl hover:scale-105 transition-all text-base"
              >
                Join the Village
              </Link>
            </AnimatedCard>

            {/* Tier 3: ROYAL RESIDENT */}
            <AnimatedCard
              delay={0.2}
              className="paper-texture wood-border rounded-2xl p-8 flex flex-col items-center text-center"
            >
              <span className="bg-forest text-primary px-4 py-1 rounded-full text-xs font-bold mb-6">
                ROYAL RESIDENT
              </span>
              <div className="text-4xl sm:text-5xl font-[800] text-forest mb-1">
                ₹22,222
              </div>
              <p className="text-base font-normal text-slate-500 mb-6">
                / Year
              </p>
              <p className="text-slate-700 mb-2 font-semibold">
                The Ultimate Village Lifestyle
              </p>
              <p className="text-slate-600 text-sm mb-6">
                Premium care for dogs who need full support and personalised
                attention.
              </p>
              <ul className="w-full space-y-3 mb-10 text-left text-sm sm:text-base">
                <li className="flex items-center gap-3 text-forest/80">
                  <span className="material-symbols-outlined text-primary shrink-0">
                    stars
                  </span>
                  30 Days Premium Boarding
                </li>
                <li className="flex items-center gap-3 text-forest/80">
                  <span className="material-symbols-outlined text-primary shrink-0">
                    stars
                  </span>
                  Unlimited Swimming Access
                </li>
                <li className="flex items-center gap-3 text-forest/80">
                  <span className="material-symbols-outlined text-primary shrink-0">
                    stars
                  </span>
                  2 Professional Groomings
                </li>
                <li className="flex items-center gap-3 text-forest/80">
                  <span className="material-symbols-outlined text-primary shrink-0">
                    stars
                  </span>
                  Advanced Behaviour Support
                </li>
                <li className="flex items-center gap-3 text-forest/80">
                  <span className="material-symbols-outlined text-primary shrink-0">
                    stars
                  </span>
                  Personalised Diet Control
                </li>
                <li className="flex items-center gap-3 text-forest/80">
                  <span className="material-symbols-outlined text-primary shrink-0">
                    stars
                  </span>
                  Dedicated Care Supervision
                </li>
                <li className="flex items-center gap-3 text-forest/80">
                  <span className="material-symbols-outlined text-primary shrink-0">
                    stars
                  </span>
                  Priority Access to All Activities
                </li>
              </ul>
              <Link
                href={APP_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-h-[48px] py-3 sm:py-4 flex items-center justify-center bg-wood text-cream font-bold rounded-xl hover:bg-forest transition-all text-base"
              >
                Go Royal
              </Link>
            </AnimatedCard>
          </div>
          <p className="mt-8 text-center text-slate-500 text-sm max-w-2xl mx-auto">
            Final pricing depends on dog size, temperament, food requirements
            &amp; custom care.
          </p>
        </div>
      </AnimatedSection>
    </>
  );
}
