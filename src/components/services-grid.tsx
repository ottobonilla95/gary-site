import Image from "next/image";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { getServices } from "@/data/content";
import { getUi, type Language } from "@/lib/i18n";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function ServicesGrid({ language }: { language: Language }) {
  const services = getServices(language);
  const t = getUi(language);
  return <div className="service-list shell">{services.map((service,index)=>(
    <article className="service-list-card" id={service.slug} key={service.slug}>
      <div className="service-list-card__image"><Image src={service.image} alt={service.title} fill priority={index<2} sizes="(max-width: 760px) 100vw, 50vw" /></div>
      <div className="service-list-card__body"><span className="service-number">0{index+1}</span><h3>{service.title}</h3><strong>{service.short}</strong><p>{service.description}</p>
        <a href={getWhatsAppUrl(service.message)} target="_blank" rel="noreferrer"><MessageCircle /> {t.servicesPage.ask} <ArrowUpRight /></a>
      </div>
    </article>
  ))}</div>;
}
