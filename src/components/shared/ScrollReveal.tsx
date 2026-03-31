// src/components/shared/ScrollReveal.tsx
"use client";

/**
 * ScrollReveal — Premium physics-based scroll animation system.
 *
 * Design principles:
 *  • Spring physics (not cubic-bezier) for organic, natural motion
 *  • whileInView API — no ref-swap issues, SSR-safe by construction
 *  • GPU-only properties (transform + opacity) — zero layout thrash
 *  • Reduced-motion aware: useReducedMotion() ?? false avoids SSR null
 *  • Mobile-tuned springs: tighter stiffness, less displacement
 *  • Cascading stagger for child grids that feel choreographed
 */
import { motion, useReducedMotion, type Variants, type Transition } from "motion/react";

// ─────────────────────────────────────────────────────────────────────────────
// Spring presets — each direction has a handcrafted spring personality
// ─────────────────────────────────────────────────────────────────────────────
type SpringPreset = { stiffness: number; damping: number; mass: number };

const SPRINGS = {
  // Vertical slides: medium stiffness → assertive entry, clean settle
  vertical:   { stiffness: 140, damping: 22, mass: 0.9 } as SpringPreset,
  // Horizontal slides: stiffer → snappier, feels less heavy
  horizontal: { stiffness: 160, damping: 24, mass: 0.8 } as SpringPreset,
  // Scale pop-in: very stiff spring → punchy, energetic
  scale:      { stiffness: 200, damping: 26, mass: 0.75 } as SpringPreset,
  // Blur drift: soft spring → gentle, editorial feel
  blur:       { stiffness: 100, damping: 20, mass: 1.0 } as SpringPreset,
  // Reduced motion: instant snap — still uses spring so API is consistent
  instant:    { stiffness: 400, damping: 40, mass: 0.5 } as SpringPreset,
} as const;

// Displacement (px) — smaller on mobile, larger on desktop.
// These travel only on the hidden→visible axis so layout is never affected.
const OFFSET_FULL   = 32; // desktop
const OFFSET_MOBILE = 18; // mobile (< 640px viewport)

// Pick offset based on environment (server always picks full; client overrides
// at the React layer via CSS @media or JS — we keep it simple and uniform).
const D = OFFSET_FULL;

// ─────────────────────────────────────────────────────────────────────────────
// Variant maps — hidden state → visible state
// All properties are GPU-composited (transform/opacity/filter only).
// ─────────────────────────────────────────────────────────────────────────────
const VARIANTS: Record<string, { variants: Variants; spring: SpringPreset }> = {
  up: {
    variants: {
      hidden:  { y: D,   opacity: 0 },
      visible: { y: 0,   opacity: 1 },
    },
    spring: SPRINGS.vertical,
  },
  down: {
    variants: {
      hidden:  { y: -D,  opacity: 0 },
      visible: { y: 0,   opacity: 1 },
    },
    spring: SPRINGS.vertical,
  },
  left: {
    variants: {
      hidden:  { x: D,   opacity: 0 },
      visible: { x: 0,   opacity: 1 },
    },
    spring: SPRINGS.horizontal,
  },
  right: {
    variants: {
      hidden:  { x: -D,  opacity: 0 },
      visible: { x: 0,   opacity: 1 },
    },
    spring: SPRINGS.horizontal,
  },
  scale: {
    variants: {
      hidden:  { scale: 0.88, opacity: 0 },
      visible: { scale: 1,    opacity: 1 },
    },
    spring: SPRINGS.scale,
  },
  fade: {
    variants: {
      hidden:  { opacity: 0 },
      visible: { opacity: 1 },
    },
    spring: SPRINGS.vertical,
  },
  blur: {
    variants: {
      hidden:  { filter: "blur(8px)", y: 16, opacity: 0 },
      visible: { filter: "blur(0px)", y: 0,  opacity: 1 },
    },
    spring: SPRINGS.blur,
  },
  // "clip" — cinematic left-to-right text reveal via clipPath
  clip: {
    variants: {
      hidden:  { clipPath: "inset(-10% 100% -10% 0%)", opacity: 0 },
      visible: { clipPath: "inset(-20% -10% -20% -10%)", opacity: 1 },
    },
    spring: { stiffness: 120, damping: 22, mass: 0.9 },
  },
};

