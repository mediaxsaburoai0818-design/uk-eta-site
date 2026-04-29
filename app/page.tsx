import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative text-white min-h-[400px] md:min-h-[520px] flex items-center overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-uk.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#022444]/55 to-[#022444]/40" />
        <div className="relative max-w-3xl mx-auto px-10 md:px-16 py-16 md:py-28 w-full">
          <div className="max-w-3xl mx-auto text-center">
            <h1
              className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight drop-shadow-lg"
              style={{
                fontFamily: "var(--font-noto-serif), serif",
                color: "white",
              }}
            >
              Elektroniczna Autoryzacja
              <br />
              Podrozy do Wielkiej Brytanii
            </h1>
            <p className="text-base md:text-xl mb-3 md:mb-4 leading-relaxed drop-shadow" style={{ color: "white" }}>
              Od 2 kwietnia 2025 roku obywatele UE potrzebuja UK ETA.
              Rozpatrzenie wniosku trwa do 72 godzin.
            </p>
            <p className="text-xs md:text-sm mb-6 md:mb-8 drop-shadow" style={{ color: "white" }}>
              Electronic Travel Authorisation (ETA) | Polska jest krajem objetym wymogiem
            </p>
            <div className="flex flex-col gap-3 items-center mt-2 w-full" style={{ maxWidth: "360px", margin: "0 auto" }}>
              <a
                href="https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-xl border-2 border-white bg-[#8d1812] hover:bg-[#6d120e] transition shadow-lg text-center"
                style={{ color: "white", textDecoration: "none", padding: "18px 24px" }}
              >
                <span style={{ color: "white", fontSize: "18px", fontWeight: "bold" }}>Zloz wniosek UK ETA</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Red border line below hero */}
      <div className="h-1 bg-[#8d1812]" />

      {/* Key facts - floating cards on background */}
      <section style={{ backgroundColor: "#f0f2f5" }} className="py-12">
        <div className="max-w-3xl mx-auto px-10 md:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div style={{ backgroundColor: "#eaf0f7", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)", padding: "24px 16px" }}>
              <p className="text-3xl md:text-4xl font-bold text-[#022444]">&pound;10</p>
              <p className="text-sm text-gray-500 mt-2">Oplata za wniosek</p>
            </div>
            <div style={{ backgroundColor: "#eaf0f7", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)", padding: "24px 16px" }}>
              <p className="text-3xl md:text-4xl font-bold text-[#022444]">72h</p>
              <p className="text-sm text-gray-500 mt-2">Maks. czas rozpatrywania</p>
            </div>
            <div style={{ backgroundColor: "#eaf0f7", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)", padding: "24px 16px" }}>
              <p className="text-3xl md:text-4xl font-bold text-[#022444]">2 lata</p>
              <p className="text-sm text-gray-500 mt-2">Okres waznosci</p>
            </div>
            <div style={{ backgroundColor: "#eaf0f7", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)", padding: "24px 16px" }}>
              <p className="text-3xl md:text-4xl font-bold text-[#022444]">6 mies.</p>
              <p className="text-sm text-gray-500 mt-2">Maks. pobyt w UK</p>
            </div>
          </div>
        </div>
      </section>

      {/* UK ETA overview - light gray bg */}
      <section style={{ backgroundColor: "#f0f2f5" }} className="py-16">
        <div className="max-w-3xl mx-auto px-10 md:px-16">
          <h2 className="py-4 px-6 text-lg sm:text-xl md:text-2xl font-bold leading-snug mb-6" style={{ backgroundColor: "#022444", color: "white" }}>
            Czym jest UK ETA?
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            UK ETA (Electronic Travel Authorisation) to elektroniczna autoryzacja
            podrozy wprowadzona przez rzad Wielkiej Brytanii. Od 2 kwietnia 2025
            roku obywatele panstw UE, w tym Polski, musza uzyskac ETA przed
            podroza do Zjednoczonego Krolestwa.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            ETA zastepuje dotychczasowe zasady swobodnego ruchu i jest wymagana
            w przypadku wizyt turystycznych, biznesowych lub tranzytowych. Wniosek
            skladany jest online lub przez aplikacje mobilna, a po zatwierdzeniu
            jest wazny przez 2 lata.
          </p>
        </div>
      </section>

      {/* Application steps - white bg */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-10 md:px-16">
          <h2 className="py-4 px-6 text-lg sm:text-xl md:text-2xl font-bold leading-snug mb-6" style={{ backgroundColor: "#022444", color: "white" }}>
            Jak zlozyc wniosek UK ETA?
          </h2>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <span className="flex-shrink-0 w-8 h-8 bg-[#022444] text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </span>
              <div>
                <h3 className="font-bold text-[#022444] mb-1">
                  Pobierz aplikacje UK ETA
                </h3>
                <p className="text-gray-600 text-sm">
                  Pobierz aplikacje &quot;UK ETA&quot; z App Store lub Google Play,
                  lub wejdz na strone GOV.UK.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <span className="flex-shrink-0 w-8 h-8 bg-[#022444] text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </span>
              <div>
                <h3 className="font-bold text-[#022444] mb-1">
                  Zeskanuj paszport i zrob zdjecie
                </h3>
                <p className="text-gray-600 text-sm">
                  Zeskanuj paszport biometryczny za pomoca telefonu i zrob
                  zdjecie twarzy (selfie).
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <span className="flex-shrink-0 w-8 h-8 bg-[#022444] text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </span>
              <div>
                <h3 className="font-bold text-[#022444] mb-1">
                  Wypelnij formularz i zaplac (&pound;10)
                </h3>
                <p className="text-gray-600 text-sm">
                  Podaj dane osobowe, informacje o podrozy i dokonaj platnosci
                  karta lub Apple/Google Pay.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <span className="flex-shrink-0 w-8 h-8 bg-[#022444] text-white rounded-full flex items-center justify-center text-sm font-bold">
                4
              </span>
              <div>
                <h3 className="font-bold text-[#022444] mb-1">
                  Oczekuj na zatwierdzenie
                </h3>
                <p className="text-gray-600 text-sm">
                  Wiekszosc wnioskow jest rozpatrywana w ciagu kilku godzin,
                  ale moze potrwac do 72 godzin.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Link
              href="/eta-info/application/"
              className="text-[#022444] font-bold underline underline-offset-2 hover:text-[#0a3a6b] transition"
            >
              Szczegolowy przewodnik po procedurze &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ preview - light gray bg */}
      <section style={{ backgroundColor: "#f0f2f5" }} className="py-16">
        <div className="max-w-3xl mx-auto px-10 md:px-16">
          <h2 className="py-4 px-6 text-lg sm:text-xl md:text-2xl font-bold leading-snug mb-6" style={{ backgroundColor: "#022444", color: "white" }}>
            Najczesciej zadawane pytania
          </h2>

          <div className="space-y-6">
            <div className="border-b border-gray-300 pb-5">
              <h3 className="font-bold text-[#022444] mb-2">
                Czy Polacy potrzebuja UK ETA?
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Tak. Od 2 kwietnia 2025 roku obywatele polscy (i pozostali
                obywatele UE) musza posiadac UK ETA przed podroza do Wielkiej
                Brytanii. Dotyczy to wizyt turystycznych, biznesowych i
                tranzytowych.
              </p>
            </div>

            <div className="border-b border-gray-300 pb-5">
              <h3 className="font-bold text-[#022444] mb-2">
                Ile kosztuje UK ETA i jak dlugo jest wazna?
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Oplata za UK ETA wynosi &pound;10 (okolo 50 PLN). Autoryzacja
                jest wazna przez 2 lata od daty wydania i pozwala na wielokrotne
                wjazdy do UK, kazdy trwajacy do 6 miesiecy.
              </p>
            </div>

            <div className="border-b border-gray-300 pb-5">
              <h3 className="font-bold text-[#022444] mb-2">
                Jaka jest roznica miedzy UK ETA a wiza?
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                UK ETA to uproszczona autoryzacja elektroniczna do krotkich
                pobytow (do 6 miesiecy). Koszt to &pound;10, a wniosek sklada
                sie online. Wiza brytyjska wymaga wizyty w centrum wizowym,
                kosztuje od &pound;100 i pozwala na dluzsze pobyty lub prace.
              </p>
            </div>
          </div>

          <div className="mt-6">
            <Link
              href="/faq/"
              className="text-[#022444] font-bold underline underline-offset-2 hover:text-[#0a3a6b] transition"
            >
              Zobacz wszystkie pytania FAQ &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Related pages - white bg */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-10 md:px-16">
          <h2 className="py-4 px-6 text-lg sm:text-xl md:text-2xl font-bold leading-snug mb-6" style={{ backgroundColor: "#022444", color: "white" }}>
            Przydatne strony
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                href: "/eta-info/what-is-eta/",
                title: "Czym jest UK ETA?",
                desc: "Podstawowe informacje o systemie ETA",
              },
              {
                href: "/eta-info/application/",
                title: "Sposob skladania wniosku",
                desc: "Krok po kroku przez formularz",
              },
              {
                href: "/eta-info/fee/",
                title: "Oplaty za UK ETA",
                desc: "Szczegoly dotyczace kosztow",
              },
              {
                href: "/eta-info/expiration/",
                title: "Okres waznosci",
                desc: "Kiedy odnowic autoryzacje ETA",
              },
              {
                href: "/eta-info/required-documents/",
                title: "Wymagane dokumenty",
                desc: "Co przygotowac przed zlozeniem wniosku",
              },
              {
                href: "/eta-info/official-gov-uk/",
                title: "Oficjalna strona GOV.UK",
                desc: "Link do strony rzadowej",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-4 border-b border-gray-200 hover:bg-gray-50 transition"
                style={{ textDecoration: "none" }}
              >
                <h3 className="text-sm mb-1" style={{ color: "#333", fontWeight: "bold" }}>
                  {item.title}
                </h3>
                <p className="text-xs" style={{ color: "#666" }}>{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - light gray bg */}
      <section style={{ backgroundColor: "#f0f2f5" }} className="py-16 text-center">
        <div className="max-w-3xl mx-auto px-10 md:px-16">
          <h2
            className="text-2xl md:text-3xl font-bold mb-4"
            style={{
              fontFamily: "var(--font-noto-serif), serif",
              color: "#022444",
            }}
          >
            Zacznij procedure skladania wniosku UK ETA
          </h2>
          <p className="mb-8 text-gray-600">
            Przygotuj paszport biometryczny i zloz wniosek przez aplikacje lub
            strone GOV.UK.
          </p>
          <div style={{ maxWidth: "360px", margin: "0 auto" }}>
            <a
              href="https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full rounded-xl border-2 border-[#022444] bg-[#8d1812] hover:bg-[#6d120e] transition shadow-lg text-center"
              style={{ color: "white", textDecoration: "none", padding: "18px 24px" }}
            >
              <span style={{ color: "white", fontSize: "18px", fontWeight: "bold" }}>Zloz wniosek UK ETA</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
