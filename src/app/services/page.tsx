import type { Metadata } from "next";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { ServicesGrid } from "@/components/services-grid";
import { generalBookingMessage, getWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Tjänster",
  description: "Omsorgsfull flytthjälp för hem och företag — från packning till flyttstädning.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="inner-hero">
        <div className="shell inner-hero__content">
          <span className="kicker kicker--light">Tjänster</span>
          <h1>Flytthjälp,<br /> <em>på ditt sätt.</em></h1>
          <p>Välj en komplett lösning eller bara den hjälp du behöver. Vi anpassar team, tid och upplägg efter din flytt.</p>
        </div>
      </section>
      <section className="services-page section">
        <ServicesGrid />
      </section>
      <section className="closing-cta section">
        <div className="closing-cta__inner shell">
          <span className="kicker kicker--light">Personlig planering</span>
          <h2>Osäker på vad<br /> <em>du behöver?</em></h2>
          <p>Beskriv flytten i ett meddelande. Vi hjälper dig hitta rätt upplägg.</p>
          <a className="button button--ivory" href={getWhatsAppUrl(generalBookingMessage)} target="_blank" rel="noreferrer">
            <MessageCircle /> Fråga oss på WhatsApp <ArrowUpRight />
          </a>
        </div>
      </section>
    </>
  );
}
