"use client";

import type { FormEvent, MouseEvent } from "react";
import { useRef } from "react";
import { ArrowUpRight, MessageCircle, X } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { getUi, type Language } from "@/lib/i18n";

function value(formData: FormData, name: string) {
  return String(formData.get(name) ?? "").trim();
}

export function BookingDialog({ language }: { language: Language }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const t = getUi(language).booking;

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
    const message = language === "sv" ? `Hej Flyttiva!

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

Beskrivning: ${value(formData, "description") || t.emptyDescription}` : `Hello Flyttiva!

I would like to book a move.

Name: ${value(formData, "name")}
Phone: ${value(formData, "phone")}
Email: ${value(formData, "email")}

FROM
Address: ${value(formData, "fromAddress")}
Floor: ${value(formData, "fromFloor")}
Lift: ${value(formData, "fromElevator")}

TO
Address: ${value(formData, "toAddress")}
Floor: ${value(formData, "toFloor")}
Lift: ${value(formData, "toElevator")}

Description: ${value(formData, "description") || t.emptyDescription}`;

    window.open(getWhatsAppUrl(message), "_blank", "noopener,noreferrer");
    closeDialog();
  }

  return (
    <>
      <button className="button button--ivory hero-booking" type="button" aria-haspopup="dialog" onClick={openDialog}>
        <MessageCircle /> {t.button} <ArrowUpRight />
      </button>

      <dialog className="booking-dialog" ref={dialogRef} aria-labelledby="booking-dialog-title" onClick={handleBackdropClick}>
        <div className="booking-dialog__panel">
          <div className="booking-dialog__header">
            <div>
              <span>{t.eyebrow}</span>
              <h2 id="booking-dialog-title">{t.title}</h2>
              <p>{t.intro}</p>
            </div>
            <button className="booking-dialog__close" type="button" aria-label={t.close} onClick={closeDialog}>
              <X />
            </button>
          </div>

          <form className="booking-form" onSubmit={handleSubmit}>
            <div className="booking-form__contact">
              <label>
                <span>{t.name}</span>
                <input name="name" type="text" autoComplete="name" placeholder={t.namePlaceholder} required />
              </label>
              <label>
                <span>{t.phone}</span>
                <input name="phone" type="tel" autoComplete="tel" inputMode="tel" placeholder="070 123 45 67" required />
              </label>
              <label className="booking-form__wide">
                <span>{t.email}</span>
                <input name="email" type="email" autoComplete="email" inputMode="email" placeholder={t.emailPlaceholder} required />
              </label>
            </div>

            <fieldset>
              <legend>{t.from}</legend>
              <div className="booking-form__address">
                <label>
                  <span>{t.address}</span>
                  <input name="fromAddress" type="text" placeholder={t.addressPlaceholder} required />
                </label>
                <label>
                  <span>{t.floor}</span>
                  <input name="fromFloor" type="text" placeholder={t.fromFloorPlaceholder} required />
                </label>
                <label>
                  <span>{t.elevator}</span>
                  <select name="fromElevator" defaultValue="" required>
                    <option value="" disabled>{t.choose}</option>
                    <option value={t.yes}>{t.yes}</option>
                    <option value={t.no}>{t.no}</option>
                  </select>
                </label>
              </div>
            </fieldset>

            <fieldset>
              <legend>{t.to}</legend>
              <div className="booking-form__address">
                <label>
                  <span>{t.address}</span>
                  <input name="toAddress" type="text" placeholder={t.addressPlaceholder} required />
                </label>
                <label>
                  <span>{t.floor}</span>
                  <input name="toFloor" type="text" placeholder={t.toFloorPlaceholder} required />
                </label>
                <label>
                  <span>{t.elevator}</span>
                  <select name="toElevator" defaultValue="" required>
                    <option value="" disabled>{t.choose}</option>
                    <option value={t.yes}>{t.yes}</option>
                    <option value={t.no}>{t.no}</option>
                  </select>
                </label>
              </div>
            </fieldset>

            <label className="booking-form__description">
              <span>{t.description}</span>
              <textarea name="description" rows={4} placeholder={t.descriptionPlaceholder} />
            </label>

            <div className="booking-form__footer">
              <p>{t.note}</p>
              <button className="button booking-form__submit" type="submit">
                <MessageCircle /> {t.submit} <ArrowUpRight />
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}
