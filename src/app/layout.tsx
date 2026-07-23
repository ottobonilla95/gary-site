import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.flyttiva.se"),
  title: { default: "Flyttiva | Enkelt. Tryggt. Flyttat.", template: "%s | Flyttiva" },
  description: "Professionella flyttjänster för privatpersoner och företag i hela Sverige.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sv">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
