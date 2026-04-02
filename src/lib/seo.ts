// src/lib/seo.ts
// Central SEO configuration — single source of truth for all meta, OG, Twitter, and JSON-LD base data.

export const SEO = {
  baseUrl: "https://hosatti.com",
  siteName: "Hosatti Refrigeration Service",
  defaultMetaTitle:
    "Hosatti Refrigeration Service | AC, Fridge & Washing Machine Repair in Dharwad",
  defaultMetaDescription:
    "Expert home appliance repair in Dharwad by Jameer Hosatti — 15+ years. Quick AC, refrigerator, washing machine & air cooler repair. Call +91-7899472430 now!",
  defaultKeywords: [
    "AC repair Dharwad",
    "refrigerator repair Dharwad",
    "washing machine repair Dharwad",
    "air cooler repair Dharwad",
    "home appliance repair Dharwad",
    "Hosatti Refrigeration Service",
    "Jameer Hosatti Dharwad",
    "appliance technician Dharwad",
    "fridge repair Dharwad",
    "AC service Dharwad",
  ],
  geo: {
    lat: 15.450056,
    lng: 74.9886131,
    region: "IN-KA",
    placename: "Dharwad, Karnataka, India",
  },
  localBusiness: {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": "https://hosatti.com/#business",
    name: "Hosatti Refrigeration Service",
    alternateName: "Hosatti Refrigeration Dharwad",
    slogan: "Dharwad's Most Trusted Appliance Repair Experts",
    description:
      "Expert home appliance repair in Dharwad — AC, refrigerator, washing machine & air cooler. 15+ years experience. Quick doorstep service or walk-in workshop. Certified technicians and genuine parts.",
    url: "https://hosatti.com",
    telephone: "+917899472430",
    foundingDate: "2009",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jaya Nagar, Opp Gurukul Academy, Saptapur Last Stop",
      addressLocality: "Dharwad",
      addressRegion: "Karnataka",
      postalCode: "580001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 15.450056,
      longitude: 74.9886131,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:30",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday"],
        opens: "09:30",
        closes: "13:00",
      },
    ],
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, UPI, Google Pay, Paytm",
    areaServed: [{ "@type": "City", name: "Dharwad" }],
    availableLanguage: ["English", "Kannada", "Hindi", "Urdu"],
    image: [
      "https://hosatti.com/Banner/Web%20Banner.webp",
      "https://hosatti.com/Jameer/Jameer.webp",
      "https://hosatti.com/Store%20image/Store.webp",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "4",
      bestRating: "5",
      worstRating: "1",
    },
  },
  openGraph: {
    type: "website" as const,
    locale: "en_IN",
    siteName: "Hosatti Refrigeration Service",
    images: [
      {
        url: "/Jameer%20favicon.jpg",
        width: 1200,
        height: 630,
        alt: "Hosatti Refrigeration Service — AC & Appliance Repair Dharwad",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image" as const,
    images: ["/Jameer%20favicon.jpg"],
  },
} as const;

/** Build a canonical URL for a given path */
export function canonical(path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${SEO.baseUrl}${clean}`;
}

/** Build LocalBusiness JSON-LD with optional overrides */
export function buildLocalBusinessSchema(overrides?: Record<string, unknown>) {
  return {
    ...SEO.localBusiness,
    ...overrides,
  };
}
