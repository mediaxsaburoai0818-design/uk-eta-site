import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Sposob skladania wniosku UK ETA - Przewodnik krok po kroku",
  description:
    "Szczegolowy przewodnik po procedurze skladania wniosku UK ETA. Krok po kroku od przygotowania dokumentow do zatwierdzenia.",
};

export default function Application() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumb
        items={[
          { label: "Informacje o UK ETA", href: "/eta-info/what-is-eta/" },
          { label: "Sposob skladania wniosku" },
        ]}
      />

      <h1
        className="text-3xl md:text-4xl font-bold text-[#022444] mb-6"
        style={{ fontFamily: "var(--font-noto-serif), serif" }}
      >
        Sposob skladania wniosku UK ETA
      </h1>

      <p className="text-gray-600 mb-8 leading-relaxed">
        Wniosek UK ETA mozna zlozyc przez oficjalna aplikacje mobilna
        &quot;UK ETA&quot; lub przez strone GOV.UK. Ponizej przedstawiamy
        szczegolowy przewodnik po calej procedurze.
      </p>

      <img
        src="https://images.unsplash.com/photo-1436491865332-7a61a109db05?w=800&q=80"
        alt="Paszport i dokumenty podrozne"
        className="w-full h-56 object-cover rounded mb-8"
      />

      <div className="space-y-8 text-gray-600 leading-relaxed">
        <h2 className="heading-band">
          Przed rozpoczeciem &mdash; co przygotowac
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Paszport biometryczny (e-paszport) &mdash; wazny</li>
          <li>Smartfon z aparatem (do skanowania paszportu i zdjecia selfie)</li>
          <li>Adres e-mail</li>
          <li>Karta platnicza (Visa, Mastercard, Apple Pay, Google Pay)</li>
        </ul>

        <h2 className="heading-band">
          Krok 1: Pobierz aplikacje lub wejdz na strone
        </h2>
        <p>
          Pobierz aplikacje &quot;UK ETA&quot; z App Store (iOS) lub Google Play
          (Android). Mozesz tez skorzystac ze strony internetowej{" "}
          <a
            href="https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#022444] underline"
          >
            GOV.UK
          </a>
          .
        </p>

        <h2 className="heading-band">
          Krok 2: Zeskanuj paszport
        </h2>
        <p>
          Uzyj aparatu w telefonie, aby zeskanowac strone ze zdjeciem w
          paszporcie. Aplikacja automatycznie odczyta dane z chipu
          biometrycznego (NFC). Jesli telefon nie obsluguje NFC, mozesz
          wprowadzic dane recznie.
        </p>
        <div className="bg-[#F5F5F5] border-l-4 border-[#022444] p-4 rounded-r text-sm">
          <strong>Wskazowka:</strong> Przyloz paszport do tylu telefonu i
          trzymaj nieruchomo przez kilka sekund, az dane zostana odczytane.
        </div>

        <h2 className="heading-band">
          Krok 3: Zrob zdjecie twarzy (selfie)
        </h2>
        <p>
          Aplikacja poprosi o zrobienie zdjecia twarzy w celu weryfikacji
          tozsamosci. Zdjecie powinno byc zrobione w dobrym oswietleniu, na
          neutralnym tle, bez okularow i nakrycia glowy.
        </p>

        <h2 className="heading-band">
          Krok 4: Wypelnij formularz
        </h2>
        <p>
          Odpowiedz na pytania dotyczace celu podrozy, adresu pobytu w UK,
          historii podrozy i pytan bezpieczenstwa. Formularz jest krotki i
          zajmuje okolo 10 minut.
        </p>

        <h2 className="heading-band">
          Krok 5: Dokonaj platnosci (&pound;10)
        </h2>
        <p>
          Zaplac &pound;10 karta kredytowa, debetowa lub przez Apple Pay /
          Google Pay. Platnosc jest przetwarzana natychmiast.
        </p>

        <h2 className="heading-band">
          Krok 6: Oczekuj na zatwierdzenie
        </h2>
        <p>
          Po zlozeniu wniosku otrzymasz potwierdzenie na e-mail. Wiekszosc
          wnioskow jest rozpatrywana w ciagu kilku godzin, ale moze potrwac do
          72 godzin. Otrzymasz powiadomienie e-mail o decyzji.
        </p>

        <h2 className="heading-band">
          Po zatwierdzeniu
        </h2>
        <p>
          ETA jest powiazana elektronicznie z Twoim paszportem &mdash; nie
          musisz drukowac zadnych dokumentow. Linie lotnicze i sluzby graniczne
          automatycznie weryfikuja Twoja ETA podczas odprawy.
        </p>

        <div className="bg-red-50 border-l-4 border-[#8d1812] p-4 rounded-r text-sm">
          <strong>Uwaga:</strong> Skladaj wniosek wylacznie na oficjalnej
          stronie{" "}
          <a
            href="https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta"
            className="text-[#022444] underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            GOV.UK
          </a>{" "}
          lub przez oficjalna aplikacje &quot;UK ETA&quot;. Uwazaj na falszywe
          strony pobierajace zawyzone oplaty.
        </div>
      </div>

      <div className="mt-10 flex flex-col sm:flex-row gap-3">
        <Link
          href="/eta-info/fee/"
          className="bg-[#022444] hover:bg-[#0a3a6b] text-white px-6 py-3 rounded font-bold text-sm transition text-center"
        >
          Sprawdz oplaty &rarr;
        </Link>
        <a
          href="https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full max-w-md mx-auto bg-[#8d1812] hover:bg-[#6d120e] rounded-lg py-5 px-6 text-center transition shadow-lg"
          style={{ color: "white", textDecoration: "none" }}
        >
          <span className="text-white text-lg font-bold" style={{ color: "white" }}>Zloz wniosek UK ETA</span>
        </a>
      </div>
    </div>
  );
}
