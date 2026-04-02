// src/components/shared/TrustBadges.tsx
import { ShieldCheck, Wrench, Clock, Package, MapPin, Store, ThumbsUp, Award } from "lucide-react";
import ScrollReveal, { StaggerItem } from "@/components/shared/ScrollReveal";

const BADGES = [
  { icon: ShieldCheck, label: "15+ Years Experience", sub: "Since 2009 in Dharwad" },
  { icon: Package, label: "Genuine Spare Parts", sub: "Authentic components only" },
  { icon: Clock, label: "Quick Service", sub: "Call early for priority" },
  { icon: Wrench, label: "All Brands Serviced", sub: "LG, Samsung, IFB & 21 more" },
  { icon: MapPin, label: "Doorstep in Dharwad", sub: "We come to your home" },
  { icon: Store, label: "Walk-in Workshop", sub: "Jay Nagar, Saptapur Last Stop" },
  { icon: ThumbsUp, label: "Satisfaction Guaranteed", sub: "Quality service, every time" },
  { icon: Award, label: "Expert Technicians", sub: "Certified & highly skilled" },
];

interface TrustBadgesProps {
  eyebrow?: string;
  heading?: string;
}

export default function TrustBadges({
  eyebrow = "Why Choose Us",
  heading = "Why Dharwad Trusts Hosatti Refrigeration Service",
}: TrustBadgesProps) {
  return (
    <section className="relative bg-light-bg py-16 md:py-20 overflow-hidden">
      <div className="absolute top-1/3 -left-20 h-80 w-80 rounded-full bg-yellow-400/[0.05] blur-[140px]" />

      <div className="relative container mx-auto px-5 md:px-8">
        <ScrollReveal direction="blur">
          <div className="mb-10 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <div className="h-[1.5px] w-8 bg-gradient-to-r from-transparent to-yellow-400/60 rounded-full" />
              <span
                className="font-body text-[10px] font-semibold uppercase tracking-[0.25em] md:text-[11px]"
                style={{ color: "hsl(37,90%,55%)" }}
              >
                {eyebrow}
              </span>
              <div className="h-[1.5px] w-8 bg-gradient-to-l from-transparent to-yellow-400/60 rounded-full" />
            </div>
            <h2 className="font-display text-foreground">{heading}</h2>
          </div>
        </ScrollReveal>

        <ScrollReveal staggerChildren staggerDelay={0.06} delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {BADGES.map(({ icon: Icon, label, sub }) => (
              <StaggerItem key={label} direction="scale">
                <div className="group relative flex flex-col items-start gap-3 overflow-hidden rounded-2xl border border-border/50 bg-white/80 backdrop-blur-sm p-4 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-yellow-400/25 hover:-translate-y-1 md:p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-400/15 to-yellow-400/5 transition-all duration-300 group-hover:from-yellow-400/30">
                    <Icon className="h-5 w-5" style={{ color: "hsl(37,90%,55%)" }} />
                  </div>
                  <div>
                    <p className="font-body text-[13px] font-semibold text-foreground leading-snug">
                      {label}
                    </p>
                    <p className="mt-0.5 font-body text-[11px] font-normal text-muted-foreground leading-snug">
                      {sub}
                    </p>
                  </div>
                  <div className="absolute bottom-3 right-3 h-1.5 w-1.5 rounded-full bg-yellow-400/30 group-hover:bg-yellow-400/60 transition-colors duration-300" />
                </div>
              </StaggerItem>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
