import type { Metadata } from "next";
import { Noto_Sans, Noto_Serif, Fraunces } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

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

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "UK ETA Online 2026 | Polskojezyczny przewodnik krok po kroku",
    template: "%s ‐ UK ETA Online",
  },
  description:
    "Polskojezyczny kompletny przewodnik UK ETA 2026. Przy podrozy do Wielkiej Brytanii obowiazek od 2 kwietnia 2025 — wniosek nalezy zlozyc 3 dni przed wyjazdem. Pamietaj, aby zlozyc wniosek w terminie.",
  keywords:
    "UK ETA, UK ETA 2026, Wielka Brytania, autoryzacja podrozy, Electronic Travel Authorisation, wniosek ETA, Polska, oplata £20",
  robots: { index: true, follow: true },
  openGraph: {
    title: "UK ETA Online 2026 | Polskojezyczny przewodnik krok po kroku",
    description:
      "Polskojezyczny kompletny przewodnik UK ETA 2026. Przy podrozy do Wielkiej Brytanii obowiazek od 2 kwietnia 2025 — wniosek nalezy zlozyc 3 dni przed wyjazdem. Pamietaj, aby zlozyc wniosek w terminie.",
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
        className={`${notoSans.variable} ${notoSerif.variable} ${fraunces.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Reveal />
      </body>
    </html>
  );
}
