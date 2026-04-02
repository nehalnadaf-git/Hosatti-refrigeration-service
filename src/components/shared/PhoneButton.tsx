// src/components/shared/PhoneButton.tsx
import { PhoneCall } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface PhoneButtonProps {
  className?: string;
  variant?: "full" | "icon";
}

export default function PhoneButton({ className, variant = "full" }: PhoneButtonProps) {
  return (
    <a
      href={`tel:${BUSINESS.phone.replace(/-/g, "")}`}
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 rounded-xl font-body font-bold uppercase tracking-[0.08em] transition-all duration-300 hover:-translate-y-0.5 active:scale-95 overflow-hidden text-white bg-[rgba(255,255,255,0.06)] [backdrop-filter:blur(24px)] [-webkit-backdrop-filter:blur(24px)] border border-[rgba(255,255,255,0.15)] shadow-[0_8px_32px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.20)] hover:bg-[rgba(255,255,255,0.1)] hover:border-white/30 px-6 py-3",
        variant === "icon" ? "px-3" : "",
        className
      )}
      aria-label="Call Hosatti Refrigeration Service"
    >
      <PhoneCall className="h-4 w-4 text-white/90 group-hover:text-white transition-colors drop-shadow-sm group-hover:scale-110 duration-300" />
      {variant === "full" && (
        <span className="hidden sm:inline drop-shadow-sm text-white/90 group-hover:text-white transition-colors">Call Now</span>
      )}
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
    </a>
  );
}
