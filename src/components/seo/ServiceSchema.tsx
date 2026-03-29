// src/components/seo/ServiceSchema.tsx
import { BUSINESS } from "@/lib/constants";
import type { Service } from "@/lib/services-data";

export function ServiceSchema({ service }: { service: Service }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.fullDesc,
    url: `${BUSINESS.url}/services/${service.slug}`,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${BUSINESS.url}/#business`,
      name: BUSINESS.name,
      telephone: BUSINESS.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: BUSINESS.address.city,
        addressRegion: BUSINESS.address.state,
        addressCountry: "IN",
      },
    },
    areaServed: { "@type": "City", name: BUSINESS.address.city },
    serviceType: service.categoryLabel,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
