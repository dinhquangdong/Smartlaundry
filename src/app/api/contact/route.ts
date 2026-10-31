import { NextResponse } from "next/server";

const REQUIRED = ["firstName", "lastName", "service", "phone", "message"] as const;

/**
 * Receives contact-form submissions.
 * TODO: forward to email/CRM (Resend, SendGrid, n8n webhook…) — currently only validated and logged.
 */
export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const clean: Record<string, string> = {};
  for (const key of REQUIRED) {
    const value = typeof body[key] === "string" ? (body[key] as string).trim() : "";
    if (!value || value.length > 2000) {
      return NextResponse.json({ error: `Invalid field: ${key}` }, { status: 422 });
    }
    clean[key] = value;
  }

  console.info("[contact] new enquiry", clean);
  return NextResponse.json({ ok: true });
}
