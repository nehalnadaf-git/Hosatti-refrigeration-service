// src/components/sections/HeroSection.tsx
"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY < 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full flex flex-col overflow-hidden bg-[#020817] leading-none"
      suppressHydrationWarning
    >
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
      {/* ── Scroll-Down Indicator ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "clamp(52px, 8vw, 108px)",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 30,
          opacity: visible ? 1 : 0,
          pointerEvents: visible ? "auto" : "none",
          transition: "opacity 0.55s cubic-bezier(0.22,1,0.36,1)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "6px",
        }}
      >
        {/* Glass pill label — breathes in sync */}
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            padding: "4px 12px 4px 10px",
            borderRadius: "999px",
            background: "rgba(255,255,255,0.07)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1px solid rgba(255,255,255,0.14)",
            fontFamily: "var(--font-inter), system-ui, sans-serif",
            fontSize: "clamp(9px, 1.8vw, 11px)",
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase" as const,
            color: "rgba(255,255,255,0.70)",
            boxShadow: "0 4px 16px rgba(0,0,0,0.18)",
            whiteSpace: "nowrap" as const,
            animation: "scroll-breathe-label 2.4s ease-in-out infinite",
          }}
        >
          {/* Gold dot — glows on inhale */}
          <span
            style={{
              width: 5,
              height: 5,
              borderRadius: "50%",
              background: "hsl(37,90%,55%)",
              flexShrink: 0,
              animation: "scroll-dot-glow 2.4s ease-in-out infinite",
            }}
          />
          Scroll Down
        </span>

        {/* Chevron circle — scales + glows on inhale, ripple expands on exhale */}
        <span style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
          {/* Expanding ripple ring */}
          <span
            style={{
              position: "absolute",
              inset: -6,
              borderRadius: "50%",
              border: "1.5px solid hsl(37,90%,55%)",
              animation: "scroll-ripple 2.4s ease-out infinite",
              pointerEvents: "none",
            }}
          />
          <svg
            width="clamp(26px, 4.5vw, 36px)"
            height="clamp(26px, 4.5vw, 36px)"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              display: "block",
              overflow: "visible",
              animation: "scroll-breathe-svg 2.4s ease-in-out infinite",
            }}
          >
            <circle cx="16" cy="16" r="14" stroke="hsl(37,90%,55%)" strokeWidth="1" strokeOpacity="0.20" />
            <circle cx="16" cy="16" r="10" fill="rgba(255,255,255,0.06)" stroke="hsl(37,90%,55%)" strokeWidth="1.4" strokeOpacity="0.65" />
            <path d="M11 14.5L16 19.5L21 14.5" stroke="hsl(37,92%,55%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>

        {/* Cascading dot trail — staggered fade-fall on exhale */}
        {[0, 0.3, 0.6].map((delay, i) => (
          <span
            key={i}
            style={{
              display: "block",
              width: i === 0 ? 4 : i === 1 ? 3 : 2,
              height: i === 0 ? 4 : i === 1 ? 3 : 2,
              borderRadius: "50%",
              background: "hsl(37,90%,55%)",
              animation: `scroll-dot-fall 2.4s ease-in-out ${delay}s infinite`,
            }}
          />
        ))}

        <style>{`
          @keyframes scroll-breathe-label {
            0%, 100% { opacity: 0.60; transform: scale(1); }
            50%       { opacity: 1;    transform: scale(1.04); }
          }
          @keyframes scroll-dot-glow {
            0%, 100% { box-shadow: 0 0 4px hsl(37,90%,55%); opacity: 0.7; }
            50%       { box-shadow: 0 0 10px hsl(37,90%,55%), 0 0 20px rgba(245,166,35,0.5); opacity: 1; }
          }
          @keyframes scroll-breathe-svg {
            0%, 100% { transform: scale(1);    filter: drop-shadow(0 0 4px rgba(245,166,35,0.30)); }
            50%       { transform: scale(1.08); filter: drop-shadow(0 0 14px rgba(245,166,35,0.80)); }
          }
          @keyframes scroll-ripple {
            0%   { transform: scale(0.85); opacity: 0.75; }
            65%  { transform: scale(1.60); opacity: 0; }
            100% { transform: scale(1.60); opacity: 0; }
          }
          @keyframes scroll-dot-fall {
            0%, 15% { opacity: 0;    transform: translateY(-3px); }
            45%      { opacity: 0.90; transform: translateY(1px); }
            80%      { opacity: 0.35; transform: translateY(5px); }
            100%     { opacity: 0;    transform: translateY(7px); }
          }
          @media (prefers-reduced-motion: reduce) {
            [style*="scroll-breathe-label"],
            [style*="scroll-dot-glow"],
            [style*="scroll-breathe-svg"],
            [style*="scroll-ripple"],
            [style*="scroll-dot-fall"] { animation: none !important; }
          }
        `}</style>
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
