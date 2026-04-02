// src/components/shared/ContactForm.tsx
"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Send } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

const APPLIANCE_TYPES = ["AC / Air Conditioner", "Refrigerator / Fridge", "Washing Machine", "Air Cooler", "Other"] as const;
const SERVICE_TYPES = ["Repair", "Service / Maintenance", "Installation", "Gas Refilling", "Deep Cleaning", "Emergency Repair", "Other"] as const;

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
  appliance: z.enum(APPLIANCE_TYPES),
  service: z.enum(SERVICE_TYPES),
  description: z.string().min(10, "Please describe the problem in at least 10 characters").max(500),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => {
    const message =
      `Hello Hosatti Refrigeration Service!\n\n` +
      `📛 Name: ${data.name}\n` +
      `📞 Phone: ${data.phone}\n` +
      `🔧 Appliance: ${data.appliance}\n` +
      `🛠 Service Needed: ${data.service}\n\n` +
      `📝 Problem Description:\n${data.description}\n\n` +
      `Please let me know your earliest available slot. Thank you!`;

    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${BUSINESS.whatsapp}?text=${encoded}`;
    window.open(url, "_blank", "noopener,noreferrer");
    toast.success("Opening WhatsApp — your message is pre-filled! 💬");
    reset();
  };

  const inputClass =
    "w-full font-body text-[14px] rounded-xl border border-border/60 bg-white/90 px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200";
  const focusRing = "focus:ring-yellow-400/30";
  const errorClass = "font-body text-[11px] text-red-500 mt-1";
  const labelClass = "block font-body text-[12px] font-semibold uppercase tracking-[0.12em] text-muted-foreground mb-1.5";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4" noValidate>
      {/* Name */}
      <div>
        <label htmlFor="contact-name" className={labelClass}>Your Name</label>
        <input id="contact-name" type="text" placeholder="e.g. Ravi Kumar" className={`${inputClass} ${focusRing}`} {...register("name")} />
        {errors.name && <p className={errorClass}>{errors.name.message}</p>}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="contact-phone" className={labelClass}>Mobile Number</label>
        <input id="contact-phone" type="tel" inputMode="numeric" maxLength={10} placeholder="10-digit mobile number" className={`${inputClass} ${focusRing}`} {...register("phone")} />
        {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
      </div>

      {/* Appliance Type */}
      <div>
        <label htmlFor="contact-appliance" className={labelClass}>Appliance Type</label>
        <select id="contact-appliance" className={`${inputClass} ${focusRing}`} {...register("appliance")}>
          <option value="">Select appliance...</option>
          {APPLIANCE_TYPES.map((a) => <option key={a} value={a}>{a}</option>)}
        </select>
        {errors.appliance && <p className={errorClass}>{errors.appliance.message}</p>}
      </div>

      {/* Service Type */}
      <div>
        <label htmlFor="contact-service" className={labelClass}>Service Needed</label>
        <select id="contact-service" className={`${inputClass} ${focusRing}`} {...register("service")}>
          <option value="">Select service type...</option>
          {SERVICE_TYPES.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
        {errors.service && <p className={errorClass}>{errors.service.message}</p>}
      </div>

      {/* Description */}
      <div>
        <label htmlFor="contact-description" className={labelClass}>Describe the Problem</label>
        <textarea
          id="contact-description"
          rows={4}
          placeholder="e.g. My LG split AC is not cooling. It runs but the room stays warm. It's a 1.5 ton unit about 3 years old."
          className={`${inputClass} ${focusRing} resize-none`}
          {...register("description")}
        />
        {errors.description && <p className={errorClass}>{errors.description.message}</p>}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="group relative overflow-hidden flex items-center justify-center gap-2.5 rounded-xl py-3.5 font-body font-bold text-[13px] uppercase tracking-[0.08em] transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
        style={{
          background: "linear-gradient(135deg,hsl(37,92%,52%),hsl(30,98%,45%))",
          color: "hsl(216,50%,10%)",
          boxShadow: "0 4px 20px rgba(245,166,35,0.35),inset 0 1px 0 rgba(255,255,255,0.20)",
        }}
      >
        <Send className="h-4 w-4" />
        <span>Send via WhatsApp</span>
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      </button>

      <p className="font-body text-[11px] text-muted-foreground text-center leading-snug">
        Clicking &ldquo;Send via WhatsApp&rdquo; will open WhatsApp with your message pre-filled — no app needed on desktop.
      </p>
    </form>
  );
}
