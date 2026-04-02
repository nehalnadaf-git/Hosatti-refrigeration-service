// src/app/services/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Check } from "lucide-react";
import { SERVICES, getServiceBySlug } from "@/lib/services";
import { SEO } from "@/lib/seo";
import PageHero from "@/components/shared/PageHero";
import ServiceCard from "@/components/shared/ServiceCard";
import FAQAccordion from "@/components/shared/FAQAccordion";
import WhatsAppCTA from "@/components/shared/WhatsAppCTA";
import TrustBadges from "@/components/shared/TrustBadges";
import Footer from "@/components/layout/Footer";
import ScrollReveal, { StaggerItem } from "@/components/shared/ScrollReveal";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: { canonical: `${SEO.baseUrl}/services/${slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${SEO.baseUrl}/services/${slug}`,
      images: [{ url: service.image, alt: service.name }],
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = SERVICES.filter((s) => service.relatedServices.includes(s.slug));

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.name} in Dharwad`,
    description: service.fullDescription,
    url: `${SEO.baseUrl}/services/${service.slug}`,
    serviceType: service.categoryLabel,
    provider: { "@id": `${SEO.baseUrl}/#business` },
    areaServed: { "@type": "City", name: "Dharwad" },
    availableChannel: [
      { "@type": "ServiceChannel", serviceType: "Doorstep", availableLanguage: "Kannada, English, Hindi" },
      { "@type": "ServiceChannel", serviceType: "Walk-in Workshop", name: "Jay Nagar Workshop, Dharwad" },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((f) => ({
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
      { "@type": "ListItem", position: 2, name: "Services", item: `${SEO.baseUrl}/services` },
      { "@type": "ListItem", position: 3, name: service.name, item: `${SEO.baseUrl}/services/${slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PageHero
        eyebrow={service.categoryLabel}
        h1={`${service.name} in Dharwad`}
        subtitle={service.tagline}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.name, href: `/services/${slug}` },
        ]}
      />

      <main>
        {/* Overview */}
        <section className="relative bg-light-bg py-16 md:py-20 overflow-hidden">
          <div className="container mx-auto px-5 md:px-8">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
              <ScrollReveal direction="right">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={service.image}
                    alt={`${service.name} in Dharwad — Hosatti Refrigeration Service`}
                    width={560}
                    height={420}
                    className="w-full object-cover"
                    priority
                  />
                </div>
              </ScrollReveal>
              <ScrollReveal direction="blur" delay={0.1}>
                <div>
                  <div className="mb-5 flex items-center gap-3">
                    <div className="h-[2px] w-8 bg-gradient-to-r from-yellow-400 to-yellow-400/40 rounded-full" />
                    <span className="font-body text-[10px] font-semibold uppercase tracking-[0.25em] text-gold md:text-[11px]">Service Overview</span>
                  </div>
                  <h2 className="font-display text-foreground pb-1" style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}>
                    {service.name} in <span className="bg-gradient-to-r from-navy to-[hsl(220,85%,38%)] bg-clip-text text-transparent italic px-1">Dharwad</span>
                  </h2>
                  <p className="mt-5 font-body text-[15px] md:text-[17px] text-muted-foreground leading-[1.8]">
                    {service.fullDescription}
                  </p>
                  <div className="mt-5 flex items-center gap-2 font-body text-[13px] text-muted-foreground">
                    <span className="font-semibold text-foreground">Estimated Time:</span> {service.estimatedTime}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="relative bg-white py-16 md:py-20 overflow-hidden">
          <div className="container mx-auto px-5 md:px-8">
            <ScrollReveal direction="blur">
              <div className="mb-10 flex items-center gap-3">
                <div className="h-[2px] w-8 bg-gradient-to-r from-yellow-400 to-yellow-400/40 rounded-full" />
                <h2 className="font-body text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: "hsl(37,90%,55%)" }}>
                  What&apos;s Included
                </h2>
              </div>
              <h3 className="font-display text-foreground mb-8" style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}>
                Our {service.name} Service Covers:
              </h3>
            </ScrollReveal>
            <ScrollReveal staggerChildren staggerDelay={0.05} delay={0.1}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.whatIsIncluded.map((item) => (
                  <StaggerItem key={item} direction="left">
                    <div className="flex items-start gap-3 rounded-2xl border border-border/40 bg-white/90 px-5 py-4 shadow-sm hover:shadow-md hover:border-yellow-400/25 hover:-translate-y-0.5 transition-all duration-300">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-400/20 to-yellow-400/5 border border-yellow-400/20">
                        <Check className="h-4 w-4" style={{ color: "hsl(37,90%,55%)" }} />
                      </div>
                      <span className="font-body text-[14px] md:text-[15px] font-semibold text-foreground">{item}</span>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Symptoms */}
        <section className="relative bg-light-bg py-16 md:py-20">
          <div className="container mx-auto px-5 md:px-8">
            <ScrollReveal direction="blur">
              <div className="mb-8 flex items-center gap-3">
                <div className="h-[2px] w-8 bg-gradient-to-r from-yellow-400 to-yellow-400/40 rounded-full" />
                <span className="font-body text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: "hsl(37,90%,55%)" }}>
                  Problems We Fix
                </span>
              </div>
              <h2 className="font-display text-foreground mb-8" style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}>
                Common {service.name} Problems
              </h2>
            </ScrollReveal>
            <div className="flex flex-wrap gap-2.5">
              {service.symptoms.map((s) => (
                <span
                  key={s}
                  className="font-body text-[13px] font-medium px-4 py-2 rounded-full border border-border/50 bg-white/80 text-foreground shadow-sm"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Brands */}
        <section className="relative bg-white py-16 md:py-20">
          <div className="container mx-auto px-5 md:px-8">
            <ScrollReveal direction="blur">
              <div className="mb-8 flex items-center gap-3">
                <div className="h-[2px] w-8 bg-gradient-to-r from-yellow-400 to-yellow-400/40 rounded-full" />
                <h2 className="font-body text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: "hsl(37,90%,55%)" }}>
                  Brands We Service
                </h2>
              </div>
              <h3 className="font-display text-foreground mb-8" style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}>
                All Major Brands Serviced in Dharwad
              </h3>
            </ScrollReveal>
            <div className="flex flex-wrap gap-2.5">
              {service.brands.map((b) => (
                <span
                  key={b}
                  className="font-body text-[13px] font-semibold px-4 py-2 rounded-full border border-border/50 bg-white shadow-sm text-foreground hover:border-yellow-400/40 transition-colors"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        </section>

        <TrustBadges heading={`Why Choose Hosatti for ${service.name} in Dharwad`} />
        <WhatsAppCTA
          heading={`Book ${service.name} in Dharwad Today`}
          subheading="Doorstep service anywhere in Dharwad or walk into our Jay Nagar workshop."
          whatsappMessage={service.whatsappMessage}
        />

        <FAQAccordion faqs={service.faqs} eyebrow="FAQ" heading={`${service.name} — Frequently Asked Questions`} />

        {/* Related Services */}
        {related.length > 0 && (
          <section className="relative bg-white py-16 md:py-20">
            <div className="container mx-auto px-5 md:px-8">
              <ScrollReveal direction="blur">
                <div className="mb-10 flex items-center gap-3">
                  <div className="h-[2px] w-8 bg-gradient-to-r from-yellow-400 to-yellow-400/40 rounded-full" />
                  <h2 className="font-body text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: "hsl(37,90%,55%)" }}>
                    Related Services
                  </h2>
                </div>
              </ScrollReveal>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {related.map((s) => <ServiceCard key={s.slug} service={s} />)}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
