// src/components/seo/FAQPageSchema.tsx

const faqs = [
  {
    q: "How much does refrigerator repair cost in Dharwad?",
    a: "The cost depends on the issue. We provide transparent pricing before starting any work. Common fridge repairs in Dharwad range from basic diagnostics to compressor replacements. Call us for a free estimate.",
  },
  {
    q: "Do you provide home service for appliance repair in Dharwad?",
    a: "Yes! We offer doorstep repair services across Dharwad and surrounding areas including Jay Nagar, Hubli-Dharwad. Our technicians come to your home for AC, fridge, washing machine, and air cooler repairs.",
  },
  {
    q: "Do you use original replacement parts for appliance repairs?",
    a: "Yes, we use only genuine and high-quality spare parts for all repairs. All parts come with a warranty and are sourced from authorized distributors.",
  },
  {
    q: "Which appliance brands do you service in Dharwad?",
    a: "We service LG, Samsung, Videocon, IFB, Godrej, Haier, Panasonic, Voltas, Whirlpool, Bosch, Daikin, Hitachi, Blue Star, Lloyd, Carrier, O General, Mitsubishi, Siemens, Electrolux, Sharp, Onida, BPL, Kelvinator, TCL, and many more brands.",
  },
  {
    q: "What are your working hours for AC and fridge repair in Dharwad?",
    a: "We are open every day including Sundays from 07:00 AM to 07:45 PM. Quick service is available for urgent repairs.",
  },
  {
    q: "How do I book a refrigerator or AC repair service?",
    a: "Click the 'Book Service' button on our website, choose your appliance, describe the problem, and we'll connect on WhatsApp instantly. You can also call us directly at +91-7899472430.",
  },
  {
    q: "Do you repair air coolers in Dharwad?",
    a: "Yes, we repair all types of air coolers — desert coolers, tower coolers, window coolers — including motor repair, pump replacement, cooling pad replacement, and fan issues.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept UPI (Google Pay, PhonePe), ATM Debit/Credit Card, and Cash.",
  },
];

export function FAQPageSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: {
        "@type": "Answer",
        text: a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
