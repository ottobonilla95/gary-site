import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  MessageCircle,
  MoveRight,
} from "lucide-react";
import { frequentlyAskedQuestions, services } from "@/data/content";
import { generalBookingMessage, getWhatsAppUrl } from "@/lib/whatsapp";

const homeServices = [
  {
    ...services[0],
    label: "Hem",
  },
  {
    ...services[1],
    label: "Företag",
  },
  {
    slug: "helhetslosning",
    title: "Packning & städning",
    short: "Vi tar hand om detaljerna före och efter.",
    description: "Komplettera flytten med professionell packhjälp, material och noggrann flyttstädning.",
    image: "/images/packing.avif",
    message: "Hej Flyttiva! Jag vill gärna ha hjälp med packning och flyttstädning.",
    label: "Komplett",
  },
];

const bookingUrl = getWhatsAppUrl(generalBookingMessage);

export default function HomePage() {
  return (
    <>
      <section className="lux-hero">
        <div className="lux-hero__grid shell">
          <div className="lux-hero__copy">
            <h1>Flytthjälp utan krångel.</h1>
            <p>
              Vi hjälper privatpersoner och företag att flytta tryggt, effektivt och utan onödig stress — i hela Sverige.
            </p>
            <a className="button button--ivory hero-booking" href={bookingUrl} target="_blank" rel="noreferrer">
              <MessageCircle /> Boka din flytt <ArrowUpRight />
            </a>
          </div>

          <div className="lux-hero__visual">
            <Image
              src="/images/hero.avif"
              alt="Flyttkartonger i ett ljust, modernt hem"
              fill
              priority
              sizes="(max-width: 800px) 100vw, 48vw"
            />
          </div>
        </div>
      </section>

      <section className="home-services section" id="services">
        <div className="shell">
          <div className="editorial-heading">
            <div>
              <span className="kicker">Våra tjänster</span>
              <h2>Allt du behöver.<br /> <em>Inget du inte gör.</em></h2>
            </div>
            <div className="editorial-heading__side">
              <p>Välj det som passar din flytt. Vi hjälper dig att forma resten i ett enkelt samtal.</p>
              <Link className="quiet-link" href="/services">Se alla tjänster <MoveRight /></Link>
            </div>
          </div>

          <div className="home-service-grid">
            {homeServices.map((service, index) => (
              <article className="home-service-card" key={service.slug}>
                <div className="home-service-card__image">
                  <Image src={service.image} alt={service.title} fill sizes="(max-width: 760px) 100vw, 33vw" />
                  <span>{service.label}</span>
                </div>
                <div className="home-service-card__body">
                  <div className="service-card-title"><span>0{index + 1}</span><h3>{service.title}</h3></div>
                  <p>{service.description}</p>
                  <a href={getWhatsAppUrl(service.message)} target="_blank" rel="noreferrer" aria-label={`Fråga om ${service.title}`}>
                    Be om offert <ArrowUpRight />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section section" id="process">
        <div className="process-grid shell">
          <div className="process-intro">
            <span className="kicker kicker--light">Så fungerar det</span>
            <h2>Tre steg.<br /> <em>En lugn flytt.</em></h2>
            <p>Du berättar vad du behöver. Vi löser planeringen, logistiken och det praktiska.</p>
          </div>
          <ol className="process-list">
            <li>
              <span>01</span>
              <div><h3>Skriv till oss</h3><p>Skicka adresser, önskat datum och bostadsstorlek på WhatsApp.</p></div>
            </li>
            <li>
              <span>02</span>
              <div><h3>Få en tydlig plan</h3><p>Vi återkommer med upplägg, pris och allt som ingår — utan överraskningar.</p></div>
            </li>
            <li>
              <span>03</span>
              <div><h3>Vi flyttar</h3><p>Vårt team kommer i tid och tar hand om flytten från start till mål.</p></div>
            </li>
          </ol>
        </div>
      </section>

      <section className="confidence-section section">
        <div className="confidence-grid shell">
          <div className="confidence-image">
            <Image src="/images/moving-team.avif" alt="Flyttivas team bär en flyttlåda" fill sizes="(max-width: 800px) 100vw, 50vw" />
            <div className="confidence-badge"><strong>100%</strong><span>omsorg i varje steg</span></div>
          </div>
          <div className="confidence-copy">
            <span className="kicker">Trygghet ingår</span>
            <h2>Du flyttar livet.<br /> <em>Vi flyttar resten.</em></h2>
            <p className="confidence-lead">En bra flytt märks inte i stressen — den märks i lugnet. Därför får du en tydlig kontakt, varsam hantering och full överblick hela vägen.</p>
            <ul>
              <li><Check /> Dina ägodelar är försäkrade</li>
              <li><Check /> Punktligt och erfaret team</li>
              <li><Check /> Tydligt pris före flyttdagen</li>
            </ul>
            <blockquote>
              <p>“Otroligt proffsiga, snabba och varsamma. Hela flytten kändes enkel från första kontakt.”</p>
              <cite>— Anna, Stockholm</cite>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="faq-section section" id="faq">
        <div className="faq-layout shell">
          <div className="faq-intro">
            <span className="kicker">Bra att veta</span>
            <h2>Vanliga frågor,<br /> <em>enkla svar.</em></h2>
            <p>Undrar du något annat? Skriv direkt till oss så hjälper vi dig.</p>
            <a className="quiet-link" href={bookingUrl} target="_blank" rel="noreferrer">Ställ en fråga <ArrowUpRight /></a>
          </div>
          <div className="faq-list">
            {frequentlyAskedQuestions.map((item, index) => (
              <details key={item.question} open={index === 0}>
                <summary><span>0{index + 1}</span>{item.question}<i>+</i></summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="closing-cta section">
        <div className="closing-cta__inner shell">
          <span className="kicker kicker--light">Redo när du är</span>
          <h2>Låt oss göra flytten<br /> <em>lite lättare.</em></h2>
          <p>Fyra uppgifter räcker för att komma igång: från, till, datum och bostadsstorlek.</p>
          <a className="button button--ivory" href={bookingUrl} target="_blank" rel="noreferrer">
            <MessageCircle /> Starta på WhatsApp <ArrowUpRight />
          </a>
        </div>
      </section>
    </>
  );
}
