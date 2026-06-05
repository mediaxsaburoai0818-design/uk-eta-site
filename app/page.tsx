import Link from "next/link";

const facts = [
  { value: "£20", label: "Oplata za wniosek" },
  { value: "72h", label: "Maks. czas rozpatrywania" },
  { value: "2 lata", label: "Okres waznosci" },
  { value: "6 mies.", label: "Maks. pobyt w UK" },
];

const steps = [
  {
    title: "Pobierz aplikacje UK ETA",
    desc: 'Pobierz aplikacje "UK ETA" z App Store lub Google Play, lub wejdz na strone GOV.UK.',
  },
  {
    title: "Zeskanuj paszport i zrob zdjecie",
    desc: "Zeskanuj paszport biometryczny za pomoca telefonu i zrob zdjecie twarzy (selfie).",
  },
  {
    title: "Wypelnij formularz i zaplac (£20)",
    desc: "Podaj dane osobowe, informacje o podrozy i dokonaj platnosci karta lub Apple/Google Pay.",
  },
  {
    title: "Oczekuj na zatwierdzenie",
    desc: "Wiekszosc wnioskow jest rozpatrywana w ciagu kilku godzin, ale moze potrwac do 72 godzin.",
  },
];

const faqs = [
  {
    q: "Czy Polacy potrzebuja UK ETA?",
    a: "Tak. Od 2 kwietnia 2025 roku obywatele polscy (i pozostali obywatele UE) musza posiadac UK ETA przed podroza do Wielkiej Brytanii. Dotyczy to wizyt turystycznych, biznesowych i tranzytowych.",
  },
  {
    q: "Ile kosztuje UK ETA i jak dlugo jest wazna?",
    a: "Oplata za UK ETA wynosi £20 (okolo 100 PLN). Autoryzacja jest wazna przez 2 lata od daty wydania i pozwala na wielokrotne wjazdy do UK, kazdy trwajacy do 6 miesiecy.",
  },
  {
    q: "Jaka jest roznica miedzy UK ETA a wiza?",
    a: "UK ETA to uproszczona autoryzacja elektroniczna do krotkich pobytow (do 6 miesiecy). Koszt to £20, a wniosek sklada sie online. Wiza brytyjska wymaga wizyty w centrum wizowym, kosztuje od £100 i pozwala na dluzsze pobyty lub prace.",
  },
];

const links = [
  { href: "/eta-info/what-is-eta/", title: "Czym jest UK ETA?", desc: "Podstawowe informacje o systemie ETA" },
  { href: "/eta-info/application/", title: "Sposob skladania wniosku", desc: "Krok po kroku przez formularz" },
  { href: "/eta-info/fee/", title: "Oplaty za UK ETA", desc: "Szczegoly dotyczace kosztow" },
  { href: "/eta-info/expiration/", title: "Okres waznosci", desc: "Kiedy odnowic autoryzacje ETA" },
  { href: "/eta-info/required-documents/", title: "Wymagane dokumenty", desc: "Co przygotowac przed zlozeniem wniosku" },
  { href: "/eta-info/official-gov-uk/", title: "Oficjalna strona GOV.UK", desc: "Link do strony rzadowej" },
];

