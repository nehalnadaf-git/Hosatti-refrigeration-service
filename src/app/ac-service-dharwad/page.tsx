// src/app/ac-service-dharwad/page.tsx
import type { Metadata } from "next";
import { Wind, Zap, Thermometer } from "lucide-react";
import { SEO } from "@/lib/seo";
import { SERVICES, getServiceBySlug } from "@/lib/services";
import PageHero from "@/components/shared/PageHero";
import ServiceCard from "@/components/shared/ServiceCard";
import FAQAccordion from "@/components/shared/FAQAccordion";
import TrustBadges from "@/components/shared/TrustBadges";
import WhatsAppCTA from "@/components/shared/WhatsAppCTA";
import Footer from "@/components/layout/Footer";
import ScrollReveal, { StaggerItem } from "@/components/shared/ScrollReveal";

export const metadata: Metadata = {
  title: "AC Service in Dharwad | Doorstep AC Maintenance — Hosatti",
  description:
    "Expert AC service in Dharwad by Hosatti Refrigeration Service. Chemical coil wash, gas pressure check, filter cleaning & full AC maintenance. Doorstep service, all brands. Call +91-7899472430 now!",
  keywords: [
    "AC service in Dharwad", "AC service Dharwad", "AC maintenance Dharwad",
    "split AC cleaning Dharwad", "AC gas filling Dharwad", "condenser wash Dharwad",
    "AC technician Dharwad", "same day AC service Dharwad", "doorstep AC maintenance Dharwad",
    "AC servicing near me Dharwad", "AC annual maintenance Dharwad", "inverter AC service Dharwad",
    "window AC service Dharwad", "AC deep cleaning Dharwad",
  ],
  alternates: { canonical: `${SEO.baseUrl}/ac-service-dharwad` },
  openGraph: {
    title: "AC Service in Dharwad | Doorstep AC Maintenance — Hosatti",
    description: "Expert AC service in Dharwad. Chemical coil wash, gas check & full maintenance. All brands. Call +91-7899472430!",
    url: `${SEO.baseUrl}/ac-service-dharwad`,
  },
};

const SERVICE_STEPS = [
  { icon: "🔬", title: "Full AC Diagnostic", desc: "Complete system health check — refrigerant pressure, PCB continuity, and thermostat accuracy." },
  { icon: "💧", title: "Chemical Wet Coil Wash", desc: "High-pressure jet cleaning of evaporator & condenser coils choked by Dharwad's construction dust and PM2.5 pollution." },
  { icon: "❄️", title: "Gas Pressure Diagnostics", desc: "Precision refrigerant level check for R22, R32, R410A. Leak detection and top-up if required." },
  { icon: "🌀", title: "Blower & Fan Motor Service", desc: "Blower wheel deep cleaning, fan motor lubrication, and blade balancing for quiet, powerful airflow." },
  { icon: "🚿", title: "Drain Pan & Pipe Flush", desc: "Drain pan sanitization and pipe clearing to prevent water dripping issues and foul odours." },
  { icon: "🔌", title: "Electrical Safety Check", desc: "Capacitor, relay, and wiring inspection — essential given HESCOM voltage fluctuations in Hubli-Dharwad." },
  { icon: "🧹", title: "Filter Wash & Reinstall", desc: "Filter removal, pressure washing, drying, and reinstallation for maximum airflow efficiency." },
  { icon: "📊", title: "Post-Service Performance Test", desc: "Cooling efficiency test and temperature differential measurement before the technician leaves your home." },
];

const BRANDS = ["LG", "Samsung", "Daikin", "Voltas", "Blue Star", "Carrier", "O General", "Hitachi", "Lloyd", "Mitsubishi", "Panasonic", "Haier", "Godrej", "Whirlpool", "Sharp", "Onida", "TCL"];

