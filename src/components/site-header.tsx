"use client";

import Link from "next/link";
import { ArrowUpRight, CalendarCheck, Menu, X } from "lucide-react";
import { useState } from "react";
import { Brand } from "./brand";
import { BookingButton } from "./booking-provider";
import { LanguageSwitcher } from "./language-switcher";
import { getUi, type Language } from "@/lib/i18n";

export function SiteHeader({ language }: { language: Language }) {
  const [open, setOpen] = useState(false);
  const t = getUi(language);
  const links = [
    { href: "/#services", label: t.nav.services },
    { href: "/#process", label: t.nav.process },
    { href: "/#faq", label: t.nav.faq },
  ];
  return (
    <header className="site-header">
      <div className="site-header__inner shell">
        <Brand language={language} />
        <nav className="desktop-nav" aria-label={t.nav.main}>
          {links.map((link) => <Link href={link.href} key={link.href}>{link.label}</Link>)}
        </nav>
        <LanguageSwitcher language={language} label={t.language} />
        <BookingButton className="button button--light header-quote">
          <CalendarCheck /> {t.nav.plan} <ArrowUpRight />
        </BookingButton>
        <button className="mobile-toggle" type="button" aria-label={open ? t.nav.close : t.nav.open} aria-expanded={open} onClick={() => setOpen((value) => !value)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label={t.nav.mobile}>
          {links.map((link) => <Link href={link.href} key={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}
          <BookingButton className="button button--light" onClick={() => setOpen(false)}>
            <CalendarCheck /> {t.nav.plan}
          </BookingButton>
        </nav>
      )}
    </header>
  );
}
