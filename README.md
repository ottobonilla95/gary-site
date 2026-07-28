# Flyttiva

A minimalist booking website for Flyttiva's moving services. Built with Next.js and designed around a focused black, warm-ivory, and muted-gold visual system.

## Pages

- Home
- Services
- Pricing
- Contact

Every booking action opens the same Swedish/English enquiry form. Validated submissions are delivered privately by email and include a booking reference.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Booking email

Copy `.env.example` to `.env.local` and configure:

- `RESEND_API_KEY`: API key from Resend.
- `BOOKING_NOTIFICATION_EMAIL`: private inbox that receives enquiries.
- `BOOKING_FROM_EMAIL`: sender on a domain verified in Resend, for example `Flyttiva Bookings <bookings@mail.flyttiva.se>`.

Add the same three values in Vercel under Project Settings → Environment Variables. `BOOKING_NOTIFICATION_EMAIL` is server-only and is never exposed on the site. For local form testing without sending email, set `BOOKING_EMAIL_MODE=preview`; do not set preview mode in production.

## Validation

```bash
npm run lint
npm run build
```
