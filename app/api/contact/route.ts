import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name:    z.string().min(2),
  email:   z.string().email(),
  company: z.string().optional(),
  service: z.string().min(1),
  budget:  z.string().optional(),
  message: z.string().min(20),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    // ── Option 1: Resend (recommended) ──────────────────────────────────────
    // Uncomment and set RESEND_API_KEY + FROM_EMAIL in your .env.local:
    //
    // const { Resend } = await import("resend");
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: `Strixora Contact <${process.env.FROM_EMAIL ?? "noreply@strixoralabs.com"}>`,
    //   to:   [process.env.CONTACT_EMAIL ?? "hello@strixoralabs.com"],
    //   replyTo: data.email,
    //   subject: `New enquiry from ${data.name} — ${data.service}`,
    //   text: [
    //     `Name:    ${data.name}`,
    //     `Email:   ${data.email}`,
    //     `Company: ${data.company ?? "—"}`,
    //     `Service: ${data.service}`,
    //     `Budget:  ${data.budget ?? "—"}`,
    //     ``,
    //     data.message,
    //   ].join("\n"),
    // });

    // ── Option 2: Log to console (development fallback) ─────────────────────
    console.log("[Contact form submission]", {
      name:    data.name,
      email:   data.email,
      company: data.company,
      service: data.service,
      budget:  data.budget,
      message: data.message,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid form data", details: err.flatten() },
        { status: 422 }
      );
    }
    console.error("[Contact API error]", err);
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
