import type { Metadata } from "next";
import { Noto_Sans, Noto_Serif } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const notoSans = Noto_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-noto-sans",
  weight: ["400", "500", "700"],
  display: "swap",
});

const notoSerif = Noto_Serif({
  subsets: ["latin", "latin-ext"],
  variable: "--font-noto-serif",
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "UK ETA Online - Elektroniczna Autoryzacja Podrozy do Wielkiej Brytanii",
    template: "%s | UK ETA Online",
  },
  description:
    "Kompletny przewodnik po UK ETA (Electronic Travel Authorisation) do Wielkiej Brytanii. Procedura skladania wniosku, oplaty, FAQ i wiecej.",
  keywords:
    "UK ETA, Wielka Brytania, autoryzacja podrozy, Electronic Travel Authorisation, wniosek ETA, Polska, podrozowanie do Anglii, GOV.UK",
  robots: { index: true, follow: true },
  openGraph: {
    title: "UK ETA Online - Elektroniczna Autoryzacja Podrozy do Wielkiej Brytanii",
    description:
      "Kompletny przewodnik po systemie UK ETA. Informacje, procedura, koszty i FAQ.",
    locale: "pl_PL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <head>
        <meta
          httpEquiv="Cache-Control"
          content="no-cache, no-store, must-revalidate"
        />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </head>
      <body
        className={`${notoSans.variable} ${notoSerif.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
