// src/components/sections/AboutSection.tsx
"use client";
import Image from "next/image";
import { ShieldCheck, Wrench, Package, ThumbsUp, Award } from "lucide-react";
import { motion } from "motion/react";

const highlights = [
  { icon: ShieldCheck, label: "Expert Technicians", sub: "Trained & verified experts" },
  { icon: Wrench, label: "All Brands Serviced", sub: "LG, Samsung, IFB & more" },
  { icon: Package, label: "Genuine Spare Parts", sub: "Only authentic components" },
  { icon: ThumbsUp, label: "Satisfaction Assured", sub: "Quality service guaranteed" },
];

// Stagger spring — tight for snappy mobile feel
const CARD_SPRING = { type: "spring" as const, stiffness: 220, damping: 28, mass: 0.7 };

export default function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-light-bg py-20 md:py-28 lg:py-32">
      {/* Static decorative bg — no JS cost */}
      <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "repeating-linear-gradient(45deg,hsl(220,85%,23%) 0,hsl(220,85%,23%) 1px,transparent 0,transparent 50%)", backgroundSize: "20px 20px" }} />
      <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-yellow-400/[0.08] blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-blue-900/[0.06] blur-[120px] pointer-events-none" />

      <div className="relative container mx-auto grid gap-12 px-5 md:grid-cols-2 md:gap-20 md:px-8 lg:gap-28">

        {/* ── Image Column ─────────────────────────────────── */}
        <motion.div
          initial={{ x: -28, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ type: "spring", stiffness: 160, damping: 26, mass: 0.8 }}
          suppressHydrationWarning
        >
          <div className="flex items-center justify-center pb-20 sm:pb-12 md:pb-0">
            <div className="relative w-full max-w-[320px] sm:max-w-[360px] md:max-w-[460px] lg:max-w-[520px] mt-2 sm:mt-0">
              <Image
                src="/Jameer/Jameer.webp"
                alt="Jameer Hosatti — Owner & Chief Technician at Hosatti Refrigeration Service, Dharwad"
                width={420}
                height={525}
                priority
                className="relative w-full rounded-[1.5rem] sm:rounded-3xl object-cover aspect-[4/5] md:aspect-[3/4]"
                style={{ boxShadow: "0 2px 4px rgba(11,43,107,0.04),0 8px 16px rgba(11,43,107,0.08),0 24px 48px rgba(11,43,107,0.12),0 48px 96px rgba(11,43,107,0.06)" }}
              />

              {/* Name tag — solid bg, no backdrop-blur, single float animation */}
              <div
                className="absolute -bottom-8 -left-4 sm:-bottom-9 sm:-left-6 md:-bottom-12 md:-left-8 rounded-2xl md:rounded-3xl px-4 py-3 sm:px-5 sm:py-4 md:px-7 md:py-5 z-20 border border-white/20 about-float"
                style={{
                  background: "linear-gradient(135deg,hsl(220,85%,24%) 0%,hsl(220,85%,16%) 100%)",
                  boxShadow: "0 16px 40px rgba(11,43,107,0.4),inset 0 1px 0 rgba(255,255,255,0.18)",
                  willChange: "transform",
                }}
              >
                <div className="flex flex-col">
                  <div className="flex items-center gap-2 mb-0.5">
                    <Award className="h-4 w-4 md:h-5 md:w-5 text-yellow-400" />
                    <p className="font-display text-[1rem] sm:text-[1.1rem] md:text-[1.35rem] font-bold text-white tracking-tight whitespace-nowrap">
                      Jameer Hosatti
                    </p>
                  </div>
                  <p className="font-body text-[8.5px] sm:text-[9.5px] md:text-[11px] font-bold uppercase tracking-[0.22em] text-white/70 pl-[24px] md:pl-[28px]">
                    Chief Technician
                  </p>
                </div>
              </div>

              {/* Experience tag — solid white bg, no backdrop-blur, float offset */}
              <div
                className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-4 md:-bottom-6 md:-right-10 rounded-2xl md:rounded-3xl px-4 py-3 sm:px-5 sm:py-4 md:px-7 md:py-5 z-20 border border-slate-200/60 about-float-delay"
                style={{
                  background: "linear-gradient(145deg,#ffffff 0%,#f8fafc 100%)",
                  boxShadow: "0 16px 40px rgba(11,43,107,0.12),inset 0 2px 0 rgba(255,255,255,1)",
                  willChange: "transform",
                }}
              >
                <div className="flex flex-col items-start">
                  <p className="font-display font-bold leading-none text-[1.5rem] sm:text-[2rem] md:text-[2.8rem] bg-gradient-to-br from-yellow-400 to-yellow-600 bg-clip-text text-transparent" style={{ letterSpacing: "-0.04em" }}>
                    15+
                  </p>
                  <p className="mt-1 font-body text-[8px] sm:text-[9.5px] md:text-[11px] font-bold uppercase tracking-[0.22em] text-[hsl(216,50%,15%)] whitespace-nowrap">
                    Years of Experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Text Column ──────────────────────────────────── */}
        <motion.div
          className="flex flex-col justify-center"
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ type: "spring", stiffness: 140, damping: 22, mass: 0.9, delay: 0.08 }}
          suppressHydrationWarning
        >
          <div className="mb-6 flex items-center gap-3">
            <div className="h-[2px] w-8 bg-gradient-to-r from-yellow-400 to-yellow-400/40 rounded-full" />
            <span className="font-body text-[10px] font-semibold uppercase tracking-[0.25em] text-gold md:text-[11px]">About Us</span>
          </div>

          <h2 className="font-display text-foreground pb-1">
            Dharwad&apos;s Most Trusted{" "}
            <span className="bg-gradient-to-r from-navy to-[hsl(220,85%,38%)] bg-clip-text text-transparent italic px-1">Repair Experts</span>
          </h2>

          <p className="mt-5 font-body text-[16px] lg:text-[19px] text-muted-foreground leading-[1.8] font-normal md:text-[17px]">
            Founded by <span className="font-semibold" style={{ color: "hsl(220,85%,23%)" }}>Jameer Hosatti</span>, Hosatti Refrigeration Service in Jay Nagar, Dharwad is a one-stop destination for all home appliance repairs. From refrigerators to ACs to washing machines, our skilled technicians serve both local and out-of-city customers with precision and care.
          </p>

          {/* Single stagger container — no nested motion observers */}
          <motion.div
            className="mt-8 grid grid-cols-2 gap-3 md:mt-10 md:gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } } }}
            suppressHydrationWarning
          >
            {highlights.map(({ icon: Icon, label, sub }) => (
              <motion.div
                key={label}
                variants={{
                  hidden: { scale: 0.9, opacity: 0 },
                  visible: { scale: 1, opacity: 1 },
                }}
                transition={CARD_SPRING}
                suppressHydrationWarning
              >
                {/* Solid bg — no backdrop-blur for mobile GPU budget */}
                <div className="group relative flex flex-col items-start gap-3 overflow-hidden rounded-2xl border border-border/50 bg-white p-4 shadow-sm transition-[box-shadow,border-color,transform] duration-200 hover:shadow-md hover:border-yellow-400/30 active:scale-[0.98] md:p-5 lg:p-7">
                  <div className="flex h-10 w-10 lg:h-14 lg:w-14 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-400/15 to-yellow-400/5">
                    <Icon className="h-5 w-5 lg:h-7 lg:w-7" style={{ color: "hsl(37,90%,55%)" }} />
                  </div>
                  <div>
                    <p className="font-body text-[13px] lg:text-[16px] font-semibold text-foreground leading-snug md:text-[14px]">{label}</p>
                    <p className="mt-0.5 font-body text-[11px] lg:text-[13px] font-normal text-muted-foreground leading-snug md:text-[11.5px]">{sub}</p>
                  </div>
                  <div className="absolute bottom-3 right-3 h-1.5 w-1.5 rounded-full bg-yellow-400/30" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
