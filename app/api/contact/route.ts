import { NextRequest, NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  company?: string;
  email?: string;
  message?: string;
  honey?: string;
  startedAt?: number;
};

const limiter = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;

function rateLimit(ip: string) {
  const now = Date.now();
  const entry = limiter.get(ip);

  if (!entry || entry.resetAt <= now) {
    limiter.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }

  if (entry.count >= MAX_PER_WINDOW) {
    return false;
  }

  entry.count += 1;
  return true;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (!rateLimit(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const name = (payload.name ?? "").trim();
  const company = (payload.company ?? "").trim();
  const email = (payload.email ?? "").trim();
  const message = (payload.message ?? "").trim();
  const honey = (payload.honey ?? "").trim();

  if (honey) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const startedAt = Number(payload.startedAt ?? 0);
  if (!startedAt || Date.now() - startedAt < 1500) {
    return NextResponse.json({ error: "Rejected" }, { status: 400 });
  }

  if (!name || !company || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL ?? "manuel@rimasanfer.com";

  if (!resendApiKey) {
    return NextResponse.json(
      {
        error: "Contact service is not configured"
      },
      { status: 500 }
    );
  }

  const fromEmail = process.env.CONTACT_FROM_EMAIL ?? "Rimasanfer Website <onboarding@resend.dev>";

  const html = `
    <h2>New inquiry from rimasanfer.com</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Company:</strong> ${company}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Current Priority:</strong></p>
    <p>${message.replace(/\n/g, "<br />")}</p>
    <hr />
    <p><small>IP: ${ip}</small></p>
  `;

  async function sendEmail(from: string) {
    return fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from,
        to: [toEmail],
        subject: "New inquiry from rimasanfer.com",
        reply_to: email,
        html
      })
    });
  }

  let emailResponse = await sendEmail(fromEmail);
  if (!emailResponse.ok && fromEmail !== "Rimasanfer Website <onboarding@resend.dev>") {
    emailResponse = await sendEmail("Rimasanfer Website <onboarding@resend.dev>");
  }

  if (!emailResponse.ok) {
    let providerError = "";
    try {
      providerError = await emailResponse.text();
    } catch {
      providerError = "";
    }
    return NextResponse.json(
      { error: "Failed to send", providerStatus: emailResponse.status, providerError },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
