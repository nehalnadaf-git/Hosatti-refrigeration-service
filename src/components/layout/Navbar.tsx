// src/components/layout/Navbar.tsx
"use client";
import { useState, useEffect, useCallback } from "react";
import { X, ChevronRight, Phone, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import BookingModal from "@/components/shared/BookingModal";
import { BUSINESS } from "@/lib/constants";

const navLinks = [
  { label: "Home",     href: "#home" },
  { label: "About",    href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact",  href: "#contact" },
];

const STAGGER_DELAYS = ["0ms", "70ms", "140ms", "210ms"];

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [modalOpen,  setModalOpen]  = useState(false);
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const sections = ["contact", "faq", "why-us", "services", "about", "home"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveHash(`#${id}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <>
      {/* ── Main Header ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          scrolled ? "py-2.5" : "py-4 md:py-5"
        }`}
      >
        {/* Glass pill container */}
        <div
          className={`mx-auto transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            scrolled
              ? "max-w-6xl px-3 md:px-4"
              : "max-w-7xl px-4 md:px-8"
          }`}
        >
          <nav
            className={`relative flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              scrolled
                ? "rounded-2xl px-4 py-2.5 md:px-5"
                : "rounded-none px-0 py-0"
            }`}
            style={
              scrolled
                ? {
                    background: "rgba(8, 18, 48, 0.72)",
                    backdropFilter: "blur(28px) saturate(180%)",
                    WebkitBackdropFilter: "blur(28px) saturate(180%)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    boxShadow:
                      "0 4px 6px -1px rgba(0,0,0,0.4), 0 16px 48px -8px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)",
                  }
                : {
                    border: "1px solid transparent",
                  }
            }
          >
            {/* Top shimmer line on scrolled glass */}
            {scrolled && (
              <div
                className="absolute top-0 left-6 right-6 h-px rounded-full pointer-events-none"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.18) 30%, rgba(245,166,35,0.35) 50%, rgba(255,255,255,0.18) 70%, transparent)",
                }}
              />
            )}

            {/* ── Brand ── */}
            <a
              href="#home"
              className="group relative flex items-center gap-3 flex-shrink-0"
              aria-label="Hosatti Refrigeration Service — Home"
            >
              {/* Logo ring */}
              <div className="relative flex-shrink-0">
                <div
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md scale-125"
                  style={{ background: "radial-gradient(circle, rgba(245,166,35,0.4), transparent 70%)" }}
                />
                <div
                  className="relative flex h-10 w-10 md:h-11 md:w-11 items-center justify-center overflow-hidden rounded-full transition-all duration-500 group-hover:scale-105"
                  style={{
                    border: "1.5px solid rgba(255,255,255,0.18)",
                    background: "rgba(255,255,255,0.06)",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
                  }}
                >
                  <Image src="/Jameer/Jameer.webp" alt="Hosatti" width={44} height={44} className="h-full w-full object-cover" priority />
                </div>
              </div>

              {/* Brand text */}
              <div className="leading-[1.15]">
                <span className="block font-display text-[1.2rem] md:text-[1.35rem] font-semibold text-white tracking-[-0.01em] transition-colors duration-300 group-hover:text-yellow-400">
                  Hosatti
                </span>
                <span className="block font-body text-[8px] md:text-[8.5px] font-semibold tracking-[0.26em] uppercase"
                  style={{ color: "rgba(245,166,35,0.65)" }}>
                  Refrigeration Service
                </span>
              </div>
            </a>

            {/* ── Desktop Nav ── */}
            <ul
              className="hidden lg:flex items-center gap-0.5 absolute left-1/2 -translate-x-1/2"
              role="navigation"
              aria-label="Main navigation"
            >
              {navLinks.map((l) => {
                const isActive = activeHash === l.href;
                return (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      aria-current={isActive ? "page" : undefined}
                      className="group relative flex items-center px-4 py-2 font-body text-[11.5px] font-semibold tracking-[0.1em] uppercase transition-colors duration-300"
                      style={{ color: isActive ? "hsl(37,90%,55%)" : "rgba(255,255,255,0.65)" }}
                      onMouseEnter={(e) => { if (!isActive) (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,1)"; }}
                      onMouseLeave={(e) => { if (!isActive) (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.65)"; }}
                    >
                      {/* Hover bg pill */}
                      <span
                        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ background: "rgba(255,255,255,0.05)" }}
                      />
                      <span className="relative z-10">{l.label}</span>
                      {/* Active / hover underline */}
                      <span
                        className={`absolute bottom-0.5 left-4 right-4 h-[1.5px] rounded-full transition-all duration-500 ${
                          isActive
                            ? "scale-x-100 opacity-100"
                            : "scale-x-0 opacity-0 origin-right group-hover:scale-x-100 group-hover:opacity-100 group-hover:origin-left"
                        }`}
                        style={{
                          background: isActive
                            ? "linear-gradient(90deg, hsl(37,90%,55%), hsl(30,95%,48%))"
                            : "rgba(255,255,255,0.5)",
                        }}
                      />
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* ── Desktop CTA ── */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Phone quick-link */}
              <a
                href={`tel:${BUSINESS.phone.replace(/-/g, "")}`}
                className="group flex items-center gap-1.5 px-3 py-2 rounded-xl font-body text-[11px] font-semibold tracking-[0.08em] uppercase transition-all duration-300"
                style={{ color: "rgba(255,255,255,0.55)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "hsl(37,90%,55%)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.55)"; }}
                aria-label="Call now"
              >
                <Phone className="h-3.5 w-3.5" />
                <span className="hidden xl:inline">Call Now</span>
              </a>

              {/* Divider */}
              <div className="h-5 w-px" style={{ background: "rgba(255,255,255,0.1)" }} />

              {/* Book Service CTA */}
              <button
                onClick={() => setModalOpen(true)}
                className="group relative overflow-hidden flex items-center gap-1.5 rounded-xl h-10 px-5 font-body text-[12px] font-bold tracking-[0.08em] uppercase transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg, hsl(37,92%,52%), hsl(30,98%,43%))",
                  color: "hsl(216,50%,10%)",
                  boxShadow: "0 3px 14px rgba(245,166,35,0.35), 0 1px 3px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)",
                }}
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  Book Service
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
                {/* Shimmer sweep */}
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </button>
            </div>

            {/* ── Mobile Hamburger ── */}
            <button
              onClick={() => setMobileOpen((p) => !p)}
              className="flex lg:hidden h-10 w-10 items-center justify-center rounded-xl transition-all duration-300"
              style={{
                background: mobileOpen ? "rgba(245,166,35,0.12)" : "rgba(255,255,255,0.06)",
                border: mobileOpen ? "1px solid rgba(245,166,35,0.3)" : "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
              }}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              <div className="relative h-5 w-5" aria-hidden="true">
                <span className={`absolute left-0 top-[5px] h-[1.5px] w-5 rounded-full transition-all duration-300 origin-center ${mobileOpen ? "rotate-45 translate-y-[4.5px] bg-yellow-400" : "bg-white"}`} />
                <span className={`absolute left-0 top-1/2 -translate-y-1/2 h-[1.5px] w-5 rounded-full transition-all duration-300 ${mobileOpen ? "opacity-0 scale-x-0 bg-yellow-400" : "bg-white"}`} />
                <span className={`absolute left-0 bottom-[5px] h-[1.5px] w-5 rounded-full transition-all duration-300 origin-center ${mobileOpen ? "-rotate-45 -translate-y-[4.5px] bg-yellow-400" : "bg-white"}`} />
              </div>
            </button>
          </nav>
        </div>
      </header>

      {/* ── Full-screen Mobile Menu ── */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed inset-0 z-[60] lg:hidden flex flex-col transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        style={{
          background: "linear-gradient(160deg, hsl(220,85%,6%) 0%, hsl(218,70%,10%) 45%, hsl(220,60%,7%) 100%)",
          backdropFilter: "blur(40px)",
          WebkitBackdropFilter: "blur(40px)",
        }}
      >
        {/* Decorative glows */}
        <div className="absolute top-[-120px] right-[-80px] h-[400px] w-[400px] rounded-full opacity-25 blur-[130px] pointer-events-none"
          style={{ background: "radial-gradient(circle, hsl(37,90%,55%) 0%, transparent 70%)" }} />
        <div className="absolute bottom-[-80px] left-[-60px] h-[300px] w-[300px] rounded-full opacity-15 blur-[100px] pointer-events-none"
          style={{ background: "radial-gradient(circle, hsl(220,85%,55%) 0%, transparent 70%)" }} />

        {/* Top bar — logo + close */}
        <div className="relative flex items-center justify-between px-6 pt-5 pb-4 flex-shrink-0">
          <a href="#home" onClick={closeMobile} className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full"
              style={{ border: "1.5px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.05)" }}>
              <Image src="/Jameer/Jameer.webp" alt="Hosatti" width={36} height={36} className="h-full w-full object-cover" />
            </div>
            <span className="font-display text-[1.1rem] font-semibold text-white tracking-[-0.01em]">Hosatti</span>
          </a>
          <button
            onClick={closeMobile}
            className="flex h-10 w-10 items-center justify-center rounded-xl transition-all"
            style={{ border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.6)" }}
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Divider */}
        <div className="mx-6 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)" }} />

        {/* Nav Links */}
        <nav className="relative flex-1 flex flex-col justify-center px-6 py-8" aria-label="Mobile navigation">
          <ul className="flex flex-col gap-1">
            {navLinks.map((l, i) => {
              const isActive = activeHash === l.href;
              return (
                <li
                  key={l.href}
                  style={{
                    transitionProperty: "opacity, transform",
                    transitionDuration: "0.55s",
                    transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
                    transitionDelay: mobileOpen ? STAGGER_DELAYS[i] : "0ms",
                    opacity: mobileOpen ? 1 : 0,
                    transform: mobileOpen ? "translateY(0)" : "translateY(24px)",
                  }}
                >
                  <a
                    href={l.href}
                    onClick={closeMobile}
                    aria-current={isActive ? "page" : undefined}
                    className="group flex items-center justify-between py-4 px-4 rounded-2xl transition-all duration-200 active:scale-[0.98]"
                    style={{
                      background: isActive ? "rgba(245,166,35,0.07)" : "transparent",
                      border: isActive ? "1px solid rgba(245,166,35,0.18)" : "1px solid transparent",
                    }}
                  >
                    <span
                      className="font-display font-bold transition-colors duration-300"
                      style={{
                        fontSize: "clamp(2rem, 8vw, 2.6rem)",
                        letterSpacing: "-0.02em",
                        lineHeight: 1,
                        color: isActive ? "hsl(37,90%,55%)" : "rgba(255,255,255,0.88)",
                      }}
                    >
                      {l.label}
                    </span>
                    <ChevronRight
                      className="h-6 w-6 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                      style={{ color: isActive ? "hsl(37,90%,55%)" : "rgba(255,255,255,0.2)" }}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Divider */}
        <div className="mx-6 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)" }} />

        {/* Bottom CTAs */}
        <div
          className="relative flex-shrink-0 px-6 pb-10 pt-6 flex flex-col gap-3"
          style={{
            transitionProperty: "opacity, transform",
            transitionDuration: "0.55s",
            transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
            transitionDelay: mobileOpen ? "0.28s" : "0ms",
            opacity: mobileOpen ? 1 : 0,
            transform: mobileOpen ? "translateY(0)" : "translateY(16px)",
          }}
        >
          {/* Book Service primary CTA */}
          <button
            onClick={() => { closeMobile(); setModalOpen(true); }}
            className="group relative flex items-center justify-center gap-2 rounded-2xl h-14 w-full font-body text-[13.5px] font-bold tracking-[0.06em] uppercase overflow-hidden transition-all duration-300 active:scale-[0.97]"
            style={{
              background: "linear-gradient(135deg, hsl(37,92%,52%), hsl(30,98%,43%))",
              color: "hsl(220,55%,10%)",
              boxShadow: "0 4px 24px rgba(245,166,35,0.35), inset 0 1px 0 rgba(255,255,255,0.2)",
            }}
          >
            <span className="relative z-10 flex items-center gap-2">Book Service <ArrowUpRight className="h-4 w-4" /></span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </button>

          {/* Call quick-link */}
          <a
            href={`tel:${BUSINESS.phone.replace(/-/g, "")}`}
            className="flex items-center justify-center gap-2 rounded-2xl h-12 w-full font-body text-[12.5px] font-semibold tracking-[0.06em] uppercase transition-all duration-300 active:scale-[0.97]"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "rgba(255,255,255,0.7)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
        </div>
      </div>

      <BookingModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
