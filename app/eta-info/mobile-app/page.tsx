import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Aplikacja mobilna UK ETA",
  description:
    "Jak korzystac z oficjalnej aplikacji UK ETA do skladania wnioskow na smartfonie. Dostepna na iOS i Android.",
};

export default function MobileApp() {
  return (
    <div>
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 pt-12 pb-8">
          <Breadcrumb
            items={[
              { label: "Informacje o UK ETA", href: "/eta-info/what-is-eta/" },
              { label: "Aplikacja mobilna" },
            ]}
          />
          <h1
            className="text-3xl md:text-4xl font-bold text-[#022444] mb-6"
            style={{ fontFamily: "var(--font-noto-serif), serif" }}
          >
            Aplikacja mobilna UK ETA
          </h1>
          <p className="text-gray-600 leading-relaxed">
            Rzad Wielkiej Brytanii udostepnil oficjalna aplikacje mobilna
            &quot;UK ETA&quot;, ktora umozliwia skladanie wnioskow bezposrednio
            ze smartfona.
          </p>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">O aplikacji UK ETA</h2>
          <p className="text-gray-600 leading-relaxed">
            Aplikacja UK ETA to oficjalne narzedzie Home Office do skladania
            wnioskow o elektroniczna autoryzacje podrozy. Jest to zalecany sposob
            skladania wnioskow, poniewaz umozliwia skanowanie paszportu za
            pomoca NFC i automatyczne wypelnianie danych.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Dostepnosc</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>
              <strong>iOS (App Store)</strong> &mdash; dla urzadzen Apple
              (iPhone). Wymaga iOS 15.6 lub nowszego.
            </li>
            <li>
              <strong>Android (Google Play)</strong> &mdash; dla urzadzen z
              systemem Android. Wymaga Android 9.0 lub nowszego.
            </li>
          </ul>
          <p className="text-sm text-gray-600 mt-4">
            Szukaj aplikacji pod nazwa &quot;UK ETA&quot;, wydawca: Home Office.
          </p>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Funkcje aplikacji</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Skladanie nowego wniosku UK ETA</li>
            <li>Skanowanie paszportu biometrycznego (NFC + OCR)</li>
            <li>Robienie zdjecia twarzy (selfie) do weryfikacji</li>
            <li>Sprawdzanie statusu istniejacego wniosku</li>
            <li>Platnosc przez karte, Apple Pay lub Google Pay</li>
            <li>Powiadomienia push o zmianie statusu</li>
          </ul>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Jak zlozyc wniosek przez aplikacje?</h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-600">
            <li>Pobierz aplikacje &quot;UK ETA&quot; z App Store lub Google Play</li>
            <li>Utworz konto (adres e-mail i haslo)</li>
            <li>Zeskanuj paszport biometryczny (przyloz telefon do paszportu)</li>
            <li>Zrob zdjecie twarzy (selfie)</li>
            <li>Odpowiedz na pytania w formularzu</li>
            <li>Dokonaj platnosci &pound;10</li>
            <li>Wyslij wniosek i oczekuj na decyzje</li>
          </ol>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Skanowanie paszportu (NFC)</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Aplikacja uzywa technologii NFC (Near Field Communication) do
            odczytania danych z chipa biometrycznego w paszporcie. Aby
            zeskanowac paszport:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Otworz paszport na stronie ze zdjeciem</li>
            <li>Przyloz tyl telefonu do otwartego paszportu</li>
            <li>Trzymaj nieruchomo przez 5-10 sekund</li>
            <li>Poczekaj, az aplikacja potwierdzi odczytanie danych</li>
          </ul>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Zalety aplikacji mobilnej</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Skanowanie paszportu NFC &mdash; automatyczne wypelnianie danych</li>
            <li>Szybsze skladanie wniosku niz przez strone internetowa</li>
            <li>Powiadomienia push o statusie wniosku</li>
            <li>Bezpieczenstwo biometryczne (Face ID / Touch ID)</li>
          </ul>
          <div className="bg-gray-50 border-l-4 border-[#022444] p-4 rounded-r text-sm text-gray-700 mt-6">
            <strong>Uwaga:</strong> Upewnij sie, ze pobierasz oficjalna aplikacje.
            Szukaj wydawcy &quot;Home Office&quot; w sklepie z aplikacjami.
            Falszywe aplikacje moga krassc dane osobowe.
          </div>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/eta-info/application/"
              className="bg-[#022444] hover:bg-[#0a3a6b] text-white px-6 py-3 rounded font-bold text-sm transition text-center"
            >
              Sposob skladania wniosku &rarr;
            </Link>
            <a
              href="https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full max-w-md mx-auto bg-[#8d1812] hover:bg-[#6d120e] rounded-xl border-2 border-white py-5 px-6 text-center transition shadow-lg"
              style={{ color: "white", textDecoration: "none" }}
            >
              <span className="text-white text-lg font-bold" style={{ color: "white" }}>Zloz wniosek UK ETA</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
