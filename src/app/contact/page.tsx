import type { Metadata } from "next";
import { ArrowUpRight, CalendarCheck, Clock3, Phone } from "lucide-react";
import { BookingButton } from "@/components/booking-provider";
import { getUi } from "@/lib/i18n";
import { getRequestLanguage } from "@/lib/i18n-server";

export async function generateMetadata(): Promise<Metadata> { const t=getUi(await getRequestLanguage()).contact; return {title:t.metaTitle,description:t.metaDescription}; }

export default async function ContactPage() {
  const language=await getRequestLanguage(); const t=getUi(language).contact;
  return <>
    <section className="contact-minimal"><div className="contact-minimal__grid shell"><div className="contact-minimal__copy"><span className="kicker kicker--light">{t.kicker}</span><h1>{t.title}</h1><p>{t.text}</p><BookingButton className="button button--ivory"><CalendarCheck /> {t.button} <ArrowUpRight /></BookingButton></div>
    <div className="contact-options"><BookingButton><span><CalendarCheck /></span><div><small>{t.fast}</small><h2>{t.bookingOptionTitle}</h2><p>{t.chatText}</p></div><ArrowUpRight /></BookingButton><a href="tel:+46767073226"><span><Phone /></span><div><small>{t.call}</small><h2>+46 76 707 32 26</h2><p>{t.weekdays}</p></div><ArrowUpRight /></a></div></div></section>
    <section className="contact-note section"><div className="contact-note__grid shell"><div><Clock3 /><span>{t.hours}</span></div><p>{t.hoursText}</p><p>{t.moves}</p></div></section>
  </>;
}
