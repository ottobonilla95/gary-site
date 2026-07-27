"use client";

import type { FormEvent, MouseEvent } from "react";
import { useRef } from "react";
import { ArrowUpRight, MessageCircle, X } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

function value(formData: FormData, name: string) {
  return String(formData.get(name) ?? "").trim();
}

export function BookingDialog() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  function openDialog() {
    dialogRef.current?.showModal();
  }

  function closeDialog() {
    dialogRef.current?.close();
  }

  function handleBackdropClick(event: MouseEvent<HTMLDialogElement>) {
    if (event.target === event.currentTarget) closeDialog();
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const message = `Hej Flyttiva!

Jag vill boka en flytt.

Namn: ${value(formData, "name")}
Telefon: ${value(formData, "phone")}
E-post: ${value(formData, "email")}

FRÅN
Adress: ${value(formData, "fromAddress")}
Våning: ${value(formData, "fromFloor")}
Hiss: ${value(formData, "fromElevator")}

TILL
Adress: ${value(formData, "toAddress")}
Våning: ${value(formData, "toFloor")}
Hiss: ${value(formData, "toElevator")}

Beskrivning: ${value(formData, "description") || "Ingen ytterligare information"}`;

    window.open(getWhatsAppUrl(message), "_blank", "noopener,noreferrer");
    closeDialog();
  }

  return (
    <>
      <button className="button button--ivory hero-booking" type="button" aria-haspopup="dialog" onClick={openDialog}>
        <MessageCircle /> Boka din flytt <ArrowUpRight />
      </button>

      <dialog className="booking-dialog" ref={dialogRef} aria-labelledby="booking-dialog-title" onClick={handleBackdropClick}>
        <div className="booking-dialog__panel">
          <div className="booking-dialog__header">
            <div>
              <span>Bokningsförfrågan</span>
              <h2 id="booking-dialog-title">Berätta om din flytt</h2>
              <p>Fyll i detaljerna nedan. När du fortsätter öppnas WhatsApp med allt färdigt att skicka.</p>
            </div>
            <button className="booking-dialog__close" type="button" aria-label="Stäng bokningsformuläret" onClick={closeDialog}>
              <X />
            </button>
          </div>

          <form className="booking-form" onSubmit={handleSubmit}>
            <div className="booking-form__contact">
              <label>
                <span>Namn</span>
                <input name="name" type="text" autoComplete="name" placeholder="Ditt fullständiga namn" required />
              </label>
              <label>
                <span>Telefonnummer</span>
                <input name="phone" type="tel" autoComplete="tel" inputMode="tel" placeholder="070 123 45 67" required />
              </label>
              <label className="booking-form__wide">
                <span>E-post</span>
                <input name="email" type="email" autoComplete="email" inputMode="email" placeholder="namn@exempel.se" required />
              </label>
            </div>

            <fieldset>
              <legend>Från</legend>
              <div className="booking-form__address">
                <label>
                  <span>Adress</span>
                  <input name="fromAddress" type="text" placeholder="Gatuadress, postnummer och ort" required />
                </label>
                <label>
                  <span>Våning</span>
                  <input name="fromFloor" type="text" placeholder="T.ex. 3 eller BV" required />
                </label>
                <label>
                  <span>Finns hiss?</span>
                  <select name="fromElevator" defaultValue="" required>
                    <option value="" disabled>Välj</option>
                    <option value="Ja">Ja</option>
                    <option value="Nej">Nej</option>
                  </select>
                </label>
              </div>
            </fieldset>

            <fieldset>
              <legend>Till</legend>
              <div className="booking-form__address">
                <label>
                  <span>Adress</span>
                  <input name="toAddress" type="text" placeholder="Gatuadress, postnummer och ort" required />
                </label>
                <label>
                  <span>Våning</span>
                  <input name="toFloor" type="text" placeholder="T.ex. 2 eller BV" required />
                </label>
                <label>
                  <span>Finns hiss?</span>
                  <select name="toElevator" defaultValue="" required>
                    <option value="" disabled>Välj</option>
                    <option value="Ja">Ja</option>
                    <option value="Nej">Nej</option>
                  </select>
                </label>
              </div>
            </fieldset>

            <label className="booking-form__description">
              <span>Beskrivning</span>
              <textarea name="description" rows={4} placeholder="Berätta gärna om bostadsstorlek, önskat datum, tunga föremål eller annat vi behöver känna till." />
            </label>

            <div className="booking-form__footer">
              <p>Ingen bindande bokning. Vi bekräftar upplägg och pris med dig först.</p>
              <button className="button booking-form__submit" type="submit">
                <MessageCircle /> Fortsätt till WhatsApp <ArrowUpRight />
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}
