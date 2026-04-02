// src/app/brands/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { BRANDS } from "@/lib/brands";
import { SEO } from "@/lib/seo";
import PageHero from "@/components/shared/PageHero";
import WhatsAppCTA from "@/components/shared/WhatsAppCTA";
import Footer from "@/components/layout/Footer";
import ScrollReveal, { StaggerItem } from "@/components/shared/ScrollReveal";

export const metadata: Metadata = {
  title: "Appliance Brands We Repair in Dharwad | Hosatti Refrigeration",
  description:
    "Hosatti Refrigeration Service repairs 24+ appliance brands in Dharwad — LG, Samsung, Whirlpool, IFB, Godrej, Daikin, Voltas & more. Expert AC, fridge & washing machine repair. Call +91-7899472430.",
  alternates: { canonical: `${SEO.baseUrl}/brands` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SEO.baseUrl },
    { "@type": "ListItem", position: 2, name: "Brands", item: `${SEO.baseUrl}/brands` },
  ],
};

// Group brands by appliance type for better UX
const BRAND_GROUPS = [
  {
    label: "AC Brands",
    brands: ["lg", "samsung", "daikin", "voltas", "blue-star", "carrier", "o-general", "hitachi", "lloyd", "mitsubishi", "panasonic", "haier", "onida", "sharp", "tcl"],
  },
  {
    label: "Refrigerator Brands",
    brands: ["lg", "samsung", "godrej", "whirlpool", "haier", "bosch", "siemens", "electrolux", "videocon", "panasonic", "sharp", "onida", "bpl", "kelvinator"],
  },
  {
    label: "Washing Machine Brands",
    brands: ["lg", "samsung", "ifb", "whirlpool", "bosch", "siemens", "godrej", "haier", "videocon", "electrolux"],
  },
  {
    label: "Air Cooler Brands",
    brands: ["voltas"],
  },
];

export default function BrandsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PageHero
        eyebrow="24+ Brands Serviced"
        h1="Appliance Brands We Repair in Dharwad"
        subtitle="Hosatti Refrigeration Service repairs 24+ major appliance brands in Dharwad — ACs, refrigerators, washing machines, and air coolers. Click your brand to see specific repair services."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Brands", href: "/brands" }]}
      />

      <main>
        {/* All Brands Grid */}
        <section className="relative bg-light-bg py-16 md:py-20">
          <div className="container mx-auto px-5 md:px-8">
            <ScrollReveal direction="blur">
              <div className="mb-8 flex items-center gap-3">
                <div className="h-[2px] w-8 bg-gradient-to-r from-yellow-400 to-yellow-400/40 rounded-full" />
                <h2 className="font-body text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: "hsl(37,90%,55%)" }}>
                  All Brands
                </h2>
              </div>
              <p className="font-body text-[15px] md:text-[17px] text-muted-foreground leading-[1.8] max-w-2xl mb-10">
                Select your appliance brand to see all repair and service options available in Dharwad.
              </p>
            </ScrollReveal>

            <ScrollReveal staggerChildren staggerDelay={0.04}>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {BRANDS.map((brand) => (
                  <StaggerItem key={brand.slug} direction="scale">
                    <Link
                      href={`/brands/${brand.slug}`}
                      className="group flex flex-col items-center justify-center rounded-2xl border border-border/40 bg-white/90 px-4 py-5 shadow-sm text-center transition-all duration-300 hover:shadow-lg hover:border-yellow-400/30 hover:-translate-y-0.5"
                    >
                      <span className="font-display text-[15px] font-bold text-foreground group-hover:text-navy transition-colors leading-tight mb-1">
                        {brand.name}
                      </span>
                      <span className="font-body text-[10px] text-muted-foreground/70 uppercase tracking-[0.1em]">
                        {brand.appliancesServiced.length} appliance{brand.appliancesServiced.length !== 1 ? "s" : ""}
                      </span>
                    </Link>
                  </StaggerItem>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* By Category */}
        <section className="relative bg-white py-16 md:py-20">
          <div className="container mx-auto px-5 md:px-8">
            <ScrollReveal direction="blur">
              <div className="mb-10 text-center">
                <div className="mb-4 flex items-center justify-center gap-3">
                  <div className="h-[1.5px] w-8 bg-gradient-to-r from-transparent to-yellow-400/60 rounded-full" />
                  <span className="font-body text-[10px] font-semibold uppercase tracking-[0.25em] md:text-[11px]" style={{ color: "hsl(37,90%,55%)" }}>
                    By Appliance Type
                  </span>
                  <div className="h-[1.5px] w-8 bg-gradient-to-l from-transparent to-yellow-400/60 rounded-full" />
                </div>
                <h2 className="font-display text-foreground">Find Repair By Brand & Appliance Type</h2>
              </div>
            </ScrollReveal>

            <div className="grid gap-8 md:grid-cols-2">
              {BRAND_GROUPS.map((group) => {
                const groupBrands = BRANDS.filter((b) => group.brands.includes(b.slug));
                return (
                  <ScrollReveal key={group.label} direction="blur" delay={0.05}>
                    <div className="rounded-2xl border border-border/40 bg-light-bg p-6">
                      <h3 className="font-body text-[13px] font-bold uppercase tracking-[0.15em] mb-4" style={{ color: "hsl(37,90%,55%)" }}>
                        {group.label}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {groupBrands.map((b) => (
                          <Link
                            key={b.slug}
                            href={`/brands/${b.slug}`}
                            className="font-body text-[13px] font-semibold px-3 py-1.5 rounded-xl border border-border/50 bg-white/90 text-foreground shadow-sm hover:border-yellow-400/40 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                          >
                            {b.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        <WhatsAppCTA
          heading="Don't See Your Brand? We Still Fix It!"
          subheading="Call or WhatsApp Hosatti Refrigeration Service — if we can source parts for your brand, we'll repair it in Dharwad."
        />
      </main>
      <Footer />
    </>
  );
}
