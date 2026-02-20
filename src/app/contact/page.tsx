/* eslint-disable @next/next/no-img-element */

import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "./ContactForm";
import { WHATSAPP_NUMBER } from "./constants";
import { SITE_URL } from "@/lib/seo";

const TITLE =
  "Contact Neolokam Trivandrum | Visiting Hours & Boarding Guidelines";
const DESCRIPTION =
  "Plan your visit to Neolokam! Mandatory pre-boarding visits between 6 AM - 9 AM. Contact us at 7736390719 for cage-free boarding and park inquiries.";
const KEYWORDS = [
  "Dog boarding guidelines",
  "Neolokam contact number",
  "Trivandrum dog park hours",
  "pet boarding requirements Kerala",
];

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: KEYWORDS,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/contact`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  alternates: { canonical: `${SITE_URL}/contact` },
};

export default function ContactPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
      <AnimatedSection
        className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start"
        delay={0.1}
      >
        {/* Left Side: The Illustrated Notice Board */}
        <div className="relative space-y-8">
          <div className="absolute -left-4 top-0 bottom-0 w-1 bg-primary/20 rounded-full hidden lg:block"></div>
          <div className="space-y-2">
            <span className="text-primary font-bold tracking-widest uppercase text-xs">
              Entrance Gate
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1]">
              Visit the <span className="text-primary">Farm</span>
            </h1>
            <p className="text-slate-500 text-base sm:text-lg">
              Our Carbon Capture sanctuary in Trivandrum welcomes you and your
              furry companions.
            </p>
          </div>

          {/* Schedule Plank */}
          <div className="plank p-6 sm:p-8 rounded-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-6xl">
                schedule
              </span>
            </div>
            <h3 className="text-primary font-bold mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined">alarm</span> Visiting
              Hours
            </h3>
            <p className="text-2xl font-extrabold mb-1">
              Trial Visits Mandatory
            </p>
            <p className="text-slate-600">6 AM – 9 AM (By Appointment Only)</p>
          </div>

          {/* Rules Signage Checklist */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold flex items-center gap-2 mb-6">
              <span className="material-symbols-outlined text-primary">
                rule
              </span>{" "}
              Rules Signage Checklist
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="plank p-5 rounded-lg flex items-center gap-4">
                <div className="size-8 bg-primary rounded-full flex items-center justify-center text-forest">
                  <span className="material-symbols-outlined text-sm font-bold">
                    check
                  </span>
                </div>
                <span className="font-bold">Vaccination Records</span>
              </div>
              <div className="plank p-5 rounded-lg flex items-center gap-4">
                <div className="size-8 bg-primary rounded-full flex items-center justify-center text-forest">
                  <span className="material-symbols-outlined text-sm font-bold">
                    check
                  </span>
                </div>
                <span className="font-bold">Collar Up</span>
              </div>
              <div className="plank p-5 rounded-lg flex items-center gap-4">
                <div className="size-8 bg-primary rounded-full flex items-center justify-center text-forest">
                  <span className="material-symbols-outlined text-sm font-bold">
                    check
                  </span>
                </div>
                <span className="font-bold">Tough Leash</span>
              </div>
              <div className="plank p-5 rounded-lg flex items-center gap-4">
                <div className="size-8 bg-primary rounded-full flex items-center justify-center text-forest">
                  <span className="material-symbols-outlined text-sm font-bold">
                    check
                  </span>
                </div>
                <span className="font-bold">Tick Protection</span>
              </div>
            </div>
          </div>

          {/* Location & Contact */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 sm:p-8 flex flex-col md:flex-row gap-6 sm:gap-8 items-center">
            <div className="flex-1 space-y-4 w-full min-w-0">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-1">
                  location_on
                </span>
                <div>
                  <p className="font-bold">Neolokam Carbon Capture Farm</p>
                  <p className="text-sm text-slate-500">
                    Trivandrum, Kerala, India
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">
                  call
                </span>
                <p className="font-bold">{WHATSAPP_NUMBER}</p>
              </div>
            </div>
            <div className="w-full sm:w-64 md:w-48 h-32 flex-shrink-0 bg-slate-200 rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all cursor-pointer">
              <img
                className="w-full h-full object-cover"
                alt="Stylized map showing Neolokam Farm in Trivandrum"
                src="/images/contact-map.jpg"
              />
            </div>
          </div>
        </div>

        {/* Right Side: The Lead Gen Form */}
        <ContactForm />
      </AnimatedSection>
    </main>
  );
}
