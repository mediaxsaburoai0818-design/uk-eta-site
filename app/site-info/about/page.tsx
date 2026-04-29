import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "O nas - UK ETA Online",
  description: "Informacje o serwisie UK ETA Online. Kim jestesmy i jaki jest cel naszej strony.",
};

export default function About() {
  return (
    <div>
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 pt-12 pb-8">
          <Breadcrumb
            items={[
              { label: "Informacje o stronie", href: "/site-info/about/" },
              { label: "O nas" },
            ]}
          />
          <h1
            className="text-3xl md:text-4xl font-bold text-[#022444] mb-6"
            style={{ fontFamily: "var(--font-noto-serif), serif" }}
          >
            O nas
          </h1>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Cel serwisu</h2>
          <p className="text-gray-600 leading-relaxed">
            UK ETA Online to serwis informacyjny poswiecony Elektronicznej
            Autoryzacji Podrozy (ETA) do Wielkiej Brytanii. Naszym celem jest
            dostarczanie rzetelnych, aktualnych i przydatnych informacji w jezyku
            polskim na temat nowego systemu autoryzacji podrozy.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Czym sie zajmujemy?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Dostarczamy kompletne informacje o systemie UK ETA w jezyku polskim</li>
            <li>Wyjasniamy procedure skladania wniosku krok po kroku</li>
            <li>Odpowiadamy na najczesciej zadawane pytania dotyczace podrozy do UK</li>
            <li>Ostrzegamy przed falszywymi stronami i oszustwami zwiazanymi z ETA</li>
            <li>Informujemy o zmianach w przepisach dotyczacych podrozy do Wielkiej Brytanii</li>
            <li>Dostarczamy informacje dla polskiej spolecznosci w UK</li>
          </ul>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Wazne zastrzezenie</h2>
          <div className="bg-white border-l-4 border-[#022444] p-4 rounded-r text-sm text-gray-700">
            <p>
              UK ETA Online nie jest oficjalna strona rzadu Wielkiej Brytanii.
              Nie jestesmy powiazani z Home Office, UK Visas and Immigration
              ani zadna inna agencja rzadowa UK. Oficjalna strona do skladania
              wnioskow UK ETA to{" "}
              <a
                href="https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta"
                className="text-[#022444] underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GOV.UK
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Informacje o operatorze</h2>
          <div className="border border-gray-200 rounded p-4 text-sm text-gray-600">
            <table className="w-full">
              <tbody>
                <tr>
                  <td className="py-2 pr-4 text-gray-500 font-medium">Nazwa serwisu:</td>
                  <td className="py-2">UK ETA Online</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 text-gray-500 font-medium">Typ:</td>
                  <td className="py-2">Serwis informacyjny</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 text-gray-500 font-medium">Jezyk:</td>
                  <td className="py-2">Polski</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 text-gray-500 font-medium">Kontakt:</td>
                  <td className="py-2">
                    <Link href="/site-info/contact/" className="text-[#022444] underline">
                      Formularz kontaktowy
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
