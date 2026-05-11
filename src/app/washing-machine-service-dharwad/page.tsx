// src/app/washing-machine-service-dharwad/page.tsx
import type { Metadata } from "next";
import { Droplets, Shield, Star } from "lucide-react";
import { SEO } from "@/lib/seo";
import { getServiceBySlug } from "@/lib/services";
import PageHero from "@/components/shared/PageHero";
import ServiceCard from "@/components/shared/ServiceCard";
import FAQAccordion from "@/components/shared/FAQAccordion";
import TrustBadges from "@/components/shared/TrustBadges";
import WhatsAppCTA from "@/components/shared/WhatsAppCTA";
import Footer from "@/components/layout/Footer";
import ScrollReveal, { StaggerItem } from "@/components/shared/ScrollReveal";

export const metadata: Metadata = {
  title: "Washing Machine Service in Dharwad | Drum Descaling & Maintenance — Hosatti",
  description:
    "Expert washing machine service in Dharwad by Hosatti Refrigeration Service. Drum descaling, hard water scale removal, filter cleaning & deep maintenance. Doorstep service, all brands. Call +91-7899472430!",
  keywords: [
    "washing machine service in Dharwad", "washing machine service Dharwad", "washing machine maintenance Dharwad",
    "drum descaling Dharwad", "front load maintenance Dharwad", "hard water washing machine Dharwad",
    "washing machine deep cleaning Dharwad", "automatic washing machine descaling service Dharwad",
    "LG washing machine service Dharwad", "Samsung washing machine service Dharwad",
    "IFB washing machine service Dharwad", "semi automatic service Dharwad",
    "filter cleaning washing machine Dharwad", "washing machine service near me Dharwad",
  ],
  alternates: { canonical: `${SEO.baseUrl}/washing-machine-service-dharwad` },
  openGraph: {
    title: "Washing Machine Service in Dharwad | Drum Descaling — Hosatti",
    description: "Expert washing machine service in Dharwad. Drum descaling, hard water scale removal & deep maintenance. All brands. Call +91-7899472430!",
    url: `${SEO.baseUrl}/washing-machine-service-dharwad`,
  },
};

const SERVICE_STEPS = [
  { icon: "🧪", title: "Hard Water Scale Assessment", desc: "We test for limescale buildup in heating elements and drum — critical in Dharwad where borewell water is 300–600 ppm hardness." },
  { icon: "⚗️", title: "Chemical Drum Descaling", desc: "Professional descaling treatment removes calcium carbonate deposits from drum, heating element, and circulation hoses — restoring energy efficiency." },
  { icon: "🔩", title: "Drain Filter Deep Clean", desc: "Full drain pump filter disassembly, cleaning of lint, mineral deposits, and debris that cause slow draining in Dharwad's hard water conditions." },
  { icon: "🚿", title: "Door Seal Sanitization", desc: "Rubber door gasket cleaning with anti-mold treatment — eliminating the musty smell caused by soap scum and mineral residue buildup." },
  { icon: "⚡", title: "Motor & Belt Inspection", desc: "Drive motor, belt, and spin bearing inspection to detect early wear before it becomes a costly motor replacement." },
  { icon: "💧", title: "Inlet Valve Screen Cleaning", desc: "Water inlet filter screens cleared of mineral deposits that restrict water flow — common in Dharwad's hard borewell water supply." },
  { icon: "🖥️", title: "PCB & Sensor Diagnostics", desc: "Control board and temperature sensor testing. Error code diagnosis and preventive PCB health check." },
  { icon: "📊", title: "Post-Service Full Cycle Test", desc: "Complete wash-and-spin cycle run to verify heating, drum rotation, drainage, and spin efficiency before handover." },
];

const BRANDS = ["LG", "Samsung", "IFB", "Whirlpool", "Bosch", "Siemens", "Godrej", "Haier", "Panasonic", "Electrolux", "Videocon", "Onida", "BPL"];

