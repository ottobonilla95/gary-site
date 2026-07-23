import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ServicesGrid } from "@/components/services-grid";

export const metadata: Metadata = {
  title: "Tjänster",
  description: "Professionella flyttjänster anpassade efter dina behov.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <h1>Våra Flyttjänster</h1>
        <p>Professionella flyttjänster anpassade efter dina behov</p>
      </section>
      <section className="services-page section">
        <ServicesGrid />
      </section>
      <section className="service-cta section">
        <div className="shell">
          <h2>Redo att Boka Din Flytt?</h2>
          <p>Kontakta oss idag för en kostnadsfri offert</p>
          <Link className="button button--yellow" href="/#quote-form">Begär Offert Nu <ArrowRight /></Link>
        </div>
      </section>
    </>
  );
}
