// src/components/sections/AboutSection.tsx
import Image from "next/image";
import { ShieldCheck, Wrench, Package, ThumbsUp } from "lucide-react";
import { motion } from "motion/react";
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
        <ScrollReveal direction="right" delay={0}>
          {/* pb-16 on mobile ensures badge overflow has breathing room */}
          <div className="flex items-center justify-center pb-20 sm:pb-12 md:pb-0">
            <div className="relative w-full max-w-[320px] sm:max-w-[360px] md:max-w-[460px] lg:max-w-[520px] mt-2 sm:mt-0">
              <Image
                src="/Jameer/Jameer.webp"
                alt="Jameer Hosatti — Owner & Chief Technician at Hosatti Refrigeration Service, Dharwad"
                width={420}
                height={525}
                className="relative w-full rounded-[1.5rem] sm:rounded-3xl object-cover aspect-[4/5] md:aspect-[3/4]"
                style={{ boxShadow: "0 2px 4px rgba(11,43,107,0.04),0 8px 16px rgba(11,43,107,0.08),0 24px 48px rgba(11,43,107,0.12),0 48px 96px rgba(11,43,107,0.06)" }}
              />

              {/* Name tag — Premium Blue Glassmorphism */}
              <div
                className="absolute -bottom-8 -left-4 sm:-bottom-9 sm:-left-6 md:-bottom-12 md:-left-8 rounded-2xl md:rounded-3xl bg-gradient-to-br from-navy/70 to-blue-900/40 backdrop-blur-xl px-4 py-3 sm:px-5 sm:py-4 md:px-7 md:py-5 z-20 shadow-[0_16px_40px_rgba(11,43,107,0.4),inset_0_1px_0_rgba(255,255,255,0.2)] border border-white/20 animate-[float-subtle_4s_ease-in-out_infinite]"
              >
                <div className="flex items-center gap-2.5">
                  <div className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-yellow-400 flex-shrink-0 shadow-[0_0_8px_rgba(250,204,21,0.6)]" />
                  <p className="font-display text-[0.9rem] sm:text-[1.1rem] md:text-[1.35rem] font-bold text-white tracking-tight whitespace-nowrap drop-shadow-md">
                    Jameer Hosatti
                  </p>
                </div>
                <p className="mt-0.5 font-body text-[8px] sm:text-[9.5px] md:text-[11px] font-bold uppercase tracking-[0.22em] text-white/70 pl-[22px] sm:pl-[26px]">
                  Chief Technician
                </p>
              </div>

              {/* Experience tag — Premium Blue Glassmorphism */}
              <div
                className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-4 md:-bottom-6 md:-right-10 rounded-2xl md:rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl px-4 py-3 sm:px-5 sm:py-4 md:px-7 md:py-5 z-20 shadow-[0_16px_40px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.3)] border border-white/30 animate-[float-subtle_5s_ease-in-out_infinite]"
                style={{ animationDelay: "1s" }}
              >
                <div className="flex flex-col items-start">
                  <p className="font-display font-bold leading-none text-[1.5rem] sm:text-[2rem] md:text-[2.8rem] bg-gradient-to-br from-yellow-400 to-yellow-600 bg-clip-text text-transparent drop-shadow-sm" style={{ letterSpacing: "-0.04em" }}>
                    15+
                  </p>
                  <p className="mt-1 font-body text-[8px] sm:text-[9.5px] md:text-[11px] font-bold uppercase tracking-[0.22em] text-white/90 whitespace-nowrap drop-shadow-sm">
                    Years of Experience
                  </p>
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
              <span className="font-body text-[10px] font-semibold uppercase tracking-[0.25em] text-gold md:text-[11px]">About Us</span>
            </div>

            <h2 className="font-display text-foreground pb-1">
              Dharwad&apos;s Most Trusted{" "}
              <span className="bg-gradient-to-r from-navy to-[hsl(220,85%,38%)] bg-clip-text text-transparent italic px-1">Repair Experts</span>
            </h2>

            <p className="mt-5 font-body text-[16px] lg:text-[19px] text-muted-foreground leading-[1.8] font-normal md:text-[17px]">
              Founded by <span className="font-semibold" style={{ color: "hsl(220,85%,23%)" }}>Jameer Hosatti</span>, Hosatti Refrigeration Service in Jay Nagar, Dharwad is a one-stop destination for all home appliance repairs. From refrigerators to ACs to washing machines, our skilled technicians serve both local and out-of-city customers with precision and care.
            </p>

            <ScrollReveal staggerChildren staggerDelay={0.07} delay={0.2}>
              <div className="mt-8 grid grid-cols-2 gap-3 md:mt-10 md:gap-4">
                {highlights.map(({ icon: Icon, label, sub }) => (
                  <StaggerItem key={label} direction="scale">
                    <div className="group relative flex flex-col items-start gap-3 overflow-hidden rounded-2xl border border-border/50 bg-white/80 backdrop-blur-sm p-4 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-yellow-400/25 hover:-translate-y-1 md:p-5 lg:p-7">
                      <div className="flex h-10 w-10 lg:h-14 lg:w-14 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-400/15 to-yellow-400/5 transition-all duration-300 group-hover:from-yellow-400/30 group-hover:to-yellow-400/10">
                        <Icon className="h-5 w-5 lg:h-7 lg:w-7 text-gold" style={{ color: "hsl(37,90%,55%)" }} />
                      </div>
                      <div>
                        <p className="font-body text-[13px] lg:text-[16px] font-semibold text-foreground leading-snug md:text-[14px]">{label}</p>
                        <p className="mt-0.5 font-body text-[11px] lg:text-[13px] font-normal text-muted-foreground leading-snug md:text-[11.5px]">{sub}</p>
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