const FAQS = [
  { question: "How to descale a washing machine in Dharwad's hard water?", answer: "Dharwad's borewell water tests at 300–600 ppm hardness — 3–6 times above the BIS recommended safe limit. This mineral-rich water deposits calcium carbonate (limescale) on heating elements and drum walls. Professional descaling involves a chemical soak cycle followed by a high-temperature rinse to dissolve and flush all mineral deposits. We recommend professional descaling every 6–8 months for Dharwad households using borewell water." },
  { question: "Why do clothes smell bad after washing in Dharwad?", answer: "The musty smell is caused by a combination of Dharwad's hard water and soap scum buildup. Hard water minerals react with laundry detergent to form an insoluble, sticky residue (instead of cleaning lather) that coats the drum interior and rubber door seal. This damp residue rapidly develops black mold and bacterial colonies in the machine's warm, dark environment. A professional drum descaling and door seal deep-clean eliminates the odor permanently." },
  { question: "How to clean a washing machine drum in Dharwad?", answer: "For Dharwad's specific hard water conditions, a drum clean requires: (1) a professional chemical descaling agent run on a hot cycle to dissolve mineral deposits, (2) a deep clean of the drum paddles and door seal where soap scum accumulates, (3) drain pump filter clearing to remove trapped lint and debris, and (4) an anti-mold treatment of the rubber gasket. A basic hot water cycle with vinegar is not sufficient for 500+ ppm borewell water." },
  { question: "Does hard water damage washing machines in Dharwad?", answer: "Yes — significantly. Dharwad's extreme borewell water hardness (up to 600 ppm) is one of the most destructive forces acting on washing machines. The heating element becomes coated in limescale and must work up to 40% harder to heat water, leading to overheating, tripping, and eventual element failure. Annual professional servicing with descaling is the only effective defense." },
  { question: "Do you service both front-load and top-load washing machines in Dharwad?", answer: "Yes. We service all types — front-load fully automatic, top-load fully automatic, and semi-automatic washing machines in Dharwad. Our technicians carry descaling chemicals, drain pump cleaning tools, and common spare parts for all major brands including LG, Samsung, IFB, Whirlpool, Bosch, and Godrej." },
];

const breadcrumbSchema = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SEO.baseUrl },
    { "@type": "ListItem", position: 2, name: "Washing Machine Service in Dharwad", item: `${SEO.baseUrl}/washing-machine-service-dharwad` },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org", "@type": "Service",
  name: "Washing Machine Service in Dharwad",
  alternateName: ["Washing Machine Maintenance Dharwad", "Drum Descaling Dharwad", "Washing Machine Deep Cleaning Dharwad"],
  description: "Expert washing machine service in Dharwad. Chemical drum descaling for hard water, drain filter cleaning, door seal sanitization, motor inspection, and PCB diagnostics. Doorstep service, all brands.",
  url: `${SEO.baseUrl}/washing-machine-service-dharwad`,
  serviceType: "Washing Machine Maintenance",
  provider: { "@id": `${SEO.baseUrl}/#business` },
  areaServed: { "@type": "City", name: "Dharwad" },
};

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
};

