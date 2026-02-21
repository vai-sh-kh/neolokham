import { APP_CONTACT } from "@/lib/contact";
import { SITE_URL } from "@/lib/seo";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Neolokam",
  url: SITE_URL,
  description:
    "Cage-free dog boarding, swimming, and nature experiences on a 1.5-acre tropical pet park in Trivandrum. Sustainable pet resort and carbon capture initiative.",
  address: {
    "@type": "PostalAddress",
    streetAddress: APP_CONTACT.address.lines.slice(1, -1).join(", "),
    addressLocality: APP_CONTACT.address.locality,
    addressRegion: APP_CONTACT.address.region,
    postalCode: APP_CONTACT.address.postalCode,
    addressCountry: APP_CONTACT.address.country,
  },
  telephone: `+91-${APP_CONTACT.phone}`,
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
