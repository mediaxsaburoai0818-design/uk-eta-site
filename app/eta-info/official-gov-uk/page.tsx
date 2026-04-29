import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Oficjalna strona GOV.UK - UK ETA",
  description:
    "Informacje o oficjalnej stronie GOV.UK do skladania wnioskow UK ETA. Jak rozpoznac oficjalna strone i unikac oszustw.",
};

export default function OfficialGovUK() {
  return (
    <div>
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 pt-12 pb-8">
          <Breadcrumb
            items={[
              { label: "Informacje o UK ETA", href: "/eta-info/what-is-eta/" },
              { label: "Oficjalna strona GOV.UK" },
            ]}
          />
          <h1
            className="text-3xl md:text-4xl font-bold text-[#022444] mb-6"
            style={{ fontFamily: "var(--font-noto-serif), serif" }}
          >
            Oficjalna strona GOV.UK do skladania wnioskow UK ETA
          </h1>
          <p className="text-gray-600 leading-relaxed">
            Wnioski UK ETA mozna skladac na oficjalnej stronie rzadu Wielkiej
            Brytanii lub przez oficjalna aplikacje mobilna.
          </p>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Oficjalny adres strony</h2>
          <div className="bg-white border border-gray-200 rounded p-6 text-center">
            <p className="text-sm text-gray-500 mb-2">Oficjalna strona UK ETA:</p>
            <a
              href="https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl md:text-2xl font-bold text-[#022444] underline break-all"
            >
              www.gov.uk/eta
            </a>
            <p className="text-xs text-gray-400 mt-2">
              Domena .gov.uk oznacza oficjalna strone rzadu Wielkiej Brytanii
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Jak rozpoznac oficjalna strone?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Adres URL zawiera <strong>gov.uk</strong> (domena rzadowa UK)</li>
            <li>Strona jest obslugiwana przez Home Office</li>
            <li>Oplata wynosi dokladnie &pound;10</li>
            <li>Strona ma charakterystyczny bialo-czarny design GOV.UK</li>
            <li>Nie wymaga oplaty za &quot;przyspieszenie&quot; rozpatrywania</li>
          </ul>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Jak rozpoznac falszywa strone?</h2>
          <div className="bg-red-50 border-l-4 border-[#8d1812] p-4 rounded-r text-sm text-gray-600">
            <p className="font-bold mb-2">Znaki ostrzegawcze:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Adres URL nie zawiera gov.uk</li>
              <li>Oplata znacznie wyzsza niz &pound;10</li>
              <li>Obietnica &quot;gwarantowanego zatwierdzenia&quot;</li>
              <li>Oferta &quot;przyspieszonego rozpatrywania&quot;</li>
              <li>Agresywna reklama lub natretne pop-upy</li>
              <li>Brak logo GOV.UK</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Oficjalna aplikacja mobilna</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Wniosek UK ETA mozna rowniez zlozyc przez oficjalna aplikacje
            mobilna &quot;UK ETA&quot;:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li><strong>iOS:</strong> Szukaj &quot;UK ETA&quot; w App Store (wydawca: Home Office)</li>
            <li><strong>Android:</strong> Szukaj &quot;UK ETA&quot; w Google Play (wydawca: Home Office)</li>
          </ul>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Inne przydatne strony rzadowe</h2>
          <ul className="space-y-3 text-gray-600">
            <li>
              <a href="https://www.gov.uk/check-uk-visa" target="_blank" rel="noopener noreferrer" className="text-[#022444] underline">gov.uk/check-uk-visa</a> &mdash; Sprawdz wymagania wizowe do UK
            </li>
            <li>
              <a href="https://www.gov.uk/standard-visitor" target="_blank" rel="noopener noreferrer" className="text-[#022444] underline">gov.uk/standard-visitor</a> &mdash; Informacje o wizie turystycznej
            </li>
            <li>
              <a href="https://www.gov.pl/web/wielkabrytania" target="_blank" rel="noopener noreferrer" className="text-[#022444] underline">gov.pl/web/wielkabrytania</a> &mdash; Ambasada RP w Londynie
            </li>
            <li>
              <a href="https://www.gov.uk/government/world/organisations/british-embassy-warsaw.pl" target="_blank" rel="noopener noreferrer" className="text-[#022444] underline">Ambasada Brytyjska w Warszawie</a>
            </li>
          </ul>
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
