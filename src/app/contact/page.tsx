import type { Metadata } from "next";
import { ArrowUpRight, Clock3, Mail, MessageCircle, Phone } from "lucide-react";
import { generalBookingMessage, getWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontakta Flyttiva direkt via WhatsApp, telefon eller e-post.",
};

export default function ContactPage() {
  const bookingUrl = getWhatsAppUrl(generalBookingMessage);

  return (
    <>
      <section className="contact-minimal">
        <div className="contact-minimal__grid shell">
          <div className="contact-minimal__copy">
            <span className="kicker kicker--light">Kontakt</span>
            <h1>Vi är bara ett<br /> <em>meddelande bort.</em></h1>
            <p>Berätta kort om flytten så hjälper vi dig vidare. WhatsApp är snabbast — men du når oss också via telefon och e-post.</p>
            <a className="button button--ivory" href={bookingUrl} target="_blank" rel="noreferrer">
              <MessageCircle /> Starta en WhatsApp-chatt <ArrowUpRight />
            </a>
          </div>

          <div className="contact-options">
            <a href={bookingUrl} target="_blank" rel="noreferrer">
              <span><MessageCircle /></span><div><small>Snabbast svar</small><h2>WhatsApp</h2><p>Planera flytten direkt i chatten</p></div><ArrowUpRight />
            </a>
            <a href="tel:+46767073226">
              <span><Phone /></span><div><small>Ring oss</small><h2>+46 76 707 32 26</h2><p>Vardagar 08:00–18:00</p></div><ArrowUpRight />
            </a>
            <a href="mailto:flyttiva@gmail.com">
              <span><Mail /></span><div><small>E-post</small><h2>flyttiva@gmail.com</h2><p>Vi svarar inom 24 timmar</p></div><ArrowUpRight />
            </a>
          </div>
        </div>
      </section>

      <section className="contact-note section">
        <div className="contact-note__grid shell">
          <div><Clock3 /><span>Öppettider</span></div>
          <p>Måndag–fredag 08:00–18:00<br />Lördag–söndag 10:00–16:00</p>
          <p>Flyttar utförs alla dagar<br />efter överenskommelse.</p>
        </div>
      </section>
    </>
  );
}
