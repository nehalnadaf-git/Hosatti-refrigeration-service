// src/components/sections/HeroSection.tsx
"use client";
import Image from "next/image";
import { ArrowRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS } from "@/lib/constants";

interface HeroSectionProps {
  onBookService: () => void;
}

export default function HeroSection({ onBookService }: HeroSectionProps) {
  return (
    <section id="home" className="relative w-full flex flex-col overflow-hidden bg-[#020817] leading-none" suppressHydrationWarning>
      {/* Web Banner */}
      <Image
        src="/Banner/Web Banner.webp"
        alt="Hosatti Refrigeration Service — AC, Fridge & Appliance Repair Dharwad"
        width={1920}
        height={1080}
        priority
        className="hidden md:block relative w-full h-auto mt-[-44px] z-10"
        sizes="100vw"
      />
      {/* Mobile Banner */}
      <Image
        src="/Banner/Mobile banner.webp"
        alt="Hosatti Refrigeration Service Dharwad"
        width={768}
        height={1024}
        priority
        className="block md:hidden relative w-full h-auto mt-[68px] z-10"
        sizes="100vw"
      />

      {/* CTA Buttons — positioned absolutely over the banner */}
      <div className="absolute bottom-[52px] sm:bottom-[88px] md:bottom-[120px] lg:bottom-[140px] left-1/2 -translate-x-1/2 z-30 w-[88%] max-w-[520px]">
        <div className="flex flex-row gap-2.5 sm:gap-3">

          {/* Book Service — Gold primary */}
          <Button
            onClick={onBookService}
            className="flex-1 relative group overflow-hidden rounded-xl h-[42px] sm:h-[52px] font-body font-bold text-[11px] sm:text-[13px] tracking-[0.08em] uppercase shadow-2xl transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg, hsl(37,92%,52%), hsl(30,98%,45%))",
              color: "hsl(216,50%,10%)",
              boxShadow: "0 4px 20px rgba(245,166,35,0.40), 0 1px 3px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.20)",
            }}
          >
            <span className="relative z-10 flex items-center justify-center gap-1.5 sm:gap-2">
              Book Service
              <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </span>
            {/* Shimmer */}
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </Button>

          {/* Call Now — Premium Glassmorphism button */}
          <a
            href={`tel:${BUSINESS.phone.replace(/-/g, "")}`}
            suppressHydrationWarning
            className="flex-1 group relative flex items-center justify-center gap-2 sm:gap-2.5 rounded-xl h-[42px] sm:h-[52px] font-body font-bold text-[11px] sm:text-[13px] tracking-[0.08em] uppercase transition-all duration-300 hover:-translate-y-0.5 overflow-hidden text-white bg-[rgba(255,255,255,0.06)] [backdrop-filter:blur(24px)] [-webkit-backdrop-filter:blur(24px)] border border-[rgba(255,255,255,0.15)] shadow-[0_8px_32px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.20)] hover:bg-[rgba(255,255,255,0.1)] hover:border-white/30"
          >
            <PhoneCall className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-white/90 group-hover:text-white transition-colors drop-shadow-sm" />
            <span className="drop-shadow-sm text-white/90 group-hover:text-white transition-colors">Call Now</span>
            {/* Shimmer */}
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </a>

        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-[-1.5px] left-0 right-0 z-20 pointer-events-none overflow-visible">
        <svg 
          viewBox="0 0 1440 80" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full block scale-y-[1.05] translate-y-[0.5px]" 
          preserveAspectRatio="none"
          suppressHydrationWarning
        >
          <path
            suppressHydrationWarning
            d="M0 80L0 79C60 77 140 71 240 62C360 51 500 40 660 38C820 36 960 46 1080 56C1180 64 1300 66 1380 56L1440 46V80H0Z"
            fill="hsl(220, 30%, 98%)"
          />
        </svg>
      </div>
    </section>
  );
}
