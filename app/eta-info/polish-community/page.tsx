import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Polacy w Wielkiej Brytanii - Spolecznosc polska w UK",
  description:
    "Informacje o spolecznosci polskiej w Wielkiej Brytanii. Okolo 700 000 Polakow mieszka w UK. Przydatne zasoby i organizacje.",
};

export default function PolishCommunity() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumb
        items={[
          { label: "Informacje o UK ETA", href: "/eta-info/what-is-eta/" },
          { label: "Polacy w Wielkiej Brytanii" },
        ]}
      />

      <h1
        className="text-3xl md:text-4xl font-bold text-[#022444] mb-6"
        style={{ fontFamily: "var(--font-noto-serif), serif" }}
      >
        Polacy w Wielkiej Brytanii
      </h1>

      <img
        src="https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=800&q=80"
        alt="Londyn - widok na miasto"
        className="w-full h-64 object-cover rounded mb-8"
      />

      <div className="space-y-6 text-gray-600 leading-relaxed">
        <p>
          Wielka Brytania jest domem dla jednej z najwiekszych spolecznosci
          polskich poza granicami Polski. Okolo <strong>700 000 Polakow</strong>{" "}
          mieszka w UK, co czyni jezyk polski jednym z najczesciej uzywanych
          jezykow obcych w tym kraju.
        </p>

        <h2 className="heading-band">
          UK ETA a Polacy mieszkajacy w Wielkiej Brytanii
        </h2>
        <p>
          Polacy, ktorzy posiadaja status stalego rezydenta (settled status lub
          pre-settled status) w ramach EU Settlement Scheme, <strong>nie
          potrzebuja UK ETA</strong>. ETA jest wymagana wylacznie od osob
          podrozujacych do UK jako odwiedzajacy (turysci, podrozujacy
          sluzbowo, osoby w tranzycie).
        </p>

        <div className="bg-[#F5F5F5] border-l-4 border-[#022444] p-4 rounded-r text-sm">
          <strong>Wazne:</strong> Jesli masz settled lub pre-settled status,
          nie musisz skladac wniosku o UK ETA. Twoj status jest powiazany z
          paszportem i automatycznie weryfikowany na granicy.
        </div>

        <h2 className="heading-band">
          Glowne skupiska Polakow w UK
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { city: "Londyn", desc: "Najwieksza spolecznosc polska, dzielnice: Ealing, Hammersmith" },
            { city: "Birmingham", desc: "Duza spolecznosc polska, liczne organizacje" },
            { city: "Manchester", desc: "Rosnaca spolecznosc, polskie sklepy i koscioly" },
            { city: "Edinburgh", desc: "Znaczaca spolecznosc polska w Szkocji" },
            { city: "Leeds", desc: "Polskie centrum kulturalne" },
            { city: "Southampton", desc: "Historyczna spolecznosc polska" },
          ].map((item) => (
            <div key={item.city} className="border border-gray-200 rounded p-3">
              <h3 className="font-bold text-[#022444] text-sm">{item.city}</h3>
              <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="heading-band">
          Przydatne organizacje i zasoby
        </h2>
        <ul className="space-y-3">
          <li>
            <a
              href="https://www.gov.pl/web/wielkabrytania"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#022444] underline"
            >
              Ambasada RP w Londynie
            </a>{" "}
            &mdash; Pomoc konsularna, dokumenty, informacje
          </li>
          <li>
            <a
              href="https://www.zfrb.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#022444] underline"
            >
              Zwiazek Federacji Polskich w Wielkiej Brytanii
            </a>{" "}
            &mdash; Organizacja parasolowa
          </li>
          <li>
            <a
              href="https://posk.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#022444] underline"
            >
              POSK (Polski Osrodek Spoleczno-Kulturalny)
            </a>{" "}
            &mdash; Centrum kultury polskiej w Londynie
          </li>
        </ul>

        <h2 className="heading-band">
          Konsulaty RP w Wielkiej Brytanii
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Konsulat Generalny RP w Londynie</li>
          <li>Konsulat Generalny RP w Manchesterze</li>
          <li>Konsulat Generalny RP w Edynburgu</li>
          <li>Konsulat Generalny RP w Belfascie</li>
        </ul>

        <h2 className="heading-band">
          Odwiedzanie rodziny i przyjaciol w UK
        </h2>
        <p>
          Jesli planujesz odwiedzic rodzine lub przyjaciol mieszkajacych w
          Wielkiej Brytanii, pamietaj o uzyskaniu UK ETA przed podroza.
          Oto najwazniejsze informacje:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Zloz wniosek UK ETA co najmniej 72 godziny przed wyjazdem</li>
          <li>Oplata wynosi &pound;10</li>
          <li>Mozesz przebywac w UK do 6 miesiecy na jeden wjazd</li>
          <li>ETA jest wazna przez 2 lata &mdash; wielokrotne wjazdy</li>
          <li>Nie mozesz pracowac na podstawie ETA</li>
          <li>Nie potrzebujesz zaproszenia od rodziny w UK</li>
        </ul>

        <h2 className="heading-band">
          EU Settlement Scheme &mdash; status stalego rezydenta
        </h2>
        <p>
          Polacy, ktorzy mieszkali w UK przed 31 grudnia 2020 roku, mogli
          ubiegac sie o settled lub pre-settled status w ramach EU Settlement
          Scheme. Posiadacze tego statusu:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Nie potrzebuja UK ETA</li>
          <li>Maja prawo do pracy i mieszkania w UK</li>
          <li>Maja dostep do NHS i swiadczen socjalnych</li>
          <li>Status jest powiazany z paszportem lub dokumentem tozsamosci</li>
        </ul>
      </div>

      <div className="mt-10 flex flex-col sm:flex-row gap-3">
        <Link
          href="/eta-info/what-is-eta/"
          className="bg-[#022444] hover:bg-[#0a3a6b] text-white px-6 py-3 rounded font-bold text-sm transition text-center"
        >
          Czym jest UK ETA? &rarr;
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
