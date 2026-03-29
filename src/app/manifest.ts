// src/app/manifest.ts
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Hosatti Refrigeration Service",
    short_name: "Hosatti Service",
    description:
      "Expert AC, refrigerator, washing machine & air cooler repair in Dharwad.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#1a237e",
    orientation: "portrait-primary",
    scope: "/",
    categories: ["utilities", "business"],
    lang: "en-IN",
    dir: "ltr",
    icons: [
      { src: "/PWA image/Jameer PWA.webp", sizes: "192x192", type: "image/webp", purpose: "any" },
      { src: "/PWA image/Jameer PWA.webp", sizes: "512x512", type: "image/webp", purpose: "maskable" },
    ],
    screenshots: [
      {
        src: "/screenshots/desktop.png",
        sizes: "1280x720",
        type: "image/png",
        label: "Hosatti Refrigeration Service — Desktop View",
      },
      {
        src: "/screenshots/mobile.png",
        sizes: "390x844",
        type: "image/png",
        label: "Hosatti Refrigeration Service — Mobile View",
      },
    ],
    shortcuts: [
      {
        name: "Book AC Repair",
        short_name: "AC Repair",
        description: "Book an AC repair via WhatsApp",
        url: "/services/ac-not-cooling-repair",
        icons: [{ src: "/PWA image/Jameer PWA.webp", sizes: "96x96", type: "image/webp" }],
      },
      {
        name: "Book Fridge Repair",
        short_name: "Fridge Repair",
        description: "Book a refrigerator repair via WhatsApp",
        url: "/services/refrigerator-not-cooling-repair",
        icons: [{ src: "/PWA image/Jameer PWA.webp", sizes: "96x96", type: "image/webp" }],
      },
    ],
  };
}
