// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name:    z.string().min(2, "Name must be at least 2 characters").max(100),
  phone:   z.string().min(10, "Phone number too short").max(15),
  message: z.string().min(5, "Message too short").max(1000),
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

    // In a production app you'd send an email or store to DB here.
    return NextResponse.json({ success: true, message: "Contact form received." });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
