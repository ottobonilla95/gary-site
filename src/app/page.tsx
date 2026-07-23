import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Clock3, MapPin, Shield, Star } from "lucide-react";
import { FullQuoteForm } from "@/components/full-quote-form";
import { QuickQuoteForm } from "@/components/quick-quote-form";
import { services, testimonials } from "@/data/content";

export default function HomePage() {
  return (
    <>
      <section className="home-hero">
        <Image className="home-hero__image" src="/images/hero.avif" alt="Professional moving services landscape" fill priority sizes="100vw" />
        <div className="home-hero__overlay" />
        <div className="home-hero__content shell">
          <div className="hero-copy">
            <div className="eyebrow"><span /> Sveriges Pålitligaste Flyttfirma</div>
            <h1>Flytta Smidigt <em>och Tryggt</em></h1>
            <p>Vi erbjuder kompletta flyttjänster för privatpersoner och företag. Från lägenheter till kontor – vi gör din flytt enkel, strukturerad och helt stressfri.</p>
          </div>
          <QuickQuoteForm />
        </div>
      </section>

      <section className="home-services section">
        <div className="home-services__grid shell">
          <div className="section-intro">
            <h2>Våra <span>Tjänster</span></h2>
            <p>Vi erbjuder ett komplett utbud av flyttjänster anpassade efter dina specifika behov. Varje uppdrag hanteras med största omsorg och precision.</p>
            <Link className="text-link" href="/services">Se Alla Tjänster <ArrowRight /></Link>
          </div>
          <div className="home-service-cards">
            {services.slice(0, 4).map((service) => (
              <article className="home-service-card" key={service.id}>
                <div className="home-service-card__image"><Image src={service.image} alt={service.title} fill sizes="(max-width: 800px) 100vw, 25vw" /></div>
                <div className="home-service-card__body">
                  <div className="service-title-line"><h3>{service.title}</h3><strong>Från {service.price} kr</strong></div>
                  <p>{service.description}</p>
                  <Link href="/services">Läs mer <ArrowRight /></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="why-section section">
        <div className="why-grid shell">
          <div className="why-copy">
            <h2>Varför Välja <span>Flyttiva?</span></h2>
            <p>Med över ett decennium i branschen har vi förfinat konsten att flytta. Vi kombinerar effektivitet med extrem noggrannhet för att säkerställa att dina ägodelar hanteras med respekt.</p>
            <div className="benefit"><Shield /><div><h4>Fullständig Försäkring</h4><p>Dina ägodelar är skyddade under hela processen.</p></div></div>
            <div className="benefit"><Clock3 /><div><h4>Punktlighet Garanterad</h4><p>Vi respekterar din tid och håller alltid överenskomna tider.</p></div></div>
            <div className="benefit"><MapPin /><div><h4>Lokal &amp; Nationell</h4><p>Oavsett om du flyttar runt hörnet eller över hela landet.</p></div></div>
          </div>
          <div className="why-image"><Image src="/images/moving-team.avif" alt="Moving team at work" fill sizes="(max-width: 800px) 100vw, 45vw" /></div>
        </div>
      </section>

      <section className="testimonials section">
        <div className="shell">
          <div className="section-heading">
            <h2>Kundernas Ord</h2>
            <p>Läs vad våra tidigare kunder har att säga om sin upplevelse med oss. Deras förtroende är vårt starkaste bevis på kvalitet.</p>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((testimonial) => (
              <article className="testimonial-card" key={testimonial.name}>
                <div className="stars" aria-label={`${testimonial.rating} av 5 stjärnor`}>
                  {[1, 2, 3, 4, 5].map((star) => <Star className={star <= testimonial.rating ? "filled" : ""} key={star} />)}
                </div>
                <p>“{testimonial.quote}”</p>
                <div><strong>{testimonial.name}</strong><span>{testimonial.move}</span></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="final-quote section" id="quote-form">
        <div className="final-quote__grid shell">
          <div className="final-quote__copy">
            <div className="boxes-image"><Image src="/images/moving-boxes.avif" alt="Moving boxes" fill sizes="300px" /></div>
            <h2>Redo att ta nästa steg?</h2>
            <p>Fyll i formuläret så återkommer vi med en skräddarsydd offert baserad på dina specifika behov. Helt kostnadsfritt och utan förpliktelser.</p>
            <ul><li><Check /> Svar inom 24 timmar</li><li><Check /> Transparent prissättning</li><li><Check /> Personlig rådgivning</li></ul>
          </div>
          <FullQuoteForm />
        </div>
      </section>
    </>
  );
}