export default function Home() {
  return (
    <div>
      {/* === Hero === */}
      <section className="relative text-white min-h-[420px] md:min-h-[600px] flex items-center overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hero-uk.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative max-w-5xl mx-auto px-6 py-16 md:py-28 w-full">
          <div className="max-w-3xl mx-auto text-center reveal">
            <p className="text-[11px] md:text-[13px] tracking-[0.32em] uppercase mb-4 text-white/85 font-medium">
              UK Travel Authorisation
            </p>
            <h1
              className="text-3xl sm:text-4xl md:text-6xl font-bold mb-5 leading-[1.12] drop-shadow"
              style={{ fontFamily: "var(--font-display)", color: "white" }}
            >
              Elektroniczna Autoryzacja
              <br />
              Podrozy do Wielkiej Brytanii
            </h1>
            <p className="text-base md:text-xl mb-3 leading-relaxed drop-shadow text-white/95">
              Od 2 kwietnia 2025 roku obywatele UE potrzebuja UK ETA.
              Rozpatrzenie wniosku trwa do 72 godzin.
            </p>
            <p className="text-xs md:text-sm mb-8 text-white/85 drop-shadow">
              Electronic Travel Authorisation (ETA) | Polska jest krajem objetym wymogiem
            </p>
            <div className="flex flex-col gap-3 items-center mt-2 w-full max-w-[380px] mx-auto">
              <a
                href="https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-red w-full text-base"
              >
                Zloz wniosek UK ETA
              </a>
              <Link href="/eta-info/what-is-eta/" className="btn-blue-outline w-full text-sm bg-white/95">
                Dowiedz sie wiecej o UK ETA
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* === Key facts === */}
      <section className="py-12 bg-white border-b border-[var(--color-border)]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {facts.map((f, i) => (
              <div key={f.label} className={`reveal reveal-delay-${i + 1}`}>
                <p className="text-3xl md:text-4xl font-bold" style={{ color: "var(--color-blue)", fontFamily: "var(--font-display)" }}>
                  {f.value}
                </p>
                <p className="text-sm text-[color:var(--color-text-light)] mt-2">{f.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === UK ETA overview === */}
      <section className="py-16 bg-[var(--color-bg-soft)]">
        <div className="max-w-3xl mx-auto px-6 reveal">
          <span className="kicker">O systemie ETA</span>
          <h2 className="heading-rule text-2xl md:text-3xl">Czym jest UK ETA?</h2>
          <p className="text-[color:var(--color-text-light)] mb-4 leading-relaxed">
            UK ETA (Electronic Travel Authorisation) to elektroniczna autoryzacja podrozy
            wprowadzona przez rzad Wielkiej Brytanii. Od 2 kwietnia 2025 roku obywatele
            panstw UE, w tym Polski, musza uzyskac ETA przed podroza do Zjednoczonego Krolestwa.
          </p>
          <p className="text-[color:var(--color-text-light)] leading-relaxed">
            ETA zastepuje dotychczasowe zasady swobodnego ruchu i jest wymagana w przypadku
            wizyt turystycznych, biznesowych lub tranzytowych. Wniosek skladany jest online
            lub przez aplikacje mobilna, a po zatwierdzeniu jest wazny przez 2 lata.
          </p>
        </div>
      </section>

      {/* === Application steps === */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <span className="kicker reveal">Procedura</span>
          <h2 className="heading-rule text-2xl md:text-3xl reveal">Jak zlozyc wniosek UK ETA?</h2>
          <div className="mt-8 grid gap-5">
            {steps.map((s, i) => (
              <div key={s.title} className={`card flex items-start gap-4 reveal reveal-delay-${(i % 4) + 1}`}>
                <span
                  className="shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-full text-white font-bold text-sm"
                  style={{ background: "var(--color-blue)" }}
                >
                  {i + 1}
                </span>
                <div className="flex-1">
                  <h3 className="font-bold text-base md:text-lg mb-1" style={{ color: "var(--color-blue)" }}>
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[color:var(--color-text-light)]">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/eta-info/application/" className="content-link font-bold">
              Szczegolowy przewodnik po procedurze →
            </Link>
          </div>
        </div>
      </section>

      {/* === FAQ preview === */}
      <section className="py-16 bg-[var(--color-bg-soft)]">
        <div className="max-w-3xl mx-auto px-6">
          <span className="kicker reveal">FAQ</span>
          <h2 className="heading-rule text-2xl md:text-3xl reveal">Najczesciej zadawane pytania</h2>
          <div className="mt-6 space-y-4">
            {faqs.map((f, i) => (
              <details key={f.q} className={`card group reveal reveal-delay-${(i % 4) + 1}`}>
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-bold" style={{ color: "var(--color-blue)" }}>
                  <span>{f.q}</span>
                  <span aria-hidden className="text-[color:var(--color-red)] text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-sm leading-relaxed text-[color:var(--color-text-light)] mt-3">{f.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/faq/" className="content-link font-bold">
              Zobacz wszystkie pytania FAQ →
            </Link>
          </div>
        </div>
      </section>

      {/* === Related pages === */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <span className="kicker reveal">Przewodnik</span>
          <h2 className="heading-rule text-2xl md:text-3xl reveal">Przydatne strony</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {links.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                className={`card no-underline reveal reveal-delay-${(i % 4) + 1}`}
                style={{ textDecoration: "none" }}
              >
                <h3 className="text-base font-bold mb-1" style={{ color: "var(--color-blue)" }}>{item.title}</h3>
                <p className="text-xs text-[color:var(--color-text-light)]">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* === CTA === */}
      <section className="py-16 text-white text-center" style={{ background: "var(--color-blue)" }}>
        <div className="max-w-3xl mx-auto px-6 reveal">
          <span className="kicker" style={{ color: "rgba(255,255,255,0.8)" }}>Gotowy do startu?</span>
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-display)", color: "white" }}>
            Zacznij procedure skladania wniosku UK ETA
          </h2>
          <p className="mb-8 text-white/90">
            Przygotuj paszport biometryczny i zloz wniosek przez aplikacje lub strone GOV.UK.
          </p>
          <div className="max-w-[380px] mx-auto">
            <a
              href="https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-red w-full text-base"
            >
              Zloz wniosek UK ETA
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
