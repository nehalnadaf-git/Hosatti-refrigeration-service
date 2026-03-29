// src/components/seo/LocalBusinessSchema.tsx
import { BUSINESS } from "@/lib/constants";
import { SERVICES } from "@/lib/services-data";

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BUSINESS.url}/#business`,
    name: BUSINESS.name,
    description:
      "Expert home appliance repair in Dharwad — AC, refrigerator, washing machine & air cooler. 15+ years experience. Same-day service with genuine parts.",
    url: BUSINESS.url,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    founder: {
      "@type": "Person",
      name: BUSINESS.owner,
      jobTitle: "Owner & Chief Technician",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.state,
      postalCode: BUSINESS.address.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.lat,
      longitude: BUSINESS.geo.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday",
        ],
        opens: "07:00",
        closes: "19:45",
      },
    ],
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, UPI, Google Pay, PhonePe, Visa, Mastercard, RuPay",
    areaServed: [
      { "@type": "City", name: "Dharwad" },
      { "@type": "City", name: "Hubli" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Home Appliance Repair Services",
      itemListElement: SERVICES.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.name,
          description: s.shortDesc,
          url: `${BUSINESS.url}/services/${s.slug}`,
        },
      })),
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "120",
      bestRating: "5",
      worstRating: "1",
    },
    sameAs: [`https://g.co/kgs/${BUSINESS.social.google}`],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
