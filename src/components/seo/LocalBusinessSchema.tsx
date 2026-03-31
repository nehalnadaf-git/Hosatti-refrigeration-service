// src/components/seo/LocalBusinessSchema.tsx
import { BUSINESS } from "@/lib/constants";
import { SERVICES } from "@/lib/services-data";

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": `${BUSINESS.url}/#business`,
    name: BUSINESS.name,
    alternateName: "Hosatti Refrigeration Dharwad",
    slogan: "Dharwad's Most Trusted Appliance Repair Experts",
    description:
      "Expert home appliance repair in Dharwad — AC, refrigerator, washing machine & air cooler. 15+ years experience. Same-day service with certified technicians and genuine parts.",
    url: BUSINESS.url,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    foundingDate: BUSINESS.founded,
    logo: {
      "@type": "ImageObject",
      url: `${BUSINESS.url}/PWA image/Jameer PWA.webp`,
      width: 512,
      height: 512,
    },
    image: [
      `${BUSINESS.url}/Banner/Web Banner.webp`,
      `${BUSINESS.url}/Jameer/Jameer.webp`,
      `${BUSINESS.url}/Store image/Store.webp`,
    ],
    founder: {
      "@type": "Person",
      name: BUSINESS.owner,
      jobTitle: "Owner & Chief Technician",
      worksFor: { "@id": `${BUSINESS.url}/#business` },
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
    hasMap: `https://maps.google.com/?q=${BUSINESS.geo.lat},${BUSINESS.geo.lng}`,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        opens: "09:30",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "09:30",
        closes: "13:00",
      },
    ],
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, UPI, Google Pay, Paytm",
    areaServed: [
      { "@type": "City", name: "Dharwad", geoContains: { "@type": "GeoCircle", geoMidpoint: { "@type": "GeoCoordinates", latitude: BUSINESS.geo.lat, longitude: BUSINESS.geo.lng }, geoRadius: "20000" } },
      { "@type": "City", name: "Hubli" },
    ],
    knowsAbout: [
      "AC Repair", "Air Conditioner Service", "Refrigerator Repair", "Fridge Repair",
      "Washing Machine Repair", "Air Cooler Repair", "Home Appliance Repair",
      "AC Gas Refilling", "Compressor Repair", "AC Deep Cleaning",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Home Appliance Repair Services Dharwad",
      itemListElement: SERVICES.map((s, i) => ({
        "@type": "Offer",
        position: i + 1,
        itemOffered: {
          "@type": "Service",
          name: s.name,
          description: s.shortDesc,
          url: `${BUSINESS.url}/services/${s.slug}`,
          serviceType: s.categoryLabel,
          areaServed: { "@type": "City", name: "Dharwad" },
          provider: { "@id": `${BUSINESS.url}/#business` },
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
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Jakeer" },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody: "Hosatti Refrigeration Service is excellent! The workers are very fast and do a great job. They fixed my fridge quickly and it works perfectly now. Highly recommend for any refrigeration needs!",
        datePublished: "2024-11-01",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Shakeel Shaikh" },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody: "I had a great experience with Hosatti Refrigeration Service! They fixed my fridge quickly. The price was fair and the service was excellent.",
        datePublished: "2024-12-10",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Nehal Nadaf" },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody: "Extremely satisfied! Jameer is our family's go-to washing machine and AC technician. He always responds quickly when an appliance breaks down, diagnoses the issue immediately, and has it running perfectly in no time.",
        datePublished: "2025-01-15",
      },
    ],
    sameAs: [
      `https://g.co/kgs/${BUSINESS.social.google}`,
      `https://wa.me/${BUSINESS.whatsapp}`,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
