// src/components/sections/AboutSection.tsx
import Image from "next/image";
import { ShieldCheck, Wrench, Package, ThumbsUp } from "lucide-react";
import ScrollReveal, { StaggerItem } from "@/components/shared/ScrollReveal";

const highlights = [
  { icon: ShieldCheck, label: "Expert Technicians", sub: "Trained & verified experts" },
  { icon: Wrench,      label: "All Brands Serviced",   sub: "LG, Samsung, IFB & more" },
  { icon: Package,     label: "Genuine Spare Parts",   sub: "Only authentic components" },
  { icon: ThumbsUp,    label: "Satisfaction Assured",  sub: "Quality service guaranteed" },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-light-bg py-20 md:py-28 lg:py-32">
      <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "repeating-linear-gradient(45deg,hsl(220,85%,23%) 0,hsl(220,85%,23%) 1px,transparent 0,transparent 50%)", backgroundSize: "20px 20px" }} />
      <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-yellow-400/[0.08] blur-[140px]" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-blue-900/[0.06] blur-[120px]" />

      <div className="relative container mx-auto grid gap-12 px-5 md:grid-cols-2 md:gap-20 md:px-8 lg:gap-28">
        {/* Image Column */}
        <ScrollReveal direction="right">
          {/* pb-16 on mobile ensures badge overflow has breathing room */}
          <div className="flex items-center justify-center pb-16 sm:pb-4 md:pb-0">
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] mt-2 sm:mt-0">
              <Image
                src="/Jameer/Jameer.webp"
                alt="Jameer Hosatti — Owner & Chief Technician at Hosatti Refrigeration Service, Dharwad"
                width={420}
                height={525}
                className="relative w-full rounded-[1.5rem] sm:rounded-3xl object-cover aspect-[4/5] md:aspect-[3/4]"
                style={{ boxShadow: "0 2px 4px rgba(11,43,107,0.04),0 8px 16px rgba(11,43,107,0.08),0 24px 48px rgba(11,43,107,0.12),0 48px 96px rgba(11,43,107,0.06)" }}
              />

              {/* Name badge — bottom-left, overhangs card */}
              <div
                className="absolute -bottom-4 -left-2 sm:-bottom-5 sm:-left-4 md:-bottom-6 md:-left-6 rounded-2xl bg-[hsl(220,85%,23%)] px-3.5 py-3 sm:px-5 sm:py-4 z-20 shadow-[0_8px_16px_rgba(11,43,107,0.12),0_16px_32px_rgba(11,43,107,0.16)] border border-white/10"
              >
                <div className="mb-1 sm:mb-1.5 h-[2px] w-4 sm:w-5 rounded-full" style={{ background: "hsl(37,90%,55%)" }} />
                <p className="font-display text-[0.95rem] sm:text-[1.1rem] font-semibold leading-snug text-white tracking-[-0.01em] whitespace-nowrap">
                  Jameer Hosatti
                </p>
                <p className="mt-0.5 font-body text-[6.5px] sm:text-[7.5px] md:text-[8px] font-bold uppercase tracking-[0.2em] text-white/70 whitespace-nowrap">
                  Chief Technician
                </p>
              </div>

              {/* Years badge — bottom-right, overhangs card, left-aligned content */}
              <div
                className="absolute -bottom-4 -right-2 sm:-bottom-5 sm:-right-4 md:-bottom-6 md:-right-6 rounded-2xl bg-white/95 px-3.5 py-3 sm:px-5 sm:py-4 z-20 flex flex-col items-start transition-transform duration-500 hover:-translate-y-1 shadow-[0_8px_16px_rgba(11,43,107,0.06),0_16px_32px_rgba(11,43,107,0.08)] border border-blue-900/5 backdrop-blur-sm"
              >
                <div className="mb-1 sm:mb-1.5 h-[2px] w-4 sm:w-5 rounded-full" style={{ background: "hsl(37,90%,55%)" }} />
                <p
                  className="font-display font-bold leading-none text-[2rem] sm:text-[2.5rem] md:text-[2.75rem]"
                  style={{ letterSpacing: "-0.04em", color: "hsl(37,90%,55%)" }}
                >
                  15+
                </p>
                <p className="mt-1 font-body text-[6.5px] sm:text-[7.5px] md:text-[8px] font-bold uppercase tracking-[0.2em] text-muted-foreground whitespace-nowrap">
                  Years Experience
                </p>
              </div>

            </div>
          </div>
        </ScrollReveal>


        {/* Text Column */}
        <ScrollReveal direction="blur" delay={0.15}>
          <div className="flex flex-col justify-center">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-[2px] w-8 bg-gradient-to-r from-yellow-400 to-yellow-400/40 rounded-full" />
              <span className="font-body text-[10px] font-semibold uppercase tracking-[0.25em] text-gold md:text-[11px]">About Us</span>
            </div>

            <h2 className="font-display text-foreground">
              Dharwad&apos;s Most Trusted{" "}
              <span className="bg-gradient-to-r from-navy to-[hsl(220,85%,38%)] bg-clip-text text-transparent italic">Repair Experts</span>
            </h2>

            <p className="mt-5 font-body text-[16px] text-muted-foreground leading-[1.8] font-normal md:text-[17px]">
              Founded by <span className="font-semibold" style={{ color: "hsl(220,85%,23%)" }}>Jameer Hosatti</span>, Hosatti Refrigeration Service in Jay Nagar, Dharwad is a one-stop destination for all home appliance repairs. From refrigerators to ACs to washing machines, our skilled technicians serve both local and out-of-city customers with precision and care.
            </p>

            <ScrollReveal staggerChildren staggerDelay={0.07} delay={0.25}>
              <div className="mt-8 grid grid-cols-2 gap-3 md:mt-10 md:gap-4">
                {highlights.map(({ icon: Icon, label, sub }) => (
                  <StaggerItem key={label} direction="scale">
                    <div className="group relative flex flex-col items-start gap-3 overflow-hidden rounded-2xl border border-border/50 bg-white/80 backdrop-blur-sm p-4 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-yellow-400/25 hover:-translate-y-1 md:p-5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-400/15 to-yellow-400/5 transition-all duration-300 group-hover:from-yellow-400/30 group-hover:to-yellow-400/10">
                        <Icon className="h-5 w-5 text-gold" style={{ color: "hsl(37,90%,55%)" }} />
                      </div>
                      <div>
                        <p className="font-body text-[13px] font-semibold text-foreground leading-snug md:text-[14px]">{label}</p>
                        <p className="mt-0.5 font-body text-[11px] font-normal text-muted-foreground leading-snug md:text-[11.5px]">{sub}</p>
                      </div>
                      <div className="absolute bottom-3 right-3 h-1.5 w-1.5 rounded-full bg-yellow-400/30 group-hover:bg-yellow-400/60 transition-colors duration-300" />
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
