// src/components/sections/WhyUsSection.tsx
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
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
          <div className="relative w-full max-w-[280px] sm:max-w-[360px] md:max-w-[420px] mt-6 sm:mt-0">
            <div className="absolute -inset-3 sm:-inset-4 rounded-[1.5rem] sm:rounded-[2rem] bg-gradient-to-tr from-yellow-400/12 to-blue-900/6 blur-xl sm:blur-2xl" />
            <div className="absolute -top-1 -left-1 sm:-top-2 sm:-left-2 h-8 w-8 sm:h-12 sm:w-12 border-t-2 border-l-2 border-yellow-400/40 rounded-tl-2xl" />
            <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 h-8 w-8 sm:h-12 sm:w-12 border-b-2 border-r-2 border-yellow-400/40 rounded-br-2xl" />
            <Image src="/Why choose us image/Why choose us.webp" alt="Hosatti Refrigeration Service expert technician at work in Dharwad" width={420} height={420} className="relative rounded-[1.25rem] sm:rounded-[1.65rem] object-cover object-center shadow-2xl w-full" loading="lazy" />
            <div className="absolute -top-4 -left-3 sm:-top-5 sm:-left-5 md:-top-6 md:-left-6 rounded-xl sm:rounded-2xl px-4 py-3 sm:px-5 sm:py-3.5 shadow-2xl border border-white/70 glass-light z-20">
              <p className="font-display text-[2.2rem] sm:text-[2.6rem] font-bold tracking-[-0.04em] leading-none md:text-[3rem]" style={{ color: "#0f172a" }}>15+</p>
              <div className="mt-1 h-[1.5px] w-full bg-gradient-to-r from-[#0f172a]/30 to-transparent" />
              <p className="mt-1 font-body text-[8px] sm:text-[9px] font-semibold text-muted-foreground tracking-[0.18em] uppercase md:text-[10px]">Years of Service</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
