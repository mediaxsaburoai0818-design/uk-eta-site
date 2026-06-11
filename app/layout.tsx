import type { Metadata } from "next";
import { Work_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import StickyCta from "@/components/StickyCta";

// Font option 2 — Playfair Display (display/headings) × Work Sans (body).
// Variable names kept identical so existing globals.css/components need no change.
const notoSans = Work_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-noto-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const notoSerif = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-noto-serif",
  weight: ["500", "600", "700"],
  display: "swap",
});

const fraunces = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-fraunces",
  weight: ["500", "600", "700", "800"],
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
  metadataBase: new URL("https://eta-pl.com"),
  openGraph: {
    title: "UK ETA Online 2026 | Polskojezyczny przewodnik krok po kroku",
    description:
      "Polskojezyczny kompletny przewodnik UK ETA 2026. Przy podrozy do Wielkiej Brytanii obowiazek od 2 kwietnia 2025 — wniosek nalezy zlozyc 3 dni przed wyjazdem. Pamietaj, aby zlozyc wniosek w terminie.",
    locale: "pl_PL",
    type: "website",
    siteName: "UK ETA Online",
    url: "https://eta-pl.com/",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "UK ETA Online — Big Ben i Most Westminsterski w Londynie",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UK ETA Online 2026 | Polskojezyczny przewodnik krok po kroku",
    description:
      "Polskojezyczny kompletny przewodnik UK ETA 2026 — oplata £20, decyzja zwykle do 72h, waznosc 2 lata.",
    images: ["/og-image.jpg"],
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
        <StickyCta />
      </body>
    </html>
  );
}
