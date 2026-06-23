import { NextResponse } from "next/server";

export const runtime = "nodejs";

const RECIPIENT = "hallo@leon-molina.com";
const SENDER = "MEERLEBEN Website <website@leon-molina.com>";

function text(value: unknown, maxLength = 300) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value: string) {
  const entities: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;",
  };
  return value.replace(/[&<>'"]/g, (character) => entities[character] ?? character);
}

export async function POST(request: Request) {
  if (Number(request.headers.get("content-length") ?? 0) > 12_000) {
    return NextResponse.json({ error: "Anfrage zu groß." }, { status: 413 });
  }

  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  // Bots füllen versteckte Felder häufig automatisch aus. Für sie antworten wir
  // absichtlich erfolgreich, ohne eine E-Mail zu versenden.
  if (text(payload.company)) return NextResponse.json({ ok: true });

  const name = text(payload.name, 100);
  const email = text(payload.email, 254).toLowerCase();
  const phone = text(payload.phone, 80);
  const region = text(payload.region, 120);
  const situation = text(payload.situation, 120);
  const timeframe = text(payload.timeframe, 120);
  const message = text(payload.message, 3000);

  if (name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || text(payload.privacy) !== "on") {
    return NextResponse.json({ error: "Bitte Name und E-Mail prüfen." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Contact form email settings are missing.");
    return NextResponse.json({ error: "E-Mail-Versand ist noch nicht eingerichtet." }, { status: 503 });
  }

  const fields = [
    ["Name", name],
    ["E-Mail", email],
    ["Telefon", phone || "–"],
    ["Wunschregion", region || "–"],
    ["Aktuelle Situation", situation || "–"],
    ["Zeitrahmen", timeframe || "–"],
    ["Nachricht", message || "–"],
  ];
  const plainText = fields.map(([label, value]) => `${label}: ${value}`).join("\n\n");
  const html = `<div style="font-family:Arial,sans-serif;max-width:640px;color:#10243d"><h1 style="color:#0d2f5a">Neue MEERLEBEN-Anfrage</h1>${fields.map(([label, value]) => `<p><strong>${escapeHtml(label)}</strong><br>${escapeHtml(value).replace(/\n/g, "<br>")}</p>`).join("")}</div>`;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: SENDER,
      to: [RECIPIENT],
      reply_to: email,
      subject: `Neue MEERLEBEN-Anfrage von ${name}`,
      text: plainText,
      html,
    }),
  });

  if (!response.ok) {
    console.error("Resend rejected a contact request.", response.status);
    return NextResponse.json({ error: "E-Mail konnte nicht gesendet werden." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
