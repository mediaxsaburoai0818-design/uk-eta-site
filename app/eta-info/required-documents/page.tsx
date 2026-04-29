import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Wymagane dokumenty do wniosku UK ETA",
  description:
    "Lista wymaganych dokumentow do zlozenia wniosku UK ETA. Paszport biometryczny, zdjecie, dane osobowe.",
};

export default function RequiredDocuments() {
  return (
    <div>
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 pt-12 pb-8">
          <Breadcrumb
            items={[
              { label: "Informacje o UK ETA", href: "/eta-info/what-is-eta/" },
              { label: "Wymagane dokumenty" },
            ]}
          />
          <h1
            className="text-3xl md:text-4xl font-bold text-[#022444] mb-6"
            style={{ fontFamily: "var(--font-noto-serif), serif" }}
          >
            Wymagane dokumenty do wniosku UK ETA
          </h1>
          <p className="text-gray-600 leading-relaxed">
            Aby zlozyc wniosek UK ETA, musisz przygotowac kilka dokumentow i
            informacji. Ponizej znajduje sie kompletna lista.
          </p>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Dokumenty obowiazkowe</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded p-4 bg-white">
              <h3 className="font-bold text-[#022444] mb-2">1. Paszport biometryczny (e-paszport)</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                <li>Musi byc wazny przez caly planowany okres pobytu w UK</li>
                <li>Musi zawierac chip biometryczny (symbol na okladce)</li>
                <li>Paszport tymczasowy nie jest akceptowany</li>
                <li>ETA jest powiazana z konkretnym paszportem</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded p-4 bg-white">
              <h3 className="font-bold text-[#022444] mb-2">2. Zdjecie twarzy (selfie)</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                <li>Wykonywane podczas skladania wniosku w aplikacji</li>
                <li>Dobre oswietlenie, neutralne tlo</li>
                <li>Bez okularow i nakrycia glowy</li>
                <li>Twarz w calosci widoczna</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded p-4 bg-white">
              <h3 className="font-bold text-[#022444] mb-2">3. Adres e-mail</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                <li>Aktywny adres e-mail do kontaktu</li>
                <li>Na ten adres otrzymasz potwierdzenie i decyzje</li>
                <li>Upewnij sie, ze masz dostep do skrzynki</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded p-4 bg-white">
              <h3 className="font-bold text-[#022444] mb-2">4. Metoda platnosci</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                <li>Karta kredytowa lub debetowa (Visa/Mastercard)</li>
                <li>Apple Pay lub Google Pay</li>
                <li>Oplata: &pound;10</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Informacje wymagane w formularzu</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Dane osobowe (imie, nazwisko, data urodzenia, miejsce urodzenia)</li>
            <li>Obywatelstwo i podwojne obywatelstwo (jesli dotyczy)</li>
            <li>Adres zamieszkania</li>
            <li>Informacje o zatrudnieniu</li>
            <li>Cel podrozy do Wielkiej Brytanii</li>
            <li>Informacje o karalnosci i historii imigracyjnej</li>
            <li>Odpowiedzi na pytania bezpieczenstwa</li>
          </ul>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Czego NIE potrzebujesz</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Zaproszenia od osoby w UK</li>
            <li>Rezerwacji hotelu (nie jest wymagana, ale moze byc przydatna)</li>
            <li>Biletu lotniczego (mozesz zlozyc wniosek przed zakupem biletu)</li>
            <li>Ubezpieczenia podroznego (zalecane, ale nie wymagane do ETA)</li>
            <li>Wizyty w ambasadzie lub centrum wizowym</li>
          </ul>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Dokumenty dla dzieci</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Kazde dziecko podrozujace do Wielkiej Brytanii musi posiadac wlasne
            UK ETA, niezaleznie od wieku. Wymagany jest odrebny paszport
            biometryczny dziecka. Wniosek w imieniu dziecka moze zlozyc rodzic
            lub opiekun prawny.
          </p>
          <div className="bg-gray-50 border-l-4 border-[#022444] p-4 rounded-r text-sm text-gray-700">
            <strong>Wskazowka:</strong> Przed rozpoczeciem procesu upewnij sie,
            ze Twoj paszport jest wazny i masz dostep do smartfona z aparatem
            i funkcja NFC (do skanowania paszportu).
          </div>
        </div>
      </section>

      <section className="bg-gray-50">
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
