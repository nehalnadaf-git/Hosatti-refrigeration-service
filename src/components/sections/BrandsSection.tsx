// src/components/sections/BrandsSection.tsx
import React from "react";

const allBrands = [
  "LG","Samsung","Videocon","IFB","Godrej","Haier","Panasonic","Voltas",
  "Whirlpool","Bosch","Siemens","Electrolux","Daikin","Hitachi","Lloyd",
  "Blue Star","Carrier","O General","Mitsubishi","Sharp","Onida","BPL","Kelvinator","TCL",
];

function BrandPill({ name }: { name: string }) {
  return <span className="brand-pill">{name}</span>;
}

function MarqueeRow({ brands, speed = 60 }: { brands: string[]; speed?: number }) {
  const tiles = [...brands, ...brands, ...brands, ...brands];
  return (
    <div className="marquee-viewport">
      <div className="marquee-track" style={{ "--marquee-speed": `${speed}s` } as React.CSSProperties}>
        {tiles.map((name, i) => <BrandPill key={`${name}-${i}`} name={name} />)}
      </div>
    </div>
  );
}

export default function BrandsSection() {
  return (
    <section className="brands-section">
      <div className="brands-bg-glow" />
      <div className="relative container mx-auto px-5 md:px-8">
        <div className="mb-10 text-center md:mb-14">
          <span className="brands-badge">
            <span className="brands-badge-dot" />
            Trusted Brand Partners
          </span>
          <h2 className="brands-heading">Brands We <span className="brands-heading-accent">Service</span></h2>
          <p className="brands-subtext">Certified expertise across India&apos;s most trusted home appliance brands</p>
        </div>
      </div>
      <MarqueeRow brands={allBrands} speed={60} />
    </section>
  );
}
