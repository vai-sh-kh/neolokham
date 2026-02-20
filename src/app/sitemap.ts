import type { MetadataRoute } from "next";
import { SITE_URL, ROUTES } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_URL;
  const now = new Date();

  return [
    {
      url: base + ROUTES.home,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: base + ROUTES.about,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: base + ROUTES.brochure,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: base + ROUTES.contact,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: base + ROUTES.grooming,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
