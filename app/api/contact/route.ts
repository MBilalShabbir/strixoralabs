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

    // Honeypot — bots fill hidden fields, humans don't
    if (body._honey) {
      // Silently succeed so bots don't know they were filtered
      return NextResponse.json({ success: true }, { status: 200 });
    }

    const data = schema.parse(body);

    // ── Send email via Resend ────────────────────────────────────────────────
    // Set RESEND_API_KEY in .env.local to enable.
    // Get a free key at https://resend.com — 3,000 emails/month on free tier.
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: `Strixora Labs Contact <${process.env.FROM_EMAIL ?? "onboarding@resend.dev"}>`,
        to:   [process.env.CONTACT_EMAIL ?? "hello@strixoralabs.com"],
        replyTo: data.email,
        subject: `New enquiry — ${data.service} from ${data.name}`,
        text: [
          `Name:    ${data.name}`,
          `Email:   ${data.email}`,
          `Company: ${data.company ?? "—"}`,
          `Service: ${data.service}`,
          `Budget:  ${data.budget ?? "—"}`,
          ``,
          `Message:`,
          data.message,
        ].join("\n"),
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#080810;color:#f8f8ff;padding:40px;border-radius:12px;border:1px solid rgba(255,255,255,0.08)">
            <div style="margin-bottom:32px">
              <div style="display:inline-block;background:linear-gradient(135deg,#4f46e5,#7c3aed);border-radius:8px;padding:8px 16px;color:white;font-weight:700;font-size:14px;letter-spacing:0.05em">STRIXORA LABS</div>
            </div>
            <h2 style="margin:0 0 24px;font-size:22px;font-weight:700;color:#fff">New project enquiry</h2>
            <table style="width:100%;border-collapse:collapse;margin-bottom:24px">
              <tr><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);color:rgba(255,255,255,0.4);font-size:13px;width:100px">Name</td><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);color:#fff;font-size:14px">${data.name}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);color:rgba(255,255,255,0.4);font-size:13px">Email</td><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);color:#a5b4fc;font-size:14px"><a href="mailto:${data.email}" style="color:#a5b4fc">${data.email}</a></td></tr>
              ${data.company ? `<tr><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);color:rgba(255,255,255,0.4);font-size:13px">Company</td><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);color:#fff;font-size:14px">${data.company}</td></tr>` : ""}
              <tr><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);color:rgba(255,255,255,0.4);font-size:13px">Service</td><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);color:#fff;font-size:14px">${data.service}</td></tr>
              ${data.budget ? `<tr><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);color:rgba(255,255,255,0.4);font-size:13px">Budget</td><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);color:#fff;font-size:14px">${data.budget}</td></tr>` : ""}
            </table>
            <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:10px;padding:20px;margin-bottom:32px">
              <div style="color:rgba(255,255,255,0.4);font-size:12px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;margin-bottom:12px">Message</div>
              <div style="color:rgba(255,255,255,0.8);font-size:14px;line-height:1.7;white-space:pre-wrap">${data.message}</div>
            </div>
            <a href="mailto:${data.email}?subject=Re: Your enquiry to Strixora Labs" style="display:inline-block;background:linear-gradient(135deg,#4f46e5,#7c3aed);color:white;text-decoration:none;padding:12px 28px;border-radius:10px;font-size:14px;font-weight:600">Reply to ${data.name.split(" ")[0]}</a>
          </div>
        `,
      });
    } else {
      // Development fallback — logs to console when Resend is not configured
      console.log("[Contact form submission]", {
        name:    data.name,
        email:   data.email,
        company: data.company,
        service: data.service,
        budget:  data.budget,
        message: data.message,
      });
      console.info(
        "[Contact API] No RESEND_API_KEY found. Add it to .env.local to enable email delivery."
      );
    }

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
