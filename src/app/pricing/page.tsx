import type { Metadata } from "next";
import { ArrowUpRight, CalendarCheck, Check } from "lucide-react";
import { BookingButton } from "@/components/booking-provider";
import { getUi } from "@/lib/i18n";
import { getRequestLanguage } from "@/lib/i18n-server";

export async function generateMetadata(): Promise<Metadata> { const t=getUi(await getRequestLanguage()).pricing; return {title:t.metaTitle,description:t.metaDescription}; }

export default async function PricingPage() {
  const language=await getRequestLanguage(); const t=getUi(language).pricing;
  return <>
    <section className="inner-hero inner-hero--pricing"><div className="shell inner-hero__content"><span className="kicker kicker--light">{t.kicker}</span><h1>{t.title}</h1><p>{t.text}</p><BookingButton className="button button--ivory"><CalendarCheck /> {t.button} <ArrowUpRight /></BookingButton></div></section>
    <section className="pricing-simple section"><div className="shell"><div className="editorial-heading"><div><span className="kicker">{t.factorsKicker}</span><h2>{t.factorsTitle}</h2></div><div className="editorial-heading__side"><p>{t.factorsText}</p></div></div><div className="factor-grid">{t.factors.map((factor,index)=><article key={factor.title}><span>0{index+1}</span><h3>{factor.title}</h3><p>{factor.text}</p></article>)}</div></div></section>
    <section className="price-promise section"><div className="price-promise__grid shell"><div><span className="kicker kicker--light">{t.promiseKicker}</span><h2>{t.promiseTitle}</h2></div><div><p>{t.promiseText}</p><ul>{t.checks.map(item=><li key={item}><Check /> {item}</li>)}</ul></div></div></section>
    <section className="closing-cta section"><div className="closing-cta__inner shell"><span className="kicker kicker--light">{t.ctaKicker}</span><h2>{t.ctaTitle}</h2><p>{t.ctaText}</p><BookingButton className="button button--ivory"><CalendarCheck /> {t.ctaButton} <ArrowUpRight /></BookingButton></div></section>
  </>;
}
