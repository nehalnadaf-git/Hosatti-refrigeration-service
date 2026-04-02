// src/app/about/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import { ShieldCheck, Wrench, Package, ThumbsUp, Award, Users } from "lucide-react";
import { SEO } from "@/lib/seo";
import PageHero from "@/components/shared/PageHero";
import TrustBadges from "@/components/shared/TrustBadges";
import WhatsAppCTA from "@/components/shared/WhatsAppCTA";
import Footer from "@/components/layout/Footer";
import ScrollReveal, { StaggerItem } from "@/components/shared/ScrollReveal";

export const metadata: Metadata = {
  title: "About Hosatti Refrigeration Service Dharwad | Jameer Hosatti",
  description:
    "Meet Jameer Hosatti — founder & chief technician of Hosatti Refrigeration Service, Dharwad's most trusted home appliance repair expert with 15+ years experience. Doorstep & walk-in service.",
  alternates: { canonical: `${SEO.baseUrl}/about` },
  openGraph: {
    title: "About Hosatti Refrigeration Service | Jameer Hosatti Dharwad",
    description: "15+ years of trusted AC, fridge & washing machine repair in Dharwad by Jameer Hosatti. One workshop, all of Dharwad served.",
    url: `${SEO.baseUrl}/about`,
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jameer Hosatti",
  jobTitle: "Owner & Chief Technician",
  description: "Jameer Hosatti is the founder and chief technician of Hosatti Refrigeration Service in Dharwad, with 15+ years of expertise in home appliance repair.",
  worksFor: { "@id": `${SEO.baseUrl}/#business` },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dharwad",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SEO.baseUrl },
    { "@type": "ListItem", position: 2, name: "About Us", item: `${SEO.baseUrl}/about` },
  ],
};

