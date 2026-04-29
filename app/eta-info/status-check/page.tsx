import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Sprawdzenie statusu wniosku UK ETA",
  description:
    "Jak sprawdzic status wniosku UK ETA. Mozliwe statusy i co oznaczaja.",
};

export default function StatusCheck() {
  return (
    <div>
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 pt-12 pb-8">
          <Breadcrumb
            items={[
              { label: "Informacje o UK ETA", href: "/eta-info/what-is-eta/" },
              { label: "Sprawdzenie statusu" },
            ]}
          />
          <h1
            className="text-3xl md:text-4xl font-bold text-[#022444] mb-6"
            style={{ fontFamily: "var(--font-noto-serif), serif" }}
          >
            Sprawdzenie statusu wniosku UK ETA
          </h1>
          <p className="text-gray-600 leading-relaxed">
            Po zlozeniu wniosku UK ETA mozesz w kazdej chwili sprawdzic jego status
            przez aplikacje mobilna lub na stronie GOV.UK.
          </p>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Jak sprawdzic status?</h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-600">
            <li>
              Otworz aplikacje &quot;UK ETA&quot; na telefonie lub wejdz na
              strone{" "}
              <a href="https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta" target="_blank" rel="noopener noreferrer" className="text-[#022444] underline">GOV.UK</a>
            </li>
            <li>Zaloguj sie na konto utworzone podczas skladania wniosku</li>
            <li>Status wniosku bedzie wyswietlony na glownym ekranie</li>
          </ol>
          <p className="text-gray-600 mt-4">
            Otrzymasz rowniez powiadomienie e-mail, gdy status wniosku ulegnie zmianie.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Mozliwe statusy wniosku</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded p-4">
              <h3 className="font-bold text-green-700 mb-1">Approved (Zatwierdzony)</h3>
              <p className="text-sm text-gray-600">
                Wniosek zostal zatwierdzony. ETA jest powiazana z Twoim
                paszportem. Mozesz podrozowac do Wielkiej Brytanii. Nie musisz
                drukowac zadnego dokumentu.
              </p>
            </div>
            <div className="border border-gray-200 rounded p-4">
              <h3 className="font-bold text-yellow-600 mb-1">Pending (W trakcie rozpatrywania)</h3>
              <p className="text-sm text-gray-600">
                Wniosek jest nadal rozpatrywany. Sprawdz ponownie po 72
                godzinach. Nie rezerwuj biletow lotniczych, dopoki nie otrzymasz
                zatwierdzenia.
              </p>
            </div>
            <div className="border border-gray-200 rounded p-4">
              <h3 className="font-bold text-red-600 mb-1">Refused (Odrzucony)</h3>
              <p className="text-sm text-gray-600">
                Wniosek zostal odrzucony. Otrzymasz e-mail z informacja o
                przyczynach odmowy. Mozesz zloz odwolanie lub ubiegac sie o
                wize brytyjska.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Co robic, jesli status to &quot;Pending&quot;?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Poczekaj do 72 godzin &mdash; wiekszosc wnioskow jest rozpatrywana w tym czasie</li>
            <li>Sprawdzaj status w aplikacji lub e-mail</li>
            <li>Nie skladaj nowego wniosku &mdash; to nie przyspieszy procesu</li>
            <li>W wyjatkowych przypadkach rozpatrzenie moze trwac dluzej</li>
          </ul>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Co robic w przypadku odrzucenia?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Przeczytaj uwazne powody odmowy podane w e-mailu</li>
            <li>Mozesz zloz odwolanie (administrative review)</li>
            <li>Mozesz ubiegac sie o wize turystyczna Standard Visitor visa</li>
            <li>Skontaktuj sie z prawnikiem imigracyjnym w razie watpliwosci</li>
          </ul>
          <div className="bg-gray-50 border-l-4 border-[#022444] p-4 rounded-r text-sm text-gray-700 mt-6">
            <strong>Wskazowka:</strong> Zachowaj e-mail z potwierdzeniem
            zlozenia wniosku. Zawiera on numer referencyjny potrzebny do
            kontaktu z UK Visas and Immigration.
          </div>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/eta-info/expiration/"
              className="bg-[#022444] hover:bg-[#0a3a6b] text-white px-6 py-3 rounded font-bold text-sm transition text-center"
            >
              Okres waznosci UK ETA &rarr;
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
