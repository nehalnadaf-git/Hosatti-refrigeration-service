// src/app/services/page.tsx
import type { Metadata } from "next";
import { SERVICES, SERVICE_CATEGORIES, getServicesByCategory, type ServiceCategory } from "@/lib/services";
import PageHero from "@/components/shared/PageHero";
import ServiceCard from "@/components/shared/ServiceCard";
import TrustBadges from "@/components/shared/TrustBadges";
import WhatsAppCTA from "@/components/shared/WhatsAppCTA";
import Footer from "@/components/layout/Footer";
import { SEO } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Home Appliance Repair Services in Dharwad — All 12 Services",
  description:
    "Full list of home appliance repair services by Hosatti Refrigeration Service in Dharwad — AC, refrigerator, washing machine & air cooler. 12 specialist services. Call +91-7899472430!",
  alternates: { canonical: `${SEO.baseUrl}/services` },
  openGraph: {
    title: "Home Appliance Repair Services Dharwad | Hosatti Refrigeration",
    description: "12 specialist home appliance repair services in Dharwad by Hosatti Refrigeration Service. Quick doorstep or walk-in workshop available.",
    url: `${SEO.baseUrl}/services`,
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Home Appliance Repair Services Dharwad",
  description: "Complete range of AC, refrigerator, washing machine and air cooler repair services in Dharwad by Hosatti Refrigeration Service.",
  provider: { "@id": `${SEO.baseUrl}/#business` },
  itemListElement: SERVICES.map((s, i) => ({
    "@type": "Offer",
    position: i + 1,
    itemOffered: {
      "@type": "Service",
      name: s.name,
      description: s.shortDescription,
      url: `${SEO.baseUrl}/services/${s.slug}`,
      areaServed: { "@type": "City", name: "Dharwad" },
    },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SEO.baseUrl },
    { "@type": "ListItem", position: 2, name: "Services", item: `${SEO.baseUrl}/services` },
  ],
};

export default function ServicesPage() {
  const categories = Object.keys(SERVICE_CATEGORIES) as ServiceCategory[];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PageHero
        eyebrow="Our Services"
        h1="Home Appliance Repair Services in Dharwad"
        subtitle="12 specialist repair services for AC, refrigerator, washing machine & air cooler — all brands, doorstep or walk-in workshop."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }]}
      />

      <main>
        {categories.map((cat) => {
          const catServices = getServicesByCategory(cat);
          return (
            <section key={cat} className="relative bg-light-bg py-16 md:py-20">
              <div className="container mx-auto px-5 md:px-8">
                <div className="mb-8 flex items-center gap-3">
                  <div className="h-[2px] w-8 bg-gradient-to-r from-yellow-400 to-yellow-400/40 rounded-full" />
                  <h2
                    className="font-body font-bold uppercase tracking-[0.15em] text-[11px] md:text-[12px]"
                    style={{ color: "hsl(37,90%,55%)" }}
                  >
                    {SERVICE_CATEGORIES[cat]}
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                  {catServices.map((s) => (
                    <ServiceCard key={s.slug} service={s} showLink />
                  ))}
                </div>
              </div>
            </section>
          );
        })}
        <TrustBadges />
        <WhatsAppCTA heading="Need Appliance Repair in Dharwad?" subheading="Book a quick doorstep visit or bring your appliance to our Jay Nagar workshop." />
      </main>
      <Footer />
    </>
  );
}
