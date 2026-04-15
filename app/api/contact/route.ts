import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, organization, email, branche, teamgroesse, herausforderung, formate, honeypot } = body;

    // Honeypot check
    if (honeypot) {
      return NextResponse.json({ ok: true }); // silently ignore bots
    }

    // Validation
    if (!email || !herausforderung) {
      return NextResponse.json({ error: "Email und Herausforderung sind Pflichtfelder." }, { status: 400 });
    }

    // Format the message for notification
    const formattedMessage = [
      `Neue Kontaktanfrage über 57consulting.de`,
      ``,
      `Name: ${name || "–"}`,
      `Organisation: ${organization || "–"}`,
      `E-Mail: ${email}`,
      `Branche: ${branche || "–"}`,
      `Teamgröße: ${teamgroesse || "–"}`,
      `Gewünschte Formate: ${formate?.length ? formate.join(", ") : "–"}`,
      ``,
      `Herausforderung:`,
      herausforderung,
    ].join("\n");

    // Log to server (visible in Vercel logs)
    console.log("=== NEUE KONTAKTANFRAGE ===");
    console.log(formattedMessage);
    console.log("===========================");

    // TODO: When email service is configured, send notification
    // Options: Resend (resend.com), SendGrid, or SMTP
    // For now, the request is logged to Vercel logs and can be
    // extended with email/Notion integration later.

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Fehler beim Verarbeiten der Anfrage." }, { status: 500 });
  }
}
