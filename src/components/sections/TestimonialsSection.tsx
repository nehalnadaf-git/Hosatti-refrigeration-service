// src/components/sections/TestimonialsSection.tsx
import { Star, Quote } from "lucide-react";
import ScrollReveal, { StaggerItem } from "@/components/shared/ScrollReveal";

const reviews = [
  {
    text: "Hosatti Refrigeration Service is excellent! The workers are very fast and do a great job. They fixed my fridge quickly and it works perfectly now. Arrived on time and finished in no time. Friendly and helpful too — highly recommend!",
    name: "Jakeer",
    service: "Fast Worker",
    initials: "JA",
  },
  {
    text: "Great experience with Hosatti Refrigeration! Friendly and helpful team. Fixed my fridge quickly at a fair price. Very happy with their service and will call them again. I recommend Hosatti to everyone who needs home repair!",
    name: "Shakeel Shaikh",
    service: "Excellent Service",
    initials: "SS",
  },
  {
    text: "Fantastic job fixing my refrigerator quickly. The service was excellent and the price was fair. Their team was very friendly and professional throughout. Highly recommend Hosatti for any home appliance repair needs!",
    name: "Shiv Sg",
    service: "Excellent Service",
    initials: "SG",
  },
  {
    text: "Extremely satisfied! They responded quickly when my AC stopped working. The technician diagnosed the issue immediately and had it running perfectly within an hour. Professional, polite, and completely transparent with pricing.",
    name: "Nehal Nadaf",
    service: "Professional & Reliable",
    initials: "NN",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative bg-light-bg py-20 md:py-28 lg:py-32 overflow-hidden">
      <div className="absolute top-0 right-1/4 h-64 w-64 rounded-full bg-yellow-400/5 blur-[120px]" />
      <div className="absolute bottom-0 left-0 h-52 w-52 rounded-full bg-blue-900/[0.04] blur-[100px]" />

      <div className="relative container mx-auto px-5 md:px-8">

        {/* Heading */}
        <ScrollReveal direction="blur">
          <div className="mb-12 text-center md:mb-16">
            <div className="mb-5 flex items-center justify-center gap-3">
              <div className="h-[1.5px] w-10 bg-gradient-to-r from-transparent to-yellow-400/60 rounded-full" />
              <span className="font-body text-[10px] font-semibold uppercase tracking-[0.25em] md:text-[11px]" style={{ color: "hsl(37,90%,55%)" }}>
                Testimonials
              </span>
              <div className="h-[1.5px] w-10 bg-gradient-to-l from-transparent to-yellow-400/60 rounded-full" />
            </div>
            <h2 className="font-display text-foreground">What Our Clients Say</h2>
            <p className="mx-auto mt-4 max-w-md font-body text-[16px] font-normal text-muted-foreground leading-relaxed md:text-[17px]">
              Trusted by hundreds of happy customers across Dharwad
            </p>
          </div>
        </ScrollReveal>

        {/* Static review grid — no auto-scroll, no carousel */}
        <ScrollReveal staggerChildren staggerDelay={0.06} delay={0.1}>
          <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 md:gap-6 max-w-4xl mx-auto">
            {reviews.map((review) => (
              <StaggerItem key={review.name} direction="up">
                <div className="group relative flex flex-col h-full overflow-hidden rounded-2xl border border-border/40 bg-white/90 backdrop-blur-sm shadow-md shadow-blue-900/4 transition-shadow duration-300 hover:shadow-lg hover:shadow-blue-900/8">
                  {/* Subtle corner glow */}
                  <div className="absolute -top-8 -right-8 h-28 w-28 rounded-full bg-yellow-400/[0.07] blur-2xl pointer-events-none" />

                  <div className="relative flex flex-col flex-1 p-5 sm:p-6">
                    {/* Top row: stars + quote icon */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400/15 to-yellow-400/5 border border-yellow-400/15 shrink-0">
                        <Quote className="h-3.5 w-3.5" style={{ color: "hsl(37,90%,55%)" }} />
                      </div>
                    </div>

                    {/* Review text */}
                    <blockquote className="flex-1 font-display italic text-foreground leading-snug text-[0.95rem] sm:text-[1rem]">
                      &ldquo;{review.text}&rdquo;
                    </blockquote>

                    {/* Divider */}
                    <div className="my-4 h-[1px] w-full bg-gradient-to-r from-transparent via-yellow-400/25 to-transparent" />

                    {/* Author */}
                    <div className="flex items-center gap-3">
                      <div
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-body text-[12px] font-bold shadow-md"
                        style={{ background: "linear-gradient(135deg,hsl(37,90%,55%),hsl(30,95%,48%))", color: "hsl(216,50%,10%)" }}
                      >
                        {review.initials}
                      </div>
                      <div className="min-w-0">
                        <p className="font-display text-foreground truncate" style={{ fontSize: "1.05rem", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                          {review.name}
                        </p>
                        <p className="mt-0.5 font-body text-[10px] font-medium text-muted-foreground tracking-[0.12em] uppercase truncate">
                          {review.service}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
