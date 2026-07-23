import type { Metadata } from "next";
import Link from "next/link";
import { Archive, ArrowRight, Building2, Check, House, Package, Sparkles, Warehouse } from "lucide-react";
import { pricingPackages } from "@/data/content";

export const metadata: Metadata = {
  title: "Priser",
  description: "Transparenta priser och flyttpaket för lägenhet, hus och kontor.",
};

const icons = { package: Package, house: House, building: Building2 };

export default function PricingPage() {
  return (
    <>
      <section className="pricing-packages section">
        <div className="shell">
          <div className="section-heading centered">
            <h2>Våra Flyttpaket</h2>
            <p>Välj det paket som passar dina behov bäst</p>
          </div>
          <div className="pricing-grid">
            {pricingPackages.map((item) => {
              const Icon = icons[item.icon as keyof typeof icons];
              return (
                <article className={`price-card ${item.popular ? "price-card--popular" : ""}`} key={item.title}>
                  {item.popular && <span className="popular-badge">Populärast</span>}
                  <div className="price-icon"><Icon /></div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="price"><span>Från</span><strong>{item.price}</strong></div>
                  <ul>{item.features.map((feature) => <li key={feature}><Check /> {feature}</li>)}</ul>
                  <Link className={`button button--wide ${item.popular ? "button--blue" : "button--outline"}`} href="/#quote-form">Begär Offert</Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="transparent-prices section">
        <div className="shell centered">
          <h1>Transparenta Priser</h1>
          <p>Inga dolda kostnader – du vet exakt vad du betalar</p>
        </div>
      </section>

      <section className="extras section">
        <div className="shell">
          <div className="section-heading centered"><h2>Tilläggstjänster</h2><p>Komplettera din flytt med våra extra tjänster</p></div>
          <div className="extras-grid">
            <article><div className="extra-icon"><Archive /></div><h3>Packtjänst</h3><strong>Från 450 kr/tim</strong><p>Vi packar dina tillhörigheter säkert och effektivt</p></article>
            <article><div className="extra-icon"><Sparkles /></div><h3>Flyttstädning</h3><strong>Från 2 500 kr</strong><p>Professionell städning av din gamla bostad</p></article>
            <article><div className="extra-icon"><Warehouse /></div><h3>Magasinering</h3><strong>Från 800 kr/mån</strong><p>Säker förvaring av dina möbler och tillhörigheter</p></article>
          </div>
        </div>
      </section>

      <section className="price-factors section">
        <div className="shell price-factors__grid">
          <div><h2>Vad Påverkar Priset?</h2><p>Flera faktorer påverkar det slutliga priset för din flytt. Vi tar hänsyn till alla detaljer för att ge dig en rättvis och transparent offert.</p></div>
          <ul>
            {["Avstånd mellan adresserna", "Bostadsstorlek och antal rum", "Våning och tillgång till hiss", "Mängd möbler och tillhörigheter", "Behov av packning och uppackning", "Tidpunkt för flytten (vardag/helg)", "Extra tjänster som städning"].map((item) => <li key={item}><Check /> {item}</li>)}
          </ul>
          <div className="exact-quote"><h3>Få en Exakt Offert</h3><p>Fyll i vårt formulär så beräknar vi ett exakt pris baserat på dina specifika behov</p><Link className="button button--yellow" href="/#quote-form">Begär Kostnadsfri Offert <ArrowRight /></Link></div>
        </div>
      </section>

      <section className="faq-section section">
        <div className="shell">
          <div className="section-heading centered"><h2>Vanliga Frågor om Priser</h2></div>
          <div className="faq-grid">
            <article><h3>Är priserna inklusive moms?</h3><p>Ja, alla våra priser är inklusive moms. Det du ser är det du betalar.</p></article>
            <article><h3>Finns det några dolda kostnader?</h3><p>Nej, vi är helt transparenta med våra priser. Alla kostnader specificeras i offerten.</p></article>
            <article><h3>Kan jag få en bindande offert?</h3><p>Ja, efter att vi har gjort en bedömning av din flytt får du en bindande offert som gäller i 30 dagar.</p></article>
            <article><h3>Hur betalar jag?</h3><p>Vi accepterar kortbetalning, Swish och faktura för företag. Betalning sker efter utförd flytt.</p></article>
          </div>
        </div>
      </section>
    </>
  );
}
