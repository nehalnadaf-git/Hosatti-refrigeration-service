// src/app/faq/page.tsx
import type { Metadata } from "next";
import { SEO } from "@/lib/seo";
import { GLOBAL_FAQS, FAQ_CATEGORIES, type FAQCategory } from "@/lib/faqs";
import PageHero from "@/components/shared/PageHero";
import FAQAccordion from "@/components/shared/FAQAccordion";
import WhatsAppCTA from "@/components/shared/WhatsAppCTA";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Frequently Asked Questions — Appliance Repair in Dharwad",
  description:
    "Got questions about appliance repair in Dharwad? Find answers to all FAQs about AC repair, fridge repair, washing machine service, pricing, warranty & more — Hosatti Refrigeration Service.",
  alternates: { canonical: `${SEO.baseUrl}/faq` },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: GLOBAL_FAQS.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SEO.baseUrl },
    { "@type": "ListItem", position: 2, name: "FAQ", item: `${SEO.baseUrl}/faq` },
  ],
};

export default function FAQPage() {
  const categories = Object.keys(FAQ_CATEGORIES) as FAQCategory[];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PageHero
        eyebrow="FAQ"
        h1="Frequently Asked Questions — Appliance Repair in Dharwad"
        subtitle="Everything you need to know about our AC, refrigerator, washing machine & air cooler repair services in Dharwad."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "FAQ", href: "/faq" }]}
      />

      <main>
        {categories.map((cat) => {
          const faqs = GLOBAL_FAQS.filter((f) => f.category === cat);
          if (!faqs.length) return null;
          return (
            <FAQAccordion
              key={cat}
              faqs={faqs}
              eyebrow={FAQ_CATEGORIES[cat]}
              heading={`${FAQ_CATEGORIES[cat]} — Questions & Answers`}
            />
          );
        })}
        <WhatsAppCTA heading="Still Have a Question?" subheading="Call or WhatsApp Jameer Hosatti directly for a fast, honest answer about your appliance repair." />
      </main>
      <Footer />
    </>
  );
}
