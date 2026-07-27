import type { Metadata } from "next";
import { ArrowUpRight, Clock3, Mail, MessageCircle, Phone } from "lucide-react";
import { getUi } from "@/lib/i18n";
import { getRequestLanguage } from "@/lib/i18n-server";
import { getGeneralBookingMessage, getWhatsAppUrl } from "@/lib/whatsapp";

export async function generateMetadata(): Promise<Metadata> { const t=getUi(await getRequestLanguage()).contact; return {title:t.metaTitle,description:t.metaDescription}; }

export default async function ContactPage() {
  const language=await getRequestLanguage(); const t=getUi(language).contact; const bookingUrl=getWhatsAppUrl(getGeneralBookingMessage(language));
  return <>
    <section className="contact-minimal"><div className="contact-minimal__grid shell"><div className="contact-minimal__copy"><span className="kicker kicker--light">{t.kicker}</span><h1>{t.title}</h1><p>{t.text}</p><a className="button button--ivory" href={bookingUrl} target="_blank" rel="noreferrer"><MessageCircle /> {t.button} <ArrowUpRight /></a></div>
    <div className="contact-options"><a href={bookingUrl} target="_blank" rel="noreferrer"><span><MessageCircle /></span><div><small>{t.fast}</small><h2>WhatsApp</h2><p>{t.chatText}</p></div><ArrowUpRight /></a><a href="tel:+46767073226"><span><Phone /></span><div><small>{t.call}</small><h2>+46 76 707 32 26</h2><p>{t.weekdays}</p></div><ArrowUpRight /></a><a href="mailto:flyttiva@gmail.com"><span><Mail /></span><div><small>{t.email}</small><h2>flyttiva@gmail.com</h2><p>{t.reply}</p></div><ArrowUpRight /></a></div></div></section>
    <section className="contact-note section"><div className="contact-note__grid shell"><div><Clock3 /><span>{t.hours}</span></div><p>{t.hoursText}</p><p>{t.moves}</p></div></section>
  </>;
}
