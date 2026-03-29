// src/components/sections/BrandsSection.tsx
import React from "react";
import ScrollReveal from "@/components/shared/ScrollReveal";

const allBrands = [
  "LG","Samsung","Videocon","IFB","Godrej","Haier","Panasonic","Voltas",
  "Whirlpool","Bosch","Siemens","Electrolux","Daikin","Hitachi","Lloyd",
  "Blue Star","Carrier","O General","Mitsubishi","Sharp","Onida","BPL","Kelvinator","TCL",
];

function BrandPill({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-6 sm:gap-10 mx-3 sm:mx-5 group cursor-default select-none">
      <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-foreground/15 transition-all duration-500 group-hover:scale-[1.8] group-hover:bg-yellow-400 shadow-[0_0_10px_rgba(245,166,35,0)] group-hover:shadow-[0_0_12px_rgba(245,166,35,0.6)]"></span>
      <span className="font-body text-[1.1rem] sm:text-[1.25rem] font-extrabold uppercase tracking-[0.15em] text-foreground/[0.22] transition-all duration-500 group-hover:text-foreground/[0.85] group-hover:-translate-y-0.5">
        {name}
      </span>
    </div>
  );
}

function MarqueeRow({ brands, speed = 80 }: { brands: string[]; speed?: number }) {
  const tiles = [...brands, ...brands, ...brands, ...brands];
  return (
    <div className="relative w-full py-6 mt-4 md:mt-8 overflow-hidden">
      <div className="marquee-viewport">
        <div className="marquee-track flex w-max items-center" style={{ "--marquee-speed": `${speed}s` } as React.CSSProperties}>
          {tiles.map((name, i) => <BrandPill key={`${name}-${i}`} name={name} />)}
        </div>
      </div>
    </div>
  );
}

export default function BrandsSection() {
  return (
    <section className="relative bg-light-bg py-20 md:py-28 lg:py-32 overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-1/2 left-0 h-[350px] w-[350px] -translate-y-1/2 rounded-full bg-yellow-400/[0.05] blur-[120px]" />
      <div className="absolute top-1/2 right-0 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-blue-900/[0.03] blur-[120px]" />

      <div className="relative container mx-auto px-5 md:px-8">
        <ScrollReveal>
          <div className="mb-10 text-center md:mb-14">
            <div className="mb-5 flex items-center justify-center gap-3">
              <div className="h-[1.5px] w-10 bg-gradient-to-r from-transparent to-yellow-400/60 rounded-full" />
              <span className="font-body text-[10px] font-semibold uppercase tracking-[0.25em] md:text-[11px]" style={{ color: "hsl(37,90%,55%)" }}>
                Trusted Partners
              </span>
              <div className="h-[1.5px] w-10 bg-gradient-to-l from-transparent to-yellow-400/60 rounded-full" />
            </div>
            
            <h2 className="font-display text-foreground" style={{ fontSize: "clamp(2rem,4.5vw,3.25rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              Brands We <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent italic">Service</span>
            </h2>
            
            <p className="mx-auto mt-4 max-w-lg font-body text-[16px] font-normal text-muted-foreground leading-relaxed md:text-[17px]">
              Certified expertise across India&apos;s most trusted home appliance brands.
            </p>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0.1}>
        <MarqueeRow brands={allBrands} speed={60} />
      </ScrollReveal>
    </section>
  );
}
