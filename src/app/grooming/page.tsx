/* eslint-disable @next/next/no-img-element */

import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedCard from "@/components/AnimatedCard";
import { SITE_URL } from "@/lib/seo";
import { WHATSAPP_NUMBER } from "@/app/contact/constants";

const TITLE = "Professional Home Dog Grooming Trivandrum | Neolokam";
const DESCRIPTION =
  "Stress-free home grooming for dogs in Trivandrum starting at ₹1500. We handle nail cutting, ear cleaning, and bathing at your doorstep.";
const KEYWORDS = [
  "Home dog grooming Trivandrum",
  "mobile pet grooming",
  "dog bathing service at home",
  "affordable dog grooming",
];

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: KEYWORDS,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/grooming`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  alternates: { canonical: `${SITE_URL}/grooming` },
};

const SERVICES = [
  {
    icon: "content_cut",
    title: "Hair trim & styling",
    description: "Breed-appropriate cuts and styling for a polished look.",
  },
  {
    icon: "clean_hands",
    title: "Bathing & drying",
    description: "Gentle bathing and thorough drying at your home.",
  },
  {
    icon: "back_hand",
    title: "Nail cutting",
    description: "Safe, stress-free nail trims so paws stay healthy.",
  },
  {
    icon: "hearing",
    title: "Ear cleaning",
    description: "Ear cleaning and basic checks to avoid infections.",
  },
];

export default function GroomingPage() {
  return (
    <main className="min-h-screen bg-background-light">
      {/* Hero */}
      <AnimatedSection
        className="relative py-16 sm:py-20 px-4 sm:px-6 bg-forest overflow-hidden"
        delay={0}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-forest/90 to-forest" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -mr-48 -mt-48" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1 bg-primary/20 border border-primary/30 rounded-full text-primary font-bold mb-4 sm:mb-6 tracking-widest text-xs uppercase">
            AT YOUR DOORSTEP
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[800] text-white mb-4 sm:mb-6 leading-tight">
            Professional Home Dog Grooming{" "}
            <span className="text-primary">Trivandrum</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-200 mb-8 sm:mb-10 max-w-2xl mx-auto">
            Stress-free grooming at your place. Nail cutting, ear cleaning, and
            bathing—no drama, no travel. Starting at ₹1500.
          </p>
          <Link
            href={`https://wa.me/91${WHATSAPP_NUMBER.replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Book grooming on WhatsApp"
            className="inline-flex items-center justify-center gap-2 min-h-[48px] bg-primary text-forest px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-[800] text-base sm:text-lg hover:opacity-90 transition-opacity"
          >
            <span className="material-symbols-outlined">chat</span>
            Book grooming
          </Link>
        </div>
      </AnimatedSection>

      {/* Services */}
      <AnimatedSection className="py-16 sm:py-20 px-4 sm:px-6" delay={0.1}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-[800] text-forest mb-4 text-center">
            What we do
          </h2>
          <p className="text-slate-600 text-base text-center max-w-xl mx-auto mb-10 sm:mb-12">
            Full-service grooming at your home so your dog stays relaxed in
            familiar surroundings.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {SERVICES.map((item, i) => (
              <AnimatedCard
                key={item.title}
                delay={i * 0.06}
                className="bg-white rounded-2xl p-5 sm:p-6 border-2 border-forest/5 shadow-lg"
              >
                <span className="material-symbols-outlined text-3xl sm:text-4xl text-primary mb-3 sm:mb-4 block">
                  {item.icon}
                </span>
                <h3 className="text-lg font-bold text-forest mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-base">{item.description}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection
        className="py-12 sm:py-16 px-4 sm:px-6 bg-forest border-t-4 md:border-t-8 border-wood"
        delay={0.15}
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-[800] text-white mb-4">
            Ready for no-drama grooming?
          </h2>
          <p className="text-slate-300 text-base mb-6 sm:mb-8">
            Message us on WhatsApp to book a slot. We serve Trivandrum and
            nearby areas.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 min-h-[48px] bg-primary text-forest px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-[800] text-base hover:opacity-90 transition-opacity"
          >
            Contact Neolokam
          </Link>
        </div>
      </AnimatedSection>
    </main>
  );
}
