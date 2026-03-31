// src/components/sections/TestimonialsSection.tsx
"use client";
import { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";

const reviews = [
  {
    text: "Hosatti Refrigeration Service is excellent! The workers are very fast and do a great job. They fixed my fridge quickly — arrived on time and finished in no time. Friendly and helpful. Highly recommend for any refrigeration needs!",
    name: "Jakeer",
    service: "Fast Worker",
    initials: "JA",
  },
  {
    text: "Great experience with Hosatti Refrigeration! Friendly and helpful team. Fixed my fridge quickly at a fair price. Very happy with their service and will definitely call them again. I recommend Hosatti to everyone!",
    name: "Shakeel Shaikh",
    service: "Excellent Service",
    initials: "SS",
  },
  {
    text: "Fantastic job fixing my refrigerator quickly. The service was excellent and the price was fair. Their team was very friendly and professional throughout. Highly recommend Hosatti for any home appliance repair!",
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
  const [active, setActive] = useState(0);

  const prev = () => setActive((p) => (p - 1 + reviews.length) % reviews.length);
  const next = () => setActive((p) => (p + 1) % reviews.length);

  return (
    <section className="relative bg-light-bg py-20 md:py-28 lg:py-32 overflow-hidden">
      <div className="absolute top-0 right-1/4 h-64 w-64 rounded-full bg-yellow-400/5 blur-[120px]" />
      <div className="absolute bottom-0 left-0 h-52 w-52 rounded-full bg-blue-900/[0.04] blur-[100px]" />

      <div className="relative container mx-auto px-5 md:px-8">

        {/* Heading */}
        <ScrollReveal direction="blur">
          <div className="mb-10 text-center md:mb-14">
            <div className="mb-4 flex items-center justify-center gap-3">
              <div className="h-[1.5px] w-8 bg-gradient-to-r from-transparent to-yellow-400/60 rounded-full" />
              <span className="font-body text-[10px] font-semibold uppercase tracking-[0.25em] md:text-[11px]" style={{ color: "hsl(37,90%,55%)" }}>
                Testimonials
              </span>
              <div className="h-[1.5px] w-8 bg-gradient-to-l from-transparent to-yellow-400/60 rounded-full" />
            </div>
            <h2 className="font-display text-foreground">What Our Clients Say</h2>
            <p className="mx-auto mt-3 max-w-sm lg:max-w-xl font-body text-[15px] lg:text-[18px] font-normal text-muted-foreground leading-relaxed md:text-[16px]">
              Trusted by hundreds of happy customers across Dharwad
            </p>
          </div>
        </ScrollReveal>

        {/* Slider */}
        <ScrollReveal delay={0.1}>
          <div className="mx-auto max-w-xl md:max-w-2xl lg:max-w-5xl">

            {/* Track — clips overflow, shows one card at a time */}
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex"
                style={{
                  transform: `translateX(-${active * 100}%)`,
                  transition: "transform 0.45s cubic-bezier(0.2, 1, 0.35, 1)",
                  willChange: "transform",
                }}
              >
                {reviews.map((review) => (
                  <div
                    key={review.name}
                    className="w-full flex-shrink-0 px-0"
                  >
                    {/* Card */}
                    <div className="relative overflow-hidden rounded-2xl border border-border/40 bg-white/90 backdrop-blur-sm shadow-md shadow-blue-900/5">
                      <div className="absolute -top-8 -right-8 h-24 w-24 rounded-full bg-yellow-400/[0.07] blur-2xl pointer-events-none" />

                      <div className="relative p-5 sm:p-8 md:p-10 lg:p-14 xl:p-16">
                        {/* Stars + Quote */}
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
                        <blockquote className="font-display italic text-foreground leading-relaxed text-[0.9rem] sm:text-[1.05rem] md:text-[1.2rem] lg:text-[1.5rem] min-h-[80px]">
                          &ldquo;{review.text}&rdquo;
                        </blockquote>

                        {/* Divider */}
                        <div className="my-4 h-[1px] w-full bg-gradient-to-r from-transparent via-yellow-400/25 to-transparent" />

                        {/* Author */}
                        <div className="flex items-center gap-3">
                          <div
                            className="flex h-9 w-9 md:h-12 md:w-12 lg:h-16 lg:w-16 shrink-0 items-center justify-center rounded-full font-body text-[11px] md:text-[13px] lg:text-[16px] font-bold shadow-md"
                            style={{ background: "linear-gradient(135deg,hsl(37,90%,55%),hsl(30,95%,48%))", color: "hsl(216,50%,10%)" }}
                          >
                            {review.initials}
                          </div>
                          <div className="min-w-0">
                            <p className="font-display text-foreground lg:text-[1.2rem]" style={{ fontSize: "1rem", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                              {review.name}
                            </p>
                            <p className="mt-0.5 font-body text-[10px] font-medium text-muted-foreground tracking-[0.12em] uppercase">
                              {review.service}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Controls */}
            <div className="mt-5 flex items-center justify-between">
              <button
                onClick={prev}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border/50 bg-white/80 shadow-sm transition-all duration-200 hover:border-yellow-400/40 hover:shadow-md hover:bg-white active:scale-95"
                aria-label="Previous review"
              >
                <ChevronLeft className="h-4 w-4 text-foreground" />
              </button>

              {/* Dots */}
              <div className="flex gap-2 items-center">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`rounded-full transition-all duration-300 ${
                      i === active
                        ? "h-2 w-7 bg-yellow-400 shadow-sm"
                        : "h-2 w-2 bg-border/70 hover:bg-yellow-400/40"
                    }`}
                    aria-label={`Review ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border/50 bg-white/80 shadow-sm transition-all duration-200 hover:border-yellow-400/40 hover:shadow-md hover:bg-white active:scale-95"
                aria-label="Next review"
              >
                <ChevronRight className="h-4 w-4 text-foreground" />
              </button>
            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
