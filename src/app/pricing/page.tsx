import type { Metadata } from "next";
import { ArrowUpRight, Check, MessageCircle } from "lucide-react";
import { getUi } from "@/lib/i18n";
import { getRequestLanguage } from "@/lib/i18n-server";
import { getGeneralBookingMessage, getWhatsAppUrl } from "@/lib/whatsapp";

export async function generateMetadata(): Promise<Metadata> { const t=getUi(await getRequestLanguage()).pricing; return {title:t.metaTitle,description:t.metaDescription}; }

export default async function PricingPage() {
  const language=await getRequestLanguage(); const t=getUi(language).pricing; const bookingUrl=getWhatsAppUrl(getGeneralBookingMessage(language));
  return <>
    <section className="inner-hero inner-hero--pricing"><div className="shell inner-hero__content"><span className="kicker kicker--light">{t.kicker}</span><h1>{t.title}</h1><p>{t.text}</p><a className="button button--ivory" href={bookingUrl} target="_blank" rel="noreferrer"><MessageCircle /> {t.button} <ArrowUpRight /></a></div></section>
    <section className="pricing-simple section"><div className="shell"><div className="editorial-heading"><div><span className="kicker">{t.factorsKicker}</span><h2>{t.factorsTitle}</h2></div><div className="editorial-heading__side"><p>{t.factorsText}</p></div></div><div className="factor-grid">{t.factors.map((factor,index)=><article key={factor.title}><span>0{index+1}</span><h3>{factor.title}</h3><p>{factor.text}</p></article>)}</div></div></section>
    <section className="price-promise section"><div className="price-promise__grid shell"><div><span className="kicker kicker--light">{t.promiseKicker}</span><h2>{t.promiseTitle}</h2></div><div><p>{t.promiseText}</p><ul>{t.checks.map(item=><li key={item}><Check /> {item}</li>)}</ul></div></div></section>
    <section className="closing-cta section"><div className="closing-cta__inner shell"><span className="kicker kicker--light">{t.ctaKicker}</span><h2>{t.ctaTitle}</h2><p>{t.ctaText}</p><a className="button button--ivory" href={bookingUrl} target="_blank" rel="noreferrer"><MessageCircle /> {t.ctaButton} <ArrowUpRight /></a></div></section>
  </>;
}
