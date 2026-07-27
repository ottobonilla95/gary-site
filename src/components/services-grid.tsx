import Image from "next/image";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { services } from "@/data/content";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function ServicesGrid() {
  return (
    <div className="service-list shell">
      {services.map((service, index) => (
        <article className="service-list-card" id={service.slug} key={service.slug}>
          <div className="service-list-card__image">
            <Image src={service.image} alt={service.title} fill priority={index < 2} sizes="(max-width: 760px) 100vw, 50vw" />
          </div>
          <div className="service-list-card__body">
            <span className="service-number">0{index + 1}</span>
            <h3>{service.title}</h3>
            <strong>{service.short}</strong>
            <p>{service.description}</p>
            <a href={getWhatsAppUrl(service.message)} target="_blank" rel="noreferrer">
              <MessageCircle /> Fråga om tjänsten <ArrowUpRight />
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}
