/* eslint-disable @next/next/no-img-element */

import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "./ContactForm";
import { APP_CONTACT } from "@/lib/contact";
import { SITE_URL } from "@/lib/seo";

const TITLE =
  "Contact Neolokam Trivandrum | Visiting Hours & Boarding Guidelines";
const DESCRIPTION = `Plan your visit to Neolokam! Mandatory pre-boarding visits between 6 AM - 9 AM. Contact us at ${APP_CONTACT.phone} for cage-free boarding and park inquiries.`;
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
          <div className="space-y-3">
            <span className="text-primary font-bold tracking-widest uppercase text-xs">
              Entrance Gate
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1]">
              Visit the <span className="text-primary">Farm</span>
            </h1>
            <p className="text-slate-500 text-base sm:text-lg leading-relaxed">
              Welcome to Neolokam &mdash; a carbon-capture agricultural
              sanctuary where ethical canine care meets open green land.
            </p>
            <p className="text-slate-500 text-base sm:text-lg leading-relaxed">
              Before boarding, every dog must complete a supervised trial visit.
              This helps us understand behaviour, energy levels, and social
              compatibility.
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
              Trial Visits Are Mandatory
            </p>
            <p className="text-slate-600 font-semibold">
              6:00 AM &ndash; 9:00 AM (By Appointment Only)
            </p>
            <p className="text-slate-500 text-sm mt-2">
              Limited hours help maintain calm dogs, proper routines, and safe
              supervision.
            </p>
          </div>

          {/* Rules Signage Checklist */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-primary">
                rule
              </span>{" "}
              Rules Signage Checklist
            </h3>
            <p className="text-slate-500 text-sm mb-4">
              Please arrive prepared:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="plank p-5 rounded-lg flex items-center gap-4">
                <div className="size-8 bg-primary rounded-full flex items-center justify-center text-forest shrink-0">
                  <span className="material-symbols-outlined text-sm font-bold">
                    check
                  </span>
                </div>
                <div>
                  <span className="font-bold">Vaccination Records</span>
                  <p className="text-xs text-slate-500">Rabies required</p>
                </div>
              </div>
              <div className="plank p-5 rounded-lg flex items-center gap-4">
                <div className="size-8 bg-primary rounded-full flex items-center justify-center text-forest shrink-0">
                  <span className="material-symbols-outlined text-sm font-bold">
                    check
                  </span>
                </div>
                <div>
                  <span className="font-bold">Collar Up</span>
                  <p className="text-xs text-slate-500">No harness systems</p>
                </div>
              </div>
              <div className="plank p-5 rounded-lg flex items-center gap-4">
                <div className="size-8 bg-primary rounded-full flex items-center justify-center text-forest shrink-0">
                  <span className="material-symbols-outlined text-sm font-bold">
                    check
                  </span>
                </div>
                <span className="font-bold">Tough Leash Only</span>
              </div>
              <div className="plank p-5 rounded-lg flex items-center gap-4">
                <div className="size-8 bg-primary rounded-full flex items-center justify-center text-forest shrink-0">
                  <span className="material-symbols-outlined text-sm font-bold">
                    check
                  </span>
                </div>
                <span className="font-bold">Tick Protection Applied</span>
              </div>
              <div className="plank p-5 rounded-lg flex items-center gap-4 sm:col-span-2">
                <div className="size-8 bg-primary rounded-full flex items-center justify-center text-forest shrink-0">
                  <span className="material-symbols-outlined text-sm font-bold">
                    check
                  </span>
                </div>
                <span className="font-bold">Healthy, Disease-Free Dogs</span>
              </div>
            </div>
            <p className="text-slate-500 text-sm mt-2 italic">
              Bring poop scooper &amp; bags. No bowls. No toys. No chaos.
            </p>
          </div>

          {/* Location & Contact */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 sm:p-8 flex flex-col md:flex-row gap-6 sm:gap-8 items-center">
            <div className="flex-1 space-y-4 w-full min-w-0">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-1">
                  location_on
                </span>
                <div>
                  {APP_CONTACT.address.lines.map((line, i) => (
                    <p
                      key={i}
                      className={
                        i === 0 ? "font-bold" : "text-sm text-slate-500"
                      }
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
              <a
                href={`tel:${APP_CONTACT.phoneRaw}`}
                className="flex items-center gap-3 font-bold hover:underline"
              >
                <span className="material-symbols-outlined text-primary">
                  call
                </span>
                {APP_CONTACT.phoneDisplay}
              </a>
              <a
                href={APP_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-bold hover:underline"
              >
                <span className="material-symbols-outlined text-primary">
                  chat
                </span>
                WhatsApp
              </a>
              <p className="text-slate-500 text-sm italic">
                A living agricultural ecosystem &mdash; not concrete kennels.
              </p>
            </div>
            {APP_CONTACT.googleMapEmbedUrl ? (
              <div className="w-full sm:w-64 md:w-48 h-32 shrink-0 rounded-lg overflow-hidden">
                <iframe
                  src={APP_CONTACT.googleMapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Neolokam location"
                />
              </div>
            ) : (
              <div className="w-full sm:w-64 md:w-48 h-32 flex-shrink-0 bg-slate-200 rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all cursor-pointer">
                <img
                  className="w-full h-full object-cover"
                  alt="Stylized map showing Neolokam Farm in Trivandrum"
                  src="/images/contact-map.jpg"
                />
              </div>
            )}
          </div>
        </div>

        {/* Right Side: The Lead Gen Form */}
        <ContactForm />
      </AnimatedSection>
    </main>
  );
}
