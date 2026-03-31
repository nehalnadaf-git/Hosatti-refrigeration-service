// src/components/layout/Footer.tsx
"use client";
import { ArrowUp } from "lucide-react";
import Image from "next/image";
import { BUSINESS } from "@/lib/constants";

const quickLinks = [
  { label: "Home",     href: "#home" },
  { label: "About",    href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact",  href: "#contact" },
];

interface FooterProps {
  onBookService?: () => void;
}

export default function Footer({ onBookService }: FooterProps) {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative gradient-navy pt-16 pb-6 text-primary-foreground/55 overflow-hidden md:pt-20 md:pb-8">
      {/* Wave top */}
      <div className="absolute -top-px left-0 right-0">
        <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block rotate-180 origin-top scale-y-[1.05] text-background">
          <path d="M0 40L60 35C120 30 240 20 360 18C480 16 600 22 720 25C840 28 960 28 1080 26C1200 24 1320 20 1380 18L1440 16V40H0Z" fill="currentColor" />
        </svg>
      </div>

      <div className="absolute top-20 right-10 h-52 w-52 rounded-full bg-yellow-400/[0.04] blur-[100px]" />

      <div className="relative container mx-auto grid gap-8 px-5 sm:grid-cols-2 lg:grid-cols-4 md:px-8 mt-6 md:mt-8 md:gap-10">
        {/* Col 1 — Brand */}
        <div>
          <div className="mb-4 flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-white/15 bg-white/5 md:h-10 md:w-10">
              <Image src="/Jameer/Jameer.webp" alt="Hosatti Refrigeration Service Logo" width={40} height={40} className="h-full w-full object-cover" />
            </div>
            <div className="leading-[1.1]">
              <span className="font-display text-[1.1rem] font-semibold text-primary-foreground tracking-[-0.02em] md:text-[1.2rem]">Hosatti</span>
              <span className="block font-body text-[9.5px] font-medium text-yellow-400/80 tracking-[0.2em] uppercase md:text-[10px]">Refrigeration Service</span>
            </div>
          </div>
          <p className="font-body text-[14px] lg:text-[16px] font-normal leading-relaxed md:text-[15px]">
            Your trusted appliance repair experts in Dharwad. Quality service, genuine parts, and customer satisfaction guaranteed.
          </p>
        </div>

        {/* Col 2 — Quick Links */}
        <div>
          <h3 className="mb-4 font-body text-[10px] font-semibold uppercase tracking-[0.2em] text-primary-foreground md:text-[10.5px] md:mb-5">Quick Links</h3>
          <ul className="flex flex-col gap-2">
            {quickLinks.map(l => (
              <li key={l.href}>
                <a href={l.href} className="font-body text-[14px] lg:text-[16px] font-normal transition-all duration-300 hover:text-yellow-400 hover:translate-x-1 inline-block md:text-[15px]">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Contact */}
        <div>
          <h3 className="mb-4 font-body text-[10px] font-semibold uppercase tracking-[0.2em] text-primary-foreground md:text-[10.5px] md:mb-5">Contact Info</h3>
          <ul className="flex flex-col gap-2.5 font-body text-[14px] lg:text-[16px] font-normal md:text-[15px]">
            <li>{BUSINESS.address.full}</li>
            <li>
              <a href={`tel:${BUSINESS.phone.replace(/-/g, "")}`} className="transition-colors hover:text-yellow-400">{BUSINESS.phone}</a>
            </li>
            <li>
              <a href={`https://wa.me/${BUSINESS.whatsapp}`} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-yellow-400">WhatsApp Us</a>
            </li>
          </ul>
        </div>

        {/* Col 4 — Hours + Book CTA */}
        <div>
          <h3 className="mb-4 font-body text-[10px] font-semibold uppercase tracking-[0.2em] text-primary-foreground md:text-[10.5px] md:mb-5">Service Hours</h3>
          <p className="mb-5 font-body text-[14px] font-normal leading-relaxed md:text-[15px]">
            {BUSINESS.openingHoursDisplay}
          </p>
          <button
            onClick={onBookService}
            className="btn-gold w-full inline-flex items-center justify-center rounded-xl h-11 px-5 font-body text-[13px] font-bold tracking-[0.06em] uppercase transition-all duration-300 hover:-translate-y-0.5"
          >
            Book Service
          </button>
        </div>
      </div>

      {/* Footer bottom — NO border line */}
      <div className="relative container mx-auto mt-10 px-5 pt-5 md:mt-14 md:px-8 md:pt-6 flex items-center justify-between">
        <p className="font-body text-[10.5px] font-normal tracking-[0.04em] md:text-[11.5px]">
          © {new Date().getFullYear()} Hosatti Refrigeration Service · Dharwad, Karnataka
        </p>
        <button
          onClick={scrollToTop}
          className="flex h-9 w-9 items-center justify-center rounded-full glass transition-all hover:bg-yellow-400/20 md:h-10 md:w-10"
          aria-label="Back to top"
        >
          <ArrowUp className="h-4 w-4 text-primary-foreground" />
        </button>
      </div>
    </footer>
  );
}
