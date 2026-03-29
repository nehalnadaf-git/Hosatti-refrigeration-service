// src/lib/services-data.ts
export type ServiceCategory = "refrigerator" | "air-conditioner" | "air-cooler" | "washing-machine";

export interface Service {
  id: string;
  slug: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  category: ServiceCategory;
  categoryLabel: string;
  image: string;
  metaTitle: string;
  metaDesc: string;
  keywords: string[];
}

export const SERVICES: Service[] = [
  // ── Refrigerator ───────────────────────────────
  {
    id: "ref-not-cooling",
    slug: "refrigerator-not-cooling-repair",
    name: "Refrigerator Not Cooling Repair",
    shortDesc: "Full diagnosis and repair when your fridge stops cooling.",
    fullDesc: "We diagnose and fix all reasons a refrigerator stops cooling — faulty thermostat, blocked condenser coils, compressor issues, refrigerant leaks, and more. Same-day service.",
    category: "refrigerator",
    categoryLabel: "Refrigerator",
    image: "/services/Refrigerator Not Cooling Repair.webp",
    metaTitle: "Refrigerator Not Cooling Repair Dharwad | Hosatti",
    metaDesc: "Expert refrigerator not cooling repair in Dharwad. Same-day service. All brands. Call Hosatti Refrigeration.",
    keywords: ["refrigerator not cooling Dharwad", "fridge repair Dharwad"],
  },
  {
    id: "ref-compressor",
    slug: "fridge-compressor-repair",
    name: "Fridge Compressor Repair & Replacement",
    shortDesc: "Specialist compressor diagnosis, repair, and full replacement.",
    fullDesc: "Our certified technicians handle compressor failures for all fridge brands — full replacement or targeted repair with genuine parts and a service warranty.",
    category: "refrigerator",
    categoryLabel: "Refrigerator",
    image: "/services/Fridge Compressor Repair & Replacement.webp",
    metaTitle: "Fridge Compressor Repair Dharwad | Hosatti",
    metaDesc: "Fridge compressor repair and replacement in Dharwad. Genuine parts, warranty. Hosatti Refrigeration.",
    keywords: ["fridge compressor repair Dharwad"],
  },
  {
    id: "ref-gas",
    slug: "refrigerator-gas-recharge",
    name: "Refrigerator Gas Filling / Gas Recharge",
    shortDesc: "Precise refrigerant recharge and leak detection.",
    fullDesc: "We accurately detect leaks, repair them, and recharge your refrigerator with the correct refrigerant type and quantity. Restores optimal cooling performance.",
    category: "refrigerator",
    categoryLabel: "Refrigerator",
    image: "/services/Refrigerator Gas Filling  Gas Recharge.webp",
    metaTitle: "Refrigerator Gas Refilling Dharwad | Hosatti",
    metaDesc: "Refrigerator gas filling and recharge service in Dharwad. All brands serviced. Hosatti Refrigeration.",
    keywords: ["refrigerator gas filling Dharwad", "fridge gas recharge Dharwad"],
  },
  // ── Air Conditioner ────────────────────────────
  {
    id: "ac-not-cooling",
    slug: "ac-not-cooling-repair",
    name: "AC Not Cooling Repair",
    shortDesc: "Full diagnosis and repair for ACs blowing warm air.",
    fullDesc: "We identify and fix all causes of poor AC cooling — dirty filters, low refrigerant, faulty compressor, blocked condenser, bad capacitor, and more. Fast turnaround.",
    category: "air-conditioner",
    categoryLabel: "Air Conditioner",
    image: "/services/AC Not Cooling Repair.webp",
    metaTitle: "AC Not Cooling Repair Dharwad | Hosatti",
    metaDesc: "AC not cooling repair in Dharwad. Same-day service, all brands. Hosatti Refrigeration.",
    keywords: ["AC not cooling Dharwad", "AC repair Dharwad"],
  },
  {
    id: "ac-gas",
    slug: "ac-gas-refilling",
    name: "AC Gas Refilling / Gas Charging",
    shortDesc: "Precise AC gas top-up and refrigerant leak fix.",
    fullDesc: "We check AC gas levels, locate and repair leaks, then recharge with the correct refrigerant for your unit. Restores full cooling power with maximum efficiency.",
    category: "air-conditioner",
    categoryLabel: "Air Conditioner",
    image: "/services/AC Gas Refilling  Gas Charging.webp",
    metaTitle: "AC Gas Refilling Dharwad | Hosatti",
    metaDesc: "AC gas refilling and charging in Dharwad. All brands. Hosatti Refrigeration.",
    keywords: ["AC gas refilling Dharwad", "AC gas charging Dharwad"],
  },
  {
    id: "ac-deep-clean",
    slug: "ac-deep-cleaning",
    name: "AC Deep Cleaning Service",
    shortDesc: "Full internal & external AC cleaning for fresh, efficient cooling.",
    fullDesc: "Our deep cleaning service removes dust, mold, and buildup from coils, filters, blowers, and drain pans — improving air quality, cooling efficiency, and unit lifespan.",
    category: "air-conditioner",
    categoryLabel: "Air Conditioner",
    image: "/services/AC Deep Cleaning Service.webp",
    metaTitle: "AC Deep Cleaning Service Dharwad | Hosatti",
    metaDesc: "Professional AC deep cleaning in Dharwad. Improves cooling and air quality. Hosatti Refrigeration.",
    keywords: ["AC cleaning Dharwad", "AC deep cleaning Dharwad"],
  },
  // ── Air Cooler ─────────────────────────────────
  {
    id: "cooler-not-cooling",
    slug: "air-cooler-not-cooling-repair",
    name: "Air Cooler Not Cooling Repair",
    shortDesc: "Fix your air cooler that blows hot or warm air.",
    fullDesc: "We repair all air cooler brands — replacing dry cooling pads, fixing water pumps, clearing blocked nozzles, and repairing fans. Fast, same-day service.",
    category: "air-cooler",
    categoryLabel: "Air Cooler",
    image: "/services/Air Cooler Not Cooling Repair.webp",
    metaTitle: "Air Cooler Repair Dharwad | Hosatti",
    metaDesc: "Air cooler not cooling repair in Dharwad. All brands. Same-day service. Hosatti Refrigeration.",
    keywords: ["air cooler repair Dharwad", "cooler not cooling Dharwad"],
  },
  {
    id: "cooler-motor",
    slug: "air-cooler-motor-repair",
    name: "Air Cooler Motor Repair & Replacement",
    shortDesc: "Motor rewind, repair, and full replacement for all cooler brands.",
    fullDesc: "Whether it's a fan motor burnout, bearing failure, or capacitor issue, we repair or replace your air cooler motor precisely. Genuine parts, warranty included.",
    category: "air-cooler",
    categoryLabel: "Air Cooler",
    image: "/services/Air Cooler Motor Repair & Replacement.webp",
    metaTitle: "Air Cooler Motor Repair Dharwad | Hosatti",
    metaDesc: "Air cooler motor repair and replacement in Dharwad. All brands. Hosatti Refrigeration.",
    keywords: ["air cooler motor repair Dharwad"],
  },
  // ── Washing Machine ────────────────────────────
  {
    id: "wm-fully",
    slug: "fully-automatic-washing-machine-repair",
    name: "Fully Automatic Washing Machine Repair",
    shortDesc: "Expert repair for all fully automatic top-load & front-load machines.",
    fullDesc: "We fix all issues in fully automatic washing machines — drum problems, PCB faults, motor failures, door lock issues, drainage problems, and error code diagnosis.",
    category: "washing-machine",
    categoryLabel: "Washing Machine",
    image: "/services/Fully Automatic Washing Machine Repai.webp",
    metaTitle: "Fully Automatic Washing Machine Repair Dharwad | Hosatti",
    metaDesc: "Fully automatic washing machine repair in Dharwad. LG, Samsung, IFB, Bosch and more. Hosatti.",
    keywords: ["washing machine repair Dharwad", "fully automatic washing machine Dharwad"],
  },
  {
    id: "wm-semi",
    slug: "semi-automatic-washing-machine-repair",
    name: "Semi-Automatic Washing Machine Repair",
    shortDesc: "All semi-auto washing machine faults fixed fast.",
    fullDesc: "We service semi-automatic washing machines — spinner issues, pulsator failure, timer problems, pump blockages, and lid switch faults. Same-day service available.",
    category: "washing-machine",
    categoryLabel: "Washing Machine",
    image: "/services/Semi-Automatic Washing Machine Repair.webp",
    metaTitle: "Semi-Automatic Washing Machine Repair Dharwad | Hosatti",
    metaDesc: "Semi-automatic washing machine repair in Dharwad. Fast, same-day service. Hosatti Refrigeration.",
    keywords: ["semi automatic washing machine repair Dharwad"],
  },
  {
    id: "wm-not-draining",
    slug: "washing-machine-not-draining",
    name: "Washing Machine Not Draining Repair",
    shortDesc: "Fast fix for washing machines that won't drain water.",
    fullDesc: "We diagnose and repair washing machines not draining — clearing blocked pumps, replacing drain hoses, fixing lid switches, and resolving PCB/timer faults.",
    category: "washing-machine",
    categoryLabel: "Washing Machine",
    image: "/services/Washing Machine Not Draining Repair.webp",
    metaTitle: "Washing Machine Not Draining Repair Dharwad | Hosatti",
    metaDesc: "Washing machine not draining? Expert repair in Dharwad. Same-day service. Hosatti Refrigeration.",
    keywords: ["washing machine not draining Dharwad"],
  },
  {
    id: "wm-drain-fast",
    slug: "washing-machine-drain-troubleshooting",
    name: "Washing Machine Drain Fast Troubleshooting",
    shortDesc: "Quick drain diagnosis and same-day fix for all brands.",
    fullDesc: "On-the-spot drain troubleshooting for all washing machine brands. We identify the root cause — clogged filter, pump wear, or error codes — and fix it fast.",
    category: "washing-machine",
    categoryLabel: "Washing Machine",
    image: "/services/Washing Machine Not Draining Repair — Fast Troubleshooting.webp",
    metaTitle: "Washing Machine Drain Troubleshooting Dharwad | Hosatti",
    metaDesc: "Fast washing machine drain troubleshooting in Dharwad. Hosatti Refrigeration Service.",
    keywords: ["washing machine drain troubleshooting Dharwad"],
  },
];
