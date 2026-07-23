"use client";

import { CheckCircle2, Send } from "lucide-react";
import { useFormMessage } from "./use-form-message";

export function ContactForm() {
  const { sent, submit } = useFormMessage();

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="two-fields">
        <label>Namn *<input name="name" placeholder="Ditt fullständiga namn" required /></label>
        <label>Telefon *<input name="phone" type="tel" placeholder="+46 70 123 45 67" required /></label>
      </div>
      <label>E-post *<input name="email" type="email" placeholder="din@email.se" required /></label>
      <label>Ämne *<input name="subject" placeholder="Vad gäller ditt meddelande?" required /></label>
      <label>Meddelande *<textarea name="message" placeholder="Berätta mer om dina behov..." rows={6} required /></label>
      <button className="button button--blue" type="submit">Skicka Meddelande <Send /></button>
      {sent && <p className="form-success"><CheckCircle2 /> Tack! Ditt meddelande är skickat.</p>}
    </form>
  );
}
