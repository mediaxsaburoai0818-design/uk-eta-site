import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Polityka prywatnosci",
  description: "Polityka prywatnosci serwisu UK ETA Online. Informacje o przetwarzaniu danych osobowych.",
};

export default function PrivacyPolicy() {
  return (
    <div>
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 pt-12 pb-8">
          <Breadcrumb
            items={[
              { label: "Informacje o stronie", href: "/site-info/about/" },
              { label: "Polityka prywatnosci" },
            ]}
          />
          <h1
            className="text-3xl md:text-4xl font-bold text-[#022444] mb-4"
            style={{ fontFamily: "var(--font-noto-serif), serif" }}
          >
            Polityka prywatnosci
          </h1>
          <p className="text-sm text-gray-500">Ostatnia aktualizacja: kwiecien 2026</p>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">1. Informacje ogolne</h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            Niniejsza polityka prywatnosci okresla zasady przetwarzania i ochrony
            danych osobowych uzytkownikow serwisu UK ETA Online. Szanujemy
            prywatnosc uzytkownikow i dbamy o bezpieczenstwo danych.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">2. Zbierane dane</h2>
          <p className="text-gray-600 text-sm mb-3">Serwis moze zbierac nastepujace dane:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
            <li>Dane podane w formularzach (imie, adres e-mail, tresc wiadomosci)</li>
            <li>Dane techniczne (adres IP, typ przegladarki, system operacyjny)</li>
            <li>Pliki cookies (zgodnie z polityka cookies)</li>
            <li>Dane analityczne (czas wizyty, odwiedzone strony)</li>
          </ul>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">3. Cel przetwarzania danych</h2>
          <p className="text-gray-600 text-sm mb-3">Dane sa przetwarzane w celu:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
            <li>Odpowiedzi na zapytania przeslane przez formularz kontaktowy</li>
            <li>Analizy ruchu na stronie i optymalizacji serwisu</li>
            <li>Zapewnienia bezpieczenstwa serwisu</li>
            <li>Wyswietlania tresci dostosowanych do uzytkownika</li>
          </ul>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">4. Pliki cookies</h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            Serwis uzywa plikow cookies w celu zapewnienia prawidlowego
            dzialania strony, analizy ruchu i personalizacji tresci. Uzytkownik
            moze kontrolowac pliki cookies poprzez ustawienia przegladarki.
          </p>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">5. Udostepnianie danych</h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            Dane osobowe nie sa udostepniane osobom trzecim, z wyjatkiem sytuacji
            wymaganych przez prawo lub niezbednych do swiadczenia uslugi (np.
            hosting, narzedzia analityczne).
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">6. Prawa uzytkownika (RODO)</h2>
          <p className="text-gray-600 text-sm mb-3">Zgodnie z RODO, uzytkownik ma prawo do:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
            <li>Dostepu do swoich danych osobowych</li>
            <li>Sprostowania nieprawidlowych danych</li>
            <li>Usuniecia danych (&quot;prawo do bycia zapomnianym&quot;)</li>
            <li>Ograniczenia przetwarzania</li>
            <li>Przenoszenia danych</li>
            <li>Sprzeciwu wobec przetwarzania</li>
          </ul>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">7. Bezpieczenstwo danych</h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            Stosujemy odpowiednie srodki techniczne i organizacyjne w celu
            ochrony danych osobowych przed nieuprawnionym dostepem, utrata lub
            zniszczeniem. Strona korzysta z szyfrowania SSL/TLS.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">8. Kontakt</h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            W sprawach dotyczacych ochrony danych osobowych prosimy o kontakt
            poprzez{" "}
            <Link href="/site-info/contact/" className="text-[#022444] underline">
              formularz kontaktowy
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
