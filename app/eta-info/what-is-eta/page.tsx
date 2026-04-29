import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Czym jest UK ETA? - Kompletny przewodnik",
  description:
    "UK ETA (Electronic Travel Authorisation) - elektroniczna autoryzacja podrozy do Wielkiej Brytanii. Kraje objete wymogiem, warunki, roznice z wiza.",
};

export default function WhatIsEta() {
  return (
    <div>
      {/* Header */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 pt-12 pb-8">
          <Breadcrumb
            items={[
              { label: "Informacje o UK ETA", href: "/eta-info/what-is-eta/" },
              { label: "Czym jest UK ETA?" },
            ]}
          />
          <h1
            className="text-3xl md:text-4xl font-bold text-[#022444] mb-6"
            style={{ fontFamily: "var(--font-noto-serif), serif" }}
          >
            Czym jest UK ETA?
          </h1>
          <img
            src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80"
            alt="Londyn - Tower Bridge i panorama miasta"
            className="w-full h-64 object-cover rounded mb-6"
          />
          <p className="text-gray-600 leading-relaxed">
            UK ETA (Electronic Travel Authorisation) to elektroniczna autoryzacja
            podrozy wprowadzona przez rzad Wielkiej Brytanii w ramach nowego
            systemu kontroli granicznej. System ten wymaga od podroznych z
            okreslonych krajow uzyskania cyfrowego zezwolenia przed wjazdem do
            Zjednoczonego Krolestwa.
          </p>
        </div>
      </section>

      {/* Section 1 */}
      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Cel systemu UK ETA</h2>
          <p className="text-gray-600 leading-relaxed">
            System UK ETA zostal wprowadzony w celu wzmocnienia bezpieczenstwa
            granic Wielkiej Brytanii po Brexicie. Pozwala wladzom brytyjskim na
            weryfikacje podroznych przed ich przybyciem, co usprawnia kontrole
            graniczna i zwieksza bezpieczenstwo panstwa. ETA dla obywateli UE
            obowiazuje od 2 kwietnia 2025 roku.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Kto musi posiadac UK ETA?</h2>
          <p className="text-gray-600 leading-relaxed">
            UK ETA jest wymagana od obywateli panstw, ktore nie potrzebuja wizy
            do krotkich pobytow w Wielkiej Brytanii, ale nie sa obywatelami
            brytyjskimi ani irlandzkimi. Od 2 kwietnia 2025 roku obejmuje to
            wszystkich obywateli UE, w tym Polski.
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Kraje UE objete wymogiem UK ETA</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
            {[
              "Polska", "Niemcy", "Francja", "Hiszpania", "Wlochy", "Holandia",
              "Belgia", "Austria", "Czechy", "Portugalia", "Szwecja", "Dania",
              "Finlandia", "Grecja", "Chorwacja", "Rumunia", "Bulgaria", "Wegry",
              "Slowacja", "Litwa", "Lotwa", "Estonia",
            ].map((country) => (
              <span
                key={country}
                className="bg-white border border-gray-200 rounded px-3 py-1.5 text-gray-700"
              >
                {country}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Kluczowe cechy UK ETA</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Cel podrozy: turystyka, biznes, studia krotkoterminowe lub tranzyt</li>
            <li>Maksymalny pobyt: 6 miesiecy na kazdy wjazd</li>
            <li>Waznosc: 2 lata od daty wydania</li>
            <li>Oplata: &pound;10</li>
            <li>Wielokrotne wjazdy w okresie waznosci</li>
            <li>Wymagany paszport biometryczny</li>
          </ul>
        </div>
      </section>

      {/* Section 5 */}
      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">UK ETA a wiza &mdash; roznice</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200">
              <thead className="bg-white">
                <tr>
                  <th className="text-left p-3 border-b border-gray-200 font-bold text-[#022444]">Kryterium</th>
                  <th className="text-left p-3 border-b border-gray-200 font-bold text-[#022444]">UK ETA</th>
                  <th className="text-left p-3 border-b border-gray-200 font-bold text-[#022444]">Wiza brytyjska</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border-b border-gray-100">Koszt</td>
                  <td className="p-3 border-b border-gray-100">&pound;10</td>
                  <td className="p-3 border-b border-gray-100">od &pound;100</td>
                </tr>
                <tr>
                  <td className="p-3 border-b border-gray-100">Czas rozpatrywania</td>
                  <td className="p-3 border-b border-gray-100">Kilka godzin &mdash; 72h</td>
                  <td className="p-3 border-b border-gray-100">Tygodnie / miesiace</td>
                </tr>
                <tr>
                  <td className="p-3 border-b border-gray-100">Maksymalny pobyt</td>
                  <td className="p-3 border-b border-gray-100">6 miesiecy</td>
                  <td className="p-3 border-b border-gray-100">Zalezy od typu</td>
                </tr>
                <tr>
                  <td className="p-3 border-b border-gray-100">Waznosc</td>
                  <td className="p-3 border-b border-gray-100">2 lata</td>
                  <td className="p-3 border-b border-gray-100">Zalezy od typu</td>
                </tr>
                <tr>
                  <td className="p-3">Wizyta w centrum wizowym</td>
                  <td className="p-3">Nie</td>
                  <td className="p-3">Tak</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-white border-l-4 border-[#022444] p-4 rounded-r mt-6">
            <p className="text-sm text-gray-700">
              <strong>Wazne:</strong> UK ETA nie gwarantuje wjazdu do Wielkiej
              Brytanii. Ostateczna decyzje o wjezdzie podejmuje funkcjonariusz
              kontroli granicznej (UK Border Force) po przybyciu.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <div className="flex flex-col sm:flex-row gap-3">
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
