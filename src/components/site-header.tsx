"use client";

import Link from "next/link";
import { ArrowUpRight, Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { Brand } from "./brand";
import { LanguageSwitcher } from "./language-switcher";
import { getUi, type Language } from "@/lib/i18n";
import { getGeneralBookingMessage, getWhatsAppUrl } from "@/lib/whatsapp";

export function SiteHeader({ language }: { language: Language }) {
  const [open, setOpen] = useState(false);
  const t = getUi(language);
  const links = [
    { href: "/#services", label: t.nav.services },
    { href: "/#process", label: t.nav.process },
    { href: "/#faq", label: t.nav.faq },
  ];
  const bookingUrl = getWhatsAppUrl(getGeneralBookingMessage(language));

  return (
    <header className="site-header">
      <div className="site-header__inner shell">
        <Brand language={language} />
        <nav className="desktop-nav" aria-label={t.nav.main}>
          {links.map((link) => <Link href={link.href} key={link.href}>{link.label}</Link>)}
        </nav>
        <LanguageSwitcher language={language} label={t.language} />
        <a className="button button--light header-quote" href={bookingUrl} target="_blank" rel="noreferrer">
          <MessageCircle /> {t.nav.plan} <ArrowUpRight />
        </a>
        <button className="mobile-toggle" type="button" aria-label={open ? t.nav.close : t.nav.open} aria-expanded={open} onClick={() => setOpen((value) => !value)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label={t.nav.mobile}>
          {links.map((link) => <Link href={link.href} key={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}
          <a className="button button--light" href={bookingUrl} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
            <MessageCircle /> {t.nav.plan}
          </a>
        </nav>
      )}
    </header>
  );
}
