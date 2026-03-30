// src/components/sections/ContactSection.tsx
"use client";
import { MapPin, Phone, MessageCircle, Clock, CreditCard } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp";
import { BUSINESS } from "@/lib/constants";
import ScrollReveal from "@/components/shared/ScrollReveal";
import Image from "next/image";

const info = [
  { icon: MapPin,        label: "Address",  value: BUSINESS.address.full },
  { icon: Phone,         label: "Phone",    value: BUSINESS.phone, href: `tel:${BUSINESS.phone.replace(/-/g, "")}` },
  { icon: MessageCircle, label: "WhatsApp", value: BUSINESS.phone, isWhatsApp: true },
  { icon: Clock,         label: "Hours",    value: BUSINESS.openingHoursDisplay },
  { icon: CreditCard,    label: "Payments", value: "UPI | Google Pay | PhonePe | ATM Card | Cash" },
];

export default function ContactSection() {
  return (
    <section id="contact" className="relative bg-background py-20 md:py-28 lg:py-32 overflow-hidden">
      <div className="absolute top-1/3 left-0 h-72 w-72 rounded-full bg-yellow-400/5 blur-[130px]" />
      <div className="absolute bottom-0 right-1/4 h-60 w-60 rounded-full bg-blue-900/[0.04] blur-[110px]" />

      <div className="relative container mx-auto px-5 md:px-8">
        <ScrollReveal>
          <div className="mb-12 text-center md:mb-16">
            <div className="mb-5 flex items-center justify-center gap-3">
              <div className="h-[1.5px] w-10 bg-gradient-to-r from-transparent to-yellow-400/60 rounded-full" />
              <span className="font-body text-[10px] font-semibold uppercase tracking-[0.25em] md:text-[11px]" style={{ color: "hsl(37,90%,55%)" }}>Contact</span>
              <div className="h-[1.5px] w-10 bg-gradient-to-l from-transparent to-yellow-400/60 rounded-full" />
            </div>
            <h2 className="font-display text-foreground">Get In Touch</h2>
            <p className="mx-auto mt-4 max-w-md font-body text-[16px] font-normal text-muted-foreground leading-relaxed md:text-[17px]">
              We&apos;re here to help with all your appliance repair needs
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-2 md:gap-8 lg:gap-12">
          <ScrollReveal direction="left">
            <div className="flex flex-col gap-3 md:gap-4">
              {info.map(({ icon: Icon, label, value, href, isWhatsApp }) => (
                <div key={label} className="group flex items-start gap-4 rounded-2xl border border-border/40 bg-white/90 backdrop-blur-sm p-4 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-yellow-400/25 hover:-translate-y-0.5 md:p-5">
                  <div className="relative shrink-0">
                    <div className="absolute inset-0 rounded-xl bg-yellow-400/10 blur-md scale-110 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-400/15 to-yellow-400/5 border border-yellow-400/12" style={{ borderColor: "rgba(245,166,35,0.12)" }}>
                      <Icon className="h-5 w-5" style={{ color: "hsl(37,90%,55%)" }} />
                    </div>
                  </div>
                  <div className="min-w-0">
                    <span className="mb-1.5 inline-flex items-center rounded-full bg-yellow-400/8 px-2 py-0.5 font-body text-[9px] font-semibold uppercase tracking-[0.2em] border border-yellow-400/12" style={{ color: "hsl(37,90%,55%)", backgroundColor: "rgba(245,166,35,0.08)", borderColor: "rgba(245,166,35,0.12)" }}>{label}</span>
                    {href ? (
                      <a href={href} className="block font-body text-[15px] font-medium text-foreground underline-offset-2 transition-colors hover:text-yellow-600 hover:underline md:text-[16px]">{value}</a>
                    ) : isWhatsApp ? (
                      <button onClick={() => openWhatsApp("")} className="block font-body text-[15px] font-medium text-foreground underline-offset-2 transition-colors hover:text-yellow-600 hover:underline md:text-[16px]">{value}</button>
                    ) : (
                      <p className="font-body text-[15px] font-medium text-foreground leading-relaxed md:text-[16px]">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.1}>
            <div className="relative min-h-[320px] md:min-h-[400px]">
              <div className="absolute -inset-[2px] rounded-3xl bg-gradient-to-br from-yellow-400/40 to-blue-600/30" />
              <div className="relative overflow-hidden rounded-[calc(1.5rem-2px)] h-full shadow-2xl">
                <Image src="/Store image/Store.webp" alt="Hosatti Refrigeration Service storefront — Jay Nagar, Dharwad" width={600} height={400} className="h-full w-full object-cover transition-transform duration-700 hover:scale-110" loading="lazy" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
