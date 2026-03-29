// src/components/shared/WhatsAppButton.tsx
"use client";
import { MessageCircle } from "lucide-react";
import { buildServiceWhatsAppURL } from "@/lib/whatsapp";

interface WhatsAppButtonProps {
  serviceName?: string;
  label?: string;
  className?: string;
}

export default function WhatsAppButton({
  serviceName,
  label = "WhatsApp Us",
  className = "",
}: WhatsAppButtonProps) {
  const url = buildServiceWhatsAppURL(
    serviceName ?? "Appliance Repair",
  );

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center justify-center gap-2 rounded-xl font-body font-semibold transition-all duration-300 ${className}`}
      style={{
        background: "linear-gradient(135deg,#25D366,#128C7E)",
        color: "#fff",
        boxShadow: "0 4px 18px rgba(37,211,102,0.30)",
      }}
    >
      <MessageCircle className="h-5 w-5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
      {label}
    </a>
  );
}
