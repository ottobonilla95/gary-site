import type { Metadata } from "next";
import { Check, Clock3, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontakta Flyttiva för rådgivning eller en kostnadsfri flyttoffert.",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero contact-hero">
        <h1>Kontakta Oss</h1>
        <p>Vi finns här för att hjälpa dig med din flytt</p>
      </section>
      <section className="contact-cards section">
        <div className="contact-card-grid shell">
          <article><Phone /><h3>Telefon</h3><a href="tel:+46767073226"><strong>+46 76 707 32 26</strong><span>Vardagar 08:00 - 18:00</span></a></article>
          <article><Mail /><h3>E-post</h3><a href="mailto:flyttiva@gmail.com"><strong>flyttiva@gmail.com</strong><span>Vi svarar inom 24 timmar</span></a></article>
          <article><MapPin /><h3>Adress</h3><a href="https://maps.google.com" target="_blank" rel="noreferrer"><strong>Storgatan 123</strong><span>111 22 Stockholm, Sverige</span></a></article>
          <article><Clock3 /><h3>Öppettider</h3><p><strong>Mån-Fre: 08:00 - 18:00</strong><span>Lör-Sön: 10:00 - 16:00</span></p></article>
        </div>
      </section>
      <section className="contact-main section">
        <div className="contact-main__grid shell">
          <div className="contact-form-wrap"><h2>Skicka ett Meddelande</h2><p>Har du frågor eller vill veta mer? Fyll i formuläret så återkommer vi så snart som möjligt.</p><ContactForm /></div>
          <div className="map-panel">
            <iframe title="Karta över Stockholm" src="https://www.google.com/maps?q=Stockholm%2C%20Sweden&output=embed" loading="lazy" />
            <div className="why-contact"><h3>Varför Kontakta Oss?</h3><ul>{["Kostnadsfri rådgivning", "Snabb återkoppling", "Skräddarsydda lösningar", "Professionell service"].map((item) => <li key={item}><Check /> {item}</li>)}</ul></div>
          </div>
        </div>
      </section>
      <section className="faq-section contact-faq section">
        <div className="shell"><div className="section-heading centered"><h2>Vanliga Frågor</h2></div><div className="faq-grid">
          <article><h3>Hur snabbt kan ni genomföra en flytt?</h3><p>Vi kan ofta genomföra flyttar inom 1-2 veckor, beroende på säsong och tillgänglighet.</p></article>
          <article><h3>Täcker försäkringen alla skador?</h3><p>Ja, vår försäkring täcker alla skador som uppstår under flytten.</p></article>
          <article><h3>Kan ni hjälpa till med packning?</h3><p>Absolut! Vi erbjuder både full packtjänst och packmaterial.</p></article>
          <article><h3>Flyttar ni även på helger?</h3><p>Ja, vi erbjuder flyttjänster alla dagar i veckan, inklusive helger.</p></article>
        </div></div>
      </section>
    </>
  );
}