const FAQS = [
  { question: "Why is my AC not cooling properly in Dharwad?", answer: "The most common cause in Dharwad is clogged condenser and evaporator coils due to high levels of construction dust and vehicular PM2.5 pollution. A chemical wet service restores full thermodynamic efficiency. Other causes include low refrigerant gas, a faulty capacitor, or a dirty blower fan. Our technician diagnoses the exact root cause during the service." },
  { question: "How often should AC be serviced in Dharwad?", answer: "We recommend a full AC service at least once a year — ideally February or March before peak summer. Given Dharwad's high dust levels from ongoing infrastructure development, units used heavily may benefit from a second service mid-monsoon to prevent mold growth inside the blower." },
  { question: "What is the cost of AC gas filling in Dharwad?", answer: "The cost of AC gas filling depends on the refrigerant type (R22, R32, or R410A) and the quantity required. We provide a fully transparent quote after checking gas pressure on-site. We always detect and repair the leak first — simply topping up without fixing the leak is a temporary fix we do not offer." },
  { question: "Do you provide doorstep AC service in Dharwad?", answer: "Yes. Our certified technicians visit your home anywhere in Dharwad — Vidyanagar, Saptapur, Shivaji Nagar, Rani Chennamma Nagar, KHB Colony, and all other localities. We bring all equipment including the chemical jet wash machine. You can also walk in to our Jay Nagar workshop, opposite Gurukul Academy." },
  { question: "Does AC service help reduce electricity bills?", answer: "Absolutely. When condenser coils are clogged with dust, the compressor runs continuously without cycling off, drawing higher current and spiking your electricity bill. After a chemical coil wash, customers consistently report a 15–25% reduction in AC electricity consumption as the system regains full thermodynamic efficiency." },
];

const breadcrumbSchema = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SEO.baseUrl },
    { "@type": "ListItem", position: 2, name: "AC Service in Dharwad", item: `${SEO.baseUrl}/ac-service-dharwad` },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org", "@type": "Service",
  name: "AC Service in Dharwad",
  alternateName: ["AC Maintenance Dharwad", "AC Servicing Dharwad", "Air Conditioner Service Dharwad"],
  description: "Expert AC service and maintenance in Dharwad by Hosatti Refrigeration Service. Chemical coil wash, gas pressure diagnostics, filter cleaning, blower service, and electrical safety check. Doorstep service, all brands, 15+ years experience.",
  url: `${SEO.baseUrl}/ac-service-dharwad`,
  serviceType: "Air Conditioner Maintenance",
  provider: { "@id": `${SEO.baseUrl}/#business` },
  areaServed: { "@type": "City", name: "Dharwad" },
};

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
};

