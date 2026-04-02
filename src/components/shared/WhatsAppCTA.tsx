// src/components/shared/WhatsAppCTA.tsx
"use client";
import { useState } from "react";
import { BUSINESS } from "@/lib/constants";
import ScrollReveal from "@/components/shared/ScrollReveal";
import BookingModal from "@/components/shared/BookingModal";
import { ArrowRight, PhoneCall } from "lucide-react";

interface WhatsAppCTAProps {
  heading?: string;
  subheading?: string;
  className?: string;
  // keeping whatsappMessage omitted as we are moving to booking modal
  whatsappMessage?: string;
}

export default function WhatsAppCTA({
  heading = "Book a Doorstep Visit or Come to Our Workshop",
  subheading = "Call or book online for fast, reliable appliance repair in Dharwad.",
  className = "",
}: WhatsAppCTAProps) {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <section className={`relative bg-[hsl(220,85%,10%)] py-16 md:py-20 overflow-hidden ${className}`}>
      <div className="absolute -top-16 -right-16 h-80 w-80 rounded-full bg-yellow-400/[0.07] blur-[120px]" />
      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-blue-900/30 blur-[100px]" />

      <div className="relative container mx-auto px-5 md:px-8">
        <ScrollReveal direction="blur">
          <div className="text-center max-w-2xl mx-auto mb-8 md:mb-10">
            <h2
              className="font-display font-bold text-white leading-[1.15] tracking-tight"
              style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)" }}
            >
              {heading}
            </h2>
            {subheading && (
              <p className="mt-3 font-body text-[15px] md:text-[17px] text-white/65 leading-relaxed">
                {subheading}
              </p>
            )}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
            {/* Book Service button */}
            <button
              onClick={() => setBookingOpen(true)}
              type="button"
              className="group relative flex w-full max-w-[280px] items-center justify-center gap-2 overflow-hidden rounded-xl px-6 py-3.5 font-body font-bold text-[13px] uppercase tracking-[0.08em] transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap"
              style={{
                background: "linear-gradient(135deg,hsl(37,92%,52%),hsl(30,98%,45%))",
                color: "hsl(216,50%,10%)",
                boxShadow: "0 4px 20px rgba(245,166,35,0.35),inset 0 1px 0 rgba(255,255,255,0.20)",
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Book Service
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </button>

            {/* Call button — Premium Glassmorphism styling */}
            <a
              href={`tel:${BUSINESS.phone.replace(/-/g, "")}`}
              className="group relative flex w-full max-w-[280px] items-center justify-center gap-2.5 overflow-hidden rounded-xl px-6 py-3.5 font-body font-bold text-[13px] uppercase tracking-[0.08em] transition-all duration-300 hover:-translate-y-0.5 active:scale-95 text-white bg-[rgba(255,255,255,0.06)] [backdrop-filter:blur(24px)] [-webkit-backdrop-filter:blur(24px)] border border-[rgba(255,255,255,0.15)] shadow-[0_8px_32px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.20)] hover:bg-[rgba(255,255,255,0.1)] hover:border-white/30"
            >
              <PhoneCall className="h-3.5 w-3.5 text-white/90 group-hover:text-white transition-colors drop-shadow-sm" />
              <span className="drop-shadow-sm text-white/90 group-hover:text-white transition-colors">Call Now</span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </a>
          </div>

          {/* Workshop note */}
          <p className="mt-6 text-center font-body text-[12px] text-white/45 tracking-[0.05em]">
            🏪 Walk-in Workshop: Jay Nagar, Opp Gurukul Academy, Saptapur Last Stop, Dharwad&nbsp;580001
            &nbsp;·&nbsp; Mon–Sat 9:30 AM–7 PM, Sun 9:30 AM–1 PM
          </p>
        </ScrollReveal>
      </div>

      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </section>
  );
}
