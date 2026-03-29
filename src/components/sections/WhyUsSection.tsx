// src/components/sections/WhyUsSection.tsx
import Image from "next/image";
import { CheckCircle2, Award } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";

const items = [
  "Flexible scheduling tailored to your convenience",
  "Expert technicians specialized in AC, Fridge & Washing Machines",
  "Transparent pricing — upfront quotes with no hidden charges",
  "100% genuine spare parts with warranty",
  "Comprehensive post-repair testing and safety checks",
  "Convenient doorstep service in Jay Nagar & surrounding areas",
  "Professional diagnostic equipment for precise troubleshooting",
  "Post-service support & maintenance tips",
];

export default function WhyUsSection() {
  return (
    <section id="why-us" className="relative bg-light-bg py-20 md:py-28 lg:py-32 overflow-hidden">
      <div className="absolute top-1/3 -left-20 h-80 w-80 rounded-full bg-yellow-400/[0.06] blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-900/5 blur-[120px]" />

      <div className="relative container mx-auto grid gap-12 px-5 md:grid-cols-2 md:gap-20 md:px-8 lg:gap-28">
        {/* Text Column */}
        <ScrollReveal className="flex flex-col justify-center order-2 md:order-1">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-[2px] w-8 bg-gradient-to-r from-yellow-400 to-yellow-400/40 rounded-full" />
            <span className="font-body text-[10px] font-semibold uppercase tracking-[0.25em] md:text-[11px]" style={{ color: "hsl(37,90%,55%)" }}>Why Choose Us</span>
          </div>
          <h2 className="font-display text-foreground">
            Why Dharwad Trusts{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent italic">Hosatti Refrigeration</span>
          </h2>
          <p className="mt-5 font-body text-[16px] font-normal text-muted-foreground leading-[1.8] md:text-[17px]">
            With a legacy of excellence spanning over 15+ years, Hosatti Refrigeration Service has become the first choice for reliable appliance repairs in Dharwad.
          </p>
          <ul className="mt-8 flex flex-col gap-2.5 md:mt-10">
            {items.map((item, i) => (
              <li key={item} className="group flex items-center gap-4 rounded-2xl border border-border/40 bg-white/90 backdrop-blur-sm px-4 py-3.5 shadow-sm transition-all duration-300 hover:shadow-md hover:border-yellow-400/25 hover:-translate-y-0.5">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-400/15 to-yellow-400/5 border border-yellow-400/15 transition-all duration-300 group-hover:from-yellow-400/25 group-hover:border-yellow-400/25">
                  <span className="font-body text-[11px] font-bold" style={{ color: "hsl(37,90%,55%)" }}>{String(i + 1).padStart(2, "0")}</span>
                </div>
                <span className="font-body text-[14px] font-semibold text-foreground tracking-[0.01em] md:text-[15px]">{item}</span>
                <CheckCircle2 className="ml-auto h-4 w-4 shrink-0 text-yellow-400/30 transition-colors duration-300 group-hover:text-yellow-400/60" />
              </li>
            ))}
          </ul>
        </ScrollReveal>

        {/* Image Column */}
        <ScrollReveal delay={0.15} className="flex items-center justify-center order-1 md:order-2">
          <div className="relative w-full max-w-[280px] sm:max-w-[360px] md:max-w-[420px] mt-8 sm:mt-0">
            {/* Enhanced background glows */}
            <div className="absolute -inset-4 sm:-inset-6 rounded-[2rem] sm:rounded-[2.5rem] bg-gradient-to-tr from-yellow-400/15 via-transparent to-blue-900/10 blur-[24px] sm:blur-[32px] -z-10" />
            
            {/* Offset architectural frame layer */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 w-full h-full rounded-[1.5rem] sm:rounded-[2rem] border border-border/60 bg-white/20 -z-10 transition-transform duration-500" />

            {/* Main Image Wrapper */}
            <div className="relative rounded-[1.25rem] sm:rounded-[1.75rem] overflow-hidden shadow-[0_20px_60px_rgba(11,43,107,0.15)] outline outline-1 outline-white/80 outline-offset-[-1px] group">
              {/* Subtle hover zoom */}
              <div className="absolute inset-0 bg-navy/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none" />
              <Image 
                src="/Why choose us image/Why choose us.webp" 
                alt="Hosatti Refrigeration Service expert technician at work in Dharwad" 
                width={420} 
                height={460} 
                className="relative object-cover object-center w-full transition-transform duration-1000 group-hover:scale-[1.03]" 
                loading="lazy" 
              />
            </div>

            {/* Premium Animated Floating Badge */}
            <div className="absolute -top-6 -left-4 sm:-top-8 sm:-left-8 flex items-center gap-3 sm:gap-4 rounded-2xl sm:rounded-[1.25rem] px-4 py-3 sm:px-5 sm:py-4 shadow-[0_12px_40px_rgba(0,0,0,0.12)] border border-white/80 backdrop-blur-xl bg-white/85 z-20 animate-[float_5s_ease-in-out_infinite]">
              {/* Icon Container */}
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-400/20 to-yellow-400/5 border border-yellow-400/20 shadow-inner">
                <Award className="h-5 w-5 sm:h-6 sm:w-6" style={{ color: "hsl(37,90%,50%)" }} />
              </div>
              
              <div className="flex flex-col">
                <p className="font-display text-[1.6rem] sm:text-[2rem] font-bold tracking-tight leading-none bg-gradient-to-br from-yellow-600 to-yellow-500 bg-clip-text text-transparent drop-shadow-sm">
                  15+
                </p>
                <p className="mt-0.5 font-body text-[8.5px] sm:text-[10px] font-bold text-navy tracking-[0.2em] uppercase">
                  Years of Service
                </p>
              </div>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
