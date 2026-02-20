/**
 * Single source of truth for Neolokam contact info.
 * Use APP_CONTACT across the app (Footer, Contact page, About, Grooming, JsonLd).
 * Update address lines and googleMapEmbedUrl when you have the real values.
 */
export const APP_CONTACT = {
  phone: "7736390719",
  phoneDisplay: "+91 77363 90719",
  get phoneRaw(): string {
    return this.phone.replace(/\D/g, "");
  },
  get whatsappUrl(): string {
    return `https://wa.me/91${this.phoneRaw}`;
  },
  address: {
    lines: [
      "Neolokam",
      "KP 21/385-B, Varahalakshmi",
      "Edathara, Kollodu, Kollodu PO",
      "Via Malayiinkil, Thiruvananthapuram",
      "PIN 695571, Killi Manali Mechira",
    ],
    locality: "Thiruvananthapuram",
    region: "Kerala",
    postalCode: "695571",
    country: "IN",
  },
  googleMapEmbedUrl:
    "https://www.google.com/maps?q=NEO+LOKAM+ENTERPRISES+LLP,+Kulathoor,+Trivandrum,+Kerala+695071&output=embed",
} as const;
