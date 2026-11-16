const GRAPH_URL = "https://graph.facebook.com/v21.0";

export async function sendWhatsAppText(phone: string, body: string) {
  const token = process.env.WHATSAPP_TOKEN?.trim();
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID?.trim();
  if (!token || !phoneNumberId) {
    return { ok: false as const, skipped: true as const, error: "WhatsApp API is not configured." };
  }

  const to = phone.replace(/\D/g, "").replace(/^0/, "");
  const withCountry = to.length === 10 ? `91${to}` : to;

  const response = await fetch(`${GRAPH_URL}/${phoneNumberId}/messages`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      messaging_product: "whatsapp",
      to: withCountry,
      type: "text",
      text: { preview_url: true, body },
    }),
  });

  if (!response.ok) {
    const detail = await response.text();
    console.error("WhatsApp send failed:", response.status, detail);
    return { ok: false as const, skipped: false as const, error: detail || "WhatsApp send failed." };
  }

  return { ok: true as const };
}
