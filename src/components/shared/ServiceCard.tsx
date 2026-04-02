// src/components/shared/ServiceCard.tsx
// Exact visual match of ServicesSection homepage card — used on all inner pages.
// Adapts to services.ts data fields: service.shortDescription, service.category (ac|refrigerator|washing-machine|air-cooler)
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buildWhatsAppURL } from "@/lib/whatsapp";
import type { ServiceData } from "@/lib/services";

// Map services.ts category keys → homepage card colors
const CATEGORY_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  "ac":              { bg: "rgba(37,99,235,0.18)",  text: "#93c5fd", border: "rgba(37,99,235,0.40)"  },
  "refrigerator":    { bg: "rgba(16,185,129,0.15)", text: "#6ee7b7", border: "rgba(16,185,129,0.35)"  },
  "air-cooler":      { bg: "rgba(139,92,246,0.15)", text: "#c4b5fd", border: "rgba(139,92,246,0.35)"  },
  "washing-machine": { bg: "rgba(245,158,11,0.15)", text: "#fcd34d", border: "rgba(245,158,11,0.35)"  },
};

interface ServiceCardProps {
  service: ServiceData;
  /** Hide the "Learn More" link — useful when already on the service page */
  showLink?: boolean;
}

export default function ServiceCard({ service, showLink = true }: ServiceCardProps) {
  const waUrl = buildWhatsAppURL(service.whatsappMessage);
  const cat   = CATEGORY_COLORS[service.category] ?? CATEGORY_COLORS["ac"];

  return (
    <article
      className="group flex flex-col h-full rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1.5"
      style={{
        background: "#fff",
        boxShadow: "0 2px 16px rgba(11,43,107,0.07), 0 1px 4px rgba(11,43,107,0.04)",
      }}
    >
      {/* Full-bleed 4:3 image */}
      <div className="relative w-full overflow-hidden flex-shrink-0" style={{ aspectRatio: "4/3" }}>
        <Image
          src={service.image}
          alt={`${service.name} in Dharwad — Hosatti Refrigeration Service`}
          fill
          sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
          loading="lazy"
        />
        {/* Glassmorphism category badge */}
        <div className="absolute top-3 left-3 z-10">
          <span
            className="inline-flex items-center gap-1.5 px-2.5 py-[5px] rounded-lg font-body text-[9.5px] font-bold tracking-[0.1em] uppercase"
            style={{
              background: cat.bg,
              color: cat.text,
              border: `1px solid ${cat.border}`,
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
            }}
          >
            <span className="h-[5px] w-[5px] rounded-full flex-shrink-0" style={{ background: cat.text }} />
            {service.categoryLabel}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 px-5 pt-4 pb-5 md:px-6 md:pt-5 md:pb-6">
        {/* Gold accent line */}
        <div
          className="mb-3 h-[2px] w-8 rounded-full"
          style={{ background: "linear-gradient(90deg, hsl(37,90%,52%), hsl(30,98%,44%))" }}
        />

        <h3
          className="font-display mb-2 transition-colors duration-300 group-hover:text-yellow-700"
          style={{
            color: "hsl(220,55%,14%)",
            fontSize: "clamp(1rem,1.5vw,1.35rem)",
            lineHeight: 1.28,
            letterSpacing: "-0.015em",
          }}
        >
          {service.name}
        </h3>

        <p
          className="flex-1 font-body leading-relaxed"
          style={{ fontSize: "clamp(13.5px,1.1vw,16px)", color: "hsl(220,12%,48%)", lineHeight: 1.65 }}
        >
          {service.shortDescription}
        </p>

        {/* Book Now */}
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group/btn relative z-20 mt-4 w-full flex items-center justify-center gap-2 rounded-xl h-11 lg:h-13 font-body font-bold text-[12px] lg:text-[13px] tracking-[0.07em] uppercase transition-all duration-300 hover:-translate-y-0.5 overflow-hidden"
          style={{
            background: "linear-gradient(135deg, hsl(37,92%,50%), hsl(30,98%,43%))",
            color: "hsl(220,55%,10%)",
            boxShadow: "0 3px 14px rgba(245,166,35,0.28)",
          }}
        >
          <span className="relative z-10 flex items-center gap-1.5">
            Book Now
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
          </span>
          {/* Shimmer sweep */}
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/22 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />
        </a>

        {/* Learn More */}
        {showLink && (
          <a
            href={`/services/${service.slug}`}
            className="group/lm relative z-40 mt-2.5 flex items-center justify-center gap-1.5 font-body text-[12.5px] font-semibold py-1.5 transition-colors duration-200 hover:text-[hsl(220,55%,22%)] cursor-pointer"
            style={{ color: "hsl(220,15%,55%)" }}
          >
            Learn More
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/lm:translate-x-0.5" />
          </a>
        )}
      </div>
    </article>
  );
}
