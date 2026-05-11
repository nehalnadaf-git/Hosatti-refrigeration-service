// src/app/air-cooler-service-dharwad/page.tsx
import type { Metadata } from "next";
import { Wind, Droplets, Shield } from "lucide-react";
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
  title: "Air Cooler Service in Dharwad | Cooling Pad & Pump Maintenance — Hosatti",
  description:
    "Expert air cooler service in Dharwad by Hosatti Refrigeration Service. Cooling pad replacement, water tank cleaning, pump maintenance & motor service. Doorstep service, all brands. Call +91-7899472430!",
  keywords: [
    "air cooler service in Dharwad", "air cooler service Dharwad", "air cooler maintenance Dharwad",
    "cooling pad replacement Dharwad", "water tank cleaning Dharwad", "cooler pump maintenance Dharwad",
    "Symphony cooler service Dharwad", "honeycomb pad replacement Dharwad",
    "air cooler grass changing service Dharwad", "cooler pump replacement cost Dharwad",
    "home delivery air cooler service Dharwad", "Bajaj cooler service Dharwad",
    "Crompton air cooler service Dharwad", "air cooler service near me Dharwad",
    "desert cooler service Dharwad",
  ],
  alternates: { canonical: `${SEO.baseUrl}/air-cooler-service-dharwad` },
  openGraph: {
    title: "Air Cooler Service in Dharwad | Cooling Pad & Pump Maintenance — Hosatti",
    description: "Expert air cooler service in Dharwad. Cooling pad replacement, water tank cleaning & pump maintenance. All brands. Call +91-7899472430!",
    url: `${SEO.baseUrl}/air-cooler-service-dharwad`,
  },
};

const SERVICE_STEPS = [
  { icon: "🌿", title: "Cooling Pad Inspection & Replacement", desc: "Assessment of honeycomb or grass pads for algae, dust clogging, and hard water mineral deposits. Replacement with quality pads that last a full season." },
  { icon: "🪣", title: "Water Tank Deep Cleaning", desc: "Full tank drain, scrubbing of algae and mineral scale buildup from Dharwad's hard borewell water, and sanitization to eliminate bad odours." },
  { icon: "💧", title: "Water Pump Testing & Service", desc: "Pump motor testing, impeller cleaning of mineral scale, and nozzle clearing. A failed pump is the #1 cause of air coolers not cooling in Dharwad." },
  { icon: "🔩", title: "Distribution Nozzle Clearing", desc: "All water distribution nozzles cleared of mineral deposits that restrict water flow to cooling pads — essential in Dharwad's hard water conditions." },
  { icon: "🌀", title: "Fan Motor & Blade Service", desc: "Fan motor lubrication, bearing inspection, and blade cleaning for maximum airflow and quiet operation." },
  { icon: "🔧", title: "Float Valve Adjustment", desc: "Water level float valve inspection and calibration to prevent overflow and ensure consistent water supply to the pads." },
  { icon: "🧹", title: "Full Body & Filter Cleaning", desc: "External body wipe-down, inlet grill cleaning, and dust removal from all surfaces for hygienically clean operation." },
  { icon: "📊", title: "Post-Service Cooling Test", desc: "Full operational test measuring airflow, water circulation, and temperature drop before the technician leaves." },
];

const BRANDS = ["Symphony", "Bajaj", "Crompton", "Orient", "Kenstar", "Havells", "Usha", "Voltas", "Cello", "Maharaja Whiteline"];

