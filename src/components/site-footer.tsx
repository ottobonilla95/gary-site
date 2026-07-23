import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { Brand } from "./brand";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid shell">
        <div className="footer-about">
          <Brand footer />
          <p>Din pålitliga partner för professionella flyttjänster i hela Sverige. Vi gör din flytt enkel och stressfri.</p>
          <div className="social-links" aria-label="Sociala medier">
            <a href="https://facebook.com" aria-label="Facebook"><Facebook /></a>
            <a href="https://instagram.com" aria-label="Instagram"><Instagram /></a>
            <a href="https://linkedin.com" aria-label="LinkedIn"><Linkedin /></a>
          </div>
        </div>
        <div>
          <h3>Snabblänkar</h3>
          <ul>
            <li><Link href="/">Hem</Link></li>
            <li><Link href="/services">Tjänster</Link></li>
            <li><Link href="/pricing">Priser</Link></li>
            <li><Link href="/contact">Kontakt</Link></li>
          </ul>
        </div>
        <div>
          <h3>Våra Tjänster</h3>
          <ul>
            <li><Link href="/services#apartment">Lägenhetsflytt</Link></li>
            <li><Link href="/services#house">Husflytt</Link></li>
            <li><Link href="/services#office">Kontorsflytt</Link></li>
            <li><Link href="/services#packing">Packning</Link></li>
            <li><Link href="/services#cleaning">Städning</Link></li>
          </ul>
        </div>
        <div>
          <h3>Kontakta Oss</h3>
          <ul className="contact-list">
            <li><Phone /><a href="tel:+46767073226">+46 767073226</a></li>
            <li><Mail /><a href="mailto:info@flyttiva.se">info@flyttiva.se</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom shell">
        <p>© 2026 Flyttiva. Alla rättigheter förbehållna.</p>
        <div><a href="#">Integritetspolicy</a><a href="#">Användarvillkor</a></div>
      </div>
    </footer>
  );
}
