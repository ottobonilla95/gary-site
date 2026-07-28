import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CalendarCheck, Check, MoveRight } from "lucide-react";
import { BookingButton } from "@/components/booking-provider";
import { getFrequentlyAskedQuestions, getServices } from "@/data/content";
import { getUi } from "@/lib/i18n";
import { getRequestLanguage } from "@/lib/i18n-server";

export default async function HomePage() {
  const language=await getRequestLanguage(); const t=getUi(language).home; const services=getServices(language); const faqs=getFrequentlyAskedQuestions(language);
  const homeServices=[
    {...services[0],label:t.labels[0]},
    {...services[1],label:t.labels[1]},
    {slug:"helhetslosning",title:language==="sv"?"Packning & städning":"Packing & cleaning",short:language==="sv"?"Vi tar hand om detaljerna före och efter.":"We handle the details before and after.",description:language==="sv"?"Komplettera flytten med professionell packhjälp, material och noggrann flyttstädning.":"Complete your move with professional packing, materials and thorough move-out cleaning.",image:"/images/packing.avif",label:t.labels[2]},
  ];
  return <>
    <section className="lux-hero"><div className="lux-hero__grid shell"><div className="lux-hero__copy"><h1>{t.heroTitle}</h1><p>{t.heroText}</p><BookingButton className="button button--ivory hero-booking"><CalendarCheck /> {getUi(language).booking.button} <ArrowUpRight /></BookingButton></div><div className="lux-hero__visual"><Image src="/images/hero.avif" alt={t.heroAlt} fill priority sizes="(max-width: 800px) 100vw, 48vw" /></div></div></section>

    <section className="home-services section" id="services"><div className="shell"><div className="editorial-heading"><div><span className="kicker">{t.servicesKicker}</span><h2>{t.servicesTitle}</h2></div><div className="editorial-heading__side"><p>{t.servicesText}</p><Link className="quiet-link" href="/services">{t.allServices} <MoveRight /></Link></div></div>
      <div className="home-service-grid">{homeServices.map((service,index)=><article className="home-service-card" key={service.slug}><div className="home-service-card__image"><Image src={service.image} alt={service.title} fill sizes="(max-width: 760px) 100vw, 33vw" /><span>{service.label}</span></div><div className="home-service-card__body"><div className="service-card-title"><span>0{index+1}</span><h3>{service.title}</h3></div><p>{service.description}</p><BookingButton description={`${service.title}: ${service.description}`} aria-label={`${t.askAbout} ${service.title}`}>
        {t.quote} <ArrowUpRight /></BookingButton></div></article>)}</div>
    </div></section>

    <section className="process-section section" id="process"><div className="process-grid shell"><div className="process-intro"><span className="kicker kicker--light">{t.processKicker}</span><h2>{t.processTitle}</h2><p>{t.processText}</p></div><ol className="process-list">{t.steps.map((step,index)=><li key={step.title}><span>0{index+1}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></li>)}</ol></div></section>

    <section className="confidence-section section"><div className="confidence-grid shell"><div className="confidence-image"><Image src="/images/moving-team.avif" alt={t.trustAlt} fill sizes="(max-width: 800px) 100vw, 50vw" /><div className="confidence-badge"><strong>100%</strong><span>{t.badge}</span></div></div><div className="confidence-copy"><span className="kicker">{t.trustKicker}</span><h2>{t.trustTitle}</h2><p className="confidence-lead">{t.trustText}</p><ul>{t.checks.map(item=><li key={item}><Check /> {item}</li>)}</ul><blockquote><p>{t.testimonial}</p><cite>{t.cite}</cite></blockquote></div></div></section>

    <section className="faq-section section" id="faq"><div className="faq-layout shell"><div className="faq-intro"><span className="kicker">{t.faqKicker}</span><h2>{t.faqTitle}</h2><p>{t.faqText}</p><BookingButton className="quiet-link">{t.askQuestion} <ArrowUpRight /></BookingButton></div><div className="faq-list">{faqs.map((item,index)=><details key={item.question} open={index===0}><summary><span>0{index+1}</span>{item.question}<i>+</i></summary><p>{item.answer}</p></details>)}</div></div></section>

    <section className="closing-cta section"><div className="closing-cta__inner shell"><span className="kicker kicker--light">{t.ctaKicker}</span><h2>{t.ctaTitle}</h2><p>{t.ctaText}</p><BookingButton className="button button--ivory"><CalendarCheck /> {t.ctaButton} <ArrowUpRight /></BookingButton></div></section>
  </>;
}
