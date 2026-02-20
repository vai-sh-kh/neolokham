# Neolokam SEO Implementation Plan

## 1. Technical SEO

### 1.1 Sitemap (`/sitemap.xml`)
- **Location:** `src/app/sitemap.ts` (Next.js App Router)
- **Contents:** All public pages with `lastModified`, `changeFrequency`, `priority`
- **URLs:** Home, About, Brochure, Contact, Grooming
- **Purpose:** Helps search engines discover and index all pages

### 1.2 Robots.txt (`/robots.txt`)
- **Location:** `src/app/robots.ts`
- **Rules:** Allow all crawlers on `/`, reference sitemap URL
- **Sitemap:** `{SITE_URL}/sitemap.xml`

### 1.3 Canonical & Base URL
- **Config:** `src/lib/seo.ts` – `SITE_URL` from `NEXT_PUBLIC_SITE_URL` or fallback
- **Usage:** All absolute URLs (OG, sitemap, robots) use this base

---

## 2. Page-Level SEO

### 2.1 Home Page — "Pet Paradise" Overview
| Field | Value |
|-------|--------|
| **SEO Title** | Neolokam \| Cage-Free Dog Boarding & 1.5 Acre Park in Trivandrum |
| **Meta Description** | Experience a real dog vacation at Neolokam. We offer cage-free boarding, swimming, and nature walks on a sustainable 1.5-acre tropical fruit farm. No cages, just good vibes. |
| **Keywords** | Dog boarding Trivandrum, cage-free dog park, pet resort Kerala, Neolokam dog staycation |
| **Focus** | 1.5-acre nature resort + cage-free boarding |

### 2.2 About Page — Ecological Initiative
| Field | Value |
|-------|--------|
| **SEO Title** | About Neolokam \| Sustainable Carbon Capture Farm & Canine Wellness |
| **Meta Description** | Neolokam is an independently developed ecological initiative in Trivandrum focused on carbon capture, tropical fruit cultivation, and ethical animal welfare. |
| **Keywords** | Sustainable dog park, carbon capture farm Kerala, indigenous plant conservation, ethical animal care Trivandrum |
| **Content note** | Emphasize "Zero Concrete" and dog care + land restoration |

### 2.3 Services & Brochure Page — Membership & Activities
| Field | Value |
|-------|--------|
| **SEO Title** | Dog Services & Membership \| Swimming, Training & Boarding at Neolokam |
| **Meta Description** | Explore our 1-year membership plans starting at ₹11,111. Includes 30 days of boarding, swimming sessions, socialization training, and premium home grooming. |
| **Keywords** | Dog swimming Trivandrum, dog socialization training, pet membership plans, home dog grooming Trivandrum |
| **Content note** | "Cage-Free Done Right" criteria; "Real Dog Vacation" (trekking, splash pools) |

### 2.4 Contact & Guidelines Page — Transparency & Rules
| Field | Value |
|-------|--------|
| **SEO Title** | Contact Neolokam Trivandrum \| Visiting Hours & Boarding Guidelines |
| **Meta Description** | Plan your visit to Neolokam! Mandatory pre-boarding visits between 6 AM - 9 AM. Contact us at 7736390719 for cage-free boarding and park inquiries. |
| **Keywords** | Dog boarding guidelines, Neolokam contact number, Trivandrum dog park hours, pet boarding requirements Kerala |
| **Content note** | "Honest Reasons" for 6 AM - 9 AM window (staff & dog wellbeing) |

### 2.5 Home Grooming Page — Landing / Section
| Field | Value |
|-------|--------|
| **SEO Title** | Professional Home Dog Grooming Trivandrum \| Neolokam |
| **Meta Description** | Stress-free home grooming for dogs in Trivandrum starting at ₹1500. We handle nail cutting, ear cleaning, and bathing at your doorstep. |
| **Keywords** | Home dog grooming Trivandrum, mobile pet grooming, dog bathing service at home, affordable dog grooming |

---

## 3. Metadata Structure (Next.js)

- **Root layout:** Default `metadata` with `metadataBase`, `openGraph`, `twitter`, and title template.
- **Each page:** Exports `metadata` (or `generateMetadata`) with:
  - `title`
  - `description`
  - `keywords` (array)
  - `openGraph` (title, description, url, images, type)
  - `twitter` (card, title, description)
  - `alternates.canonical` where useful

---

## 4. Optional Enhancements

- **JSON-LD:** LocalBusiness or AnimalShelter schema on Home/Contact; Service schema on Grooming.
- **Structured data:** Organization, WebSite with sitelinks.
- **.env.local:** Set `NEXT_PUBLIC_SITE_URL=https://yourdomain.com` for production.

---

## 5. Files Touched

| File | Action |
|------|--------|
| `src/lib/seo.ts` | Create – site URL, routes |
| `src/app/sitemap.ts` | Create – sitemap generation |
| `src/app/robots.ts` | Create – robots.txt |
| `src/app/layout.tsx` | Update – metadata template, OG, Twitter |
| `src/app/page.tsx` | Add metadata export (Home) |
| `src/app/about/page.tsx` | Add metadata export |
| `src/app/brochure/page.tsx` | Update metadata (Services & Brochure) |
| `src/app/contact/page.tsx` | Add metadata export |
| `src/app/grooming/page.tsx` | Create – grooming landing + metadata |
