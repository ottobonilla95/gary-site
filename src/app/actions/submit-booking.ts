"use server";

import { randomUUID } from "node:crypto";
import { Resend } from "resend";

export type BookingError = "validation" | "configuration" | "delivery";

export type BookingResult =
  | { ok: true; reference: string }
  | { ok: false; error: BookingError };

const requiredFields = [
  "name",
  "phone",
  "email",
  "fromAddress",
  "fromFloor",
  "fromElevator",
  "toAddress",
  "toFloor",
  "toElevator",
] as const;

function read(formData: FormData, name: string, maximum = 500) {
  return String(formData.get(name) ?? "").trim().slice(0, maximum);
}

function makeReference(submissionId: string) {
  const identifier = submissionId.replace(/[^a-z0-9]/gi, "").slice(0, 8);
  return `FLY-${(identifier || randomUUID().slice(0, 8)).toUpperCase()}`;
}

export async function submitBooking(formData: FormData): Promise<BookingResult> {
  const submissionId = read(formData, "submissionId", 64) || randomUUID();
  const reference = makeReference(submissionId);

  // Quietly accept bot submissions without sending an email.
  if (read(formData, "website", 200)) return { ok: true, reference };

  const fields = Object.fromEntries(
    requiredFields.map((field) => [field, read(formData, field)]),
  ) as Record<(typeof requiredFields)[number], string>;
  const description = read(formData, "description", 3000);
  const language = read(formData, "language", 2) === "en" ? "en" : "sv";

  if (
    requiredFields.some((field) => !fields[field]) ||
    !/^\S+@\S+\.\S+$/.test(fields.email)
  ) {
    return { ok: false, error: "validation" };
  }

  const subject = `Booking enquiry ${reference} — ${fields.name}`;
  const text = [
    `BOOKING ENQUIRY ${reference}`,
    "",
    `Language: ${language === "sv" ? "Swedish" : "English"}`,
    `Name: ${fields.name}`,
    `Phone: ${fields.phone}`,
    `Email: ${fields.email}`,
    "",
    "FROM",
    `Address: ${fields.fromAddress}`,
    `Floor: ${fields.fromFloor}`,
    `Lift: ${fields.fromElevator}`,
    "",
    "TO",
    `Address: ${fields.toAddress}`,
    `Floor: ${fields.toFloor}`,
    `Lift: ${fields.toElevator}`,
    "",
    `Description: ${description || "Not provided"}`,
  ].join("\n");

  if (process.env.BOOKING_EMAIL_MODE === "preview") {
    console.info(subject, "\n", text);
    return { ok: true, reference };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.BOOKING_NOTIFICATION_EMAIL;
  const from = process.env.BOOKING_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    console.error("Booking email is missing required environment configuration.");
    return { ok: false, error: "configuration" };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send(
      {
        from,
        to: [to],
        replyTo: fields.email,
        subject,
        text,
      },
      { headers: { "Idempotency-Key": `booking-${submissionId}` } },
    );

    if (error) {
      console.error("Booking email delivery failed.", error);
      return { ok: false, error: "delivery" };
    }

    return { ok: true, reference };
  } catch (error) {
    console.error("Booking email delivery failed.", error);
    return { ok: false, error: "delivery" };
  }
}