export default function WashingMachineServiceDharwadPage() {
  const relatedSlugs = ["fully-automatic-washing-machine-repair-dharwad", "semi-automatic-washing-machine-repair-dharwad", "washing-machine-repair-service-dharwad"];
  const related = relatedSlugs.map((s) => getServiceBySlug(s)).filter(Boolean) as NonNullable<ReturnType<typeof getServiceBySlug>>[];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        eyebrow="Washing Machine Service — Dharwad"
        h1="Expert Washing Machine Service in Dharwad — Drum Descaling & Deep Maintenance"
        subtitle="Protect your washing machine from Dharwad's hard borewell water (300–600 ppm). Professional drum descaling, filter cleaning & full maintenance. Doorstep service, all brands."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Washing Machine Service Dharwad", href: "/washing-machine-service-dharwad" }]}
      />

      <main>
        {/* Hyper-Local Hard Water Section */}
        <section className="relative bg-light-bg py-16 md:py-20">
          <div className="container mx-auto px-5 md:px-8">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
              <ScrollReveal direction="right">
                <div className="rounded-2xl bg-gradient-to-br from-blue-900/5 to-blue-900/10 border border-blue-900/10 p-8 space-y-5">
                  {[
                    { Icon: Droplets, color: "text-blue-600 bg-blue-50", title: "300–600 ppm Borewell Water Destroys Heating Elements", body: "Dharwad's groundwater is classified as 'Very Hard' at 300–600 ppm — 3–6× above safe limits. As this mineral water is heated during a wash cycle, dissolved calcium precipitates out and forms solid limescale on the heating element. The element must work 40% harder to heat water, leading to overheating and eventual burnout." },
                    { Icon: Shield, color: "text-purple-600 bg-purple-50", title: "Soap Scum & Mold: The Musty Smell Problem", body: "Dharwad's hard water reacts with laundry detergent to form soap scum instead of cleaning lather. This sticky residue coats the drum and door seal, creating a breeding ground for black mold — causing the distinctive musty smell many Dharwad homeowners experience after washing clothes." },
                    { Icon: Star, color: "text-amber-600 bg-amber-50", title: "Drain Filters Clog 3× Faster in Hard Water", body: "Mineral deposits from Dharwad's borewell water combine with lint to clog drain pump filters 3× faster than in cities with soft water supply. A clogged filter causes slow draining, machine errors, and eventual pump burnout." },
                  ].map(({ Icon, color, title, body }) => (
                    <div key={title} className="flex gap-4">
                      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${color}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-body text-[14px] font-bold text-foreground mb-1">{title}</h3>
                        <p className="font-body text-[13px] text-muted-foreground leading-[1.7]">{body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal direction="blur" delay={0.1}>
                <div>
                  <div className="mb-5 flex items-center gap-3">
                    <div className="h-[2px] w-8 bg-gradient-to-r from-yellow-400 to-yellow-400/40 rounded-full" />
                    <span className="font-body text-[10px] font-semibold uppercase tracking-[0.25em] text-gold md:text-[11px]">Dharwad&apos;s Hard Water Crisis</span>
                  </div>
                  <h2 className="font-display text-foreground pb-4" style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}>
                    Dharwad&apos;s Borewell Water is <span className="bg-gradient-to-r from-navy to-[hsl(220,85%,38%)] bg-clip-text text-transparent italic px-1">Destroying Your Washing Machine</span>
                  </h2>
                  <p className="font-body text-[15px] md:text-[17px] text-muted-foreground leading-[1.8]">
                    Do not allow Dharwad&apos;s corrosive, 500 ppm borewell water to permanently destroy the heating element in your ₹35,000 washing machine. The damage is silent and cumulative — you won&apos;t notice it until the machine stops working entirely. Professional chemical descaling every 6–8 months is the only proven defense against Dharwad&apos;s specific water chemistry.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Service Blueprint */}
        <section className="relative bg-white py-16 md:py-20">
          <div className="container mx-auto px-5 md:px-8">
            <ScrollReveal direction="blur">
              <div className="mb-4 flex items-center gap-3">
                <div className="h-[2px] w-8 bg-gradient-to-r from-yellow-400 to-yellow-400/40 rounded-full" />
                <span className="font-body text-[10px] font-semibold uppercase tracking-[0.25em] text-gold md:text-[11px]">What&apos;s Included</span>
              </div>
              <h2 className="font-display text-foreground mb-3" style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}>Our 8-Point Washing Machine Service Blueprint</h2>
              <p className="font-body text-[15px] text-muted-foreground leading-[1.8] mb-10 max-w-2xl">
                Specifically designed for Dharwad&apos;s hard water conditions — every step addresses the real, local forces that degrade your washing machine faster than anywhere else.
              </p>
            </ScrollReveal>
            <ScrollReveal staggerChildren staggerDelay={0.05} delay={0.1}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {SERVICE_STEPS.map((step) => (
                  <StaggerItem key={step.title} direction="up">
                    <div className="rounded-2xl border border-border/40 bg-white px-5 py-5 shadow-sm hover:shadow-md hover:border-yellow-400/30 hover:-translate-y-0.5 transition-all duration-300 h-full">
                      <div className="text-2xl mb-3">{step.icon}</div>
                      <h3 className="font-body text-[14px] font-bold text-foreground mb-2">{step.title}</h3>
                      <p className="font-body text-[13px] text-muted-foreground leading-[1.7]">{step.desc}</p>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Brands */}
        <section className="relative bg-light-bg py-14">
          <div className="container mx-auto px-5 md:px-8 text-center">
            <ScrollReveal direction="blur">
              <div className="mb-3 flex items-center justify-center gap-3">
                <div className="h-[1.5px] w-8 bg-gradient-to-r from-transparent to-yellow-400/60 rounded-full" />
                <span className="font-body text-[10px] font-semibold uppercase tracking-[0.25em] text-gold md:text-[11px]">All Brands Serviced</span>
                <div className="h-[1.5px] w-8 bg-gradient-to-l from-transparent to-yellow-400/60 rounded-full" />
              </div>
              <h2 className="font-display text-foreground mb-8" style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}>Every Washing Machine Brand Serviced in Dharwad</h2>
            </ScrollReveal>
            <div className="flex flex-wrap gap-2.5 justify-center">
              {BRANDS.map((b) => (
                <span key={b} className="font-body text-[13px] font-semibold px-4 py-2 rounded-full border border-border/50 bg-white shadow-sm text-foreground hover:border-yellow-400/40 transition-colors">{b}</span>
              ))}
            </div>
          </div>
        </section>

        <TrustBadges heading="Why Dharwad Homeowners Trust Hosatti for Washing Machine Service" />

        <WhatsAppCTA
          heading="Book Washing Machine Service in Dharwad Today"
          subheading="Doorstep service anywhere in Dharwad or walk into our Jay Nagar workshop. All brands, 15+ years experience."
        />

        <FAQAccordion faqs={FAQS} eyebrow="Frequently Asked" heading="Washing Machine Service in Dharwad — Your Questions Answered" />

        {/* Related Services — real ServiceCards with images */}
        {related.length > 0 && (
          <section className="relative bg-white py-16 md:py-20">
            <div className="container mx-auto px-5 md:px-8">
              <ScrollReveal direction="blur">
                <div className="mb-10 flex items-center gap-3">
                  <div className="h-[2px] w-8 bg-gradient-to-r from-yellow-400 to-yellow-400/40 rounded-full" />
                  <h2 className="font-body text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: "hsl(37,90%,55%)" }}>
                    Related Washing Machine Services in Dharwad
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
