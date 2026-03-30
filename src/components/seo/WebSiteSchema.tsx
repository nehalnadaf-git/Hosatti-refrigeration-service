// src/components/seo/WebSiteSchema.tsx
import { BUSINESS } from "@/lib/constants";

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BUSINESS.url}/#website`,
    name: BUSINESS.name,
    alternateName: [
      "Hosatti Refrigeration",
      "Hosatti Fridge Repair Dharwad",
      "Hosatti AC Repair Dharwad",
    ],
    url: BUSINESS.url,
    description:
      "Expert home appliance repair in Dharwad — AC, refrigerator, washing machine & air cooler. 15+ years experience. Same-day service.",
    inLanguage: "en-IN",
    publisher: {
      "@type": "LocalBusiness",
      "@id": `${BUSINESS.url}/#business`,
      name: BUSINESS.name,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BUSINESS.url}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
