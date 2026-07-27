import type { Metadata } from "next";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { ServicesGrid } from "@/components/services-grid";
import { getUi } from "@/lib/i18n";
import { getRequestLanguage } from "@/lib/i18n-server";
import { getGeneralBookingMessage, getWhatsAppUrl } from "@/lib/whatsapp";

export async function generateMetadata(): Promise<Metadata> { const t=getUi(await getRequestLanguage()).servicesPage; return {title:t.metaTitle,description:t.metaDescription}; }

export default async function ServicesPage() {
  const language=await getRequestLanguage(); const t=getUi(language).servicesPage;
  return <>
    <section className="inner-hero"><div className="shell inner-hero__content"><span className="kicker kicker--light">{t.kicker}</span><h1>{t.title}</h1><p>{t.text}</p></div></section>
    <section className="services-page section"><ServicesGrid language={language} /></section>
    <section className="closing-cta section"><div className="closing-cta__inner shell"><span className="kicker kicker--light">{t.ctaKicker}</span><h2>{t.ctaTitle}</h2><p>{t.ctaText}</p><a className="button button--ivory" href={getWhatsAppUrl(getGeneralBookingMessage(language))} target="_blank" rel="noreferrer"><MessageCircle /> {t.ctaButton} <ArrowUpRight /></a></div></section>
  </>;
}
