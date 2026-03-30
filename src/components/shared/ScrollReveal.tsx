// src/components/shared/ScrollReveal.tsx
"use client";
import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "scale" | "fade" | "blur";
  className?: string;
  /** 0–1: fraction of element visible before triggering. Default 0.1 */
  amount?: number;
  /** Apply staggered animation to direct children */
  staggerChildren?: boolean;
  staggerDelay?: number;
}

// ── Reduced travel distances for snappy mobile feel ──────────────────────────
// y/x: 48 → 22 (less distance = faster perceived completion)
// scale: 0.88 → 0.93 (closer start = snappier pop-in)
// blur: 12px → 6px + y:12 (lighter GPU load on mid-range phones)
const directionVariants = {
  up:    {
    hidden:  { y: 22,  opacity: 0, willChange: "transform, opacity" },
    visible: { y: 0,   opacity: 1, willChange: "auto" },
  },
  down:  {
    hidden:  { y: -22, opacity: 0, willChange: "transform, opacity" },
    visible: { y: 0,   opacity: 1, willChange: "auto" },
  },
  left:  {
    hidden:  { x: 22,  opacity: 0, willChange: "transform, opacity" },
    visible: { x: 0,   opacity: 1, willChange: "auto" },
  },
  right: {
    hidden:  { x: -22, opacity: 0, willChange: "transform, opacity" },
    visible: { x: 0,   opacity: 1, willChange: "auto" },
  },
  scale: {
    hidden:  { scale: 0.93, opacity: 0, willChange: "transform, opacity" },
    visible: { scale: 1,    opacity: 1, willChange: "auto" },
  },
  fade:  {
    hidden:  { opacity: 0 },
    visible: { opacity: 1 },
  },
  blur:  {
    // Lighter blur: 12px→6px, y:24→12 — significantly cheaper on mobile GPUs
    hidden:  { filter: "blur(6px)", opacity: 0, y: 12, willChange: "transform, opacity, filter" },
    visible: { filter: "blur(0px)", opacity: 1, y: 0,  willChange: "auto" },
  },
};

// Snappy spring-like easing — fast initial movement, gentle settle
const EASE = [0.2, 1, 0.35, 1] as [number, number, number, number];

export default function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  className,
  amount = 0.08,         // trigger earlier — animation starts just as element enters view
  staggerChildren = false,
  staggerDelay = 0.055,  // 0.08 → 0.055: cards cascade 30% faster
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 0px -10px 0px", // trigger almost immediately on scroll entry
    amount,
  });

  const variants = prefersReduced
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : directionVariants[direction];

  const transition = {
    duration: prefersReduced ? 0.15 : 0.4,  // 0.65 → 0.4 (38% faster)
    delay:    prefersReduced ? 0    : delay,
    ease:     EASE,
  };

  if (staggerChildren) {
    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
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
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Child item for staggered ScrollReveal containers.
 * Wrap each direct child in <StaggerItem> when using staggerChildren.
 */
export function StaggerItem({
  children,
  direction = "up",
  className,
}: {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "scale" | "fade" | "blur";
  className?: string;
}) {
  const prefersReduced = useReducedMotion();
  const variants = prefersReduced
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : directionVariants[direction];

  return (
    <motion.div
      variants={variants}
      transition={{
        duration: prefersReduced ? 0.15 : 0.36, // 0.55 → 0.36 (35% faster)
        ease: EASE,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
