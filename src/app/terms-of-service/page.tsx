// src/app/terms-of-service/page.tsx
import type { Metadata } from "next";
import { SEO } from "@/lib/seo";
import PageHero from "@/components/shared/PageHero";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | Hosatti Refrigeration Service Dharwad",
  description: "Terms of Service for Hosatti Refrigeration Service, Dharwad. Read our service terms, warranty conditions, and payment policy.",
  alternates: { canonical: `${SEO.baseUrl}/terms-of-service` },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        h1="Terms of Service"
        subtitle="Terms and conditions for using Hosatti Refrigeration Service in Dharwad."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Terms of Service", href: "/terms-of-service" }]}
      />
      <main>
        <section className="relative bg-light-bg py-16 md:py-20">
          <div className="container mx-auto px-5 md:px-8 max-w-3xl">
            <div className="font-body text-muted-foreground leading-[1.8]">
              <p className="text-[13px] mb-6 text-muted-foreground/70">Last updated: April 1, 2025</p>

              <h2 className="font-display text-foreground text-[1.3rem] mb-3 mt-8">1. Service Agreement</h2>
              <p className="text-[15px] mb-4">By booking a repair service with Hosatti Refrigeration Service ("we", "us", "Hosatti"), you agree to these Terms of Service. These terms apply to all appliance repair services provided in Dharwad, Karnataka.</p>

              <h2 className="font-display text-foreground text-[1.3rem] mb-3 mt-8">2. Service Booking</h2>
              <p className="text-[15px] mb-4">Services can be booked by calling or WhatsApp messaging +91-7899472430, or by submitting our contact form online. Booking confirmation is provided verbally or via WhatsApp. We offer two service models:</p>
              <ul className="list-disc list-inside text-[15px] mb-4 space-y-1">
                <li><strong>Doorstep Service:</strong> Our technician visits your home in Dharwad at a mutually agreed time.</li>
                <li><strong>Walk-in Workshop:</strong> You bring your appliance to our Jay Nagar workshop during business hours.</li>
              </ul>

              <h2 className="font-display text-foreground text-[1.3rem] mb-3 mt-8">3. Diagnosis & Quotation</h2>
              <p className="text-[15px] mb-4">Before commencing any repair work, our technician will diagnose the fault and provide a transparent cost estimate. No repair work will begin without your verbal or written approval of the quoted price. We do not charge a diagnosis fee if you proceed with the repair.</p>

              <h2 className="font-display text-foreground text-[1.3rem] mb-3 mt-8">4. Spare Parts</h2>
              <p className="text-[15px] mb-4">We use genuine OEM or high-quality compatible spare parts for all repairs. The type and brand of parts used will be communicated to you before installation. Hosatti is not responsible for any issues arising from customer-supplied parts.</p>

              <h2 className="font-display text-foreground text-[1.3rem] mb-3 mt-8">5. Warranty</h2>
              <p className="text-[15px] mb-4">We provide a limited service warranty on completed repairs. The warranty covers the specific repair performed and the parts replaced. It does not cover:</p>
              <ul className="list-disc list-inside text-[15px] mb-4 space-y-1">
                <li>New or unrelated faults that develop after the repair</li>
                <li>Damage caused by power surges, misuse, or improper ventilation</li>
                <li>Consumable parts such as filters and cooling pads</li>
              </ul>
              <p className="text-[15px] mb-4">Warranty period and conditions will be communicated at the time of repair completion.</p>

              <h2 className="font-display text-foreground text-[1.3rem] mb-3 mt-8">6. Payment</h2>
              <p className="text-[15px] mb-4">Payment is due upon completion of the repair service. We accept:</p>
              <ul className="list-disc list-inside text-[15px] mb-4 space-y-1">
                <li>Cash</li>
                <li>UPI (Google Pay, PhonePe, Paytm)</li>
              </ul>
              <p className="text-[15px] mb-4">We do not accept credit/debit card payments. Invoices are provided on request.</p>

              <h2 className="font-display text-foreground text-[1.3rem] mb-3 mt-8">7. Cancellation</h2>
              <p className="text-[15px] mb-4">You may cancel a booked appointment at any time before the technician arrives by calling or WhatsApp messaging us. We appreciate advance notice so we can reschedule our team efficiently.</p>

              <h2 className="font-display text-foreground text-[1.3rem] mb-3 mt-8">8. Limitation of Liability</h2>
              <p className="text-[15px] mb-4">Hosatti Refrigeration Service is not liable for any pre-existing damage to an appliance before service, or for any indirect or consequential losses arising from appliance failure. Our liability is limited to the cost of the specific repair service provided.</p>

              <h2 className="font-display text-foreground text-[1.3rem] mb-3 mt-8">9. Contact</h2>
              <p className="text-[15px] mb-4">For any questions regarding these terms:</p>
              <ul className="list-disc list-inside text-[15px] mb-4 space-y-1">
                <li>Phone / WhatsApp: +91-7899472430</li>
                <li>Address: Jay Nagar, Opp Gurukul Academy, Saptapur Last Stop, Dharwad – 580001</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