const FAQS = [
  { question: "Why is my air cooler throwing warm air in Dharwad?", answer: "The most common cause in Dharwad is dry or blocked cooling pads. Dharwad's hard borewell water deposits calcium minerals on the pads, clogging the water channels so water no longer flows evenly across the pad surface — eliminating the evaporative cooling effect. The second most common cause is a failed water pump not circulating water to the pads at all. Our service diagnoses and resolves both issues." },
  { question: "How to clean an air cooler water tank in Dharwad?", answer: "For Dharwad's specific hard water (borewell water at 300–600 ppm), a proper tank clean requires: (1) complete water drain, (2) scrubbing away white mineral scale deposits with a mild descaling agent, (3) cleaning all algae growth — which forms rapidly when dust combines with Dharwad's mineral-rich stagnant water, and (4) sanitizing the tank interior. A simple rinse with plain water is not sufficient for hard water mineral removal." },
  { question: "How to prevent bad smell from air cooler in Dharwad?", answer: "The bad smell from air coolers in Dharwad is caused by the combination of hard borewell water, dust from the city's construction activity, and stagnant water in the tank. Algae and bacteria thrive in this environment, and the cooler blows this foul air into your home. Prevention requires: weekly water changes, monthly tank cleaning, seasonal pad replacement, and annual professional cleaning of the entire internal system including the water pump and distribution nozzles." },
  { question: "How often should air cooler pads be replaced in Dharwad?", answer: "We recommend replacing honeycomb cooling pads annually before summer in Dharwad. Dharwad's hard borewell water deposits minerals on pad fibers, reducing porosity and water absorption within one season. Grass/wood wool pads degrade even faster in high-humidity conditions and should be replaced at the start of every summer. Our service includes a full pad condition assessment — we only recommend replacement when genuinely necessary." },
  { question: "Do you provide doorstep air cooler service in Dharwad?", answer: "Yes. Our technicians visit your home anywhere in Dharwad for a full air cooler service — Vidyanagar, Saptapur, KHB Colony, Rani Chennamma Nagar, Shivaji Nagar, and all other localities. We carry replacement cooling pads (honeycomb and grass), water pump units, and distribution nozzles for same-visit repair. You can also walk in to our Jay Nagar workshop with your cooler." },
];

const breadcrumbSchema = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SEO.baseUrl },
    { "@type": "ListItem", position: 2, name: "Air Cooler Service in Dharwad", item: `${SEO.baseUrl}/air-cooler-service-dharwad` },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org", "@type": "Service",
  name: "Air Cooler Service in Dharwad",
  alternateName: ["Air Cooler Maintenance Dharwad", "Cooler Pad Replacement Dharwad", "Cooler Pump Service Dharwad"],
  description: "Expert air cooler service in Dharwad. Cooling pad replacement, water tank sanitization, pump testing, nozzle cleaning, fan motor lubrication, and post-service test. Doorstep service, all brands.",
  url: `${SEO.baseUrl}/air-cooler-service-dharwad`,
  serviceType: "Air Cooler Maintenance",
  provider: { "@id": `${SEO.baseUrl}/#business` },
  areaServed: { "@type": "City", name: "Dharwad" },
};

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
};

