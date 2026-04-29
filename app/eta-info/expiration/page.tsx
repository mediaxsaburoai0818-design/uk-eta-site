import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Okres waznosci UK ETA - Kiedy odnowic?",
  description:
    "UK ETA jest wazna przez 2 lata od zatwierdzenia. Dowiedz sie, kiedy nalezy odnowic autoryzacje i jakie zmiany powoduja jej uniewaznienie.",
};

export default function Expiration() {
  return (
    <div>
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 pt-12 pb-8">
          <Breadcrumb
            items={[
              { label: "Informacje o UK ETA", href: "/eta-info/what-is-eta/" },
              { label: "Okres waznosci" },
            ]}
          />
          <h1
            className="text-3xl md:text-4xl font-bold text-[#022444] mb-6"
            style={{ fontFamily: "var(--font-noto-serif), serif" }}
          >
            Okres waznosci UK ETA
          </h1>
          <p className="text-gray-600 leading-relaxed">
            Autoryzacja UK ETA jest wazna przez <strong>2 lata</strong> od daty
            wydania lub do momentu wygasniecia paszportu &mdash; w zaleznosci
            od tego, co nastapi wczesniej.
          </p>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Zasady waznosci</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Wazna przez 2 lata od daty wydania</li>
            <li>Wygasa wraz z paszportem (jesli paszport wygasa wczesniej)</li>
            <li>Pozwala na wielokrotne wjazdy do UK w okresie waznosci</li>
            <li>Kazdy pobyt nie moze przekraczac 6 miesiecy</li>
            <li>ETA jest powiazana z konkretnym paszportem</li>
          </ul>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Kiedy nalezy zlozyc nowy wniosek?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Nowy wniosek UK ETA nalezy zlozyc w nastepujacych przypadkach:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Po uplywie 2 lat od wydania ETA</li>
            <li>Po uzyskaniu nowego paszportu</li>
            <li>Po zmianie nazwiska</li>
            <li>Po zmianie obywatelstwa</li>
            <li>Po zmianie plci</li>
            <li>Po zmianie okolicznosci wplywajacych na kwalifikowalnosc</li>
          </ul>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Czy moge podrozowac z wygasajaca ETA?</h2>
          <p className="text-gray-600 leading-relaxed">
            UK ETA musi byc wazna w momencie wjazdu do Wielkiej Brytanii. Nie
            musi byc wazna przez caly okres pobytu &mdash; wazne jest, aby byla
            wazna w dniu przyjazdu. Zaleca sie jednak zlozenie nowego wniosku
            z odpowiednim wyprzedzeniem.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Jak sprawdzic date waznosci?</h2>
          <p className="text-gray-600 leading-relaxed">
            Date waznosci UK ETA mozna sprawdzic w aplikacji mobilnej &quot;UK
            ETA&quot; lub na stronie GOV.UK, logujac sie na konto utworzone
            podczas skladania wniosku.
          </p>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Co jesli zmienie paszport w trakcie waznosci ETA?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            ETA jest powiazana z konkretnym paszportem. Jesli uzyskasz nowy
            paszport (np. po wygasnieciu starego, zmianie nazwiska), musisz
            zlozyc nowy wniosek ETA i uiscic ponownie oplate &pound;10. Stara
            ETA przestaje byc wazna.
          </p>
          <div className="bg-white border-l-4 border-[#022444] p-4 rounded-r text-sm text-gray-700">
            <strong>Wskazowka:</strong> Zaleca sie zlozenie wniosku UK ETA co
            najmniej 72 godziny przed planowana podroza, aby miec czas na
            rozpatrzenie wniosku.
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/eta-info/status-check/"
              className="bg-[#022444] hover:bg-[#0a3a6b] text-white px-6 py-3 rounded font-bold text-sm transition text-center"
            >
              Sprawdz status wniosku &rarr;
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
