// src/lib/whatsapp.ts
const WHATSAPP_NUMBER = "917899472430"; // Country code + number, no +

/**
 * Build a wa.me deep link — opens WhatsApp app directly on mobile,
 * falls back to web.whatsapp.com on desktop.
 */
export function buildWhatsAppURL(message: string): string {
  const encoded = encodeURIComponent(message.trim());
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

/**
 * Open WhatsApp with an optional pre-filled message.
 * Uses wa.me deep link for direct app opening on mobile.
 */
export function openWhatsApp(message: string = ""): void {
  const url = buildWhatsAppURL(
    message || "Hello Hosatti Refrigeration Service!\n\nI need help with an appliance repair. Please let me know your availability. Thank you!"
  );
  window.open(url, "_blank", "noopener,noreferrer");
}

/**
 * Build a pre-filled WhatsApp URL for a specific service.
 */
export function buildServiceWhatsAppURL(serviceName: string, serviceDesc?: string): string {
  const desc = serviceDesc ? `\n${serviceDesc}` : "";
  const message = `Hello Hosatti Refrigeration Service!\n\nI need help with: *${serviceName}*${desc}\n\nPlease let me know your availability. Thank you!`;
  return buildWhatsAppURL(message);
}
