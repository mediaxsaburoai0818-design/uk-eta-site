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
    <div className="max-w-3xl mx-auto px-4 py-12">
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

      <p className="text-gray-600 mb-8 leading-relaxed">
        Autoryzacja UK ETA jest wazna przez <strong>2 lata</strong> od daty
        wydania lub do momentu wygasniecia paszportu &mdash; w zaleznosci
        od tego, co nastapi wczesniej.
      </p>

      <div className="space-y-6 text-gray-600 leading-relaxed">
        <h2 className="heading-band">
          Zasady waznosci
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Wazna przez 2 lata od daty wydania</li>
          <li>Wygasa wraz z paszportem (jesli paszport wygasa wczesniej)</li>
          <li>Pozwala na wielokrotne wjazdy do UK w okresie waznosci</li>
          <li>Kazdy pobyt nie moze przekraczac 6 miesiecy</li>
          <li>ETA jest powiazana z konkretnym paszportem</li>
        </ul>

        <h2 className="heading-band">
          Kiedy nalezy zlozyc nowy wniosek?
        </h2>
        <p>
          Nowy wniosek UK ETA nalezy zlozyc w nastepujacych przypadkach:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Po uplywie 2 lat od wydania ETA</li>
          <li>Po uzyskaniu nowego paszportu</li>
          <li>Po zmianie nazwiska</li>
          <li>Po zmianie obywatelstwa</li>
          <li>Po zmianie plci</li>
          <li>Po zmianie okolicznosci wplywajacych na kwalifikowalnosc</li>
        </ul>

        <h2 className="heading-band">
          Czy moge podrozowac z wygasajaca ETA?
        </h2>
        <p>
          UK ETA musi byc wazna w momencie wjazdu do Wielkiej Brytanii. Nie
          musi byc wazna przez caly okres pobytu &mdash; wazne jest, aby byla
          wazna w dniu przyjazdu. Zaleca sie jednak zlozenie nowego wniosku
          z odpowiednim wyprzedzeniem.
        </p>

        <h2 className="heading-band">
          Jak sprawdzic date waznosci?
        </h2>
        <p>
          Date waznosci UK ETA mozna sprawdzic w aplikacji mobilnej &quot;UK
          ETA&quot; lub na stronie GOV.UK, logujac sie na konto utworzone
          podczas skladania wniosku.
        </p>

        <h2 className="heading-band">
          Co jesli zmienie paszport w trakcie waznosci ETA?
        </h2>
        <p>
          ETA jest powiazana z konkretnym paszportem. Jesli uzyskasz nowy
          paszport (np. po wygasnieciu starego, zmianie nazwiska), musisz
          zlozyc nowy wniosek ETA i uiscic ponownie oplate &pound;10. Stara
          ETA przestaje byc wazna.
        </p>

        <div className="bg-[#F5F5F5] border-l-4 border-[#022444] p-4 rounded-r text-sm">
          <strong>Wskazowka:</strong> Zaleca sie zlozenie wniosku UK ETA co
          najmniej 72 godziny przed planowana podroza, aby miec czas na
          rozpatrzenie wniosku.
        </div>
      </div>

      <div className="mt-10 flex flex-col sm:flex-row gap-3">
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
          className="block w-full max-w-md mx-auto bg-[#8d1812] hover:bg-[#6d120e] rounded-lg py-5 px-6 text-center transition shadow-lg"
          style={{ color: "white", textDecoration: "none" }}
        >
          <span className="text-white text-lg font-bold" style={{ color: "white" }}>Zloz wniosek UK ETA</span>
        </a>
      </div>
    </div>
  );
}
