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
      "Neolokam Carbon Capture Farm",
      "Chippara, Kollodu, Kulathoor",
      "Udayanapuram PO, Trivandrum",
      "Kerala 695071, India",
    ],
    locality: "Trivandrum",
    region: "Kerala",
    postalCode: "695071",
    country: "IN",
  },
  googleMapEmbedUrl:
    "https://www.google.com/maps?q=NEO+LOKAM+ENTERPRISES+LLP,+Kulathoor,+Trivandrum,+Kerala+695071&output=embed",
} as const;
