"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useFormMessage } from "./use-form-message";

export function QuickQuoteForm() {
  const { sent, submit } = useFormMessage();

  return (
    <div className="quick-quote">
      <h2>Få en Snabb Offert</h2>
      <p>Fyll i dina uppgifter så återkommer vi med ett prisförslag.</p>
      <form onSubmit={submit}>
        <div className="two-fields">
          <input name="name" placeholder="Ditt namn *" aria-label="Ditt namn *" required />
          <input name="phone" type="tel" placeholder="Telefon *" aria-label="Telefon *" required />
        </div>
        <input name="email" type="email" placeholder="E-post *" aria-label="E-post *" required />
        <input name="from" placeholder="Från adress *" aria-label="Från adress *" required />
        <input name="to" placeholder="Till adress *" aria-label="Till adress *" required />
        <button className="button button--blue button--wide" type="submit">
          Begär Offert <ArrowRight />
        </button>
        {sent && <p className="form-success"><CheckCircle2 /> Tack! Vi återkommer snart.</p>}
      </form>
    </div>
  );
}
