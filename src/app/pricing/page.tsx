import type { Metadata } from "next";
import { ArrowUpRight, Check, MessageCircle } from "lucide-react";
import { generalBookingMessage, getWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Priser",
  description: "Tydlig och personlig prissättning för din flytt — utan dolda kostnader.",
};

const factors = [
  { number: "01", title: "Omfattning", text: "Bostadsstorlek, mängd och vilka tjänster du vill ha hjälp med." },
  { number: "02", title: "Förutsättningar", text: "Avstånd, våningsplan, hiss och åtkomst vid båda adresserna." },
  { number: "03", title: "Tidpunkt", text: "Önskat datum, veckodag och hur flexibel planeringen kan vara." },
];

export default function PricingPage() {
  const bookingUrl = getWhatsAppUrl(generalBookingMessage);

  return (
    <>
      <section className="inner-hero inner-hero--pricing">
        <div className="shell inner-hero__content">
          <span className="kicker kicker--light">Prissättning</span>
          <h1>Tydligt från<br /> <em>första stund.</em></h1>
          <p>Ingen flytt är den andra lik. Därför får du ett personligt pris baserat på det du faktiskt behöver — alltid tydligt före bokning.</p>
          <a className="button button--ivory" href={bookingUrl} target="_blank" rel="noreferrer">
            <MessageCircle /> Be om pris på WhatsApp <ArrowUpRight />
          </a>
        </div>
      </section>

      <section className="pricing-simple section">
        <div className="shell">
          <div className="editorial-heading">
            <div><span className="kicker">Vad avgör priset?</span><h2>Rätt pris för<br /> <em>just din flytt.</em></h2></div>
            <div className="editorial-heading__side"><p>Skicka fyra korta uppgifter så kan vi snabbt förstå uppdraget och ge dig ett transparent förslag.</p></div>
          </div>
          <div className="factor-grid">
            {factors.map((factor) => (
              <article key={factor.number}><span>{factor.number}</span><h3>{factor.title}</h3><p>{factor.text}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="price-promise section">
        <div className="price-promise__grid shell">
          <div>
            <span className="kicker kicker--light">Vårt löfte</span>
            <h2>Inga paket.<br /> <em>Inga överraskningar.</em></h2>
          </div>
          <div>
            <p>Du får en tydlig offert anpassad efter din verkliga flytt, inte ett standardpaket fyllt med sådant du inte behöver.</p>
            <ul>
              <li><Check /> Kostnadsfri förfrågan</li>
              <li><Check /> Tydligt vad som ingår</li>
              <li><Check /> Personlig kontakt före bokning</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="closing-cta section">
        <div className="closing-cta__inner shell">
          <span className="kicker kicker--light">Få din offert</span>
          <h2>Fyra uppgifter.<br /> <em>Ett tydligt pris.</em></h2>
          <p>Berätta varifrån, vart, när och hur stort. Vi återkommer så snart vi kan.</p>
          <a className="button button--ivory" href={bookingUrl} target="_blank" rel="noreferrer">
            <MessageCircle /> Starta på WhatsApp <ArrowUpRight />
          </a>
        </div>
      </section>
    </>
  );
}