export default function AirCoolerServiceDharwadPage() {
  const relatedSlugs = ["air-cooler-repair-service-dharwad", "air-cooler-motor-repair-dharwad"];
  const related = relatedSlugs.map((s) => getServiceBySlug(s)).filter(Boolean) as NonNullable<ReturnType<typeof getServiceBySlug>>[];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        eyebrow="Air Cooler Service — Dharwad"
        h1="Expert Air Cooler Service in Dharwad — Pad Replacement, Pump & Full Maintenance"
        subtitle="Protect your cooler from Dharwad's hard borewell water and construction dust. Cooling pad replacement, tank sanitization & pump service — doorstep, all brands."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Air Cooler Service Dharwad", href: "/air-cooler-service-dharwad" }]}
      />

      <main>
        {/* Hyper-Local Empathy Block */}
        <section className="relative bg-light-bg py-16 md:py-20">
          <div className="container mx-auto px-5 md:px-8">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
              <ScrollReveal direction="right">
                <div className="rounded-2xl bg-gradient-to-br from-teal-900/5 to-teal-900/10 border border-teal-900/10 p-8 space-y-5">
                  {[
                    { Icon: Droplets, color: "text-blue-600 bg-blue-50", title: "Hard Borewell Water Blocks Pump & Nozzles", body: "Dharwad's borewell water is loaded with calcium and magnesium minerals. Over one summer, these minerals form solid deposits inside the water pump impeller and distribution nozzles — restricting or completely blocking water flow to the pads. Result: the cooler blows hot air even though the water tank is full." },
                    { Icon: Wind, color: "text-orange-600 bg-orange-50", title: "Construction Dust + Water = Algae Explosion", body: "Dharwad's PM2.5 construction dust is sucked into the cooler and settles on wet cooling pads. Combined with Dharwad's mineral-rich stagnant borewell water in the tank, this creates the perfect environment for algae and bacteria — causing foul, musty air and accelerating pad degradation." },
                    { Icon: Shield, color: "text-green-700 bg-green-50", title: "Annual Service Doubles Your Cooler's Life", body: "A neglected cooler that runs through two Dharwad summers without service typically develops a seized pump motor and disintegrated pads — requiring complete unit replacement. Annual servicing with pad replacement and tank cleaning extends cooler life to 6–8 years." },
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
                    <span className="font-body text-[10px] font-semibold uppercase tracking-[0.25em] text-gold md:text-[11px]">Dharwad&apos;s Unique Air Cooler Hazards</span>
                  </div>
                  <h2 className="font-display text-foreground pb-4" style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}>
                    Dharwad&apos;s Dust and Hard Water are <span className="bg-gradient-to-r from-navy to-[hsl(220,85%,38%)] bg-clip-text text-transparent italic px-1">Killing Your Air Cooler</span>
                  </h2>
                  <p className="font-body text-[15px] md:text-[17px] text-muted-foreground leading-[1.8]">
                    An air cooler serviced before summer in Dharwad performs like a new unit — delivering 5–7°C temperature drops even in 42°C heat. An unserviced cooler with blocked pads, scaled nozzles, and stagnant tank water delivers barely 1–2°C cooling while circulating mold spores and bacteria through your home. The difference is a single annual service.
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
              <h2 className="font-display text-foreground mb-3" style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}>Our 8-Point Air Cooler Service Blueprint</h2>
              <p className="font-body text-[15px] text-muted-foreground leading-[1.8] mb-10 max-w-2xl">
                Specifically designed for Dharwad&apos;s hard water and dust conditions — every step eliminates the exact forces degrading your cooler&apos;s performance.
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
              <h2 className="font-display text-foreground mb-8" style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}>Every Air Cooler Brand Serviced in Dharwad</h2>
            </ScrollReveal>
            <div className="flex flex-wrap gap-2.5 justify-center">
              {BRANDS.map((b) => (
                <span key={b} className="font-body text-[13px] font-semibold px-4 py-2 rounded-full border border-border/50 bg-white shadow-sm text-foreground hover:border-yellow-400/40 transition-colors">{b}</span>
              ))}
            </div>
          </div>
        </section>

        <TrustBadges heading="Why Dharwad Homeowners Trust Hosatti for Air Cooler Service" />

        <WhatsAppCTA
          heading="Book Air Cooler Service in Dharwad Today"
          subheading="Doorstep service anywhere in Dharwad or walk into our Jay Nagar workshop. All brands, 15+ years experience."
        />

        <FAQAccordion faqs={FAQS} eyebrow="Frequently Asked" heading="Air Cooler Service in Dharwad — Your Questions Answered" />

        {/* Related Services — real ServiceCards with images */}
        {related.length > 0 && (
          <section className="relative bg-white py-16 md:py-20">
            <div className="container mx-auto px-5 md:px-8">
              <ScrollReveal direction="blur">
                <div className="mb-10 flex items-center gap-3">
                  <div className="h-[2px] w-8 bg-gradient-to-r from-yellow-400 to-yellow-400/40 rounded-full" />
                  <h2 className="font-body text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: "hsl(37,90%,55%)" }}>
                    Related Air Cooler Services in Dharwad
                  </h2>
                </div>
              </ScrollReveal>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl">
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
