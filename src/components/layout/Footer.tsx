// src/components/layout/Footer.tsx
"use client";
import { useState } from "react";
import { PhoneCall } from "lucide-react";
import Link from "next/link";
import { BUSINESS } from "@/lib/constants";
import { SERVICES } from "@/lib/services";
import { LOCATIONS } from "@/lib/locations";
import { BRANDS } from "@/lib/brands";
import BookingModal from "@/components/shared/BookingModal";

interface FooterProps {
  onBookService?: () => void; // Optional — Footer manages its own modal if not provided
}

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "All Services", href: "/services" },
  { label: "Reviews", href: "/reviews" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "Emergency Repair", href: "/emergency-repair-dharwad" },
  { label: "Contact Us", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
];

const TOP_LOCATIONS = LOCATIONS.slice(0, 10);
const TOP_BRANDS = BRANDS.slice(0, 8);

export default function Footer({ onBookService }: FooterProps) {
  const [internalModalOpen, setInternalModalOpen] = useState(false);

  const handleBook = onBookService ?? (() => setInternalModalOpen(true));

  return (
    <>
      <footer className="relative bg-[hsl(220,85%,9%)] overflow-hidden">
        {/* Background orbs */}
        <div className="absolute -top-20 right-1/3 h-80 w-80 rounded-full bg-yellow-400/[0.04] blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-blue-900/20 blur-[100px] pointer-events-none" />

        <div className="relative container mx-auto px-5 md:px-8 pt-16 pb-8 md:pt-20">

          {/* Main grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-12">

            {/* Col 1 — Brand */}
            <div className="sm:col-span-2 lg:col-span-1">

              {/* Profile image + brand name */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="relative shrink-0 rounded-full overflow-hidden"
                  style={{ width: "52px", height: "52px" }}
                >
                  <img
                    src="/Jameer/Jameer.webp"
                    alt="Jameer Hosatti — Owner"
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
                  />
                </div>
                <div className="flex flex-col justify-center gap-[3px] leading-none">
                  <span className="font-display font-bold text-white" style={{ fontSize: "1.25rem", letterSpacing: "-0.025em" }}>
                    Hosatti
                  </span>
                  <span className="font-body font-bold uppercase text-yellow-400/80" style={{ fontSize: "0.60rem", letterSpacing: "0.18em" }}>
                    Refrigeration Service
                  </span>
                </div>
              </div>

              <p className="font-body text-[13px] text-white/55 leading-[1.75] mb-4">
                Expert home appliance repair in Dharwad — AC, refrigerator, washing machine &amp; air cooler. 15+ years of trusted service by <span className="text-white/75 font-medium">Jameer Hosatti</span>.
              </p>

              <p className="font-body text-[12px] font-semibold text-yellow-400/80 mb-3">
                One Workshop. All of Dharwad Served.
              </p>

              <p className="font-body text-[12px] text-white/40 leading-snug mb-4">
                Jay Nagar, Opp Gurukul Academy<br />
                Saptapur Last Stop, Dharwad&nbsp;580001
              </p>

              <div className="mb-5">
                <p className="font-body text-[11px] font-bold uppercase tracking-[0.15em] text-white/30 mb-1.5">Hours</p>
                <p className="font-body text-[12px] text-white/50">Mon–Sat: 9:30 AM – 7:00 PM</p>
                <p className="font-body text-[12px] text-white/50">Sunday: 9:30 AM – 1:00 PM</p>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-2">
                <button
                  onClick={handleBook}
                  type="button"
                  className="flex-1 flex items-center justify-center gap-1.5 rounded-xl font-body font-bold text-[12px] uppercase tracking-[0.07em] transition-all duration-200 hover:-translate-y-0.5 active:scale-95 cursor-pointer"
                  style={{
                    height: "40px",
                    background: "linear-gradient(135deg, hsl(37,92%,52%), hsl(30,98%,45%))",
                    color: "hsl(216,50%,10%)",
                    boxShadow: "0 4px 16px rgba(245,166,35,0.35), inset 0 1px 0 rgba(255,255,255,0.20)",
                  }}
                >
                  Book Service
                </button>
                {/* Call Now — Premium Glassmorphism button */}
                <a
                  href={`tel:${BUSINESS.phone.replace(/-/g, "")}`}
                  className="flex-1 group relative flex items-center justify-center gap-2 sm:gap-2.5 rounded-xl h-[40px] font-body font-bold text-[12px] tracking-[0.07em] uppercase transition-all duration-300 hover:-translate-y-0.5 active:scale-95 overflow-hidden text-white bg-[rgba(255,255,255,0.06)] [backdrop-filter:blur(24px)] [-webkit-backdrop-filter:blur(24px)] border border-[rgba(255,255,255,0.15)] shadow-[0_8px_32px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.20)] hover:bg-[rgba(255,255,255,0.1)] hover:border-white/30"
                >
                  <PhoneCall className="h-3.5 w-3.5 text-white/90 group-hover:text-white transition-colors drop-shadow-sm" />
                  <span className="drop-shadow-sm text-white/90 group-hover:text-white transition-colors">Call Now</span>
                  {/* Shimmer */}
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                </a>
              </div>
            </div>

            {/* Col 2 — Quick Links */}
            <div>
              <h3 className="font-body text-[11px] font-bold uppercase tracking-[0.18em] text-white/35 mb-4">
                Quick Links
              </h3>
              <ul className="flex flex-col gap-2">
                {QUICK_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-body text-[13px] text-white/60 hover:text-yellow-400 transition-colors duration-200 leading-snug"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <button
                    onClick={handleBook}
                    className="font-body text-[13px] text-yellow-400 hover:text-yellow-300 transition-colors duration-200 font-semibold text-left"
                  >
                    Book Service →
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 3 — Services */}
            <div>
              <h3 className="font-body text-[11px] font-bold uppercase tracking-[0.18em] text-white/35 mb-4">
                Our Services
              </h3>
              <ul className="flex flex-col gap-2">
                {SERVICES.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="font-body text-[13px] text-white/60 hover:text-yellow-400 transition-colors duration-200 leading-snug"
                    >
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4 — Locations + Brands */}
            <div>
              <h3 className="font-body text-[11px] font-bold uppercase tracking-[0.18em] text-white/35 mb-4">
                Areas We Serve
              </h3>
              <ul className="flex flex-col gap-2 mb-6">
                {TOP_LOCATIONS.map((l) => (
                  <li key={l.slug}>
                    <Link
                      href={`/${l.slug}`}
                      className="font-body text-[13px] text-white/60 hover:text-yellow-400 transition-colors duration-200"
                    >
                      {l.name}, Dharwad
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/jayanagar-dharwad" className="font-body text-[12px] text-yellow-400/70 hover:text-yellow-400 transition-colors">View all areas →</Link>
                </li>
              </ul>

              <h3 className="font-body text-[11px] font-bold uppercase tracking-[0.18em] text-white/35 mb-3">
                Brands We Service
              </h3>
              <div className="flex flex-wrap gap-2">
                {TOP_BRANDS.map((b) => (
                  <Link
                    key={b.slug}
                    href={`/brands/${b.slug}`}
                    className="font-body text-[11px] px-2.5 py-1 rounded-full border border-white/10 text-white/50 hover:text-yellow-400 hover:border-yellow-400/20 transition-all duration-200"
                  >
                    {b.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />

          {/* Bottom bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <p className="font-body text-[12px] text-white/30">
              © {new Date().getFullYear()} Hosatti Refrigeration Service, Dharwad. All rights reserved.
            </p>
            <p className="font-body text-[12px] text-white/25">
              Proudly serving Dharwad since 2009
            </p>
          </div>
        </div>
      </footer>

      {/* Internal modal — only rendered when onBookService prop is not provided */}
      {!onBookService && (
        <BookingModal open={internalModalOpen} onClose={() => setInternalModalOpen(false)} />
      )}
    </>
  );
}
