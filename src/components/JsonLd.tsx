import { SITE_URL } from "@/lib/seo";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Neolokam",
  url: SITE_URL,
  description:
    "Cage-free dog boarding, swimming, and nature experiences on a 1.5-acre tropical fruit farm in Trivandrum. Sustainable pet resort and carbon capture initiative.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Trivandrum",
    addressRegion: "Kerala",
    addressCountry: "IN",
  },
  telephone: "+91-7736390719",
  areaServed: "Trivandrum, Kerala",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Neolokam",
  url: SITE_URL,
  description: "Cage-free dog boarding & 1.5 acre pet park in Trivandrum.",
  publisher: { "@id": `${SITE_URL}#organization` },
};

export default function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}
