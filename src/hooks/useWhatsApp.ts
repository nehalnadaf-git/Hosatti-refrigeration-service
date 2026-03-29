// src/hooks/useWhatsApp.ts
import { buildWhatsAppURL, buildServiceWhatsAppURL } from "@/lib/whatsapp";

export function useWhatsApp() {
  const openChat = (message: string) => {
    if (typeof window !== "undefined") {
      window.open(buildWhatsAppURL(message), "_blank", "noopener,noreferrer");
    }
  };

  const openServiceChat = (serviceName: string) => {
    openChat(
      `Hello Hosatti Refrigeration, I would like to book a service for *${serviceName}*.`
    );
  };

  return { openChat, openServiceChat, buildWhatsAppURL, buildServiceWhatsAppURL };
}