const highlights = [
  { icon: Award, label: "15+ Years Experience", sub: "Serving Dharwad since 2009" },
  { icon: ShieldCheck, label: "Certified Technicians", sub: "Trained & verified experts" },
  { icon: Wrench, label: "All Brands Serviced", sub: "24+ brands — LG, Samsung & more" },
  { icon: Package, label: "Genuine Spare Parts", sub: "Only authentic components" },
  { icon: Users, label: "Hundreds of Happy Customers", sub: "Trusted across Dharwad" },
  { icon: ThumbsUp, label: "Satisfaction Guaranteed", sub: "Quality service, every time" },
];

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PageHero
        eyebrow="About Us"
        h1="Dharwad's Most Trusted Appliance Repair Experts"
        subtitle="Meet Jameer Hosatti and the team behind 15+ years of reliable home appliance repair in Dharwad."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }]}
      />

      <main>
        {/* Story Section */}
        <section className="relative bg-light-bg py-20 md:py-28 overflow-hidden">
          <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-yellow-400/[0.08] blur-[140px]" />
          <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-blue-900/[0.06] blur-[120px]" />
          <div className="relative container mx-auto grid gap-12 px-5 md:grid-cols-2 md:gap-20 md:px-8 lg:gap-28">

            {/* Image Column */}
            <ScrollReveal direction="right" delay={0}>
              <div className="flex items-center justify-center pb-20 sm:pb-12 md:pb-0">
                <div className="relative w-full max-w-[320px] sm:max-w-[360px] md:max-w-[460px] lg:max-w-[520px] mt-2 sm:mt-0">
                  <Image
                    src="/Jameer/Jameer.webp"
                    alt="Jameer Hosatti — Owner & Chief Technician, Hosatti Refrigeration Service Dharwad"
                    width={420}
                    height={525}
                    className="relative w-full rounded-[1.5rem] sm:rounded-3xl object-cover aspect-[4/5] md:aspect-[3/4]"
                    style={{ boxShadow: "0 2px 4px rgba(11,43,107,0.04),0 8px 16px rgba(11,43,107,0.08),0 24px 48px rgba(11,43,107,0.12)" }}
                    priority
                  />
                  {/* Name tag — Premium Blue Glassmorphism */}
                  <div className="absolute -bottom-8 -left-4 sm:-bottom-9 sm:-left-6 md:-bottom-12 md:-left-8 rounded-2xl md:rounded-3xl bg-gradient-to-br from-navy/70 to-blue-900/40 backdrop-blur-xl px-4 py-3 sm:px-5 sm:py-4 md:px-7 md:py-5 z-20 shadow-[0_16px_40px_rgba(11,43,107,0.4),inset_0_1px_0_rgba(255,255,255,0.2)] border border-white/20 animate-[float-subtle_4s_ease-in-out_infinite]">
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2 mb-0.5">
                        <Award className="h-4 w-4 md:h-5 md:w-5 text-yellow-400 drop-shadow-sm" />
                        <p className="font-display text-[1rem] sm:text-[1.1rem] md:text-[1.35rem] font-bold text-white tracking-tight whitespace-nowrap drop-shadow-md">
                          Jameer Hosatti
                        </p>
                      </div>
                      <p className="font-body text-[8.5px] sm:text-[9.5px] md:text-[11px] font-bold uppercase tracking-[0.22em] text-white/70 pl-[24px] md:pl-[28px]">
                        Chief Technician
                      </p>
                    </div>
                  </div>
                  {/* Experience tag — Platinum White Glassmorphism */}
                  <div 
                    className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-4 md:-bottom-6 md:-right-10 rounded-2xl md:rounded-3xl bg-gradient-to-br from-white/95 to-slate-50/80 backdrop-blur-xl px-4 py-3 sm:px-5 sm:py-4 md:px-7 md:py-5 z-20 shadow-[0_16px_40px_rgba(11,43,107,0.12),inset_0_2px_0_rgba(255,255,255,1)] border border-slate-200/50 animate-[float-subtle_5s_ease-in-out_infinite]"
                    style={{ animationDelay: "1s" }}
                  >
                    <div className="flex flex-col items-start">
                      <p className="font-display font-bold leading-none text-[1.5rem] sm:text-[2rem] md:text-[2.8rem] bg-gradient-to-br from-yellow-400 to-yellow-600 bg-clip-text text-transparent drop-shadow-sm" style={{ letterSpacing: "-0.04em" }}>15+</p>
                      <p className="mt-1 font-body text-[8px] sm:text-[9.5px] md:text-[11px] font-bold uppercase tracking-[0.22em] text-[hsl(216,50%,15%)] whitespace-nowrap">Years of Experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Text Column */}
            <ScrollReveal direction="blur" delay={0.1}>
              <div className="flex flex-col justify-center">
                <div className="mb-6 flex items-center gap-3">
                  <div className="h-[2px] w-8 bg-gradient-to-r from-yellow-400 to-yellow-400/40 rounded-full" />
                  <span className="font-body text-[10px] font-semibold uppercase tracking-[0.25em] text-gold md:text-[11px]">Our Story</span>
                </div>
                <h2 className="font-display text-foreground pb-1">
                  Founded with a Passion for{" "}
                  <span className="bg-gradient-to-r from-navy to-[hsl(220,85%,38%)] bg-clip-text text-transparent italic px-1">Expert Repair</span>
                </h2>
                <p className="mt-5 font-body text-[16px] lg:text-[18px] text-muted-foreground leading-[1.8]">
                  Founded by <span className="font-semibold" style={{ color: "hsl(220,85%,23%)" }}>Jameer Hosatti</span>, Hosatti Refrigeration Service began in 2009 with a single mission: to provide Dharwad households with honest, expert, and affordable home appliance repair. What started as a small local repair business has grown into Dharwad&apos;s most trusted name for AC, refrigerator, washing machine, and air cooler service.
                </p>
                <p className="mt-4 font-body text-[16px] lg:text-[18px] text-muted-foreground leading-[1.8]">
                  Our workshop is located at Jay Nagar, Saptapur Last Stop, Dharwad — a convenient walk-in destination for customers who prefer to bring their appliances to us. We also offer doorstep service, sending our skilled technicians directly to your home anywhere in Dharwad. Whether you visit us or we come to you, you receive the same expert care and genuine parts.
                </p>
                <p className="mt-4 font-body text-[16px] lg:text-[18px] text-muted-foreground leading-[1.8]">
                  Over 15+ years, we have built lasting relationships with hundreds of Dharwad families who trust us for all their appliance repair needs. Our commitment to transparency — clear quotes, no hidden charges, and honest advice — sets us apart.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Highlights grid */}
        <section className="relative bg-white py-16 md:py-20 overflow-hidden">
          <div className="container mx-auto px-5 md:px-8">
            <ScrollReveal direction="blur">
              <div className="mb-10 text-center">
                <div className="mb-4 flex items-center justify-center gap-3">
                  <div className="h-[1.5px] w-8 bg-gradient-to-r from-transparent to-yellow-400/60 rounded-full" />
                  <span className="font-body text-[10px] font-semibold uppercase tracking-[0.25em] md:text-[11px]" style={{ color: "hsl(37,90%,55%)" }}>What We Stand For</span>
                  <div className="h-[1.5px] w-8 bg-gradient-to-l from-transparent to-yellow-400/60 rounded-full" />
                </div>
                <h2 className="font-display text-foreground">Our Service Promise to Dharwad</h2>
              </div>
            </ScrollReveal>
            <ScrollReveal staggerChildren staggerDelay={0.07} delay={0.1}>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                {highlights.map(({ icon: Icon, label, sub }) => (
                  <StaggerItem key={label} direction="scale">
                    <div className="group relative flex flex-col items-start gap-3 overflow-hidden rounded-2xl border border-border/50 bg-light-bg/80 p-4 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-yellow-400/25 hover:-translate-y-1 md:p-5 lg:p-7">
                      <div className="flex h-10 w-10 lg:h-14 lg:w-14 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-400/15 to-yellow-400/5 transition-all duration-300 group-hover:from-yellow-400/30">
                        <Icon className="h-5 w-5 lg:h-7 lg:w-7" style={{ color: "hsl(37,90%,55%)" }} />
                      </div>
                      <div>
                        <p className="font-body text-[13px] lg:text-[16px] font-semibold text-foreground leading-snug">{label}</p>
                        <p className="mt-0.5 font-body text-[11px] lg:text-[13px] font-normal text-muted-foreground leading-snug">{sub}</p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        <TrustBadges eyebrow="Service Model" heading="Doorstep or Walk-in — Two Ways to Get Expert Repair" />
        <WhatsAppCTA heading="Talk to Jameer Hosatti Today" subheading="Call or WhatsApp for quick appliance repair in Dharwad." />
      </main>
      <Footer />
    </>
  );
}
