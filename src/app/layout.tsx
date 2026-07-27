import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getUi } from "@/lib/i18n";
import { getRequestLanguage } from "@/lib/i18n-server";
import { getGeneralBookingMessage, getWhatsAppUrl } from "@/lib/whatsapp";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const language = await getRequestLanguage();
  return {
    metadataBase: new URL("https://www.flyttiva.se"),
    title: { default: language === "sv" ? "Flyttiva | Flytthjälp med omsorg" : "Flyttiva | Moving help with care", template: "%s | Flyttiva" },
    description: language === "sv" ? "Personlig och professionell flytthjälp för hem och företag i hela Sverige." : "Personal, professional moving help for homes and businesses across Sweden.",
  };
}

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const language = await getRequestLanguage();
  const t = getUi(language);
  return (
    <html lang={language}>
      <body>
        <SiteHeader language={language} />
        <main>{children}</main>
        <a className="mobile-whatsapp" href={getWhatsAppUrl(getGeneralBookingMessage(language))} target="_blank" rel="noreferrer" aria-label={t.nav.plan}><MessageCircle /></a>
        <SiteFooter language={language} />
      </body>
    </html>
  );
}
