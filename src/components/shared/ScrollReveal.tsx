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

const directionVariants = {
  up:    {
    hidden:  { y: 48, opacity: 0 },
    visible: { y: 0,  opacity: 1 },
  },
  down:  {
    hidden:  { y: -48, opacity: 0 },
    visible: { y: 0,   opacity: 1 },
  },
  left:  {
    hidden:  { x: 48, opacity: 0 },
    visible: { x: 0,  opacity: 1 },
  },
  right: {
    hidden:  { x: -48, opacity: 0 },
    visible: { x: 0,   opacity: 1 },
  },
  scale: {
    hidden:  { scale: 0.88, opacity: 0 },
    visible: { scale: 1,    opacity: 1 },
  },
  fade:  {
    hidden:  { opacity: 0 },
    visible: { opacity: 1 },
  },
  blur:  {
    hidden:  { filter: "blur(12px)", opacity: 0, y: 24 },
    visible: { filter: "blur(0px)",  opacity: 1, y: 0  },
  },
};

export default function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  className,
  amount = 0.1,
  staggerChildren = false,
  staggerDelay = 0.08,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 0px -60px 0px",
    amount,
  });

  // Respect user's prefers-reduced-motion setting
  const variants = prefersReduced
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : directionVariants[direction];

  const transition = {
    duration: prefersReduced ? 0.2 : 0.65,
    delay: prefersReduced ? 0 : delay,
    ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
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
              delayChildren: prefersReduced ? 0 : delay,
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
      transition={{ duration: prefersReduced ? 0.2 : 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
