import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { siteConfig } from "@/lib/site-config";

const inter = localFont({
  src: "../fonts/inter-latin.woff2",
  variable: "--font-inter",
  display: "swap",
  weight: "400 700"
});

const spaceGrotesk = localFont({
  src: "../fonts/space-grotesk-latin.woff2",
  variable: "--font-space-grotesk",
  display: "swap",
  weight: "500 700"
});

export const metadata: Metadata = {
  title: "57 Consulting – KI-Beratung für den Mittelstand",
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    title: "57 Consulting – KI-Beratung für den Mittelstand",
    description: "Strategie, Datenarchitektur, Pilotprojekte – wir machen KI operativ nutzbar.",
    url: siteConfig.url,
    locale: "de_DE"
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        {children}
      </body>
    </html>
  );
}
