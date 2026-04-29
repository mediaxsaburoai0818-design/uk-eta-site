import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      {/* Main footer */}
      <div className="bg-[#011a33]">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Site info */}
            <div>
              <p
                className="text-lg font-bold mb-3 text-white"
                style={{
                  fontFamily: "var(--font-noto-serif), serif",
                }}
              >
                UK ETA Online
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "white" }}>
                Kompletny przewodnik po Elektronicznej Autoryzacji Podrozy
                (ETA) do Wielkiej Brytanii.
              </p>
            </div>

            {/* ETA Info links */}
            <div>
              <h3 className="text-sm font-bold mb-3 uppercase tracking-wider" style={{ color: "white" }}>
                Informacje o UK ETA
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/eta-info/what-is-eta/"
                    className="hover:text-gray-200 transition" style={{ color: "white", textDecoration: "underline" }}
                  >
                    Czym jest UK ETA?
                  </Link>
                </li>
                <li>
                  <Link
                    href="/eta-info/application/"
                    className="hover:text-gray-200 transition" style={{ color: "white", textDecoration: "underline" }}
                  >
                    Sposob skladania wniosku
                  </Link>
                </li>
                <li>
                  <Link
                    href="/eta-info/fee/"
                    className="hover:text-gray-200 transition" style={{ color: "white", textDecoration: "underline" }}
                  >
                    Oplaty
                  </Link>
                </li>
                <li>
                  <Link
                    href="/eta-info/expiration/"
                    className="hover:text-gray-200 transition" style={{ color: "white", textDecoration: "underline" }}
                  >
                    Okres waznosci
                  </Link>
                </li>
                <li>
                  <Link
                    href="/eta-info/status-check/"
                    className="hover:text-gray-200 transition" style={{ color: "white", textDecoration: "underline" }}
                  >
                    Sprawdzenie statusu
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq/"
                    className="hover:text-gray-200 transition" style={{ color: "white", textDecoration: "underline" }}
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Site info links */}
            <div>
              <h3 className="text-sm font-bold mb-3 uppercase tracking-wider" style={{ color: "white" }}>
                Informacje o stronie
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/site-info/about/"
                    className="hover:text-gray-200 transition" style={{ color: "white", textDecoration: "underline" }}
                  >
                    O nas
                  </Link>
                </li>
                <li>
                  <Link
                    href="/site-info/contact/"
                    className="hover:text-gray-200 transition" style={{ color: "white", textDecoration: "underline" }}
                  >
                    Kontakt
                  </Link>
                </li>
                <li>
                  <Link
                    href="/site-info/privacy-policy/"
                    className="hover:text-gray-200 transition" style={{ color: "white", textDecoration: "underline" }}
                  >
                    Polityka prywatnosci
                  </Link>
                </li>
                <li>
                  <Link
                    href="/site-info/agreement/"
                    className="hover:text-gray-200 transition" style={{ color: "white", textDecoration: "underline" }}
                  >
                    Regulamin
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sitemap/"
                    className="hover:text-gray-200 transition" style={{ color: "white", textDecoration: "underline" }}
                  >
                    Mapa strony
                  </Link>
                </li>
              </ul>
            </div>

            {/* Official links */}
            <div>
              <h3 className="text-sm font-bold mb-3 uppercase tracking-wider" style={{ color: "white" }}>
                Strony oficjalne
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-200 transition" style={{ color: "white", textDecoration: "underline" }}
                  >
                    Oficjalna strona UK ETA (GOV.UK)
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.gov.uk/check-uk-visa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-200 transition" style={{ color: "white", textDecoration: "underline" }}
                  >
                    Sprawdz wymagania wizowe UK
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.gov.pl/web/wielkabrytania"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-200 transition" style={{ color: "white", textDecoration: "underline" }}
                  >
                    Ambasada RP w Londynie
                  </a>
                </li>
              </ul>
              <div className="mt-4 p-3 bg-[#022444] border border-white/10 rounded text-xs" style={{ color: "white" }}>
                Niniejsza strona nie jest powiazana z rzadem Wielkiej Brytanii. Oficjalna
                strona UK ETA:{" "}
                <a
                  href="https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta"
                  className="underline hover:text-white"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  gov.uk/eta
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 py-4">
          <div className="max-w-6xl mx-auto px-4">
            <p className="text-xs text-center" style={{ color: "white" }}>
              &copy; {new Date().getFullYear()} UK ETA Online. Wszelkie prawa
              zastrzezone. | Strona informacyjna &mdash; nie jest oficjalna
              strona rzadu Wielkiej Brytanii.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
