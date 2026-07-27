import Link from "next/link";
import { ArrowUpRight, Mail, MessageCircle, Phone } from "lucide-react";
import { Brand } from "./brand";
import { getUi, type Language } from "@/lib/i18n";
import { getGeneralBookingMessage, getWhatsAppUrl } from "@/lib/whatsapp";

export function SiteFooter({ language }: { language: Language }) {
  const t = getUi(language);
  const bookingUrl = getWhatsAppUrl(getGeneralBookingMessage(language));
  return (
    <footer className="site-footer">
      <div className="footer-top shell">
        <div className="footer-about"><Brand language={language} footer /><p>{t.footer.about}</p></div>
        <a className="footer-booking" href={bookingUrl} target="_blank" rel="noreferrer"><span><MessageCircle /> {t.footer.chat}</span><ArrowUpRight /></a>
      </div>
      <div className="footer-bottom shell">
        <p>© 2026 Flyttiva. {t.footer.rights}</p>
        <nav aria-label={t.footer.label}>
          <Link href="/services">{t.footer.services}</Link><Link href="/pricing">{t.footer.pricing}</Link><Link href="/contact">{t.footer.contact}</Link>
          <a href="tel:+46767073226"><Phone /> +46 76 707 32 26</a><a href="mailto:flyttiva@gmail.com"><Mail /> flyttiva@gmail.com</a>
        </nav>
      </div>
    </footer>
  );
}
