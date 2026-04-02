// src/app/reviews/page.tsx
import type { Metadata } from "next";
import { Star } from "lucide-react";
import { SEO } from "@/lib/seo";
import PageHero from "@/components/shared/PageHero";
import WhatsAppCTA from "@/components/shared/WhatsAppCTA";
import Footer from "@/components/layout/Footer";
import ScrollReveal, { StaggerItem } from "@/components/shared/ScrollReveal";

export const metadata: Metadata = {
  title: "Customer Reviews — Hosatti Refrigeration Service Dharwad",
  description: "Read what Dharwad customers say about Hosatti Refrigeration Service — trusted AC, fridge & washing machine repair. 100+ happy customers. Call +91-7899472430!",
  alternates: { canonical: `${SEO.baseUrl}/reviews` },
};

const TESTIMONIALS = [
  {
    name: "Jakeer",
    location: "Dharwad",
    rating: 5,
    text: "Hosatti Refrigeration Service is excellent! The workers are very fast and do a great job. They fixed my fridge quickly — arrived on time and finished in no time. Friendly and helpful. Highly recommend for any refrigeration needs!",
    appliance: "Refrigerator Repair",
    service: "Fast Worker",
  },
  {
    name: "Shakeel Shaikh",
    location: "Dharwad",
    rating: 5,
    text: "Great experience with Hosatti Refrigeration! Friendly and helpful team. Fixed my fridge quickly at a fair price. Very happy with their service and will definitely call them again. I recommend Hosatti to everyone!",
    appliance: "Fridge Repair",
    service: "Excellent Service",
  },
  {
    name: "Shiv Sg",
    location: "Dharwad",
    rating: 5,
    text: "Fantastic job fixing my refrigerator quickly. The service was excellent and the price was fair. Their team was very friendly and professional throughout. Highly recommend Hosatti for any home appliance repair!",
    appliance: "Refrigerator Service",
    service: "Excellent Service",
  },
  {
    name: "Nehal Nadaf",
    location: "Dharwad",
    rating: 5,
    text: "Extremely satisfied! Jameer is our family's go-to washing machine and AC technician. He always responds quickly when an appliance breaks down, diagnoses the issue immediately, and has it running perfectly in no time. Professional, polite, and completely transparent with pricing!",
    appliance: "Washing Machine & AC",
    service: "Family Technician",
  },
];

const ratingSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SEO.baseUrl}/#business`,
  name: "Hosatti Refrigeration Service",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "4",
    bestRating: "5",
    worstRating: "1",
  },
  review: TESTIMONIALS.map((t) => ({
    "@type": "Review",
    author: { "@type": "Person", name: t.name },
    reviewRating: { "@type": "Rating", ratingValue: t.rating, bestRating: 5 },
    reviewBody: t.text,
    itemReviewed: { "@type": "LocalBusiness", name: "Hosatti Refrigeration Service" },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SEO.baseUrl },
    { "@type": "ListItem", position: 2, name: "Reviews", item: `${SEO.baseUrl}/reviews` },
  ],
};

export default function ReviewsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ratingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PageHero
        eyebrow="Customer Reviews"
        h1="What Dharwad Customers Say About Hosatti Refrigeration Service"
        subtitle="Real reviews from real customers across Dharwad — AC, fridge, washing machine & air cooler repair."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Reviews", href: "/reviews" }]}
      />

      <main>
        {/* Rating summary */}
        <section className="relative bg-light-bg py-12 md:py-16">
          <div className="container mx-auto px-5 md:px-8">
            <ScrollReveal direction="blur">
              <div className="flex flex-col sm:flex-row items-center gap-6 max-w-lg mx-auto text-center sm:text-left">
                <div className="flex flex-col items-center sm:items-start shrink-0">
                  <span className="font-display font-bold text-[4rem] leading-none" style={{ color: "hsl(37,90%,55%)", letterSpacing: "-0.04em" }}>5.0</span>
                  <div className="flex gap-1 mt-1">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />)}
                  </div>
                  <p className="font-body text-[12px] text-muted-foreground mt-1">Based on customer reviews</p>
                </div>
                <div className="h-px w-full sm:h-16 sm:w-px bg-border/50" />
                <div>
                  <p className="font-display text-foreground font-semibold text-[1.2rem] leading-snug">
                    Dharwad&apos;s Most Trusted Appliance Repair Service
                  </p>
                  <p className="mt-2 font-body text-[13px] text-muted-foreground leading-[1.7]">
                    15+ years of 5-star service across Jayanagar, Saptapur, Vidyanagar, Shivaji Nagar and all of Dharwad.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Review cards */}
        <section className="relative bg-white py-16 md:py-20">
          <div className="container mx-auto px-5 md:px-8">
            <ScrollReveal staggerChildren staggerDelay={0.08}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                {TESTIMONIALS.map((t) => (
                  <StaggerItem key={t.name} direction="scale">
                    <div className="group flex flex-col gap-4 rounded-2xl border border-border/40 bg-light-bg/80 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-yellow-400/20 hover:-translate-y-1">
                      {/* Stars */}
                      <div className="flex gap-1">
                        {[...Array(t.rating)].map((_, i) => <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}
                      </div>
                      {/* Review */}
                      <p className="font-body text-[14px] md:text-[15px] text-muted-foreground leading-[1.8] flex-1">
                        &ldquo;{t.text}&rdquo;
                      </p>
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        <span className="font-body text-[11px] font-medium px-2.5 py-1 rounded-full bg-yellow-400/10 text-foreground/70">{t.appliance}</span>
                        <span className="font-body text-[11px] font-medium px-2.5 py-1 rounded-full bg-blue-50 text-foreground/70">{t.service}</span>
                      </div>
                      {/* Author */}
                      <div className="border-t border-border/40 pt-4 flex items-center gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-navy to-blue-800 font-display font-bold text-white text-[13px]">
                          {t.name[0]}
                        </div>
                        <div>
                          <p className="font-body text-[13px] font-semibold text-foreground">{t.name}</p>
                          <p className="font-body text-[11px] text-muted-foreground">{t.location}</p>
                        </div>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </ScrollReveal>

            {/* Google review CTA */}
            <ScrollReveal direction="blur" delay={0.2}>
              <div className="mt-12 rounded-2xl border border-border/40 bg-light-bg/80 p-6 md:p-8 text-center max-w-2xl mx-auto shadow-sm">
                <h2 className="font-display text-foreground mb-3" style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)" }}>
                  Had a Great Experience? Leave Us a Review!
                </h2>
                <p className="font-body text-[14px] text-muted-foreground mb-5 leading-[1.7]">
                  Your review helps other Dharwad families find trusted appliance repair. It takes just 2 minutes on Google.
                </p>
                <a
                  href="https://g.page/r/CQpHRE2LyvxOEBM/review"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-body font-bold text-[13px] uppercase tracking-[0.07em] transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: "linear-gradient(135deg,hsl(37,92%,52%),hsl(30,98%,45%))",
                    color: "hsl(216,50%,10%)",
                    boxShadow: "0 4px 16px rgba(245,166,35,0.3)",
                  }}
                >
                  ⭐ Write a Google Review
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <WhatsAppCTA heading="Book Appliance Repair in Dharwad Today" subheading="Join hundreds of happy customers across Dharwad — quick service available." />
      </main>
      <Footer />
    </>
  );
}
