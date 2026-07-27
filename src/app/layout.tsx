import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { generalBookingMessage, getWhatsAppUrl } from "@/lib/whatsapp";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.flyttiva.se"),
  title: { default: "Flyttiva | Flytthjälp med omsorg", template: "%s | Flyttiva" },
  description: "Personlig och professionell flytthjälp för hem och företag i hela Sverige.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sv">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <a
          className="mobile-whatsapp"
          href={getWhatsAppUrl(generalBookingMessage)}
          target="_blank"
          rel="noreferrer"
          aria-label="Planera din flytt på WhatsApp"
        >
          <MessageCircle />
        </a>
        <SiteFooter />
      </body>
    </html>
  );
}
