"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import BookingModal from "@/components/shared/BookingModal";
import { Button } from "@/components/ui/button";

export default function EmergencyBookingButton() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setModalOpen(true)}
        className="w-full relative group overflow-hidden rounded-xl h-[42px] sm:h-[52px] flex items-center justify-center font-body font-bold text-[11px] sm:text-[13px] tracking-[0.08em] uppercase shadow-2xl transition-all duration-300 hover:-translate-y-0.5"
        style={{
          background: "linear-gradient(135deg, hsl(37,92%,52%), hsl(30,98%,45%))",
          color: "hsl(216,50%,10%)",
          boxShadow: "0 4px 20px rgba(245,166,35,0.40), 0 1px 3px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.20)",
        }}
      >
        <span className="relative z-10 flex items-center justify-center gap-1.5 sm:gap-2">
          Book Service
          <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </span>
        {/* Shimmer */}
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      </Button>
      
      <BookingModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
