// src/app/refrigerator-service-dharwad/page.tsx
import type { Metadata } from "next";
import { Zap, Thermometer, Shield } from "lucide-react";
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
  title: "Refrigerator Service in Dharwad | Fridge Service & Maintenance — Hosatti",
  description:
    "Expert refrigerator service in Dharwad by Hosatti Refrigeration Service. Preventive fridge maintenance, gas check, condenser cleaning & compressor inspection. Doorstep service, all brands. Call +91-7899472430!",
  keywords: [
    "refrigerator service in Dharwad", "fridge service Dharwad", "refrigerator service Dharwad",
    "fridge maintenance Dharwad", "deep cleaning fridge Dharwad", "refrigerator gas refilling Dharwad",
    "compressor check Dharwad", "double door fridge service Dharwad", "routine fridge service Dharwad",
    "preventive refrigerator maintenance Dharwad", "fridge gas filling near Jay Nagar",
    "LG fridge service Dharwad", "Samsung refrigerator service Dharwad", "fridge service near me Dharwad",
  ],
  alternates: { canonical: `${SEO.baseUrl}/refrigerator-service-dharwad` },
  openGraph: {
    title: "Refrigerator Service in Dharwad | Fridge Maintenance — Hosatti",
    description: "Expert fridge service & preventive maintenance in Dharwad. Gas check, condenser cleaning, compressor inspection. All brands. Call +91-7899472430!",
    url: `${SEO.baseUrl}/refrigerator-service-dharwad`,
  },
};

const SERVICE_STEPS = [
  { icon: "🔬", title: "Full Refrigerator Diagnostic", desc: "Temperature calibration check, thermostat accuracy test, and PCB continuity diagnosis." },
  { icon: "🌡️", title: "Condenser Coil Cleaning", desc: "Removal of dust and debris from condenser coils — essential in Dharwad where dust buildup forces the compressor to overwork." },
  { icon: "⚡", title: "Compressor & Relay Inspection", desc: "Starting relay, overload protector, and compressor electrical load testing — critical protection against HESCOM power fluctuations." },
  { icon: "🧊", title: "Refrigerant Level Check", desc: "Gas pressure diagnostics to detect any slow leaks before they cause complete cooling failure." },
  { icon: "🚪", title: "Door Gasket & Seal Inspection", desc: "Full door seal integrity check. A worn gasket lets warm air in continuously, destroying energy efficiency." },
  { icon: "🧹", title: "Evaporator & Fan Cleaning", desc: "Internal evaporator fan and blade cleaning for even, consistent cooling across all shelves." },
  { icon: "💧", title: "Drain Pan & Defrost Check", desc: "Defrost drain clearing and pan sanitization to prevent water pooling and bacterial growth inside the fridge." },
  { icon: "📊", title: "Post-Service Temp Verification", desc: "We verify actual internal temperature reaches the manufacturer-specified 4°C before the technician leaves." },
];

const BRANDS = ["LG", "Samsung", "Godrej", "Whirlpool", "Haier", "Bosch", "Siemens", "Electrolux", "Videocon", "Panasonic", "Hitachi", "Sharp", "Onida", "BPL", "Kelvinator"];

const FAQS = [
  { question: "Why is ice forming in the freezer but my fridge section stays warm?", answer: "This is the most common sign of a defrost system failure in Dharwad — specifically a faulty defrost heater or defrost thermostat. It can also be caused by a blocked air vent between the freezer and fridge compartments due to ice buildup. Our technician diagnoses and resolves the exact cause during the service visit." },
  { question: "How to reduce refrigerator power consumption in Dharwad?", answer: "The number one cause of high refrigerator electricity consumption in Dharwad is dirty condenser coils. Dust accumulation makes the compressor run continuously at high load. A professional condenser coil cleaning, combined with door gasket inspection and proper temperature calibration, can reduce fridge electricity consumption by 10–20%." },
  { question: "Why is my fridge making a loud noise in Dharwad?", answer: "Loud noises from a refrigerator are typically caused by a failing evaporator fan motor, ice buildup on the fan blades, a loose drain pan vibrating, or a compressor that is struggling due to dirty coils. Our service covers all these components with a systematic inspection." },
  { question: "How does Dharwad's power supply affect refrigerators?", answer: "Dharwad's HESCOM grid is known for frequent unscheduled outages and voltage fluctuations. Every time power is cut and restored within minutes, the fridge compressor attempts to restart against full internal pressure — drawing locked-rotor current that burns the starting relay and motor windings. Our service includes a full electrical health check to protect against this." },
  { question: "Do you provide doorstep refrigerator service in Dharwad?", answer: "Yes. Our technicians visit your home anywhere in Dharwad for routine refrigerator maintenance. Most service visits take 1–2 hours. If a component replacement is needed, we carry common spare parts for LG, Samsung, Godrej, Whirlpool, and other top brands for same-visit repair wherever possible." },
];

const breadcrumbSchema = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SEO.baseUrl },
    { "@type": "ListItem", position: 2, name: "Refrigerator Service in Dharwad", item: `${SEO.baseUrl}/refrigerator-service-dharwad` },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org", "@type": "Service",
  name: "Refrigerator Service in Dharwad",
  alternateName: ["Fridge Service Dharwad", "Fridge Maintenance Dharwad", "Refrigerator Maintenance Dharwad"],
  description: "Expert refrigerator service and preventive maintenance in Dharwad by Hosatti Refrigeration Service. Condenser cleaning, compressor inspection, gas check, door seal inspection, and defrost system service. Doorstep service, all brands.",
  url: `${SEO.baseUrl}/refrigerator-service-dharwad`,
  serviceType: "Refrigerator Maintenance",
  provider: { "@id": `${SEO.baseUrl}/#business` },
  areaServed: { "@type": "City", name: "Dharwad" },
};

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
};

