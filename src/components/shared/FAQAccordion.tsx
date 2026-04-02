// src/components/shared/FAQAccordion.tsx
"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import ScrollReveal, { StaggerItem } from "@/components/shared/ScrollReveal";

interface FAQ { question: string; answer: string; }

interface FAQAccordionProps {
  faqs: FAQ[];
  eyebrow?: string;
  heading?: string;
}

export default function FAQAccordion({
  faqs,
  eyebrow = "FAQ",
  heading = "Frequently Asked Questions",
}: FAQAccordionProps) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="relative bg-light-bg py-20 md:py-28 overflow-hidden">
      <div className="absolute top-0 right-1/4 h-64 w-64 rounded-full bg-yellow-400/5 blur-[120px]" />
      <div className="absolute bottom-0 left-0 h-52 w-52 rounded-full bg-blue-900/[0.04] blur-[100px]" />

      <div className="relative container mx-auto px-5 md:px-8">
        <ScrollReveal direction="blur">
          <div className="mb-10 text-center md:mb-14">
            <div className="mb-4 flex items-center justify-center gap-3">
              <div className="h-[1.5px] w-8 bg-gradient-to-r from-transparent to-yellow-400/60 rounded-full" />
              <span
                className="font-body text-[10px] font-semibold uppercase tracking-[0.25em] md:text-[11px]"
                style={{ color: "hsl(37,90%,55%)" }}
              >
                {eyebrow}
              </span>
              <div className="h-[1.5px] w-8 bg-gradient-to-l from-transparent to-yellow-400/60 rounded-full" />
            </div>
            <h2 className="font-display text-foreground">{heading}</h2>
          </div>
        </ScrollReveal>

        <ScrollReveal staggerChildren staggerDelay={0.05} delay={0.1}>
          <div className="mx-auto max-w-3xl flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <StaggerItem key={i} direction="up">
                <div className="overflow-hidden rounded-2xl border border-border/40 bg-white/90 backdrop-blur-sm shadow-sm transition-all duration-300 hover:border-yellow-400/20 hover:shadow-md">
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={open === i}
                  >
                    <span className="font-body text-[15px] md:text-[16px] font-semibold text-foreground leading-snug">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300"
                      style={{
                        transform: open === i ? "rotate(180deg)" : "rotate(0deg)",
                        color: open === i ? "hsl(37,90%,55%)" : undefined,
                      }}
                    />
                  </button>
                  {open === i && (
                    <div className="px-6 pb-5">
                      <div className="h-px w-full bg-gradient-to-r from-yellow-400/20 via-yellow-400/10 to-transparent mb-4" />
                      <p className="font-body text-[14px] md:text-[15px] text-muted-foreground leading-[1.75]">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              </StaggerItem>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
