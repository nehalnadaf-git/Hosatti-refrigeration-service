// src/components/shared/ScrollReveal.tsx
"use client";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}

const directionVariants = {
  up:    { hidden: { y: 40,  opacity: 0 }, visible: { y: 0,  opacity: 1 } },
  down:  { hidden: { y: -40, opacity: 0 }, visible: { y: 0,  opacity: 1 } },
  left:  { hidden: { x: 40,  opacity: 0 }, visible: { x: 0,  opacity: 1 } },
  right: { hidden: { x: -40, opacity: 0 }, visible: { x: 0,  opacity: 1 } },
};

export default function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  className,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });
  const variants = directionVariants[direction];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
