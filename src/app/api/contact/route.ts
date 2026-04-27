import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function sanitize(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    if (typeof name !== "string" || typeof email !== "string" || typeof message !== "string") {
      return NextResponse.json({ error: "Invalid input types" }, { status: 400 });
    }
    if (name.length > 100 || email.length > 200 || message.length > 3000) {
      return NextResponse.json({ error: "Input exceeds maximum length" }, { status: 400 });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    const safeName = sanitize(name.trim());
    const safeEmail = sanitize(email.trim());
    const safeMessage = sanitize(message.trim()).replace(/\n/g, "<br>");

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "azzakariaben@gmail.com",
      subject: `New message from ${safeName}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#0a0a0a;color:#e4e4e7;padding:32px;border-radius:12px;border:1px solid #27272a;">
          <h2 style="color:#ffffff;margin-bottom:24px;font-size:20px;">New Contact Message</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:10px 0;color:#a1a1aa;width:120px;">Name</td><td style="padding:10px 0;color:#fff;">${safeName}</td></tr>
            <tr><td style="padding:10px 0;color:#a1a1aa;">Email</td><td style="padding:10px 0;color:#fff;">${safeEmail}</td></tr>
          </table>
          <hr style="border:none;border-top:1px solid #27272a;margin:20px 0;">
          <p style="color:#a1a1aa;margin-bottom:8px;">Message</p>
          <p style="color:#e4e4e7;line-height:1.7;">${safeMessage}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Email failed" }, { status: 500 });
  }
}
