// src/app/brands/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BRANDS, getBrandBySlug } from "@/lib/brands";
import { SERVICES, getServiceBySlug } from "@/lib/services";
import { SEO } from "@/lib/seo";
import PageHero from "@/components/shared/PageHero";
import ServiceCard from "@/components/shared/ServiceCard";
import FAQAccordion from "@/components/shared/FAQAccordion";
import WhatsAppCTA from "@/components/shared/WhatsAppCTA";
import TrustBadges from "@/components/shared/TrustBadges";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/shared/ScrollReveal";

export function generateStaticParams() {
  return BRANDS.map((b) => ({ slug: b.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const brand = getBrandBySlug(slug);
  if (!brand) return {};
  return {
    title: brand.metaTitle,
    description: brand.metaDescription,
    keywords: brand.keywords,
    alternates: { canonical: `${SEO.baseUrl}/brands/${slug}` },
    openGraph: { title: brand.metaTitle, description: brand.metaDescription, url: `${SEO.baseUrl}/brands/${slug}` },
  };
}

export default async function BrandPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const brand = getBrandBySlug(slug);
  if (!brand) notFound();

  const brandServices = brand.servicesAvailable
    .map((s) => getServiceBySlug(s))
    .filter(Boolean) as typeof SERVICES;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: brand.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SEO.baseUrl },
      { "@type": "ListItem", position: 2, name: "Brands", item: `${SEO.baseUrl}/brands` },
      { "@type": "ListItem", position: 3, name: brand.name, item: `${SEO.baseUrl}/brands/${slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PageHero
        eyebrow={`${brand.name} Repair`}
        h1={`${brand.name} Appliance Repair in Dharwad`}
        subtitle={brand.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Brands", href: "/brands" },
          { label: brand.name, href: `/brands/${slug}` },
        ]}
      />

      <main>
        {/* Appliances serviced */}
        <section className="relative bg-light-bg py-16 md:py-20">
          <div className="container mx-auto px-5 md:px-8">
            <ScrollReveal direction="blur">
              <div className="mb-6 flex items-center gap-3">
                <div className="h-[2px] w-8 bg-gradient-to-r from-yellow-400 to-yellow-400/40 rounded-full" />
                <span className="font-body text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">Appliances We Service</span>
              </div>
              <h2 className="font-display text-foreground mb-6" style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}>
                {brand.name} Appliances We Repair in Dharwad
              </h2>
              <div className="flex flex-wrap gap-2.5">
                {brand.appliancesServiced.map((a) => (
                  <span key={a} className="font-body text-[13px] font-medium px-4 py-2 rounded-full border border-border/50 bg-white/80 text-foreground">
                    {a}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Services */}
        {brandServices.length > 0 && (
          <section className="relative bg-white py-16 md:py-20">
            <div className="container mx-auto px-5 md:px-8">
              <ScrollReveal direction="blur">
                <div className="mb-10 text-center">
                  <div className="mb-4 flex items-center justify-center gap-3">
                    <div className="h-[1.5px] w-8 bg-gradient-to-r from-transparent to-yellow-400/60 rounded-full" />
                    <span className="font-body text-[10px] font-semibold uppercase tracking-[0.25em]" style={{ color: "hsl(37,90%,55%)" }}>
                      Available Services
                    </span>
                    <div className="h-[1.5px] w-8 bg-gradient-to-l from-transparent to-yellow-400/60 rounded-full" />
                  </div>
                  <h2 className="font-display text-foreground">
                    {brand.name} Repair Services in Dharwad
                  </h2>
                </div>
              </ScrollReveal>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {brandServices.map((s) => <ServiceCard key={s.slug} service={s} />)}
              </div>
            </div>
          </section>
        )}

        {/* Common Problems */}
        <section className="relative bg-light-bg py-16 md:py-20">
          <div className="container mx-auto px-5 md:px-8">
            <ScrollReveal direction="blur">
              <div className="mb-6 flex items-center gap-3">
                <div className="h-[2px] w-8 bg-gradient-to-r from-yellow-400 to-yellow-400/40 rounded-full" />
                <h2 className="font-body text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: "hsl(37,90%,55%)" }}>
                  Common Problems
                </h2>
              </div>
              <h3 className="font-display text-foreground mb-6" style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}>
                Common {brand.name} Appliance Problems We Fix in Dharwad
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {brand.commonProblems.map((p) => (
                  <span key={p} className="font-body text-[13px] font-medium px-4 py-2 rounded-full border border-border/50 bg-white/80 text-foreground">
                    {p}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        <TrustBadges heading={`Why Choose Hosatti for ${brand.name} Repairs in Dharwad`} />
        <WhatsAppCTA
          heading={`Book ${brand.name} Appliance Repair in Dharwad`}
          subheading="Doorstep service anywhere in Dharwad or walk into our Jay Nagar workshop."
          whatsappMessage={`Hello Hosatti Refrigeration Service!\n\nI need ${brand.name} appliance repair in Dharwad.\n\nPlease let me know your availability. Thank you!`}
        />
        <FAQAccordion faqs={brand.faqs} eyebrow="FAQ" heading={`${brand.name} Appliance Repair in Dharwad — FAQ`} />
      </main>
      <Footer />
    </>
  );
}
