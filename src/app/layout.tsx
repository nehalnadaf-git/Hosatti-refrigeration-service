// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/layout/Navbar";
import QueryProvider from "@/lib/query-client";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hosattirefrigeration.com"),
  title: {
    default:
      "Hosatti Refrigeration Service | AC, Fridge & Washing Machine Repair in Dharwad",
    template: "%s | Hosatti Refrigeration Service Dharwad",
  },
  description:
    "Expert home appliance repair in Dharwad by Jameer Hosatti — 15+ years experience. Same-day AC, refrigerator, washing machine & air cooler repair. Certified technicians. Genuine parts. Call now.",
  keywords: [
    "AC repair Dharwad",
    "refrigerator repair Dharwad",
    "washing machine repair Dharwad",
    "air cooler repair Dharwad",
    "AC gas filling Dharwad",
    "fridge compressor repair Dharwad",
    "home appliance repair Jay Nagar Dharwad",
    "Hosatti refrigeration service",
    "AC not cooling Dharwad",
    "same day appliance repair Dharwad",
    "LG Samsung IFB repair Dharwad",
    "AC installation Dharwad",
    "AC deep cleaning Dharwad",
  ],
  authors: [{ name: "Jameer Hosatti" }],
  creator: "Hosatti Refrigeration Service",
  publisher: "Hosatti Refrigeration Service",
  category: "Home Appliance Repair Services",
  applicationName: "Hosatti Refrigeration Service",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://hosattirefrigeration.com",
    siteName: "Hosatti Refrigeration Service",
    title:
      "Hosatti Refrigeration Service | Best AC & Fridge Repair in Dharwad",
    description:
      "15+ years of trusted home appliance repair in Dharwad. AC, refrigerator, washing machine & air cooler. Same-day service. Genuine parts.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hosatti Refrigeration Service — AC & Appliance Repair Dharwad",
        type: "image/jpeg",
      },
      {
        url: "/og-image-square.jpg",
        width: 1200,
        height: 1200,
        alt: "Hosatti Refrigeration Service Dharwad",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hosatti Refrigeration Service | AC & Appliance Repair Dharwad",
    description:
      "Expert AC, fridge, washing machine & air cooler repair in Dharwad. 15+ years exp. Same-day service.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://hosattirefrigeration.com",
    languages: { "en-IN": "https://hosattirefrigeration.com" },
  },
  // verification: { google: "YOUR_REAL_TOKEN_HERE" }, // Add when ready to verify in Search Console
  icons: {
    icon: [
      { url: "/PWA image/Jameer PWA.webp", type: "image/webp" },
    ],
    apple: [
      { url: "/PWA image/Jameer PWA.webp", type: "image/webp" },
    ],
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#1a237e",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-IN"
      className={`${cormorant.variable} ${outfit.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased bg-white text-gray-900">
        <LocalBusinessSchema />
        <QueryProvider>
          <Navbar />
          <main id="main-content">{children}</main>
        </QueryProvider>
        <Toaster position="bottom-right" richColors />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
