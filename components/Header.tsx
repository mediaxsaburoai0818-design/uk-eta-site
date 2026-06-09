"use client";

import Link from "next/link";
import { useState } from "react";

const subnav = [
  { label: "Czym jest UK ETA?", href: "/eta-info/what-is-eta/" },
  { label: "Sposob skladania wniosku", href: "/eta-info/application/" },
  { label: "Oplaty", href: "/eta-info/fee/" },
  { label: "Okres waznosci", href: "/eta-info/expiration/" },
  { label: "Sprawdzenie statusu", href: "/eta-info/status-check/" },
  { label: "Wymagane dokumenty", href: "/eta-info/required-documents/" },
  { label: "Oficjalna strona GOV.UK", href: "/eta-info/official-gov-uk/" },
  { label: "Aplikacja mobilna", href: "/eta-info/mobile-app/" },
  { label: "Tranzyt przez UK", href: "/eta-info/transit/" },
  { label: "Polacy w Wielkiej Brytanii", href: "/eta-info/polish-community/" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10" style={{ backgroundColor: "var(--color-navy)" }}>
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 no-underline">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-uk-eta.png"
              alt="UK ETA Online"
              width={48}
              height={48}
              className="h-10 w-10 lg:h-12 lg:w-12 object-contain"
            />
            <div className="leading-tight">
              <span
                className="block text-[16px] lg:text-[19px] font-bold tracking-tight"
                style={{
                  fontFamily: "var(--font-noto-serif), serif",
                  color: "#ffffff",
                }}
              >
                UK ETA Online
              </span>
              <span className="block text-[10px] lg:text-[11px] tracking-wide text-white/70">
                Autoryzacja podrozy do Wielkiej Brytanii
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                className="px-3 py-2 text-sm font-medium hover:text-white/75 transition bg-transparent border-0 cursor-pointer"
                style={{ color: "#ffffff" }}
              >
                Informacje o UK ETA
              </button>
              {dropdownOpen && (
                <div className="absolute top-full left-0 bg-white border border-[var(--color-border)] shadow-lg rounded-md py-2 min-w-[260px]">
                  {subnav.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      className="block px-4 py-2 text-sm hover:bg-[var(--color-blue-light)] no-underline"
                      style={{ color: "var(--color-text)" }}
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="/faq/"
              className="px-3 py-2 text-sm font-medium hover:text-white/75 transition no-underline"
              style={{ color: "#ffffff" }}
            >
              FAQ
            </Link>
            <Link
              href="/site-info/contact/"
              className="px-3 py-2 text-sm font-medium hover:text-white/75 transition no-underline"
              style={{ color: "#ffffff" }}
            >
              Kontakt
            </Link>
            <a
              href="https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 btn-red text-sm"
            >
              Zloz wniosek ETA
            </a>
          </nav>

          <button
            className="lg:hidden p-2 bg-transparent border-0 cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M6 18L18 6M6 6l12 12" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M4 6h16" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M4 12h16" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M4 18h16" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="lg:hidden mt-3 bg-white rounded-md p-3 space-y-1">
            <p className="px-3 py-1 text-xs uppercase tracking-wider font-bold" style={{ color: "var(--color-navy)" }}>
              Informacje o UK ETA
            </p>
            {subnav.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="block hover:bg-[var(--color-blue-light)] px-4 py-2 text-sm no-underline"
                style={{ color: "var(--color-text)" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {c.label}
              </Link>
            ))}
            <div className="border-t border-[var(--color-border)] mt-2 pt-2">
              <Link
                href="/faq/"
                className="block hover:bg-[var(--color-blue-light)] px-4 py-2 text-sm no-underline"
                style={{ color: "var(--color-text)" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link
                href="/site-info/contact/"
                className="block hover:bg-[var(--color-blue-light)] px-4 py-2 text-sm no-underline"
                style={{ color: "var(--color-text)" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Kontakt
              </Link>
            </div>
            <a
              href="https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-red text-sm block text-center mt-3"
              onClick={() => setMobileMenuOpen(false)}
            >
              Zloz wniosek ETA
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
