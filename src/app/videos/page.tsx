import type { Metadata } from "next";
import AnimatedCard from "@/components/AnimatedCard";
import { SITE_URL } from "@/lib/seo";

const TITLE = "Video Gallery | Neolokam Dog Park & Boarding – Trivandrum";
const DESCRIPTION =
  "Watch videos from Neolokam cage-free dog boarding, swimming, and park life. See our facility, happy dogs, and nature-aligned care in Trivandrum.";
const KEYWORDS = [
  "dog park videos Trivandrum",
  "dog boarding facility",
  "Neolokam videos",
  "cage-free dog stay",
];

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: KEYWORDS,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/videos`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  alternates: { canonical: `${SITE_URL}/videos` },
};

const VIDEO_FILES = [
  "video-1.mp4",
  "video-2.mp4",
  "video-3.mp4",
  "video-4.mp4",
  "video-5.mp4",
  "video-6.mp4",
  "video-7.mp4",
  "video-8.mp4",
  "video-9.mp4",
];

const VIDEOS = VIDEO_FILES.map((file, i) => ({
  id: `video-${i + 1}`,
  title: `Video ${i + 1}`,
  tag: "Video",
  src: `/videos/${encodeURIComponent(file)}`,
}));

export default function VideosPage() {
  return (
    <div className="vintage-paper text-gray-800 font-body transition-colors min-h-screen">
      <header className="relative pt-12 sm:pt-16 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center justify-center p-2 mb-4 sm:mb-6 rounded-full bg-forest/10 text-forest">
            <span className="material-symbols-outlined mr-2 text-sm">
              videocam
            </span>
            <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase">
              Nature-Aligned Initiative
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-forest mb-4 sm:mb-6 drop-shadow-sm">
            Video Gallery
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-display italic">
            Watch moments from Neolokam—our park, our dogs, and our cage-free
            boarding life. Built for the future, rooted in nature.
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
            Our Videos
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {VIDEOS.map((video, index) => (
            <AnimatedCard
              key={video.id}
              delay={index * 0.12}
              className="relative"
            >
              <div className="group relative bg-white rounded-xl shadow-brochure transition-all duration-300 hover:[box-shadow:var(--shadow-brochure-hover)] overflow-hidden border border-gray-100 h-full">
                <div className="aspect-[9/16] w-full overflow-hidden bg-gray-200 relative rounded-t-xl">
                  <video
                    controls
                    preload="metadata"
                    className="h-full w-full object-cover"
                    src={video.src}
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-(--color-brochure-accent) uppercase tracking-wider">
                      {video.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-display font-bold text-gray-900">
                    {video.title}
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
