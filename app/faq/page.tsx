import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "FAQ - Najczesciej zadawane pytania o UK ETA",
  description:
    "Odpowiedzi na najczesciej zadawane pytania dotyczace UK ETA: procedura, koszty, waznosc, odrzucenie wniosku i wiele wiecej.",
};

const faqs = [
  {
    q: "Czym jest UK ETA i do czego sluzy?",
    a: "UK ETA (Electronic Travel Authorisation) to elektroniczna autoryzacja podrozy do Wielkiej Brytanii. Od 2 kwietnia 2025 roku obywatele UE, w tym Polski, musza uzyskac ETA przed podroza do UK w celach turystycznych, biznesowych lub tranzytowych.",
  },
  {
    q: "Ile kosztuje wniosek UK ETA?",
    a: "Oplata za UK ETA wynosi \u00a310 (okolo 50 PLN). Oplata jest pobierana w momencie skladania wniosku i nie podlega zwrotowi. Uwazaj na falszywe strony, ktore pobieraja \u00a350-150 za te sama usluge.",
  },
  {
    q: "Jak dlugo trwa rozpatrzenie wniosku UK ETA?",
    a: "Wiekszosc wnioskow jest rozpatrywana w ciagu kilku godzin. W niektorych przypadkach rozpatrzenie moze potrwac do 72 godzin. Zaleca sie zlozenie wniosku co najmniej 72 godziny przed planowana podroza.",
  },
  {
    q: "Jak dlugo jest wazna autoryzacja UK ETA?",
    a: "UK ETA jest wazna przez 2 lata od daty wydania lub do momentu wygasniecia paszportu (w zaleznosci od tego, co nastapi wczesniej). W tym okresie mozna wielokrotnie wjezdzac do UK, kazdy pobyt do 6 miesiecy.",
  },
  {
    q: "Jaka jest roznica miedzy UK ETA a wiza?",
    a: "UK ETA to uproszczona autoryzacja elektroniczna do krotkich pobytow (do 6 miesiecy). Koszt: \u00a310, wniosek online. Wiza brytyjska wymaga wizyty w centrum wizowym, kosztuje od \u00a3100 i pozwala na dluzsze pobyty lub prace.",
  },
  {
    q: "Czy Polska jest objeta wymogiem UK ETA?",
    a: "Tak. Od 2 kwietnia 2025 roku obywatele polscy (i wszyscy obywatele UE) musza posiadac UK ETA przed podroza do Wielkiej Brytanii. Dotyczy to wizyt turystycznych, biznesowych i tranzytowych.",
  },
  {
    q: "Co sie stanie, jesli moj wniosek UK ETA zostanie odrzucony?",
    a: "W przypadku odrzucenia wniosku UK ETA otrzymasz e-mail z informacja o przyczynach odmowy. Mozesz zlozyc odwolanie (administrative review) lub ubiegac sie o wize turystyczna Standard Visitor visa. Oplata \u00a310 nie podlega zwrotowi.",
  },
  {
    q: "Czy potrzebuje UK ETA na tranzyt przez Wielka Brytanie?",
    a: "Tak, UK ETA jest wymagana rowniez w przypadku tranzytu przez Wielka Brytanie, nawet jesli nie opuszczasz strefy tranzytu na lotnisku. Dotyczy to np. przesiadek na Heathrow.",
  },
  {
    q: "Jakie dokumenty sa potrzebne do zlozenia wniosku UK ETA?",
    a: "Potrzebny jest wazny paszport biometryczny, smartfon z aparatem (do skanowania paszportu i zdjecia selfie), adres e-mail oraz karta platnicza (Visa/Mastercard) lub Apple Pay/Google Pay.",
  },
  {
    q: "Czy moge zlozyc wniosek UK ETA na telefonie?",
    a: "Tak, wniosek UK ETA mozna zlozyc przez oficjalna aplikacje mobilna 'UK ETA' dostepna na iOS i Android. Jest to zalecany sposob skladania wnioskow, poniewaz aplikacja umozliwia skanowanie paszportu NFC.",
  },
  {
    q: "Czy UK ETA gwarantuje wjazd do Wielkiej Brytanii?",
    a: "Nie. UK ETA to jedynie autoryzacja podrozy. Ostateczna decyzje o wjezdzie podejmuje funkcjonariusz UK Border Force po przybyciu. Moze on odmowic wjazdu nawet z zatwierdzona ETA.",
  },
  {
    q: "Czy moge pracowac w UK na podstawie UK ETA?",
    a: "Nie. UK ETA nie uprawnia do podjecia pracy w Wielkiej Brytanii. Do pracy wymagana jest odpowiednia wiza pracownicza (np. Skilled Worker visa). ETA jest przeznaczona wylacznie do wizyt turystycznych, biznesowych i tranzytowych.",
  },
  {
    q: "Czy dzieci potrzebuja UK ETA?",
    a: "Tak, kazde dziecko podrozujace do Wielkiej Brytanii musi posiadac wlasne UK ETA, niezaleznie od wieku. Wymagany jest odrebny paszport biometryczny. Wniosek w imieniu dziecka moze zlozyc rodzic lub opiekun.",
  },
  {
    q: "Czy Polacy z settled status potrzebuja UK ETA?",
    a: "Nie. Polacy posiadajacy settled lub pre-settled status w ramach EU Settlement Scheme nie potrzebuja UK ETA. Ich status jest powiazany z paszportem i automatycznie weryfikowany na granicy.",
  },
  {
    q: "Gdzie moge zlozyc wniosek o UK ETA?",
    a: "Wniosek UK ETA mozna zlozyc wylacznie na oficjalnej stronie GOV.UK (gov.uk/eta) lub przez oficjalna aplikacje mobilna 'UK ETA'. Nie korzystaj z posrednikow, ktorzy pobieraja zawyzone oplaty.",
  },
];

export default function FAQ() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumb items={[{ label: "FAQ" }]} />

      <h1
        className="text-3xl md:text-4xl font-bold text-[#022444] mb-4"
        style={{ fontFamily: "var(--font-noto-serif), serif" }}
      >
        Najczesciej zadawane pytania (FAQ)
      </h1>
      <p className="text-gray-600 mb-10 leading-relaxed">
        Odpowiedzi na najczesciej zadawane pytania dotyczace systemu UK ETA i
        podrozowania do Wielkiej Brytanii.
      </p>

      <div className="space-y-6">
        {faqs.map((faq, i) => (
          <div key={i} className="border-b border-gray-200 pb-5">
            <h2 className="font-bold text-[#022444] mb-2 text-base">
              {faq.q}
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 bg-[#F5F5F5] border border-gray-200 rounded p-6">
        <h2 className="font-bold text-[#022444] mb-2">
          Nie znalazles odpowiedzi?
        </h2>
        <p className="text-gray-600 text-sm mb-4">
          Skontaktuj sie z nami, a odpowiemy na Twoje pytanie.
        </p>
        <Link
          href="/site-info/contact/"
          className="inline-block bg-[#022444] hover:bg-[#0a3a6b] text-white px-5 py-2 rounded font-bold text-sm transition"
        >
          Skontaktuj sie z nami
        </Link>
      </div>
    </div>
  );
}
