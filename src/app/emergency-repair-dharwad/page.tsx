// src/app/emergency-repair-dharwad/page.tsx
import type { Metadata } from "next";
import { PhoneCall, Zap } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { SERVICES } from "@/lib/services";
import { SEO } from "@/lib/seo";
import { buildWhatsAppURL } from "@/lib/whatsapp";
import PageHero from "@/components/shared/PageHero";
import ServiceCard from "@/components/shared/ServiceCard";
import FAQAccordion from "@/components/shared/FAQAccordion";
import TrustBadges from "@/components/shared/TrustBadges";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/shared/ScrollReveal";

export const metadata: Metadata = {
  title: "Emergency Appliance Repair in Dharwad — Same Day Fast Service",
  description:
    "Emergency AC, fridge & washing machine repair in Dharwad by Hosatti Refrigeration Service. Quick doorstep service or walk-in workshop. Call +91-7899472430 now!",
  alternates: { canonical: `${SEO.baseUrl}/emergency-repair-dharwad` },
};

const waUrl = buildWhatsAppURL(
  "Hello Hosatti Refrigeration Service!\n\n🚨 EMERGENCY REPAIR NEEDED\n\nMy appliance has broken down and I need urgent quick service in Dharwad.\n\nAppliance: [describe your appliance]\nProblem: [describe the problem]\nLocation: [your area in Dharwad]\n\nPlease respond ASAP! Thank you.",
);

const EMERGENCY_FAQS = [
  { question: "Do you provide quick emergency appliance repair in Dharwad?", answer: "Yes! Hosatti Refrigeration Service provides quick doorstep emergency repair across all areas of Dharwad. Call +91-7899472430 early in the day for guaranteed quick service. For urgent cases, WhatsApp us and we will prioritise your call." },
  { question: "What appliances do you repair on an emergency basis in Dharwad?", answer: "We provide emergency repair for AC units, refrigerators, washing machines, and air coolers in Dharwad. All major brands serviced — LG, Samsung, Whirlpool, IFB, Godrej, Voltas, Haier, and 17+ more." },
  { question: "Can I walk into your Dharwad workshop for emergency repair?", answer: "Yes! Walk in directly to our workshop at Jay Nagar, Opp Gurukul Academy, Saptapur Last Stop, Dharwad — open Mon–Sat 9:30 AM to 7:00 PM and Sunday 9:30 AM to 1:00 PM. No appointment needed." },
  { question: "How quickly can your technician reach my home in Dharwad for emergency repair?", answer: "For most areas of Dharwad, our technicians can reach within 1–3 hours of your call depending on the current schedule. Call +91-7899472430 first thing in the morning for the fastest priority dispatch." },
  { question: "Is emergency appliance repair more expensive in Dharwad?", answer: "No — Hosatti Refrigeration Service charges the same transparent, honest rates for emergency repairs as regular repairs. No emergency surcharge. We provide a clear quote before starting any work." },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SEO.baseUrl },
    { "@type": "ListItem", position: 2, name: "Emergency Repair Dharwad", item: `${SEO.baseUrl}/emergency-repair-dharwad` },
  ],
};

export default function EmergencyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PageHero
        eyebrow="Emergency Repair — Same Day"
        h1="Emergency Appliance Repair in Dharwad — Same Day Fast Service"
        subtitle="AC broken? Fridge stopped working? Washing machine flooded? Call now — Hosatti Refrigeration Service provides quick emergency repair across all of Dharwad."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Emergency Repair", href: "/emergency-repair-dharwad" }]}
      />

      <main>
        {/* Big CTAs */}
        <section className="relative bg-light-bg py-16 md:py-20 overflow-hidden">
          <div className="container mx-auto px-5 md:px-8">
            <ScrollReveal direction="blur">
              <div className="max-w-2xl mx-auto text-center mb-10">
                <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-red-50 border border-red-200 mb-5">
                  <Zap className="h-4 w-4 text-red-500" />
                  <span className="font-body text-[12px] font-bold uppercase tracking-[0.15em] text-red-600">Emergency Line — Available Now</span>
                </div>
                <h2 className="font-display text-foreground mb-4" style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}>
                  Don&apos;t Wait — Get Fast Help in Dharwad
                </h2>
                <p className="font-body text-[15px] md:text-[17px] text-muted-foreground leading-[1.8]">
                  Two ways to get emergency appliance repair in Dharwad — whichever is fastest for you:
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10">
                <div className="rounded-2xl border-2 border-yellow-400/30 bg-yellow-400/5 p-6 text-center shadow-sm">
                  <p className="font-body text-[13px] font-bold uppercase tracking-[0.12em] text-foreground mb-2">🏠 Doorstep Service</p>
                  <p className="font-body text-[13px] text-muted-foreground mb-4 leading-[1.7]">
                    Call or WhatsApp — our technician comes to your home in Dharwad, usually within 1–3 hours.
                  </p>
                  <a href={`tel:${BUSINESS.phone.replace(/-/g, "")}`}
                    className="group relative flex w-full items-center justify-center gap-2 rounded-xl py-3 font-body font-bold text-[13px] uppercase tracking-[0.07em] text-white transition-all duration-300 hover:-translate-y-0.5 active:scale-95 overflow-hidden"
                    style={{ background: "linear-gradient(135deg,hsl(220,85%,30%),hsl(220,85%,18%))", boxShadow: "0 8px 24px rgba(11,43,107,0.3), inset 0 1px 0 rgba(255,255,255,0.2)" }}
                  >
                    <PhoneCall className="h-4 w-4 drop-shadow-sm group-hover:scale-110 transition-transform duration-300" /> 
                    <span className="drop-shadow-sm">Call Now</span>
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  </a>
                </div>
                <div className="rounded-2xl border-2 border-yellow-400/30 bg-yellow-400/5 p-6 text-center shadow-sm">
                  <p className="font-body text-[13px] font-bold uppercase tracking-[0.12em] text-foreground mb-2">Walk-in Workshop</p>
                  <p className="font-body text-[13px] text-muted-foreground mb-4 leading-[1.7]">
                    Bring your appliance to Jay Nagar, Saptapur Last Stop — get quick repair on the spot.
                  </p>
                  <a href={waUrl} target="_blank" rel="noopener noreferrer"
                    className="group relative inline-flex w-full items-center justify-center gap-2 rounded-xl py-3 font-body font-bold text-[13px] uppercase tracking-[0.07em] transition-all hover:-translate-y-0.5 overflow-hidden"
                    style={{ background: "linear-gradient(135deg,hsl(37,92%,52%),hsl(30,98%,45%))", color: "hsl(216,50%,10%)", boxShadow: "0 3px 14px rgba(245,166,35,0.28)" }}
                  >
                    <span className="relative z-10 flex items-center gap-1.5">
                      Book Service
                    </span>
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/22 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  </a>
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
                    Emergency Services Available
                  </span>
                  <div className="h-[1.5px] w-8 bg-gradient-to-l from-transparent to-yellow-400/60 rounded-full" />
                </div>
                <h2 className="font-display text-foreground">All Appliance Repairs Available Same Day in Dharwad</h2>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {SERVICES.map((s) => <ServiceCard key={s.slug} service={s} />)}
            </div>
          </div>
        </section>

        <TrustBadges eyebrow="Emergency Service Promise" heading="Why Trust Hosatti for Emergency Repair in Dharwad" />
        <FAQAccordion faqs={EMERGENCY_FAQS} eyebrow="Emergency FAQ" heading="Emergency Appliance Repair in Dharwad — FAQs" />
      </main>
      <Footer />
    </>
  );
}
