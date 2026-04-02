// src/app/privacy-policy/page.tsx
import type { Metadata } from "next";
import { SEO } from "@/lib/seo";
import PageHero from "@/components/shared/PageHero";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Hosatti Refrigeration Service Dharwad",
  description: "Privacy Policy for Hosatti Refrigeration Service. Learn how we handle your personal information when you contact us for appliance repair in Dharwad.",
  alternates: { canonical: `${SEO.baseUrl}/privacy-policy` },
  robots: { index: false, follow: false },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        h1="Privacy Policy"
        subtitle="How Hosatti Refrigeration Service handles your personal information."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy", href: "/privacy-policy" }]}
      />
      <main>
        <section className="relative bg-light-bg py-16 md:py-20">
          <div className="container mx-auto px-5 md:px-8 max-w-3xl">
            <div className="prose-legal font-body text-muted-foreground leading-[1.8]">

              <p className="text-[13px] mb-6 text-muted-foreground/70">Last updated: April 1, 2025</p>

              <h2 className="font-display text-foreground text-[1.3rem] mb-3 mt-8">1. Information We Collect</h2>
              <p className="text-[15px] mb-4">When you contact Hosatti Refrigeration Service through our website, WhatsApp, phone, or contact form, we may collect:</p>
              <ul className="list-disc list-inside text-[15px] mb-4 space-y-1">
                <li>Your name and mobile number</li>
                <li>Your address or location in Dharwad (to dispatch a technician)</li>
                <li>A description of your appliance repair problem</li>
                <li>The appliance type and brand</li>
              </ul>

              <h2 className="font-display text-foreground text-[1.3rem] mb-3 mt-8">2. How We Use Your Information</h2>
              <p className="text-[15px] mb-4">We use the information you provide solely to:</p>
              <ul className="list-disc list-inside text-[15px] mb-4 space-y-1">
                <li>Schedule and dispatch a technician to your home in Dharwad</li>
                <li>Contact you about your repair appointment</li>
                <li>Follow up on your service</li>
              </ul>
              <p className="text-[15px] mb-4">We do not use your information for marketing, advertising, or any purpose other than providing our repair service to you.</p>

              <h2 className="font-display text-foreground text-[1.3rem] mb-3 mt-8">3. Information Sharing</h2>
              <p className="text-[15px] mb-4">We do not sell, trade, rent, or share your personal information with any third parties. Your contact details and address are used only by Hosatti Refrigeration Service to provide the requested repair service.</p>

              <h2 className="font-display text-foreground text-[1.3rem] mb-3 mt-8">4. WhatsApp Communication</h2>
              <p className="text-[15px] mb-4">When you contact us via WhatsApp (+91-7899472430), your messages are subject to WhatsApp&apos;s own privacy policy. We use WhatsApp only to communicate about your repair service and will not add you to group lists or send you unsolicited messages.</p>

              <h2 className="font-display text-foreground text-[1.3rem] mb-3 mt-8">5. Data Security</h2>
              <p className="text-[15px] mb-4">We take reasonable precautions to protect your personal information. We do not store your payment details — all payments are made in cash or via standard UPI apps directly during or after the service.</p>

              <h2 className="font-display text-foreground text-[1.3rem] mb-3 mt-8">6. Cookies & Analytics</h2>
              <p className="text-[15px] mb-4">Our website may use Vercel Analytics to collect anonymised, aggregated data about website visits (such as page views and devices used). This data does not include personally identifiable information and helps us improve the website.</p>

              <h2 className="font-display text-foreground text-[1.3rem] mb-3 mt-8">7. Contact Us</h2>
              <p className="text-[15px] mb-4">If you have any questions about this Privacy Policy, please contact us:</p>
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
