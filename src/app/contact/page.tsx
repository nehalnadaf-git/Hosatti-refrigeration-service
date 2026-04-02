// src/app/contact/page.tsx — Server wrapper
import type { Metadata } from "next";
import { SEO } from "@/lib/seo";
import PageHero from "@/components/shared/PageHero";
import WhatsAppCTA from "@/components/shared/WhatsAppCTA";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/shared/ContactForm";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { MapPin, Phone, Clock, CreditCard } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Hosatti Refrigeration Service Dharwad | Call or WhatsApp",
  description:
    "Contact Hosatti Refrigeration Service in Dharwad for AC, fridge & washing machine repair. Call +91-7899472430, WhatsApp, or visit our Jay Nagar workshop. Quick service available!",
  alternates: { canonical: `${SEO.baseUrl}/contact` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SEO.baseUrl },
    { "@type": "ListItem", position: 2, name: "Contact", item: `${SEO.baseUrl}/contact` },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PageHero
        eyebrow="Contact Us"
        h1="Contact Hosatti Refrigeration Service in Dharwad"
        subtitle="Book a repair, ask a question, or visit our workshop. We're here Mon–Sat 9:30 AM–7 PM, Sunday 9:30 AM–1 PM."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact", href: "/contact" }]}
      />

      <main>
        <section className="relative bg-light-bg py-16 md:py-20">
          <div className="container mx-auto px-5 md:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">

              {/* Contact Details */}
              <ScrollReveal direction="right">
                <div>
                  <div className="mb-6 flex items-center gap-3">
                    <div className="h-[2px] w-8 bg-gradient-to-r from-yellow-400 to-yellow-400/40 rounded-full" />
                    <span className="font-body text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">Get in Touch</span>
                  </div>
                  <h2 className="font-display text-foreground mb-8" style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}>
                    Two Ways to Get Service
                  </h2>

                  <div className="grid gap-4 mb-8">
                    <div className="rounded-2xl border border-border/40 bg-white/90 p-5 shadow-sm">
                      <p className="font-body font-bold text-[14px] text-foreground mb-1">🏠 Doorstep Service in Dharwad</p>
                      <p className="font-body text-[13px] text-muted-foreground leading-[1.7]">
                        Call or WhatsApp us. Our skilled technician will visit your home in Dharwad at your convenience. Quick service available when you call early.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-border/40 bg-white/90 p-5 shadow-sm">
                      <p className="font-body font-bold text-[14px] text-foreground mb-1">🏪 Walk-in Workshop</p>
                      <p className="font-body text-[13px] text-muted-foreground leading-[1.7]">
                        Bring your appliance directly to our workshop at Jay Nagar, Dharwad — Opp Gurukul Academy, Saptapur Last Stop. No appointment needed during business hours.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    {[
                      { icon: Phone, label: "Phone & WhatsApp", value: "+91-7899472430", href: "tel:+917899472430" },
                      { icon: MapPin, label: "Workshop Address", value: "Jaya Nagar, Opp Gurukul Academy, Saptapur Last Stop, Jay Nagar, Dharwad – 580001", href: "https://maps.google.com/?q=15.450056,74.9886131" },
                      { icon: Clock, label: "Business Hours", value: "Mon–Sat: 9:30 AM – 7:00 PM\nSunday: 9:30 AM – 1:00 PM", href: null },
                      { icon: CreditCard, label: "Payment", value: "Cash, UPI, Google Pay, Paytm", href: null },
                    ].map(({ icon: Icon, label, value, href }) => (
                      <div key={label} className="flex items-start gap-4 rounded-2xl border border-border/40 bg-white/90 px-5 py-4 shadow-sm">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-400/15 to-yellow-400/5">
                          <Icon className="h-5 w-5" style={{ color: "hsl(37,90%,55%)" }} />
                        </div>
                        <div>
                          <p className="font-body text-[11px] font-bold uppercase tracking-[0.15em] text-muted-foreground mb-1">{label}</p>
                          {href ? (
                            <a href={href} className="font-body text-[14px] font-semibold text-foreground hover:text-navy transition-colors whitespace-pre-line">
                              {value}
                            </a>
                          ) : (
                            <p className="font-body text-[14px] font-semibold text-foreground whitespace-pre-line">{value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Map */}
                  <div className="mt-6 rounded-2xl overflow-hidden border border-border/40 shadow-sm h-[220px]">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3847.8!2d74.9886131!3d15.450056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDI3JzAwLjIiTiA3NMKwNTknMTkuMCJF!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
                      width="100%"
                      height="220"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Hosatti Refrigeration Service Workshop Location — Jay Nagar, Dharwad"
                    />
                  </div>
                </div>
              </ScrollReveal>

              {/* Contact Form */}
              <ScrollReveal direction="blur" delay={0.1}>
                <div>
                  <div className="mb-6 flex items-center gap-3">
                    <div className="h-[2px] w-8 bg-gradient-to-r from-yellow-400 to-yellow-400/40 rounded-full" />
                    <span className="font-body text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">Send a Message</span>
                  </div>
                  <h2 className="font-display text-foreground mb-6" style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}>
                    Describe Your Appliance Problem
                  </h2>
                  <ContactForm />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <WhatsAppCTA heading="Prefer a Direct Call or WhatsApp?" subheading="Call +91-7899472430 or WhatsApp for the fastest response — quick repair available in Dharwad." />
      </main>
      <Footer />
    </>
  );
}
