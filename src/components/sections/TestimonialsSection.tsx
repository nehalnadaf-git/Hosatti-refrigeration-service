// src/components/sections/TestimonialsSection.tsx
"use client";
import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";

const reviews = [
  { text: "Hosatti Refrigeration Service is excellent! The workers are very fast and do a great job. They fixed my fridge quickly and it works perfectly now. I was impressed with how they arrived on time and finished the work in no time. Their service is friendly and helpful too. I highly recommend them for any refrigeration needs!", name: "Jakeer", service: "Fast worker", initials: "JA" },
  { text: "I had a great experience with Hosatti Refrigeration Service! Their team was very friendly and helpful. They fixed my fridge quickly and did an excellent job. The price was fair too. I am very happy with their service and will call them again if I need help. I recommend Hosatti to everyone who needs home repair! Thank you, Hosatti!", name: "Shakeel Shaikh", service: "Excellent service", initials: "SS" },
  { text: "I had a great experience with Hosatti Refrigeration Service! Their team was very friendly and helpful. They fixed my refrigerator quickly and did a fantastic job. The service was excellent, and the price was fair. I am very happy with their work! I highly recommend Hosatti for any home repair needs. Thank you, Hosatti!", name: "Shiv Sg", service: "Excellent service", initials: "SS" },
  { text: "Extremely satisfied with the service from Hosatti Refrigeration. They responded quickly when my AC stopped working and the technician was very knowledgeable. He diagnosed the issue immediately and had it running perfectly within an hour. Highly professional, polite, and completely transparent with pricing. Highly recommended!", name: "Nehal Nadaf", service: "Professional & Reliable", initials: "NN" },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive(p => (p + 1) % reviews.length), 5000);
    return () => clearInterval(t);
  }, []);

  const prev = () => setActive(p => (p - 1 + reviews.length) % reviews.length);
  const next = () => setActive(p => (p + 1) % reviews.length);

  return (
    <section className="relative bg-light-bg py-20 md:py-28 lg:py-32 overflow-hidden">
      <div className="absolute top-0 right-1/4 h-64 w-64 rounded-full bg-yellow-400/5 blur-[120px]" />
      <div className="absolute bottom-0 left-0 h-52 w-52 rounded-full bg-blue-900/[0.04] blur-[100px]" />

      <div className="relative container mx-auto px-5 md:px-8">
        <ScrollReveal>
          <div className="mb-12 text-center md:mb-16">
            <div className="mb-5 flex items-center justify-center gap-3">
              <div className="h-[1.5px] w-10 bg-gradient-to-r from-transparent to-yellow-400/60 rounded-full" />
              <span className="font-body text-[10px] font-semibold uppercase tracking-[0.25em] md:text-[11px]" style={{ color: "hsl(37,90%,55%)" }}>Testimonials</span>
              <div className="h-[1.5px] w-10 bg-gradient-to-l from-transparent to-yellow-400/60 rounded-full" />
            </div>
            <h2 className="font-display text-foreground">What Our Clients Say</h2>
            <p className="mx-auto mt-4 max-w-md font-body text-[16px] font-normal text-muted-foreground leading-relaxed md:text-[17px]">
              Trusted by hundreds of happy customers across Dharwad
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mx-auto max-w-2xl">
            <div className="relative overflow-hidden rounded-3xl border border-border/40 bg-white/90 backdrop-blur-sm shadow-xl shadow-blue-900/5">
              <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-yellow-400/[0.06] blur-3xl" />
              <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-blue-900/[0.04] blur-2xl" />
              <div className="relative p-7 md:p-10">
                <div className="flex items-start justify-between mb-7">
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400/15 to-yellow-400/5 border border-yellow-400/15">
                    <Quote className="h-4 w-4" style={{ color: "hsl(37,90%,55%)" }} />
                  </div>
                </div>
                <blockquote className="font-display italic text-foreground leading-snug">{reviews[active].text}</blockquote>
                <div className="my-7 h-[1px] w-full bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent" />
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full font-body text-[13px] font-bold shadow-lg md:h-14 md:w-14" style={{ background: "linear-gradient(135deg,hsl(37,90%,55%),hsl(30,95%,48%))", color: "hsl(216,50%,10%)" }}>
                    {reviews[active].initials}
                  </div>
                  <div>
                    <p className="font-display text-foreground" style={{ fontSize: "1.25rem", letterSpacing: "-0.02em", lineHeight: 1.2 }}>{reviews[active].name}</p>
                    <p className="mt-0.5 font-body text-[11px] font-medium text-muted-foreground tracking-[0.12em] uppercase md:text-[12px]">{reviews[active].service}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-7 flex items-center justify-between">
              <button onClick={prev} className="flex h-10 w-10 items-center justify-center rounded-full border border-border/50 bg-white/80 shadow-sm transition-all hover:border-yellow-400/35 hover:shadow-md hover:bg-white" aria-label="Previous review">
                <ChevronLeft className="h-4 w-4 text-foreground" />
              </button>
              <div className="flex gap-2 items-center">
                {reviews.map((_, i) => (
                  <button key={i} onClick={() => setActive(i)} className={`rounded-full transition-all duration-300 ${i === active ? "h-2 w-8 bg-yellow-400 shadow-sm" : "h-2 w-2 bg-border/80 hover:bg-yellow-400/40"}`} aria-label={`Go to review ${i + 1}`} />
                ))}
              </div>
              <button onClick={next} className="flex h-10 w-10 items-center justify-center rounded-full border border-border/50 bg-white/80 shadow-sm transition-all hover:border-yellow-400/35 hover:shadow-md hover:bg-white" aria-label="Next review">
                <ChevronRight className="h-4 w-4 text-foreground" />
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
