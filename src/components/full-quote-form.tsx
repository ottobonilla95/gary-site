"use client";

import { CheckCircle2, Send } from "lucide-react";
import { useFormMessage } from "./use-form-message";

export function FullQuoteForm() {
  const { sent, submit } = useFormMessage();

  return (
    <form className="full-quote-form" onSubmit={submit}>
      <div className="form-heading">
        <span>Begär Offert</span>
        <strong>Snabb och Enkel Förfrågan</strong>
      </div>
      <label>Namn *<input name="name" placeholder="Ditt fullständiga namn" required /></label>
      <div className="two-fields">
        <label>E-post *<input name="email" type="email" placeholder="din@email.se" required /></label>
        <label>Telefon *<input name="phone" type="tel" placeholder="+46 70 123 45 67" required /></label>
      </div>
      <label>Önskat datum &amp; tid *<input name="date" type="datetime-local" required /></label>
      <label>Upphämtningsadress *<input name="pickup" placeholder="Gatuadress, postnummer, stad" required /></label>
      <label>Destinationsadress *<input name="destination" placeholder="Gatuadress, postnummer, stad" required /></label>
      <div className="two-fields">
        <label>Bostadsstorlek (kvm) *<input name="size" type="number" min="1" required /></label>
        <label>Våning *<input name="floor" type="number" min="0" required /></label>
      </div>
      <label className="checkbox-row"><input name="elevator" type="checkbox" /> <span>Ja, hiss finns</span></label>
      <button className="button button--yellow button--wide" type="submit">Skicka Offertförfrågan <Send /></button>
      {sent && <p className="form-success form-success--light"><CheckCircle2 /> Tack! Din offertförfrågan är skickad.</p>}
      <p className="form-note">* Obligatoriska fält. Vi behandlar dina uppgifter enligt vår integritetspolicy.</p>
    </form>
  );
}
