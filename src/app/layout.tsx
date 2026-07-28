import type { Metadata } from "next";
import { BookingProvider } from "@/components/booking-provider";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getRequestLanguage } from "@/lib/i18n-server";
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
  return (
    <html lang={language} data-scroll-behavior="smooth">
      <body>
        <BookingProvider language={language}>
          <ScrollReveal />
          <SiteHeader language={language} />
          <main>{children}</main>
          <SiteFooter language={language} />
        </BookingProvider>
      </body>
    </html>
  );
}