export default function AcServiceDharwadPage() {
  const relatedSlugs = ["ac-repair-service-dharwad", "ac-gas-refilling-service-dharwad", "ac-deep-cleaning-service-dharwad"];
  const related = relatedSlugs.map((s) => getServiceBySlug(s)).filter(Boolean) as NonNullable<ReturnType<typeof getServiceBySlug>>[];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        eyebrow="Air Conditioner Service — Dharwad"
        h1="Expert AC Service in Dharwad — Doorstep Maintenance, All Brands"
        subtitle="Protect your AC from Dharwad's construction dust and HESCOM voltage fluctuations. 15+ years of trusted doorstep AC service by Jay Nagar's leading technical experts."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "AC Service Dharwad", href: "/ac-service-dharwad" }]}
      />

      <main>
        {/* Hyper-Local Empathy Block */}
        <section className="relative bg-light-bg py-16 md:py-20 overflow-hidden">
          <div className="container mx-auto px-5 md:px-8">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
              <ScrollReveal direction="right">
                <div className="rounded-2xl bg-gradient-to-br from-navy/5 to-navy/10 border border-navy/10 p-8 space-y-5">
                  {[
                    { Icon: Wind, color: "text-blue-600 bg-blue-50", title: "Construction Dust Chokes AC Coils", body: "Dharwad's rapid infrastructure expansion has increased fine particulate pollution (PM2.5) by 2.5× in two decades. Dust blankets AC coils, blocks heat exchange, and forces the compressor to run non-stop — spiking electricity bills and destroying the motor." },
                    { Icon: Zap, color: "text-orange-600 bg-orange-50", title: "HESCOM Voltage Swings Damage PCBs", body: "Frequent micro-outages from HESCOM create voltage surges that corrupt AC circuit boards and burn capacitors. A regular service detects early electrical wear before it becomes a ₹4,000+ PCB replacement." },
                    { Icon: Thermometer, color: "text-red-600 bg-red-50", title: "Peak Dharwad Summer Heat (40°C+)", body: "A dust-clogged AC working at 140% rated load will fail mid-season. Pre-summer servicing ensures your system handles Dharwad's hottest months at full design efficiency." },
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
                    <span className="font-body text-[10px] font-semibold uppercase tracking-[0.25em] text-gold md:text-[11px]">Why Dharwad ACs Need Regular Servicing</span>
                  </div>
                  <h2 className="font-display text-foreground pb-4" style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}>
                    AC Service is Not Optional in <span className="bg-gradient-to-r from-navy to-[hsl(220,85%,38%)] bg-clip-text text-transparent italic px-1">Dharwad</span>
                  </h2>
                  <p className="font-body text-[15px] md:text-[17px] text-muted-foreground leading-[1.8]">
                    Dharwad is not a low-pollution city. The combination of construction dust, HESCOM power fluctuations, and extreme summer temperatures degrades your AC up to 3× faster than the manufacturer&apos;s recommended service interval. Most ACs in Dharwad that have not been professionally serviced in the past year are already operating at significantly reduced efficiency — costing more in electricity and silently destroying the compressor.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* 8-Point Service Blueprint */}
        <section className="relative bg-white py-16 md:py-20">
          <div className="container mx-auto px-5 md:px-8">
            <ScrollReveal direction="blur">
              <div className="mb-4 flex items-center gap-3">
                <div className="h-[2px] w-8 bg-gradient-to-r from-yellow-400 to-yellow-400/40 rounded-full" />
                <span className="font-body text-[10px] font-semibold uppercase tracking-[0.25em] text-gold md:text-[11px]">What&apos;s Included</span>
              </div>
              <h2 className="font-display text-foreground mb-3" style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}>Our 8-Point AC Service Blueprint</h2>
              <p className="font-body text-[15px] text-muted-foreground leading-[1.8] mb-10 max-w-2xl">
                Unlike generic &quot;filter cleaning&quot; services, our comprehensive AC maintenance covers every critical system — restoring factory-level cooling efficiency.
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
              <h2 className="font-display text-foreground mb-8" style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}>Every AC Brand Serviced in Dharwad</h2>
            </ScrollReveal>
            <div className="flex flex-wrap gap-2.5 justify-center">
              {BRANDS.map((b) => (
                <span key={b} className="font-body text-[13px] font-semibold px-4 py-2 rounded-full border border-border/50 bg-white shadow-sm text-foreground hover:border-yellow-400/40 transition-colors">{b}</span>
              ))}
            </div>
          </div>
        </section>

        <TrustBadges heading="Why Dharwad Homeowners Choose Hosatti for AC Service" />

        <WhatsAppCTA
          heading="Book AC Service in Dharwad Today"
          subheading="Doorstep service anywhere in Dharwad or walk into our Jay Nagar workshop. All brands, 15+ years experience."
        />

        <FAQAccordion faqs={FAQS} eyebrow="Frequently Asked" heading="AC Service in Dharwad — Your Questions Answered" />

        {/* Related Services — real ServiceCards with images */}
        {related.length > 0 && (
          <section className="relative bg-white py-16 md:py-20">
            <div className="container mx-auto px-5 md:px-8">
              <ScrollReveal direction="blur">
                <div className="mb-10 flex items-center gap-3">
                  <div className="h-[2px] w-8 bg-gradient-to-r from-yellow-400 to-yellow-400/40 rounded-full" />
                  <h2 className="font-body text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: "hsl(37,90%,55%)" }}>
                    Related AC Services in Dharwad
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
