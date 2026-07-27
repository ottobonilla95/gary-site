"use client";

import Link from "next/link";
import { ArrowUpRight, Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { Brand } from "./brand";
import { generalBookingMessage, getWhatsAppUrl } from "@/lib/whatsapp";

const links = [
  { href: "/#services", label: "Tjänster" },
  { href: "/#process", label: "Så fungerar det" },
  { href: "/#faq", label: "FAQ" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header__inner shell">
        <Brand />
        <nav className="desktop-nav" aria-label="Huvudmeny">
          {links.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <a className="button button--light header-quote" href={getWhatsAppUrl(generalBookingMessage)} target="_blank" rel="noreferrer">
          <MessageCircle /> Planera din flytt <ArrowUpRight />
        </a>
        <button
          className="mobile-toggle"
          type="button"
          aria-label={open ? "Stäng meny" : "Öppna meny"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label="Mobilmeny">
          {links.map((link) => (
            <Link href={link.href} key={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <a className="button button--light" href={getWhatsAppUrl(generalBookingMessage)} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
            <MessageCircle /> Planera din flytt
          </a>
        </nav>
      )}
    </header>
  );
}
