// src/app/[location]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LOCATIONS, getLocationBySlug } from "@/lib/locations";
import { SERVICES } from "@/lib/services";
import { SEO } from "@/lib/seo";
import PageHero from "@/components/shared/PageHero";
import ServiceCard from "@/components/shared/ServiceCard";
import FAQAccordion from "@/components/shared/FAQAccordion";
import WhatsAppCTA from "@/components/shared/WhatsAppCTA";
import TrustBadges from "@/components/shared/TrustBadges";
import Footer from "@/components/layout/Footer";
import ScrollReveal, { StaggerItem } from "@/components/shared/ScrollReveal";
import { Check } from "lucide-react";

// Only generate the 30 known location slugs — prevents collision with other routes
export function generateStaticParams() {
  return LOCATIONS.map((l) => ({ location: l.slug }));
}

// Unknown slugs 404 (never server-render)
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ location: string }> }): Promise<Metadata> {
  const { location } = await params;
  const loc = getLocationBySlug(location);
  if (!loc) return {};
  return {
    title: loc.metaTitle,
    description: loc.metaDescription,
    keywords: loc.keywords,
    alternates: { canonical: `${SEO.baseUrl}/${location}` },
    other: {
      "geo.region": "IN-KA",
      "geo.placename": `${loc.name}, Dharwad, Karnataka, India`,
      "geo.position": "15.450056;74.9886131",
      "ICBM": "15.450056, 74.9886131",
    },
    openGraph: {
      title: loc.metaTitle,
      description: loc.metaDescription,
      url: `${SEO.baseUrl}/${location}`,
    },
  };
}

