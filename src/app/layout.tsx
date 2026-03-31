// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/layout/Navbar";
import QueryProvider from "@/lib/query-client";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";
import { WebSiteSchema } from "@/components/seo/WebSiteSchema";
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
  metadataBase: new URL("https://hosatti.com"),
  title: {
    default:
      "Hosatti Refrigeration Service | AC, Fridge & Washing Machine Repair in Dharwad",
    template: "%s | Hosatti Refrigeration Service Dharwad",
  },
  description:
    "Expert home appliance repair in Dharwad by Jameer Hosatti — 15+ years experience. Same-day AC, refrigerator, washing machine & air cooler repair. Certified technicians, genuine parts. Serving Dharwad & Hubli. Call now!",
  keywords: [
    // AC / Air Conditioner
    "AC repair Dharwad",
    "AC service Dharwad",
    "AC not cooling Dharwad",
    "AC gas filling Dharwad",
    "AC gas refilling Dharwad",
    "AC installation Dharwad",
    "AC deep cleaning Dharwad",
    "AC technician Dharwad",
    "split AC repair Dharwad",
    "window AC repair Dharwad",
    "inverter AC repair Dharwad",
    // Refrigerator / Fridge
    "refrigerator repair Dharwad",
    "fridge repair Dharwad",
    "fridge not cooling Dharwad",
    "fridge compressor repair Dharwad",
    "refrigerator gas filling Dharwad",
    "double door fridge repair Dharwad",
    "side by side fridge repair Dharwad",
    "refrigerator service center Dharwad",
    // Washing Machine
    "washing machine repair Dharwad",
    "fully automatic washing machine repair Dharwad",
    "semi automatic washing machine repair Dharwad",
    "front load washing machine repair Dharwad",
    "washing machine not draining Dharwad",
    "washing machine service Dharwad",
    // Air Cooler
    "air cooler repair Dharwad",
    "cooler repair Dharwad",
    "desert cooler repair Dharwad",
    "air cooler motor repair Dharwad",
    // General / Brand / Location
    "home appliance repair Dharwad",
    "home appliance repair Jay Nagar Dharwad",
    "home appliance repair Hubli Dharwad",
    "Hosatti refrigeration service",
    "Jameer Hosatti Dharwad",
    "same day appliance repair Dharwad",
    "appliance repair near me Dharwad",
    "LG repair Dharwad",
    "Samsung repair Dharwad",
    "IFB repair Dharwad",
    "Whirlpool repair Dharwad",
    "Voltas repair Dharwad",
    "Godrej repair Dharwad",
    "Haier repair Dharwad",
    "refrigeration service Karnataka",
    "appliance repair Karnataka",
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
    url: "https://hosatti.com",
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
    canonical: "https://hosatti.com",
    languages: { "en-IN": "https://hosatti.com" },
  },
  // verification: { google: "YOUR_REAL_TOKEN_HERE" }, // Add when ready to verify in Search Console
  icons: {
    icon: [
      { url: "/Jameer%20favicon.jpg", type: "image/jpeg" },
      { url: "/PWA image/Jameer PWA.webp", sizes: "192x192", type: "image/webp" },
    ],
    apple: [
      { url: "/PWA image/Jameer PWA.webp", sizes: "180x180", type: "image/webp" },
    ],
  },
  manifest: "/manifest.webmanifest",
  other: {
    "geo.region": "IN-KA",
    "geo.placename": "Dharwad, Karnataka, India",
    "geo.position": "15.4589;75.0078",
    "ICBM": "15.4589, 75.0078",
    "DC.language": "en-IN",
  },
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
      <head>
        {/* Performance: preconnect to critical origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://wa.me" />
        <link rel="dns-prefetch" href="https://api.whatsapp.com" />
      </head>
      <body className="antialiased bg-white text-gray-900" suppressHydrationWarning>
        {/* Skip to main content for accessibility + SEO crawlability */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:shadow-lg"
        >
          Skip to main content
        </a>
        <LocalBusinessSchema />
        <WebSiteSchema />
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
