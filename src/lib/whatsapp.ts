export const WHATSAPP_PHONE = "46767073226";

export function getWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

export const generalBookingMessage = `Hej Flyttiva!

Jag vill gärna få en offert för min flytt.

Från:
Till:
Önskat datum:
Bostadsstorlek:`;