export default async function LocationPage({ params }: { params: Promise<{ location: string }> }) {
  const { location } = await params;
  const loc = getLocationBySlug(location);
  if (!loc) notFound();

  const localBizSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": `${SEO.baseUrl}/#business`,
    name: "Hosatti Refrigeration Service",
    description: `Expert home appliance repair in ${loc.name}, Dharwad — AC, refrigerator, washing machine & air cooler. Doorstep service to ${loc.name} or walk-in workshop at Jay Nagar.`,
    url: SEO.baseUrl,
    telephone: "+917899472430",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jaya Nagar, Opp Gurukul Academy, Saptapur Last Stop",
      addressLocality: "Dharwad",
      addressRegion: "Karnataka",
      postalCode: "580001",
      addressCountry: "IN",
    },
    geo: { "@type": "GeoCoordinates", latitude: 15.450056, longitude: 74.9886131 },
    areaServed: [
      { "@type": "City", name: "Dharwad" },
      { "@type": "Neighborhood", name: loc.name },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: loc.faqs.map((f) => ({
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
      { "@type": "ListItem", position: 2, name: `${loc.name}, Dharwad`, item: `${SEO.baseUrl}/${location}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBizSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PageHero
        eyebrow={`Appliance Repair in ${loc.name}`}
        h1={`Appliance Repair in ${loc.name}, Dharwad — AC, Fridge & Washing Machine`}
        subtitle={loc.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: `${loc.name}, Dharwad`, href: `/${location}` },
        ]}
      />

      <main>
        {/* Intro + Service Options */}
        <section className="relative bg-light-bg py-16 md:py-20">
          <div className="container mx-auto px-5 md:px-8">
            <ScrollReveal direction="blur">
              <div className="max-w-3xl">
                <div className="mb-6 flex items-center gap-3">
                  <div className="h-[2px] w-8 bg-gradient-to-r from-yellow-400 to-yellow-400/40 rounded-full" />
                  <span className="font-body text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">Two Ways to Get Service</span>
                </div>
                <h2 className="font-display text-foreground mb-6" style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}>
                  Doorstep Service in {loc.name} or Walk In to Our Workshop
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-border/50 bg-white/80 p-5 shadow-sm">
                    <p className="font-body font-bold text-[14px] text-foreground mb-2">🏠 Doorstep Service</p>
                    <p className="font-body text-[13px] text-muted-foreground leading-[1.7]">
                      Our technician comes directly to your home in {loc.name}, Dharwad. Book by call or WhatsApp — quick available.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-border/50 bg-white/80 p-5 shadow-sm">
                    <p className="font-body font-bold text-[14px] text-foreground mb-2">🏪 Walk-in Workshop</p>
                    <p className="font-body text-[13px] text-muted-foreground leading-[1.7]">
                      Bring your appliance to our Jay Nagar workshop, Dharwad — Opp Gurukul Academy, Saptapur Last Stop. Open Mon–Sun.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* All Services */}
        <section className="relative bg-white py-16 md:py-20">
          <div className="container mx-auto px-5 md:px-8">
            <ScrollReveal direction="blur">
              <div className="mb-10 text-center">
                <div className="mb-4 flex items-center justify-center gap-3">
                  <div className="h-[1.5px] w-8 bg-gradient-to-r from-transparent to-yellow-400/60 rounded-full" />
                  <span className="font-body text-[10px] font-semibold uppercase tracking-[0.25em] md:text-[11px]" style={{ color: "hsl(37,90%,55%)" }}>
                    All Services in {loc.name}
                  </span>
                  <div className="h-[1.5px] w-8 bg-gradient-to-l from-transparent to-yellow-400/60 rounded-full" />
                </div>
                <h2 className="font-display text-foreground">
                  Appliance Repair Services Available in {loc.name}, Dharwad
                </h2>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {SERVICES.map((s) => <ServiceCard key={s.slug} service={s} />)}
            </div>
          </div>
        </section>

        {/* Nearby Areas */}
        <section className="relative bg-light-bg py-14 md:py-16">
          <div className="container mx-auto px-5 md:px-8">
            <ScrollReveal direction="blur">
              <div className="mb-6 flex items-center gap-3">
                <div className="h-[2px] w-8 bg-gradient-to-r from-yellow-400 to-yellow-400/40 rounded-full" />
                <h2 className="font-body text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: "hsl(37,90%,55%)" }}>
                  Nearby Areas
                </h2>
              </div>
              <p className="font-body text-[15px] text-muted-foreground mb-5">
                We also serve these areas near {loc.name}:
              </p>
              <div className="flex flex-wrap gap-2.5">
                {loc.nearbyAreas.map((area) => (
                  <span key={area} className="font-body text-[13px] font-medium px-4 py-2 rounded-full border border-border/50 bg-white/80 text-foreground">
                    {area}, Dharwad
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Why Choose */}
        <section className="relative bg-white py-16 md:py-20">
          <div className="container mx-auto px-5 md:px-8">
            <ScrollReveal direction="blur">
              <div className="mb-8 flex items-center gap-3">
                <div className="h-[2px] w-8 bg-gradient-to-r from-yellow-400 to-yellow-400/40 rounded-full" />
                <h2 className="font-body text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: "hsl(37,90%,55%)" }}>
                  Why Choose Us
                </h2>
              </div>
              <h3 className="font-display text-foreground mb-8" style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}>
                Why {loc.name} Residents Trust Hosatti Refrigeration Service
              </h3>
            </ScrollReveal>
            <ScrollReveal staggerChildren staggerDelay={0.06}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Quick doorstep service to " + loc.name,
                  "15+ years experience in Dharwad",
                  "Certified technicians — all brands",
                  "Genuine spare parts with warranty",
                  "Transparent pricing — no hidden charges",
                  "Walk-in workshop alternative in Jay Nagar",
                ].map((item) => (
                  <StaggerItem key={item} direction="left">
                    <div className="flex items-start gap-3 rounded-2xl border border-border/40 bg-light-bg px-5 py-4 shadow-sm">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-400/20 to-yellow-400/5">
                        <Check className="h-3.5 w-3.5" style={{ color: "hsl(37,90%,55%)" }} />
                      </div>
                      <span className="font-body text-[14px] font-semibold text-foreground">{item}</span>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        <WhatsAppCTA
          heading={`Book Appliance Repair in ${loc.name}, Dharwad`}
          subheading={`Call or WhatsApp us for fast doorstep service anywhere in ${loc.name}, Dharwad.`}
        />
        <FAQAccordion faqs={loc.faqs} eyebrow="FAQ" heading={`Appliance Repair in ${loc.name}, Dharwad — FAQ`} />
        <TrustBadges />
      </main>
      <Footer />
    </>
  );
}
