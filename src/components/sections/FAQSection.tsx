// src/components/sections/FAQSection.tsx
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { FAQPageSchema } from "@/components/seo/FAQPageSchema";

const faqs = [
  { q: "How much does refrigerator repair cost?", a: "The cost depends on the issue. We provide transparent pricing before starting any work. Prices are indicative and may vary." },
  { q: "Do you provide home service?", a: "Yes! We offer doorstep repair services across Dharwad and surrounding areas." },
  { q: "Do you use original replacement parts?", a: "Yes, we use only genuine and high-quality spare parts for all repairs." },
  { q: "Which brands do you service?", a: "We service LG, Samsung, Videocon, IFB, Godrej, Haier, Panasonic, Voltas, Whirlpool, Bosch, and many more." },
  { q: "What are your working hours?", a: "We are open Monday to Saturday from 09:30 AM to 07:00 PM, and Sunday from 09:30 AM to 01:00 PM." },
  { q: "How do I book a service?", a: "Click the 'Book Service' button, choose your appliance, describe the problem, and we'll connect on WhatsApp instantly." },
  { q: "What payment methods do you accept?", a: "We accept UPI (Paytm, Google Pay) and Cash." },
];

export default function FAQSection() {
  return (
    <section id="faq" className="relative bg-light-bg py-20 md:py-28 lg:py-32 overflow-hidden">
      {/* FAQ page structured data for Google rich snippets */}
      <FAQPageSchema />
      <div className="absolute -bottom-10 right-0 h-72 w-72 rounded-full bg-blue-900/5 blur-[120px]" />
      <div className="absolute top-0 left-1/4 h-52 w-52 rounded-full bg-yellow-400/5 blur-[100px]" />

      <div className="relative container mx-auto max-w-2xl px-5 md:max-w-3xl lg:max-w-5xl md:px-8">
        <ScrollReveal>
          <div className="mb-12 text-center md:mb-14">
            <div className="mb-5 flex items-center justify-center gap-3">
              <div className="h-[1.5px] w-10 bg-gradient-to-r from-transparent to-yellow-400/60 rounded-full" />
              <span className="font-body text-[10px] font-semibold uppercase tracking-[0.25em] md:text-[11px]" style={{ color: "hsl(37,90%,55%)" }}>FAQ</span>
              <div className="h-[1.5px] w-10 bg-gradient-to-l from-transparent to-yellow-400/60 rounded-full" />
            </div>
            <h2 className="font-display text-foreground">Frequently Asked Questions</h2>
            <p className="mx-auto mt-4 max-w-md lg:max-w-xl font-body text-[16px] lg:text-[18px] font-normal text-muted-foreground leading-relaxed md:text-[17px]">
              Answers to common questions from our customers
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="space-y-3">
            <Accordion multiple={false}>
              {faqs.map(({ q, a }, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="group overflow-hidden rounded-2xl border border-border/50 bg-white/80 backdrop-blur-sm shadow-sm mb-3 transition-all duration-300 hover:shadow-md hover:border-yellow-400/20 data-[state=open]:border-yellow-400/30 data-[state=open]:shadow-md">
                  <AccordionTrigger className="flex items-center gap-3 px-5 py-4 text-left hover:no-underline md:px-6 md:py-5 lg:px-8 lg:py-6 [&[data-state=open]]:text-yellow-600" style={{ fontSize: "clamp(1.05rem,2vw,1.35rem)" }}>
                    <span className="shrink-0 flex h-7 w-7 items-center justify-center rounded-full bg-yellow-400/10 font-display text-[15px] font-bold border border-yellow-400/20 group-data-[state=open]:bg-yellow-400 group-data-[state=open]:text-white group-data-[state=open]:border-yellow-400 transition-all leading-none" style={{ color: "hsl(37,90%,55%)" }}>
                      ?
                    </span>
                    <span className="font-display font-semibold text-foreground tracking-[-0.02em] group-data-[state=open]:text-yellow-600 transition-colors">{q}</span>
                  </AccordionTrigger>
                  <AccordionContent className="font-body text-muted-foreground text-[15px] lg:text-[17px] font-normal leading-relaxed px-5 pb-5 md:px-6 md:pb-6 lg:px-8 lg:pb-7 md:text-[16px]">
                    <div className="flex gap-4">
                      <div className="w-[3px] shrink-0 rounded-full bg-gradient-to-b from-yellow-400/50 to-transparent ml-[13px]" />
                      <p>{a}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
