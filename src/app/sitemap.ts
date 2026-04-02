// src/app/sitemap.ts
import type { MetadataRoute } from "next";
import { SERVICES } from "@/lib/services";
import { LOCATIONS } from "@/lib/locations";
import { BRANDS } from "@/lib/brands";
import { BLOG_POSTS } from "@/lib/blogs";

const BASE = "https://hosatti.com";
const now = new Date();

function url(
  path: string,
  priority: number,
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = "monthly",
): MetadataRoute.Sitemap[number] {
  return { url: `${BASE}${path}`, lastModified: now, changeFrequency, priority };
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Core
    url("/", 1.0, "weekly"),
    url("/services", 0.9, "monthly"),
    url("/emergency-repair-dharwad", 0.9, "monthly"),

    // 12 Service pages
    ...SERVICES.map((s) => url(`/services/${s.slug}`, 0.85)),

    // 30 Location pages
    ...LOCATIONS.map((l) => url(`/${l.slug}`, 0.8)),

    // Brands index + 24 brand pages
    url("/brands", 0.75, "monthly"),
    ...BRANDS.map((b) => url(`/brands/${b.slug}`, 0.75)),

    // Static info pages
    url("/about", 0.7),
    url("/contact", 0.7),
    url("/reviews", 0.7),
    url("/faq", 0.7),

    // Blog
    url("/blog", 0.65),
    ...BLOG_POSTS.map((b) => url(`/blog/${b.slug}`, 0.65)),

    // Note: /privacy-policy and /terms-of-service excluded (robots noindex)
  ];
}
