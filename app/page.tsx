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
                color: "#022444",
              }}
            >
              Elektroniczna Autoryzacja
              <br />
              Podrozy do Wielkiej Brytanii
            </h1>
            <p className="text-base md:text-xl mb-3 md:mb-4 leading-relaxed drop-shadow" style={{ color: "#022444" }}>
              Od 2 kwietnia 2025 roku obywatele UE potrzebuja UK ETA.
              Rozpatrzenie wniosku trwa do 72 godzin.
            </p>
            <p className="text-xs md:text-sm mb-6 md:mb-8 drop-shadow" style={{ color: "#022444" }}>
              Electronic Travel Authorisation (ETA) | Polska jest krajem objetym wymogiem
            </p>
            <a
              href="https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl border-2 border-white bg-[#8d1812] hover:bg-[#6d120e] transition shadow-lg text-center mx-auto mt-2"
              style={{ color: "white", textDecoration: "none", padding: "18px 24px", width: "100%", maxWidth: "360px" }}
            >
              <span style={{ color: "white", fontSize: "18px", fontWeight: "bold" }}>Zloz wniosek UK ETA</span>
            </a>
          </div>
        </div>
      </section>

      {/* Red border line below hero */}
      <div className="h-1 bg-[#8d1812]" />

      {/* Key facts - white cards with icons on gray bg */}
      <section style={{ backgroundColor: "#f0f2f5" }} className="py-12">
        <div className="max-w-3xl mx-auto px-10 md:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div style={{ backgroundColor: "white", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.06)", padding: "16px 12px" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/icon-payment.png" alt="" style={{ width: "40px", height: "40px", margin: "0 auto 8px" }} />
              <p className="text-2xl md:text-3xl font-bold text-[#022444]">&pound;10</p>
              <p className="text-xs text-gray-500 mt-1">Oplata za wniosek</p>
            </div>
            <div style={{ backgroundColor: "white", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.06)", padding: "16px 12px" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/icon-clock.png" alt="" style={{ width: "40px", height: "40px", margin: "0 auto 8px" }} />
              <p className="text-2xl md:text-3xl font-bold text-[#022444]">72h</p>
              <p className="text-xs text-gray-500 mt-1">Maks. czas rozpatrywania</p>
            </div>
            <div style={{ backgroundColor: "white", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.06)", padding: "16px 12px" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/icon-calendar.png" alt="" style={{ width: "40px", height: "40px", margin: "0 auto 8px" }} />
              <p className="text-2xl md:text-3xl font-bold text-[#022444]">2 lata</p>
              <p className="text-xs text-gray-500 mt-1">Okres waznosci</p>
            </div>
            <div style={{ backgroundColor: "white", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.06)", padding: "16px 12px" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/icon-suitcase.png" alt="" style={{ width: "40px", height: "40px", margin: "0 auto 8px" }} />
              <p className="text-2xl md:text-3xl font-bold text-[#022444]">6 mies.</p>
              <p className="text-xs text-gray-500 mt-1">Maks. pobyt w UK</p>
            </div>
          </div>
        </div>
      </section>

      {/* UK ETA overview - white bg */}
      <section className="bg-white py-16">
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

      {/* Application steps - gray bg, underline style */}
      <section style={{ backgroundColor: "#f0f2f5" }} className="py-16">
        <div className="max-w-3xl mx-auto px-10 md:px-16">
          <h2 className="py-4 px-6 text-lg sm:text-xl md:text-2xl font-bold leading-snug mb-6" style={{ backgroundColor: "#022444", color: "white" }}>
            Jak zlozyc wniosek UK ETA?
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-[#022444] mb-1 pb-2" style={{ borderBottom: "2px solid #022444" }}>
                Pobierz aplikacje UK ETA
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                Pobierz aplikacje &quot;UK ETA&quot; z App Store lub Google Play,
                lub wejdz na strone GOV.UK.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-[#022444] mb-1 pb-2" style={{ borderBottom: "2px solid #022444" }}>
                Zeskanuj paszport i zrob zdjecie
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                Zeskanuj paszport biometryczny za pomoca telefonu i zrob
                zdjecie twarzy (selfie).
              </p>
            </div>

            <div>
              <h3 className="font-bold text-[#022444] mb-1 pb-2" style={{ borderBottom: "2px solid #022444" }}>
                Wypelnij formularz i zaplac (&pound;10)
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                Podaj dane osobowe, informacje o podrozy i dokonaj platnosci
                karta lub Apple/Google Pay.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-[#022444] mb-1 pb-2" style={{ borderBottom: "2px solid #022444" }}>
                Oczekuj na zatwierdzenie
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                Wiekszosc wnioskow jest rozpatrywana w ciagu kilku godzin,
                ale moze potrwac do 72 godzin.
              </p>
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

      {/* FAQ preview - white bg */}
      <section className="bg-white py-16">
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

      {/* Related pages - gray bg, icon cards */}
      <section style={{ backgroundColor: "#f0f2f5" }} className="py-16">
        <div className="max-w-3xl mx-auto px-10 md:px-16">
          <h2 className="py-4 px-6 text-lg sm:text-xl md:text-2xl font-bold leading-snug mb-6" style={{ backgroundColor: "#022444", color: "white" }}>
            Przydatne strony
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              {
                href: "/eta-info/what-is-eta/",
                title: "Czym jest UK ETA?",
                desc: "Podstawowe informacje o systemie ETA",
                icon: "/images/icon-info.png",
              },
              {
                href: "/eta-info/application/",
                title: "Sposob skladania wniosku",
                desc: "Krok po kroku przez formularz",
                icon: "/images/icon-form.png",
              },
              {
                href: "/eta-info/fee/",
                title: "Oplaty za UK ETA",
                desc: "Szczegoly dotyczace kosztow",
                icon: "/images/icon-fee.png",
              },
              {
                href: "/eta-info/expiration/",
                title: "Okres waznosci",
                desc: "Kiedy odnowic autoryzacje ETA",
                icon: "/images/icon-validity.png",
              },
              {
                href: "/eta-info/required-documents/",
                title: "Wymagane dokumenty",
                desc: "Co przygotowac przed zlozeniem wniosku",
                icon: "/images/icon-docs.png",
              },
              {
                href: "/eta-info/official-gov-uk/",
                title: "Oficjalna strona GOV.UK",
                desc: "Link do strony rzadowej",
                icon: "/images/icon-gov.png",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block hover:shadow-md transition"
                style={{ textDecoration: "none", backgroundColor: "white", borderRadius: "12px", padding: "20px 16px", textAlign: "center" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.icon} alt="" style={{ width: "48px", height: "48px", margin: "0 auto 10px" }} />
                <h3 className="text-sm mb-1" style={{ color: "#022444", fontWeight: "bold" }}>
                  {item.title}
                </h3>
                <p className="text-xs" style={{ color: "#666" }}>{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - white bg */}
      <section className="bg-white py-16 text-center">
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
          <a
            href="https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl border-2 border-[#022444] bg-[#8d1812] hover:bg-[#6d120e] transition shadow-lg text-center mx-auto"
            style={{ color: "white", textDecoration: "none", padding: "18px 24px", width: "100%", maxWidth: "360px" }}
          >
            <span style={{ color: "white", fontSize: "18px", fontWeight: "bold" }}>Zloz wniosek UK ETA</span>
          </a>
        </div>
      </section>
    </div>
  );
}