export default function RefrigeratorServiceDharwadPage() {
  const relatedSlugs = ["refrigerator-repair-service-dharwad", "fridge-compressor-repair-dharwad", "refrigerator-gas-recharge-dharwad"];
  const related = relatedSlugs.map((s) => getServiceBySlug(s)).filter(Boolean) as NonNullable<ReturnType<typeof getServiceBySlug>>[];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        eyebrow="Refrigerator Service — Dharwad"
        h1="Expert Refrigerator Service in Dharwad — Fridge Maintenance, All Brands"
        subtitle="Protect your fridge from HESCOM voltage spikes and Dharwad's dusty environment. 15+ years of trusted preventive refrigerator maintenance by Jay Nagar's leading technical experts."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Refrigerator Service Dharwad", href: "/refrigerator-service-dharwad" }]}
      />

      <main>
        {/* Hyper-Local Empathy Block */}
        <section className="relative bg-light-bg py-16 md:py-20">
          <div className="container mx-auto px-5 md:px-8">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
              <ScrollReveal direction="right">
                <div className="rounded-2xl bg-gradient-to-br from-navy/5 to-navy/10 border border-navy/10 p-8 space-y-5">
                  {[
                    { Icon: Zap, color: "text-orange-600 bg-orange-50", title: "HESCOM Outages Destroy Compressors", body: "Frequent HESCOM micro-outages cause the fridge compressor to restart against high internal pressure — drawing locked-rotor current that burns the starting relay and motor windings. This is Dharwad's #1 cause of premature compressor failure. Our service includes a full electrical health check to detect weak relays before they fail." },
                    { Icon: Thermometer, color: "text-red-600 bg-red-50", title: "Dust-Choked Coils Spike Electricity Bills", body: "Dharwad's construction dust coats condenser coils, trapping heat inside the refrigerator cabinet. The compressor runs continuously at high load — consuming significantly more electricity than necessary and accelerating wear." },
                    { Icon: Shield, color: "text-green-700 bg-green-50", title: "Prevent a ₹6,000 Compressor Replacement", body: "A ₹6,000+ compressor replacement can usually be avoided with a routine annual service. Checking the starting relay (a ₹200 part) and cleaning the condenser coils can extend your fridge's life by 5+ years." },
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
                    <span className="font-body text-[10px] font-semibold uppercase tracking-[0.25em] text-gold md:text-[11px]">Why Dharwad Fridges Need Annual Servicing</span>
                  </div>
                  <h2 className="font-display text-foreground pb-4" style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}>
                    Your Fridge is Under Attack from <span className="bg-gradient-to-r from-navy to-[hsl(220,85%,38%)] bg-clip-text text-transparent italic px-1">Dharwad&apos;s Grid</span>
                  </h2>
                  <p className="font-body text-[15px] md:text-[17px] text-muted-foreground leading-[1.8]">
                    Dharwad&apos;s HESCOM power grid is known for frequent unscheduled outages and voltage fluctuations. Every time power is cut and restored within minutes, your refrigerator compressor attempts to restart against full internal pressure. This mechanical stress is invisible — until one day your fridge simply stops cooling and you face a ₹6,000+ repair bill. Annual servicing catches these vulnerabilities early.
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
              <h2 className="font-display text-foreground mb-3" style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}>Our 8-Point Refrigerator Service Blueprint</h2>
              <p className="font-body text-[15px] text-muted-foreground leading-[1.8] mb-10 max-w-2xl">
                A full Hosatti fridge service is a systematic, multi-point inspection — not just a quick wipe-down. Every critical component is checked, tested, and serviced.
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
              <h2 className="font-display text-foreground mb-8" style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}>Every Fridge Brand Serviced in Dharwad</h2>
            </ScrollReveal>
            <div className="flex flex-wrap gap-2.5 justify-center">
              {BRANDS.map((b) => (
                <span key={b} className="font-body text-[13px] font-semibold px-4 py-2 rounded-full border border-border/50 bg-white shadow-sm text-foreground hover:border-yellow-400/40 transition-colors">{b}</span>
              ))}
            </div>
          </div>
        </section>

        <TrustBadges heading="Why Dharwad Homeowners Trust Hosatti for Refrigerator Service" />

        <WhatsAppCTA
          heading="Book Refrigerator Service in Dharwad Today"
          subheading="Doorstep service anywhere in Dharwad or walk into our Jay Nagar workshop. All brands, 15+ years experience."
        />

        <FAQAccordion faqs={FAQS} eyebrow="Frequently Asked" heading="Refrigerator Service in Dharwad — Your Questions Answered" />

        {/* Related Services — real ServiceCards with images */}
        {related.length > 0 && (
          <section className="relative bg-white py-16 md:py-20">
            <div className="container mx-auto px-5 md:px-8">
              <ScrollReveal direction="blur">
                <div className="mb-10 flex items-center gap-3">
                  <div className="h-[2px] w-8 bg-gradient-to-r from-yellow-400 to-yellow-400/40 rounded-full" />
                  <h2 className="font-body text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: "hsl(37,90%,55%)" }}>
                    Related Refrigerator Services in Dharwad
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
