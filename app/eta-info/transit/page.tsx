import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Tranzyt przez Wielka Brytanie - Czy potrzebuje UK ETA?",
  description:
    "Czy UK ETA jest wymagana podczas tranzytu przez Wielka Brytanie? Zasady dotyczace przesiadek na lotniskach brytyjskich.",
};

export default function Transit() {
  return (
    <div>
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 pt-12 pb-8">
          <Breadcrumb
            items={[
              { label: "Informacje o UK ETA", href: "/eta-info/what-is-eta/" },
              { label: "Tranzyt przez UK" },
            ]}
          />
          <h1
            className="text-3xl md:text-4xl font-bold text-[#022444] mb-6"
            style={{ fontFamily: "var(--font-noto-serif), serif" }}
          >
            Tranzyt przez Wielka Brytanie &mdash; czy potrzebuje UK ETA?
          </h1>
          <p className="text-gray-600 leading-relaxed">
            Tak, UK ETA jest wymagana rowniez w przypadku tranzytu przez Wielka
            Brytanie, nawet jesli nie opuszczasz strefy tranzytu na lotnisku.
          </p>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Zasady tranzytu</h2>
          <p className="text-gray-600 leading-relaxed">
            Od 2 kwietnia 2025 roku obywatele UE (w tym Polski) potrzebuja UK
            ETA do tranzytu przez Wielka Brytanie. Dotyczy to zarowno tranzytu
            lotniczego (airside transit), jak i tranzytu ladowego (landside transit).
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Rodzaje tranzytu</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded p-4">
              <h3 className="font-bold text-[#022444] mb-2">Tranzyt lotniczy (Airside Transit)</h3>
              <p className="text-sm text-gray-600">
                Przesiadka na lotnisku bez opuszczania strefy miedzynarodowej.
                UK ETA jest wymagana. Dotyczy to np. przesiadki na Heathrow
                w drodze do USA czy Kanady.
              </p>
            </div>
            <div className="border border-gray-200 rounded p-4">
              <h3 className="font-bold text-[#022444] mb-2">Tranzyt ladowy (Landside Transit)</h3>
              <p className="text-sm text-gray-600">
                Opuszczenie strefy tranzytu, np. aby przejsc miedzy terminalami,
                odebrac bagaz lub spedzic noc w hotelu. UK ETA jest wymagana.
                Wjezdzasz formalnie do Wielkiej Brytanii.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Popularne trasy tranzytowe przez UK</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Warszawa &rarr; Londyn (Heathrow) &rarr; Nowy Jork</li>
            <li>Krakow &rarr; Londyn (Gatwick) &rarr; Toronto</li>
            <li>Gdansk &rarr; Londyn (Stansted) &rarr; Dublin</li>
            <li>Wroclaw &rarr; Londyn (Luton) &rarr; Los Angeles</li>
          </ul>
          <p className="text-gray-600 mt-4">
            Na wszystkich tych trasach wymagana jest UK ETA, nawet jesli pobyt
            na lotnisku trwa tylko kilka godzin.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Wyjatki od wymogu ETA przy tranzycie</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Istnieja nieliczne wyjatki od wymogu posiadania ETA przy tranzycie:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Obywatele Irlandii (wspolna strefa podrozy CTA)</li>
            <li>Posiadacze waznej wizy brytyjskiej</li>
            <li>Posiadacze statusu staloego rezydenta UK (settled/pre-settled status)</li>
          </ul>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Jak uniknac koniecznosci posiadania ETA na tranzyt?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Jesli nie chcesz skladac wniosku o UK ETA, mozesz wybrac trasy,
            ktore nie prowadza przez Wielka Brytanie. Na przyklad:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Loty bezposrednie z Polski do miejsca docelowego</li>
            <li>Przesiadki w krajach UE (Amsterdam, Frankfurt, Paryz)</li>
            <li>Przesiadki w Dublinie (Irlandia &mdash; nie wymaga ETA)</li>
          </ul>
          <div className="bg-white border-l-4 border-[#022444] p-4 rounded-r text-sm text-gray-700 mt-6">
            <strong>Wskazowka:</strong> Jesli planujesz lot z przesiadka w
            Londynie, zloz wniosek o UK ETA co najmniej 72 godziny przed
            wylotem. Brak ETA moze spowodowac odmowe wejscia na poklad samolotu.
          </div>
        </div>
      </section>

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
