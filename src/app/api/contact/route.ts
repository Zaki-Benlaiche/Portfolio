import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `📩 رسالة من ${name}`,
      text: `
الاسم: ${name}
الإيميل: ${email}

الرسالة:
${message}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.log("Email error:", error);
    return NextResponse.json({ error: "Error sending email" }, { status: 500 });
  }
}
