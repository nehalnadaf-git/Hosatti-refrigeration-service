// src/components/shared/PhoneButton.tsx
import { Phone } from "lucide-react";
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
        "inline-flex items-center justify-center gap-2 rounded-xl font-semibold",
        "border border-white/25 bg-black/40 text-white hover:bg-black/60",
        "transition-colors duration-200 px-6 py-3 text-base",
        className
      )}
      aria-label="Call Hosatti Refrigeration Service"
    >
      <Phone className="h-4 w-4" />
      {variant === "full" && (
        <>
          <Phone className="h-5 w-5 md:h-6 md:w-6 transition-transform duration-300 group-hover:scale-110" />
          <span className="hidden sm:inline">Call Now</span>
        </>
      )}
    </a>
  );
}
