import type { Metadata } from "next";
import AnimatedCard from "@/components/AnimatedCard";
import { SITE_URL } from "@/lib/seo";

const TITLE =
  "Dog Services & Membership | Swimming, Training & Boarding at Neolokam";
const DESCRIPTION =
  "Explore our 1-year membership plans starting at ₹11,111. Includes 30 days of boarding, swimming sessions, socialization training, and premium home grooming.";
const KEYWORDS = [
  "Dog swimming Trivandrum",
  "dog socialization training",
  "pet membership plans",
  "home dog grooming Trivandrum",
];

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: KEYWORDS,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/brochure`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  alternates: { canonical: `${SITE_URL}/brochure` },
};

// Brochure images from public/brochures
const BROCHURE_FILES = [
  "WhatsApp Image 2026-02-17 at 19.29.20.jpeg",
  "WhatsApp Image 2026-02-17 at 19.29.20 (1).jpeg",
  "WhatsApp Image 2026-02-17 at 19.29.21.jpeg",
  "WhatsApp Image 2026-02-17 at 19.29.21 (1).jpeg",
  "WhatsApp Image 2026-02-17 at 19.29.21 (2).jpeg",
  "WhatsApp Image 2026-02-17 at 19.29.22.jpeg",
  "WhatsApp Image 2026-02-17 at 19.29.22 (1).jpeg",
  "WhatsApp Image 2026-02-17 at 19.29.23.jpeg",
  "WhatsApp Image 2026-02-17 at 19.29.23 (1).jpeg",
  "WhatsApp Image 2026-02-17 at 19.29.23 (2).jpeg",
  "WhatsApp Image 2026-02-17 at 19.29.24.jpeg",
  "WhatsApp Image 2026-02-17 at 19.29.25.jpeg",
];

const BROCHURES = BROCHURE_FILES.map((file, i) => ({
  id: `brochure-${i + 1}`,
  title: `Brochure ${i + 1}`,
  tag: "Resource",
  image: `/brochures/${encodeURIComponent(file)}`,
  alt: `Neolokam brochure ${i + 1}`,
}));

export default function BrochurePage() {
  return (
    <div className="vintage-paper text-gray-800 font-body transition-colors min-h-screen">
      <header className="relative pt-12 sm:pt-16 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center justify-center p-2 mb-4 sm:mb-6 rounded-full bg-forest/10 text-forest">
            <span className="material-symbols-outlined mr-2 text-sm">eco</span>
            <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase">
              Nature-Aligned Initiative
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-forest mb-4 sm:mb-6 drop-shadow-sm">
            Explore Our Story
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-display italic">
            Discover the vision behind Neolokam through our digital collection
            of brochures, flyers, and resources. Built for the future, rooted in
            nature.
          </p>
        </div>
        <div className="mt-12 flex justify-center items-center opacity-40">
          <div className="h-px bg-forest w-24" />
          <span className="material-symbols-outlined mx-4 text-forest">
            spa
          </span>
          <div className="h-px bg-forest w-24" />
        </div>
      </header>

      <main className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pb-24">
        <div className="mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-gray-800">
            Digital Brochure Gallery
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {BROCHURES.map((brochure, index) => (
            <AnimatedCard
              key={brochure.id}
              delay={index * 0.12}
              className="relative"
            >
              <div className="group relative bg-white rounded-xl shadow-brochure transition-all duration-300 hover:[box-shadow:var(--shadow-brochure-hover)] overflow-hidden border border-gray-100 h-full">
                <div className="aspect-3/4 w-full overflow-hidden bg-gray-200 relative">
                  <img
                    alt={brochure.alt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src={brochure.image}
                  />
                  {/* Overlay: always visible on touch/mobile, hover-only on md+ */}
                  <div className="absolute inset-0 bg-forest/85 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 sm:gap-4 backdrop-blur-sm p-4">
                    <a
                      href={brochure.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[48px] min-w-[48px] bg-white text-forest px-5 py-3 rounded-full font-bold shadow-lg hover:bg-gray-100 flex items-center justify-center gap-2 transform translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-[transform,color,background-color] duration-300 delay-75 text-base"
                    >
                      <span className="material-symbols-outlined">
                        visibility
                      </span>
                      View Full Screen
                    </a>
                    <a
                      href={brochure.image}
                      download
                      className="min-h-[48px] min-w-[48px] bg-transparent border-2 border-white text-white px-5 py-3 rounded-full font-bold hover:bg-white/20 flex items-center justify-center gap-2 transform translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-[transform,color,background-color] duration-300 delay-100 text-base"
                    >
                      <span className="material-symbols-outlined">
                        download
                      </span>
                      Download
                    </a>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-(--color-brochure-accent) uppercase tracking-wider">
                      {brochure.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-display font-bold text-gray-900">
                    {brochure.title}
                  </h3>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </main>
    </div>
  );
}
