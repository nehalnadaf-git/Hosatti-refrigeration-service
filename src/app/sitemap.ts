// src/app/sitemap.ts
import type { MetadataRoute } from "next";

const BASE = "https://hosatti.com";

const servicesSlugs = [
  "refrigerator-not-cooling-repair",
  "fridge-compressor-repair",
  "refrigerator-gas-recharge",
  "ac-not-cooling-repair",
  "ac-gas-refilling",
  "ac-deep-cleaning",
  "air-cooler-not-cooling-repair",
  "air-cooler-motor-repair",
  "fully-automatic-washing-machine-repair",
  "semi-automatic-washing-machine-repair",
  "washing-machine-not-draining",
  "washing-machine-drain-troubleshooting",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const serviceUrls: MetadataRoute.Sitemap = servicesSlugs.map((slug) => ({
    url: `${BASE}/services/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  return [
    {
      url: BASE,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE}/#services`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE}/#about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/#contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE}/#faq`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    ...serviceUrls,
  ];
}
