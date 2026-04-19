import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Oplaty za UK ETA - Ile kosztuje wniosek?",
  description:
    "Oplata za UK ETA wynosi 10 funtow. Szczegoly dotyczace kosztow, metod platnosci i ostrzezen przed falszywymi stronami.",
};

export default function Fee() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumb
        items={[
          { label: "Informacje o UK ETA", href: "/eta-info/what-is-eta/" },
          { label: "Oplaty" },
        ]}
      />

      <h1
        className="text-3xl md:text-4xl font-bold text-[#022444] mb-6"
        style={{ fontFamily: "var(--font-noto-serif), serif" }}
      >
        Oplaty za wniosek UK ETA
      </h1>

      <p className="text-gray-600 mb-8 leading-relaxed">
        Oficjalna oplata za zlozenie wniosku UK ETA wynosi <strong>&pound;10</strong> (okolo 50 PLN).
        Ponizej przedstawiamy szczegolowe informacje o kosztach i metodach platnosci.
      </p>

      <div className="space-y-6 text-gray-600 leading-relaxed">
        <h2 className="heading-band">
          Struktura oplaty
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-200">
            <thead className="bg-[#F5F5F5]">
              <tr>
                <th className="text-left p-3 border-b border-gray-200 font-bold text-[#022444]">
                  Skladnik
                </th>
                <th className="text-left p-3 border-b border-gray-200 font-bold text-[#022444]">
                  Kwota
                </th>
                <th className="text-left p-3 border-b border-gray-200 font-bold text-[#022444]">
                  Opis
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border-b border-gray-100">
                  Oplata za wniosek ETA
                </td>
                <td className="p-3 border-b border-gray-100">&pound;10</td>
                <td className="p-3 border-b border-gray-100">
                  Oplata za rozpatrzenie i wydanie autoryzacji
                </td>
              </tr>
              <tr className="font-bold">
                <td className="p-3">Razem</td>
                <td className="p-3">&pound;10</td>
                <td className="p-3">
                  Calkowita oplata za wniosek
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-[#F5F5F5] border-l-4 border-[#022444] p-4 rounded-r text-sm">
          <strong>Uwaga:</strong> Oplata &pound;10 jest pobierana w momencie
          skladania wniosku i nie podlega zwrotowi, nawet jesli wniosek
          zostanie odrzucony.
        </div>

        <h2 className="heading-band">
          Przeliczenie na zlotowki
        </h2>
        <p>
          &pound;10 to okolo 50 PLN (w zaleznosci od aktualnego kursu wymiany).
          Dokladna kwota w PLN zalezy od kursu stosowanego przez bank
          wydajacy karte platnicza. Moze zostac naliczona dodatkowa prowizja
          za transakcje walutowa.
        </p>

        <h2 className="heading-band">
          Akceptowane metody platnosci
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Karta kredytowa Visa</li>
          <li>Karta kredytowa Mastercard</li>
          <li>Karta debetowa (z logo Visa/Mastercard)</li>
          <li>Apple Pay</li>
          <li>Google Pay</li>
        </ul>

        <h2 className="heading-band">
          Czy ETA jest darmowa dla niektorych osob?
        </h2>
        <p>
          Nie. Oplata &pound;10 dotyczy wszystkich wnioskodawcow, niezaleznie
          od obywatelstwa. Nie ma zwolnien z oplaty. Dzieci rowniez musza
          posiadac wlasne ETA i uiscic odrebna oplate.
        </p>

        <h2 className="heading-band">
          Porownanie kosztow: oficjalna strona vs posrednicy
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-200">
            <thead className="bg-[#F5F5F5]">
              <tr>
                <th className="text-left p-3 border-b border-gray-200 font-bold text-[#022444]">
                  Zrodlo
                </th>
                <th className="text-left p-3 border-b border-gray-200 font-bold text-[#022444]">
                  Koszt
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border-b border-gray-100">
                  Oficjalna strona GOV.UK / aplikacja
                </td>
                <td className="p-3 border-b border-gray-100 font-bold text-green-700">
                  &pound;10
                </td>
              </tr>
              <tr>
                <td className="p-3 border-b border-gray-100">
                  Strony posrednikow
                </td>
                <td className="p-3 border-b border-gray-100 text-red-600">
                  &pound;50 &mdash; &pound;150+
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-red-50 border-l-4 border-[#8d1812] p-4 rounded-r text-sm">
          <strong>Ostrzezenie:</strong> Wielu posrednikow prowadzi strony
          internetowe, ktore wygladaja jak oficjalne strony UK ETA. Pobieraja
          zawyzone oplaty za te sama usluge. Zawsze skladaj wniosek
          bezposrednio na{" "}
          <a
            href="https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta"
            className="text-[#022444] underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            GOV.UK
          </a>{" "}
          lub przez oficjalna aplikacje.
        </div>
      </div>

      <div className="mt-10 flex flex-col sm:flex-row gap-3">
        <Link
          href="/eta-info/application/"
          className="bg-[#022444] hover:bg-[#0a3a6b] text-white px-6 py-3 rounded font-bold text-sm transition text-center"
        >
          Jak zlozyc wniosek &rarr;
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
