// src/components/sections/AboutSection.tsx
import Image from "next/image";
import { ShieldCheck, Wrench, Package, ThumbsUp } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";

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
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-[340px] md:max-w-[400px]">
              <Image
                src="/Jameer/Jameer.webp"
                alt="Jameer Hosatti — Owner & Chief Technician at Hosatti Refrigeration Service, Dharwad"
                width={400}
                height={500}
                className="relative w-full rounded-3xl object-cover aspect-[4/5] md:aspect-[3/4]"
                style={{ boxShadow: "0 2px 4px rgba(11,43,107,0.04),0 8px 16px rgba(11,43,107,0.08),0 24px 48px rgba(11,43,107,0.12),0 48px 96px rgba(11,43,107,0.06)" }}
              />
              {/* Years badge */}
              <div className="absolute -bottom-5 -right-5 rounded-2xl bg-white px-5 py-4 md:-bottom-6 md:-right-6" style={{ boxShadow: "0 4px 6px rgba(11,43,107,0.04),0 12px 28px rgba(11,43,107,0.10)", border: "1px solid rgba(11,43,107,0.08)" }}>
                <p className="font-display font-bold leading-none" style={{ fontSize: "2.8rem", letterSpacing: "-0.05em", color: "#0f172a" }}>15+</p>
                <p className="mt-1.5 font-body text-[9px] font-semibold uppercase tracking-[0.22em] text-muted-foreground md:text-[9.5px]">Years Experience</p>
              </div>
              {/* Name badge */}
              <div className="absolute -bottom-5 -left-5 md:-bottom-6 md:-left-6 rounded-2xl bg-[hsl(220,85%,23%)] px-4 py-3" style={{ boxShadow: "0 4px 6px rgba(11,43,107,0.15),0 12px 28px rgba(11,43,107,0.22)" }}>
                <div className="mb-1.5 h-[2px] w-6 rounded-full bg-yellow-400" />
                <p className="font-display text-[1.05rem] font-semibold leading-snug text-white tracking-[-0.01em]">Jameer Hosatti</p>
                <p className="mt-0.5 font-body text-[8.5px] font-semibold uppercase tracking-[0.2em] text-yellow-400/80">Owner &amp; Chief Technician</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Text Column */}
        <ScrollReveal delay={0.15}>
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

            <div className="mt-8 grid grid-cols-2 gap-3 md:mt-10 md:gap-4">
              {highlights.map(({ icon: Icon, label, sub }, i) => (
                <div key={label} className="group relative flex flex-col items-start gap-3 overflow-hidden rounded-2xl border border-border/50 bg-white/80 backdrop-blur-sm p-4 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-yellow-400/25 hover:-translate-y-1 md:p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-400/15 to-yellow-400/5 transition-all duration-300 group-hover:from-yellow-400/30 group-hover:to-yellow-400/10">
                    <Icon className="h-5 w-5 text-gold" style={{ color: "hsl(37,90%,55%)" }} />
                  </div>
                  <div>
                    <p className="font-body text-[13px] font-semibold text-foreground leading-snug md:text-[14px]">{label}</p>
                    <p className="mt-0.5 font-body text-[11px] font-normal text-muted-foreground leading-snug md:text-[11.5px]">{sub}</p>
                  </div>
                  <div className="absolute bottom-3 right-3 h-1.5 w-1.5 rounded-full bg-yellow-400/30 group-hover:bg-yellow-400/60 transition-colors duration-300" />
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