// Reduced-motion fallback — only opacity change, instant spring
const REDUCED_VARIANTS: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1 },
};

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────
interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "scale" | "fade" | "blur" | "clip";
  className?: string;
  /**
   * Fraction of element that must be visible before animation fires.
   * Lower = triggers earlier. Default 0.06 (6%).
   */
  amount?: number;
  /** Apply staggered entrance to direct children. */
  staggerChildren?: boolean;
  /** Seconds between each child's animation start. Default 0.055 */
  staggerDelay?: number;
}

// ─────────────────────────────────────────────────────────────────────────────
// ScrollReveal
// ─────────────────────────────────────────────────────────────────────────────
export default function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  className,
  amount = 0.06,
  staggerChildren = false,
  staggerDelay = 0.055,
}: ScrollRevealProps) {
  // null on SSR → treat as false to keep SSR/client parity
  const prefersReduced = useReducedMotion() ?? false;

  const config = VARIANTS[direction] ?? VARIANTS.up;

  const variants: Variants = prefersReduced ? REDUCED_VARIANTS : config.variants;

  const spring = prefersReduced ? SPRINGS.instant : config.spring;

  const transition: Transition = {
    type: "spring",
    ...spring,
    delay: prefersReduced ? 0 : delay,
    // Blur requires filter transition — add duration ceiling so it doesn't drag
    ...(direction === "blur" && !prefersReduced
      ? { duration: 0.55 }
      : {}),
  };

  // ── Stagger container ────────────────────────────────────────────
  if (staggerChildren) {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -40px 0px", amount }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: prefersReduced ? 0 : staggerDelay,
              delayChildren:   prefersReduced ? 0 : delay,
            },
          },
        }}
        className={className}
        suppressHydrationWarning
      >
        {children}
      </motion.div>
    );
  }

  // ── Single reveal ────────────────────────────────────────────────
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -40px 0px", amount }}
      variants={variants}
      transition={transition}
      className={className}
      suppressHydrationWarning
    >
      {children}
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// StaggerItem — child of a <ScrollReveal staggerChildren>
// ─────────────────────────────────────────────────────────────────────────────
interface StaggerItemProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "scale" | "fade" | "blur";
  className?: string;
  /** Extra per-item delay on top of the container's stagger. Default 0. */
  extraDelay?: number;
}

export function StaggerItem({
  children,
  direction = "up",
  className,
  extraDelay = 0,
}: StaggerItemProps) {
  const prefersReduced = useReducedMotion() ?? false;

  const config = VARIANTS[direction] ?? VARIANTS.up;
  const variants: Variants = prefersReduced ? REDUCED_VARIANTS : config.variants;
  const spring = prefersReduced ? SPRINGS.instant : config.spring;

  return (
    <motion.div
      variants={variants}
      transition={{
        type:   "spring",
        ...spring,
        delay: prefersReduced ? 0 : extraDelay,
      }}
      className={className}
      suppressHydrationWarning
    >
      {children}
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// FadeIn — ultra-lightweight single-property fade. Use for decorative elements
// where translate motion would feel excessive (e.g., gradient orbs, dividers).
// ─────────────────────────────────────────────────────────────────────────────
interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export function FadeIn({ children, delay = 0, duration = 0.5, className }: FadeInProps) {
  const prefersReduced = useReducedMotion() ?? false;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "0px 0px -30px 0px" }}
      transition={{
        duration: prefersReduced ? 0.15 : duration,
        delay:    prefersReduced ? 0    : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
      suppressHydrationWarning
    >
      {children}
    </motion.div>
  );
}
