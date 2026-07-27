export const WHATSAPP_PHONE = "46767073226";

export function getWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

export function getGeneralBookingMessage(language: "sv" | "en") {
  return language === "sv" ? `Hej Flyttiva!

Jag vill gärna få en offert för min flytt.

Från:
Till:
Önskat datum:
Bostadsstorlek:` : `Hello Flyttiva!

I would like a quote for my move.

From:
To:
Preferred date:
Home size:`;
}
