/**
 * Central SEO config for Neolokam.
 * Set NEXT_PUBLIC_SITE_URL in .env.local for production (e.g. https://neolokam.com).
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://neolokam.com";

export const SITE_NAME = "Neolokam";

export const DEFAULT_OG_IMAGE = "/images/hero-tropical.jpg";

/** All public routes for sitemap and nav. */
export const ROUTES = {
  home: "/",
  about: "/about",
  brochure: "/brochure",
  contact: "/contact",
  grooming: "/grooming",
} as const;

export type RouteKey = keyof typeof ROUTES;
