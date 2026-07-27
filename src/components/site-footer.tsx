import Link from "next/link";
import { ArrowUpRight, Mail, MessageCircle, Phone } from "lucide-react";
import { Brand } from "./brand";
import { generalBookingMessage, getWhatsAppUrl } from "@/lib/whatsapp";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top shell">
        <div className="footer-about">
          <Brand footer />
          <p>Professionell flytthjälp, utförd med omsorg.</p>
        </div>
        <a className="footer-booking" href={getWhatsAppUrl(generalBookingMessage)} target="_blank" rel="noreferrer">
          <span><MessageCircle /> Starta en WhatsApp-chatt</span><ArrowUpRight />
        </a>
      </div>
      <div className="footer-bottom shell">
        <p>© 2026 Flyttiva. Alla rättigheter förbehållna.</p>
        <nav aria-label="Sidfot">
          <Link href="/services">Tjänster</Link>
          <Link href="/pricing">Priser</Link>
          <Link href="/contact">Kontakt</Link>
          <a href="tel:+46767073226"><Phone /> +46 76 707 32 26</a>
          <a href="mailto:flyttiva@gmail.com"><Mail /> flyttiva@gmail.com</a>
        </nav>
      </div>
    </footer>
  );
}
