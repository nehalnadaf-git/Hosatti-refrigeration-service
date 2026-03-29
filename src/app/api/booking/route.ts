// src/app/api/booking/route.ts
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { buildWhatsAppURL } from "@/lib/whatsapp";

const schema = z.object({
  appliance: z.string().min(1),
  model:     z.string().optional(),
  problems:  z.array(z.string()).optional(),
  extraNote: z.string().optional(),
  name:      z.string().min(2).max(100),
  phone:     z.string().min(10).max(15),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const result = schema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", issues: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { appliance, model, problems, extraNote, name, phone } = result.data;
    const prob = [...(problems ?? []), extraNote].filter(Boolean).join(", ");
    const modelLine = model ? `\nModel: ${model}` : "";

    const message = `Hello Hosatti Refrigeration Service! 👋\n\nI'd like to book a repair service.\n\nName: ${name}\nPhone: ${phone}\nAppliance: ${appliance}${modelLine}\nProblem(s): ${prob || "Not specified"}\n\nPlease let me know the available slots. Thank you!`;

    const whatsappUrl = buildWhatsAppURL(message);

    return NextResponse.json({ success: true, whatsappUrl });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
