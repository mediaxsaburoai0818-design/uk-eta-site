import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Mapa strony",
  description:
    "Pelna lista wszystkich stron na UK ETA Online - przegladaj zawartosc serwisu.",
};

const sections = [
  {
    title: "Strony glowne",
    links: [
      { href: "/", label: "Strona glowna" },
      { href: "/faq/", label: "FAQ" },
    ],
  },
  {
    title: "Informacje o UK ETA",
    links: [
      { href: "/eta-info/what-is-eta/", label: "Czym jest UK ETA?" },
      { href: "/eta-info/application/", label: "Sposob skladania wniosku" },
      { href: "/eta-info/fee/", label: "Oplaty" },
      { href: "/eta-info/expiration/", label: "Okres waznosci" },
      { href: "/eta-info/status-check/", label: "Sprawdzenie statusu wniosku" },
      { href: "/eta-info/required-documents/", label: "Wymagane dokumenty" },
      { href: "/eta-info/official-gov-uk/", label: "Oficjalna strona GOV.UK" },
      { href: "/eta-info/mobile-app/", label: "Aplikacja mobilna" },
      { href: "/eta-info/transit/", label: "Tranzyt przez UK" },
      { href: "/eta-info/polish-community/", label: "Polacy w Wielkiej Brytanii" },
    ],
  },
  {
    title: "Informacje o stronie",
    links: [
      { href: "/site-info/about/", label: "O nas" },
      { href: "/site-info/contact/", label: "Kontakt" },
      { href: "/site-info/privacy-policy/", label: "Polityka prywatnosci" },
      { href: "/site-info/agreement/", label: "Regulamin" },
    ],
  },
];

export default function Sitemap() {
  return (
    <div>
      <section className="sub-hero relative overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/sub-hero/sitemap.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 sub-hero-scrim" />
        <div className="relative max-w-4xl mx-auto px-6 pt-12 pb-12 md:pt-14 md:pb-16">
          <p className="kicker mb-3 mt-4">MAPA STRONY</p>
          <Breadcrumb items={[{ label: "Mapa strony" }]} />
          <h1
            className="deco-head text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-noto-serif), serif" }}
          >
            <span className="deco-line" />
            Mapa strony
          </h1>
        </div>
      </section>

      {sections.map((section, i) => (
        <section key={section.title} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
          <div className="max-w-4xl mx-auto px-6 py-10">
            <h2 className="font-bold text-[#022444] text-lg mb-3 border-b border-gray-200 pb-2">
              {section.title}
            </h2>
            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-[#022444] transition underline underline-offset-2"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}
    </div>
  );
}
