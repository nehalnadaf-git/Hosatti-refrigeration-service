// src/components/layout/Navbar.tsx
"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowRight, PhoneCall } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { SERVICES, SERVICE_CATEGORIES, type ServiceCategory } from "@/lib/services";
import BookingModal from "@/components/shared/BookingModal";

const SERVICE_GROUPS: ServiceCategory[] = ["ac", "refrigerator", "washing-machine", "air-cooler"];
const TOP_NAV = [
  { label: "Reviews", href: "/reviews" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();
  const isHome = pathname === "/";
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // At top → invisible; scrolled → glass pill
  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setMobileServicesOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  // Click-outside to close dropdown
  useEffect(() => {
    const h = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node))
        setServicesOpen(false);
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  const openDropdown = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  }, []);
  const closeDropdown = useCallback(() => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 180);
  }, []);

  const isPill = isScrolled && !menuOpen;

  const logoHref = isHome ? "#home" : "/";
  const aboutHref = isHome ? "#about" : "/about";
  const contactHref = isHome ? "#contact" : "/contact";

  const linkCls = (href?: string) =>
    `px-3.5 py-2 font-body text-[14px] font-medium rounded-xl transition-all duration-200 whitespace-nowrap ${href && pathname === href
      ? "text-yellow-400 bg-white/[0.08]"
      : "text-white/75 hover:text-white hover:bg-white/[0.08]"
    }`;

  /* ─── Panel style ─────────────────────────────────────── */
  const panelStyle: React.CSSProperties = isPill
    ? {
      // ── Scrolled → Premium glassmorphism pill ──
      width: "min(94vw, 1300px)",
      borderRadius: "20px",
      background: "rgba(8,14,52,0.85)",
      backdropFilter: "blur(52px) saturate(260%) brightness(1.08)",
      WebkitBackdropFilter: "blur(52px) saturate(260%) brightness(1.08)",
      border: "1px solid rgba(255,255,255,0.22)",
      boxShadow: [
        "0 16px 48px rgba(0,0,0,0.45)",
        "0 4px 12px rgba(0,0,0,0.25)",
        "0 0 0 1px rgba(250,180,0,0.12)",
        "inset 0 1.5px 0 rgba(255,255,255,0.32)",
        "inset 0 -1px 0 rgba(0,0,0,0.15)",
      ].join(", "),
    }
    : {
      // ── At top → fully transparent / invisible ──
      width: "100%",
      borderRadius: "0",
      background: "transparent",
      backdropFilter: "none",
      WebkitBackdropFilter: "none",
      border: "none",
      borderBottom: "none",
      boxShadow: "none",
    };

  return (
    <>
      {/* ── Fixed wrapper ── */}
      <div
        className="fixed left-0 right-0 z-50 flex justify-center transition-all duration-500"
        style={{ top: isPill ? "16px" : "0" }}
      >
        {/* ── Glass panel ── */}
        <div
          className="relative transition-all duration-500"
          style={panelStyle}
        >
          {/* Top shimmer line and inner sheen — wrapped in absolute clipping container */}
          {isPill && (
            <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ borderRadius: 'inherit' }}>
              {/* Top shimmer — crisp gold-white edge highlight */}
              <div
                className="absolute top-0 left-0 right-0 h-[1.5px] z-10"
                style={{
                  background: "linear-gradient(90deg, transparent 3%, rgba(255,255,255,0.18) 20%, rgba(250,185,0,0.65) 50%, rgba(255,255,255,0.18) 80%, transparent 97%)",
                }}
              />
              {/* Inner frosted sheen — top-down white fade for depth */}
              <div
                className="absolute inset-0 z-0"
                style={{
                  background: "linear-gradient(180deg, rgba(255,255,255,0.13) 0%, rgba(255,255,255,0.04) 35%, transparent 70%)",
                }}
              />
              {/* Subtle noise/grain texture layer for premium frosted glass */}
              <div
                className="absolute inset-0 z-0 mix-blend-overlay opacity-[0.04]"
                style={{
                  backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                  backgroundSize: "200px 200px",
                }}
              />
            </div>
          )}

          <nav className="relative z-10 mx-auto w-full max-w-[1400px] px-5 md:px-6 xl:px-10">
            <div className="flex h-[72px] items-center justify-between gap-4">

              {/* ══ LOGO ══ */}
              <Link
                href={logoHref}
                className="flex items-center gap-3 shrink-0 group"
                aria-label="Hosatti Refrigeration Service — Home"
              >
                {/* Brand text */}
                <div className="flex flex-col justify-center gap-[2px] leading-none">
                  <span
                    className="font-display font-bold text-white"
                    style={{ fontSize: "clamp(1.1rem, 2vw, 1.35rem)", letterSpacing: "-0.028em" }}
                  >
                    Hosatti
                  </span>
                  <span
                    className="font-body font-semibold uppercase tracking-[0.20em] text-yellow-400/80"
                    style={{ fontSize: "0.60rem" }}
                  >
                    Refrigeration Service
                  </span>
                </div>
              </Link>

              {/* ══ DESKTOP NAV — centered ══ */}
              <div className="hidden lg:flex flex-1 items-center justify-center gap-0.5">

                <Link href={isHome ? "#home" : "/"} className={linkCls()}>Home</Link>

                {/* Services — hover + click dropdown */}
                <div className="relative" ref={dropdownRef}>
                  <button
                    onMouseEnter={openDropdown}
                    onMouseLeave={closeDropdown}
                    onClick={() => setServicesOpen((v) => !v)}
                    className={`flex items-center gap-1.5 ${linkCls()}`}
                    aria-expanded={servicesOpen}
                    aria-haspopup="true"
                    type="button"
                  >
                    Services
                    <ChevronDown
                      className="h-3.5 w-3.5 transition-transform duration-300"
                      style={{ transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                    />
                  </button>

                  {/* Dropdown */}
                  {servicesOpen && (
                    <div
                      onMouseEnter={openDropdown}
                      onMouseLeave={closeDropdown}
                      className="absolute top-[100%] left-1/2 -translate-x-1/2 pt-5 z-[60]"
                    >
                      <div
                        className="w-[700px] rounded-2xl p-6 overflow-hidden relative"
                        style={{
                          background: "rgba(8,14,52,0.85)",
                          backdropFilter: "blur(52px) saturate(260%) brightness(1.08)",
                          WebkitBackdropFilter: "blur(52px) saturate(260%) brightness(1.08)",
                          border: "1px solid rgba(255,255,255,0.22)",
                          boxShadow: "inset 0 1.5px 0 rgba(255,255,255,0.32), inset 0 -1px 0 rgba(0,0,0,0.15), 0 40px 100px rgba(0,0,0,0.60)",
                        }}
                      >
                        {/* Dropdown shimmer */}
                        <div
                          className="absolute top-0 left-0 right-0 h-[1px]"
                          style={{ background: "linear-gradient(90deg, transparent, rgba(250,180,0,0.45), transparent)" }}
                        />

                        <div className="grid grid-cols-2 gap-6">
                          {SERVICE_GROUPS.map((cat) => (
                            <div key={cat}>
                              <p className="font-body text-[10px] font-bold uppercase tracking-[0.24em] text-yellow-400/90 mb-3 px-2">
                                {SERVICE_CATEGORIES[cat]}
                              </p>
                              <div className="flex flex-col gap-0.5">
                                {SERVICES.filter((s) => s.category === cat).map((s) => (
                                  <Link
                                    key={s.slug}
                                    href={`/services/${s.slug}`}
                                    onClick={() => setServicesOpen(false)}
                                    className="px-3 py-2 rounded-xl font-body text-[12.5px] text-white/55 hover:text-white hover:bg-white/[0.07] transition-all duration-150 leading-snug"
                                  >
                                    {s.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>

                        <div
                          className="mt-5 pt-4 flex items-center justify-between"
                          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
                        >
                          <Link
                            href="/services"
                            onClick={() => setServicesOpen(false)}
                            className="font-body text-[12.5px] font-semibold text-yellow-400 hover:text-yellow-300 transition-colors"
                          >
                            View All Services →
                          </Link>
                          <Link
                            href="/emergency-repair-dharwad"
                            onClick={() => setServicesOpen(false)}
                            className="font-body text-[12.5px] font-semibold text-red-400 hover:text-red-300 transition-colors"
                          >
                            🚨 Emergency Repair →
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <Link href={aboutHref} className={linkCls(aboutHref)}>About</Link>
                {TOP_NAV.filter((n) => !["About", "Contact"].includes(n.label)).map((item) => (
                  <Link key={item.href} href={item.href} className={linkCls(item.href)}>{item.label}</Link>
                ))}
                <Link href={contactHref} className={linkCls(contactHref)}>Contact</Link>
              </div>

              {/* ══ DESKTOP CTAs ══ */}
              <div className="hidden lg:flex items-center gap-3 shrink-0">

                {/* CALL NOW — Blended text link with premium icon */}
                <a
                  href={`tel:${BUSINESS.phone.replace(/-/g, "")}`}
                  suppressHydrationWarning
                  className="group flex items-center gap-1.5 font-body font-semibold text-[13.5px] text-white/70 hover:text-white transition-colors duration-200 whitespace-nowrap px-1 mr-1"
                >
                  <PhoneCall className="h-[15px] w-[15px] text-white/70 group-hover:text-white transition-colors drop-shadow-sm" />
                  <span className="drop-shadow-sm">Call Now</span>
                </a>

                {/* BOOK SERVICE — gold gradient, right side */}
                <button
                  onClick={() => setBookingOpen(true)}
                  type="button"
                  className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-2xl font-body font-bold text-[12.5px] uppercase tracking-[0.07em] transition-all duration-300 hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
                  style={{
                    height: "44px",
                    paddingLeft: "22px",
                    paddingRight: "22px",
                    background: "linear-gradient(135deg, hsl(37,92%,52%), hsl(30,98%,45%))",
                    color: "hsl(216,50%,10%)",
                    boxShadow: "0 4px 20px rgba(245,166,35,0.40), 0 1px 3px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.22)",
                  }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Book Service
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                  {/* Shimmer sweep */}
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                </button>
              </div>

              {/* ══ MOBILE TOGGLE ══ */}
              <button
                onClick={() => setMenuOpen((v) => !v)}
                type="button"
                className="lg:hidden flex h-9 w-9 items-center justify-center rounded-xl text-white transition-all"
                style={{
                  background: "rgba(255,255,255,0.10)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  backdropFilter: "blur(8px)",
                }}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
              >
                {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>
          </nav>
        </div>
      </div>

      {/* ══ MOBILE MENU OVERLAY (Modern Full Screen) ══ */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[45] lg:hidden flex flex-col bg-[rgba(3,7,32,0.96)] backdrop-blur-2xl transition-all duration-300"
          style={{ paddingTop: isPill ? "92px" : "72px" }}
        >
          <div className="flex-1 overflow-y-auto px-5 pb-8 pt-4 flex flex-col gap-1">
            <Link onClick={() => setMenuOpen(false)} href={isHome ? "#home" : "/"} className="px-5 py-3.5 font-display text-[17px] font-medium text-white/90 rounded-2xl hover:bg-white/[0.06] hover:text-white transition-all">Home</Link>

            <div className="flex flex-col">
              <button
                type="button"
                onClick={() => setMobileServicesOpen((v) => !v)}
                className="flex items-center justify-between px-5 py-3.5 font-display text-[17px] font-medium text-white/90 rounded-2xl hover:bg-white/[0.06] hover:text-white transition-all w-full text-left"
              >
                Services
                <ChevronDown className="h-4 w-4 transition-transform duration-300"
                  style={{ transform: mobileServicesOpen ? "rotate(180deg)" : "rotate(0deg)" }} />
              </button>

              {mobileServicesOpen && (
                <div className="ml-5 flex flex-col gap-1 pl-4 my-2"
                  style={{ borderLeft: "2px solid rgba(255,255,255,0.08)" }}>
                  <Link onClick={() => setMenuOpen(false)} href="/services" className="py-2.5 font-body text-[14px] font-semibold text-yellow-500">All Services →</Link>
                  {SERVICES.map((s) => (
                    <Link onClick={() => setMenuOpen(false)} key={s.slug} href={`/services/${s.slug}`}
                      className="py-2.5 font-body text-[14px] text-white/65 hover:text-white transition-colors">{s.name}</Link>
                  ))}
                  <Link onClick={() => setMenuOpen(false)} href="/emergency-repair-dharwad" className="py-2.5 mt-2 font-body text-[14px] font-semibold text-red-400">🚨 Emergency Repair</Link>
                </div>
              )}
            </div>

            <Link onClick={() => setMenuOpen(false)} href={aboutHref} className="px-5 py-3.5 font-display text-[17px] font-medium text-white/90 rounded-2xl hover:bg-white/[0.06] hover:text-white transition-all">About</Link>
            {TOP_NAV.filter((n) => !["About", "Contact"].includes(n.label)).map((item) => (
              <Link onClick={() => setMenuOpen(false)} key={item.href} href={item.href} className="px-5 py-3.5 font-display text-[17px] font-medium text-white/90 rounded-2xl hover:bg-white/[0.06] hover:text-white transition-all">{item.label}</Link>
            ))}
            <Link onClick={() => setMenuOpen(false)} href={contactHref} className="px-5 py-3.5 font-display text-[17px] font-medium text-white/90 rounded-2xl hover:bg-white/[0.06] hover:text-white transition-all">Contact</Link>

            <div className="mt-8 flex flex-col gap-3 px-2">
              <button
                type="button"
                onClick={() => { setMenuOpen(false); setBookingOpen(true); }}
                className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-2xl h-[56px] font-body font-bold text-[14px] uppercase tracking-[0.08em]"
                style={{
                  background: "linear-gradient(135deg, hsl(37,92%,52%), hsl(30,98%,45%))",
                  color: "hsl(216,50%,10%)",
                  boxShadow: "0 8px 30px rgba(245,166,35,0.45), inset 0 1px 0 rgba(255,255,255,0.22)",
                }}
              >
                Book Service <ArrowRight className="h-4 w-4" />
              </button>
              {/* Call Now — Premium Glassmorphism button */}
              <a
                href={`tel:${BUSINESS.phone.replace(/-/g, "")}`}
                className="flex items-center justify-center gap-2 sm:gap-2.5 rounded-2xl h-[56px] font-body font-bold text-[14px] tracking-[0.08em] uppercase transition-all duration-300 active:scale-95 overflow-hidden text-white bg-[rgba(255,255,255,0.06)] [backdrop-filter:blur(24px)] [-webkit-backdrop-filter:blur(24px)] border border-[rgba(255,255,255,0.15)] shadow-[0_8px_32px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.20)] hover:bg-[rgba(255,255,255,0.1)] hover:border-white/30"
              >
                <PhoneCall className="h-4 w-4 text-white/90 drop-shadow-sm" />
                <span className="drop-shadow-sm text-white/90">Call Now</span>
              </a>
            </div>
          </div>
        </div>
      )}

      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
}
