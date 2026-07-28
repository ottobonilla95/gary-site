import Link from "next/link";
import { ArrowUpRight, CalendarCheck, Phone } from "lucide-react";
import { Brand } from "./brand";
import { BookingButton } from "./booking-provider";
import { getUi, type Language } from "@/lib/i18n";

export function SiteFooter({ language }: { language: Language }) {
  const t = getUi(language);
  return (
    <footer className="site-footer">
      <div className="footer-top shell">
        <div className="footer-about"><Brand language={language} footer /><p>{t.footer.about}</p></div>
        <BookingButton className="footer-booking"><span><CalendarCheck /> {t.footer.chat}</span><ArrowUpRight /></BookingButton>
      </div>
      <div className="footer-bottom shell">
        <p>© 2026 Flyttiva. {t.footer.rights}</p>
        <nav aria-label={t.footer.label}>
          <Link href="/services">{t.footer.services}</Link><Link href="/pricing">{t.footer.pricing}</Link><Link href="/contact">{t.footer.contact}</Link>
          <a href="tel:+46767073226"><Phone /> +46 76 707 32 26</a>
        </nav>
      </div>
    </footer>
  );
}
