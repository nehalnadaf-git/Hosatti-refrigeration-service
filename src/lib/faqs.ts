// src/lib/faqs.ts
// 25+ global FAQs for the /faq page — matching real Google search queries.

export interface FAQ {
  question: string;
  answer: string;
  category: FAQCategory;
}

export type FAQCategory =
  | "general"
  | "ac"
  | "refrigerator"
  | "washing-machine"
  | "air-cooler"
  | "booking"
  | "warranty"
  | "service-areas";

export const GLOBAL_FAQS: FAQ[] = [
  // ── General ──────────────────────────────────────────────────────────────
  {
    category: "general",
    question: "What home appliances does Hosatti Refrigeration Service repair in Dharwad?",
    answer:
      "We repair all major home appliances in Dharwad — air conditioners (AC), refrigerators, fully automatic and semi-automatic washing machines, and air coolers. Our team of skilled technicians services 24+ brands including LG, Samsung, Whirlpool, Godrej, IFB, Voltas, Daikin, Haier, and many more.",
  },
  {
    category: "general",
    question: "How much does appliance repair cost in Dharwad?",
    answer:
      "We provide transparent, upfront quotes before starting any work. The repair cost varies depending on the appliance type, brand, and the nature of the fault. We never charge hidden fees. Call us at +91-7899472430 or WhatsApp us to get a free estimate for your specific appliance problem.",
  },
  {
    category: "general",
    question: "Do you provide doorstep appliance repair service in Dharwad?",
    answer:
      "Yes! Our team provides doorstep appliance repair service to your home anywhere in Dharwad. Simply call or WhatsApp us at +91-7899472430 and our technician will visit your home at a convenient time. Alternatively, you can bring your appliance directly to our workshop at Jay Nagar, Dharwad.",
  },
  {
    category: "general",
    question: "Do you use genuine spare parts for repairs?",
    answer:
      "Absolutely. We use only certified, genuine spare parts for all repairs. We never compromise on part quality because it directly affects your appliance's performance and lifespan. All replacement parts come with appropriate warranty coverage.",
  },
  {
    category: "general",
    question: "Which brands does Hosatti Refrigeration Service repair in Dharwad?",
    answer:
      "We service 24+ brands: LG, Samsung, Videocon, IFB, Godrej, Haier, Panasonic, Voltas, Whirlpool, Bosch, Siemens, Electrolux, Daikin, Hitachi, Lloyd, Blue Star, Carrier, O General, Mitsubishi, Sharp, Onida, BPL, Kelvinator, and TCL.",
  },
  {
    category: "general",
    question: "Are quick repairs available in Dharwad?",
    answer:
      "Yes, we offer quick appliance repair service for most requests in Dharwad. If you call or WhatsApp us early in the day, we typically can send a technician the quick. Availability depends on scheduling, so we recommend calling as early as possible for urgent repairs.",
  },

  // ── AC / Air Conditioner ─────────────────────────────────────────────────
  {
    category: "ac",
    question: "Why is my AC not cooling in Dharwad summers?",
    answer:
      "AC not cooling is usually caused by one of these issues: dirty air filter blocking airflow, low refrigerant (gas) level due to a leak, faulty compressor, blocked condenser coils, or a bad capacitor. Our technicians diagnose the exact cause and fix it the quick. Call +91-7899472430 for fast AC repair in Dharwad.",
  },
  {
    category: "ac",
    question: "How often should AC gas be refilled in Dharwad?",
    answer:
      "AC refrigerant (gas) does not deplete under normal conditions — if your AC needs frequent gas refills, it means there is a leak in the refrigerant system. We find and repair the leak first, then recharge the gas to the correct level. A properly sealed AC should not need gas refilling for many years.",
  },
  {
    category: "ac",
    question: "What is AC deep cleaning and why is it needed in Dharwad?",
    answer:
      "AC deep cleaning removes dust, dirt, mold, and bacteria from the indoor unit's filter, coil, blower fan, and drain pan. Dharwad's dusty summers cause filters to clog quickly, reducing cooling efficiency and air quality. We recommend AC deep cleaning at least once a year, ideally before summer begins.",
  },
  {
    category: "ac",
    question: "Why is my AC leaking water inside my room in Dharwad?",
    answer:
      "AC water leakage inside your room usually means the condensate drain line is blocked with algae or dust. When the drain is clogged, water backs up and drips from the indoor unit. Our technicians clear the drain, check for other causes like improper installation angle or dirty coils, and fix the leak completely.",
  },
  {
    category: "ac",
    question: "Do you install new AC units in Dharwad?",
    answer:
      "Yes, we handle complete AC installation and uninstallation in Dharwad. We install split ACs, window ACs, and inverter ACs for all brands. Proper installation is critical for AC efficiency — we ensure the outdoor unit is mounted correctly, refrigerant lines are sealed, and the system is fully tested before we leave.",
  },

  // ── Refrigerator ─────────────────────────────────────────────────────────
  {
    category: "refrigerator",
    question: "Why is my refrigerator not cooling in Dharwad?",
    answer:
      "A refrigerator not cooling can be caused by a faulty thermostat, dirty condenser coils, compressor failure, refrigerant leak, or a damaged door seal. Our certified technicians diagnose the exact fault and repair it using genuine parts. Call +91-7899472430 for quick fridge repair in Dharwad.",
  },
  {
    category: "refrigerator",
    question: "How much does fridge compressor repair cost in Dharwad?",
    answer:
      "Compressor replacement is one of the more involved fridge repairs. The cost depends on the compressor type and your fridge model. We provide a full diagnosis and transparent quote before starting any work — no hidden charges. WhatsApp us at +91-7899472430 to discuss your specific compressor issue.",
  },
  {
    category: "refrigerator",
    question: "My fridge stopped cooling after a power cut in Dharwad. What should I do?",
    answer:
      "After a power cut, unplug your fridge for 5 minutes, then plug it back in. This resets the compressor. If the fridge still doesn't cool after a few hours, it may need professional repair. Power surges during restoration can damage the thermostat, start relay, or compressor — our team can diagnose and fix this quickly.",
  },
  {
    category: "refrigerator",
    question: "Why is there ice buildup inside my refrigerator in Dharwad?",
    answer:
      "Excessive ice or frost inside a fridge is usually caused by a faulty defrost heater, defrost timer, or defrost thermostat. It can also happen when the door seal lets in warm, humid air (common during Dharwad monsoon season). Our technicians will diagnose the defrost system and repair or replace the faulty component.",
  },

  // ── Washing Machine ──────────────────────────────────────────────────────
  {
    category: "washing-machine",
    question: "Why is my washing machine not draining water in Dharwad?",
    answer:
      "A washing machine not draining is usually caused by a clogged drain pump filter, a blocked or kinked drain hose, or a faulty drain pump motor. Our technicians clear blockages and repair or replace the drain pump as needed. We service all brands of fully automatic and semi-automatic washing machines in Dharwad.",
  },
  {
    category: "washing-machine",
    question: "Why is my washing machine not spinning in Dharwad?",
    answer:
      "Washing machine not spinning is often caused by an unbalanced load triggering the safety shutoff, a worn drive belt, faulty motor, or a lid switch fault (in top-load machines). Our team will diagnose the exact problem and fix it with genuine replacement parts.",
  },
  {
    category: "washing-machine",
    question: "Do you repair both front-load and top-load washing machines in Dharwad?",
    answer:
      "Yes, we repair all types of washing machines in Dharwad — front-load fully automatic, top-load fully automatic, and semi-automatic machines. We service all brands including LG, Samsung, IFB, Whirlpool, Bosch, Videocon, Godrej, and more.",
  },
  {
    category: "washing-machine",
    question: "Why does my washing machine smell bad in Dharwad?",
    answer:
      "A smelly washing machine is caused by mold and mildew growing inside the drum, rubber door seal (in front-loaders), or detergent drawer. In Dharwad's humid monsoon climate this can worsen quickly. Our technicians deep-clean the drum interior, replace damaged seals if needed, and advise on prevention.",
  },

  // ── Air Cooler ───────────────────────────────────────────────────────────
  {
    category: "air-cooler",
    question: "Why is my air cooler not cooling in Dharwad summers?",
    answer:
      "An air cooler blowing warm or barely cool air is usually caused by dry or dirty cooling pads, low water level in the tank, a faulty water pump not circulating water, or a fan motor issue. Our technicians replace pads, repair the pump, or fix the motor to restore full cooling performance.",
  },
  {
    category: "air-cooler",
    question: "How long do air cooler pads last in Dharwad?",
    answer:
      "Cooling pads typically last 1–2 seasons depending on how often the cooler is used and the water quality. Dharwad's hard water causes mineral deposits on pads that reduce efficiency over time. We assess pad condition and replace them with quality pads for optimal cooling.",
  },

  // ── Booking ──────────────────────────────────────────────────────────────
  {
    category: "booking",
    question: "How do I book an appliance repair service in Dharwad?",
    answer:
      "Booking is easy — call us at +91-7899472430, WhatsApp us at +91-7899472430, or use the Book Service button on our website. Tell us your appliance type and the problem, and we'll schedule a technician visit at your convenience. Quick service is available for most repairs in Dharwad.",
  },
  {
    category: "booking",
    question: "What are Hosatti Refrigeration Service's working hours in Dharwad?",
    answer:
      "Our workshop and doorstep service is available Monday to Saturday from 9:30 AM to 7:00 PM, and Sunday from 9:30 AM to 1:00 PM. For urgent repairs, WhatsApp us anytime and we'll get back to you as soon as possible.",
  },
  {
    category: "booking",
    question: "What payment methods does Hosatti accept in Dharwad?",
    answer:
      "We accept UPI payments (Paytm and Google Pay) and Cash. We do not currently accept credit or debit cards. Payment is collected after the repair is completed and tested to your satisfaction.",
  },
  {
    category: "booking",
    question: "Can I bring my appliance directly to your workshop in Dharwad?",
    answer:
      "Yes! You are welcome to bring your appliance directly to our workshop at Jaya Nagar, Opp Gurukul Academy, Saptapur Last Stop, Jay Nagar, Dharwad – 580001. This is especially convenient for smaller appliances. We also offer doorstep service if you prefer we come to you.",
  },

  // ── Warranty ─────────────────────────────────────────────────────────────
  {
    category: "warranty",
    question: "Do you provide warranty on repairs done in Dharwad?",
    answer:
      "Yes, we stand behind our work. We provide service warranty on all repairs performed by our team. The warranty period varies by service type and the parts replaced. We use genuine spare parts which come with manufacturer warranty. Ask our technician for details at the time of repair.",
  },
  {
    category: "warranty",
    question: "What if my appliance develops the same problem after repair in Dharwad?",
    answer:
      "If the same issue recurs within the warranty period after our repair, we will diagnose and fix it at no additional charge. Customer satisfaction is our top priority. Simply call or WhatsApp us at +91-7899472430 to report the issue and we will arrange a revisit promptly.",
  },

  // ── Service Areas ────────────────────────────────────────────────────────
  {
    category: "service-areas",
    question: "Which areas of Dharwad do you service?",
    answer:
      "We service all areas of Dharwad city — including Jayanagar, Saptapur, Jay Nagar, Vidyanagar, Shivaji Nagar, Kalyan Nagar, Vidyagiri, Sadankeri, KHB Colony, Lingaraj Nagar, PB Road, Court Circle, Ramanagar, and all other neighborhoods in Dharwad. We do not cover Hubli or other cities.",
  },
  {
    category: "service-areas",
    question: "Is Hosatti Refrigeration Service available in Vidyanagar, Dharwad?",
    answer:
      "Yes! We provide full AC, refrigerator, washing machine, and air cooler repair service in Vidyanagar, Dharwad. Our technician can visit your home in Vidyanagar for doorstep service, or you can bring your appliance to our workshop in Jay Nagar — just 10–15 minutes from most Dharwad neighborhoods.",
  },
];

export const FAQ_CATEGORIES: Record<FAQCategory, string> = {
  general: "General",
  ac: "Air Conditioner (AC)",
  refrigerator: "Refrigerator",
  "washing-machine": "Washing Machine",
  "air-cooler": "Air Cooler",
  booking: "Booking & Payment",
  warranty: "Warranty & Support",
  "service-areas": "Service Areas in Dharwad",
};
