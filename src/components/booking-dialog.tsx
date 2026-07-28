"use client";

import type { FormEvent, MouseEvent } from "react";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, CalendarCheck, CheckCircle2, LoaderCircle, X } from "lucide-react";
import { submitBooking, type BookingError } from "@/app/actions/submit-booking";
import { getUi, type Language } from "@/lib/i18n";

type Phase = "idle" | "submitting" | "success" | "error";

export function BookingDialog({
  language,
  open,
  initialDescription,
  onClose,
}: {
  language: Language;
  open: boolean;
  initialDescription: string;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [phase, setPhase] = useState<Phase>("idle");
  const [error, setError] = useState<BookingError | null>(null);
  const [reference, setReference] = useState("");
  const [submissionId, setSubmissionId] = useState("");
  const t = getUi(language).booking;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      formRef.current?.reset();
      setPhase("idle");
      setError(null);
      setReference("");
      setSubmissionId(window.crypto.randomUUID());
      dialog.showModal();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  function closeDialog() {
    if (phase !== "submitting") onClose();
  }

  function handleBackdropClick(event: MouseEvent<HTMLDialogElement>) {
    if (event.target === event.currentTarget) closeDialog();
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPhase("submitting");
    setError(null);

    const result = await submitBooking(new FormData(event.currentTarget));
    if (result.ok) {
      setReference(result.reference);
      setPhase("success");
      return;
    }

    setError(result.error);
    setPhase("error");
  }

  const errorMessage = error ? t.errors[error] : "";

  return (
    <dialog
      className="booking-dialog"
      ref={dialogRef}
      aria-labelledby="booking-dialog-title"
      onCancel={(event) => {
        event.preventDefault();
        closeDialog();
      }}
      onClick={handleBackdropClick}
    >
      <div className="booking-dialog__panel">
        <div className="booking-dialog__header">
          <div>
            <span>{t.eyebrow}</span>
            <h2 id="booking-dialog-title">{t.title}</h2>
            <p>{t.intro}</p>
          </div>
          <button className="booking-dialog__close" type="button" aria-label={t.close} onClick={closeDialog} disabled={phase === "submitting"}>
            <X />
          </button>
        </div>

        {phase === "success" ? (
          <div className="booking-success" role="status">
            <CheckCircle2 />
            <h3>{t.successTitle}</h3>
            <p>{t.successText}</p>
            <span>{t.referenceLabel}: <strong>{reference}</strong></span>
            <button className="button booking-form__submit" type="button" onClick={closeDialog}>{t.closeSuccess}</button>
          </div>
        ) : (
          <form className="booking-form" ref={formRef} onSubmit={handleSubmit} aria-busy={phase === "submitting"}>
            <input type="hidden" name="submissionId" value={submissionId} />
            <input type="hidden" name="language" value={language} />
            <label className="booking-honeypot" aria-hidden="true">
              Website
              <input name="website" type="text" tabIndex={-1} autoComplete="off" />
            </label>

            <div className="booking-form__contact">
              <label><span>{t.name}</span><input name="name" type="text" autoComplete="name" placeholder={t.namePlaceholder} maxLength={120} required /></label>
              <label><span>{t.phone}</span><input name="phone" type="tel" autoComplete="tel" inputMode="tel" placeholder="070 123 45 67" maxLength={60} required /></label>
              <label className="booking-form__wide"><span>{t.email}</span><input name="email" type="email" autoComplete="email" inputMode="email" placeholder={t.emailPlaceholder} maxLength={200} required /></label>
            </div>

            <fieldset>
              <legend>{t.from}</legend>
              <div className="booking-form__address">
                <label><span>{t.address}</span><input name="fromAddress" type="text" autoComplete="street-address" placeholder={t.addressPlaceholder} maxLength={500} required /></label>
                <label><span>{t.floor}</span><input name="fromFloor" type="text" placeholder={t.fromFloorPlaceholder} maxLength={50} required /></label>
                <label><span>{t.elevator}</span><select name="fromElevator" defaultValue="" required><option value="" disabled>{t.choose}</option><option value={t.yes}>{t.yes}</option><option value={t.no}>{t.no}</option></select></label>
              </div>
            </fieldset>

            <fieldset>
              <legend>{t.to}</legend>
              <div className="booking-form__address">
                <label><span>{t.address}</span><input name="toAddress" type="text" placeholder={t.addressPlaceholder} maxLength={500} required /></label>
                <label><span>{t.floor}</span><input name="toFloor" type="text" placeholder={t.toFloorPlaceholder} maxLength={50} required /></label>
                <label><span>{t.elevator}</span><select name="toElevator" defaultValue="" required><option value="" disabled>{t.choose}</option><option value={t.yes}>{t.yes}</option><option value={t.no}>{t.no}</option></select></label>
              </div>
            </fieldset>

            <label className="booking-form__description">
              <span>{t.description}</span>
              <textarea name="description" rows={4} placeholder={t.descriptionPlaceholder} defaultValue={initialDescription} maxLength={3000} />
            </label>

            {phase === "error" && <p className="booking-form__status" role="alert">{errorMessage}</p>}

            <div className="booking-form__footer">
              <p>{t.note}</p>
              <button className="button booking-form__submit" type="submit" disabled={phase === "submitting"}>
                {phase === "submitting" ? <LoaderCircle className="booking-spinner" /> : <CalendarCheck />}
                {phase === "submitting" ? t.submitting : t.submit}
                {phase !== "submitting" && <ArrowUpRight />}
              </button>
            </div>
          </form>
        )}
      </div>
    </dialog>
  );
}
