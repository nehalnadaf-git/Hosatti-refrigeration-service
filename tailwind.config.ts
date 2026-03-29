// tailwind.config.ts
// In Tailwind v4, theme tokens are defined in globals.css via @theme.
// This file is kept for plugin compatibility only.
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class", "[data-theme='dark']"] as ["class", string],
  content: [
    "./src/**/*.{ts,tsx}",
  ],
} satisfies Config;
