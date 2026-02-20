import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import LenisProvider from "@/components/LenisProvider";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, DEFAULT_OG_IMAGE, SITE_NAME } from "@/lib/seo";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#102210",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Neolokam | Cage-Free Dog Boarding & 1.5 Acre Park in Trivandrum",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Experience a real dog vacation at Neolokam. Cage-free boarding, swimming, and nature walks on a sustainable 1.5-acre tropical fruit farm in Trivandrum. No cages, just good vibes.",
  keywords: [
    "dog boarding Trivandrum",
    "cage-free dog park",
    "pet resort Kerala",
    "Neolokam dog staycation",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: SITE_NAME,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Neolokam Pet Paradise",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Neolokam | Cage-Free Dog Boarding & 1.5 Acre Park in Trivandrum",
    description:
      "Experience a real dog vacation. Cage-free boarding, swimming, nature walks on a 1.5-acre tropical farm in Trivandrum.",
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <JsonLd />
        {/* Material Symbols icon font - loaded in root layout so it applies to all pages */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${plusJakarta.variable} font-display bg-background-light text-slate-900`}
      >
        <LenisProvider>
          <Navbar />
          <PageTransition>{children}</PageTransition>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
