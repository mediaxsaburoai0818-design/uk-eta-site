import Link from "next/link";

const facts = [
  { value: "£20", label: "Oplata za wniosek" },
  { value: "72h", label: "Maks. czas rozpatrywania" },
  { value: "2 lata", label: "Okres waznosci" },
  { value: "6 mies.", label: "Maks. pobyt w UK" },
];

const features = [
  {
    icon: "doc",
    tone: "icon-navy",
    title: "Wniosek w pelni online",
    desc: "ETA skladasz przez aplikacje mobilna lub strone GOV.UK. Bez wizyty w ambasadzie i bez papierowych formularzy.",
  },
  {
    icon: "coin",
    tone: "icon-red",
    title: "Oplata tylko £20",
    desc: "Jednorazowa oplata £20 (okolo 100 PLN) za autoryzacje wazna 2 lata, z wielokrotnym wjazdem do Wielkiej Brytanii.",
  },
  {
    icon: "shield",
    tone: "icon-blue",
    title: "Wazna przez 2 lata",
    desc: "Po zatwierdzeniu ETA pozwala na wielokrotne wjazdy, kazdy pobyt do 6 miesiecy, przez caly okres waznosci.",
  },
];

const steps = [
  {
    icon: "phone",
    title: "Pobierz aplikacje UK ETA",
    desc: 'Pobierz aplikacje "UK ETA" z App Store lub Google Play, lub wejdz na strone GOV.UK.',
  },
  {
    icon: "scan",
    title: "Zeskanuj paszport i zrob zdjecie",
    desc: "Zeskanuj paszport biometryczny za pomoca telefonu i zrob zdjecie twarzy (selfie).",
  },
  {
    icon: "card",
    title: "Wypelnij formularz i zaplac (£20)",
    desc: "Podaj dane osobowe, informacje o podrozy i dokonaj platnosci karta lub Apple/Google Pay.",
  },
  {
    icon: "check",
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

const GOV = "https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta";

function Icon({ name }: { name: string }) {
  const p = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (name) {
    case "doc": return (<svg viewBox="0 0 24 24" {...p}><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" /><path d="M14 3v5h5" /><path d="M9 13h6M9 17h6" /></svg>);
    case "coin": return (<svg viewBox="0 0 24 24" {...p}><circle cx="12" cy="12" r="8" /><path d="M12 8v8M9.5 10.2a2.2 2 0 0 1 4 0M9.5 13.8a2.2 2 0 0 0 4 0" /></svg>);
    case "shield": return (<svg viewBox="0 0 24 24" {...p}><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" /><path d="M9 12l2 2 4-4" /></svg>);
    case "phone": return (<svg viewBox="0 0 24 24" {...p}><rect x="7" y="3" width="10" height="18" rx="2" /><path d="M11 18h2" /></svg>);
    case "scan": return (<svg viewBox="0 0 24 24" {...p}><path d="M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2" /><circle cx="12" cy="12" r="2.4" /></svg>);
    case "card": return (<svg viewBox="0 0 24 24" {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 10h18M7 15h4" /></svg>);
    case "check": return (<svg viewBox="0 0 24 24" {...p}><circle cx="12" cy="12" r="9" /><path d="M8.5 12.5l2.2 2.2 4.8-4.8" /></svg>);
    case "pin": return (<svg viewBox="0 0 24 24" {...p}><path d="M12 21s7-5.7 7-11a7 7 0 1 0-14 0c0 5.3 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></svg>);
    case "arrow": return (<svg viewBox="0 0 24 24" {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>);
    default: return null;
  }
}

export default function Home() {
  return (
    <div>
      {/* === Hero === */}
      <section className="relative text-white min-h-[460px] md:min-h-[640px] flex items-center overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/hero-uk.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 hero-scrim" />
        <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-28 w-full">
          <div className="max-w-3xl mx-auto text-center reveal">
            <p className="kicker" style={{ color: "rgba(255,255,255,0.85)" }}>UK Travel Authorisation</p>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-5 leading-[1.1] drop-shadow"
              style={{ fontFamily: "var(--font-display)", color: "white" }}
            >
              Elektroniczna Autoryzacja Podrozy do Wielkiej Brytanii
            </h1>
            <p className="text-base md:text-xl mb-8 leading-relaxed drop-shadow text-white/95 max-w-2xl mx-auto">
              Od 2 kwietnia 2025 roku obywatele UE potrzebuja UK ETA. Wniosek skladasz online, a rozpatrzenie trwa do 72 godzin.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-10 justify-center items-center">
              <a href={GOV} target="_blank" rel="noopener noreferrer" className="btn-red text-base">
                Zloz wniosek UK ETA
              </a>
              <Link href="/eta-info/what-is-eta/" className="btn-blue-outline text-sm">
                Dowiedz sie wiecej
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-x-8 sm:gap-x-12 gap-y-4 pt-6 border-t border-white/25 max-w-xl mx-auto">
              {facts.slice(0, 3).map((f) => (
                <div key={f.label} className="text-center">
                  <p className="text-2xl md:text-3xl font-semibold drop-shadow" style={{ fontFamily: "var(--font-display)", color: "white" }}>{f.value}</p>
                  <p className="text-xs text-white/80 mt-1">{f.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* === What is UK ETA — feature cards === */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-12 reveal">
            <p className="kicker">O systemie ETA</p>
            <div className="deco-head center"><span className="deco-line" /></div>
            <h2 className="sec-title text-3xl md:text-4xl mb-4">Czym jest UK ETA?</h2>
            <p className="sec-lead">
              UK ETA (Electronic Travel Authorisation) to elektroniczna autoryzacja podrozy wprowadzona przez rzad Wielkiej Brytanii.
              Od 2 kwietnia 2025 roku obywatele panstw UE, w tym Polski, musza uzyskac ETA przed podroza do Zjednoczonego Krolestwa.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={f.title} className={`feature-card reveal reveal-delay-${i + 1}`}>
                <span className={`icon-circle ${f.tone}`}><Icon name={f.icon} /></span>
                <h3 className="feature-title">{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-light)" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === Okres waznosci i termin === */}
      <section className="py-16 md:py-20" style={{ background: "var(--color-bg-soft)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-12 reveal">
            <p className="kicker">Waznosc i termin</p>
            <div className="deco-head center"><span className="deco-line" /></div>
            <h2 className="sec-title text-3xl md:text-4xl mb-4">Okres waznosci ETA i termin skladania wniosku</h2>
            <p className="sec-lead">Kiedy zlozyc wniosek i jak dlugo ETA pozostaje wazne.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
            <div className="card reveal">
              <h3 className="feature-title mb-2">Okres waznosci</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-light)" }}>
                ETA jest wazne przez <strong style={{ color: "var(--color-blue)" }}>2 lata</strong> od daty wydania i pozwala na wielokrotne wjazdy do Wielkiej Brytanii. Jesli jednak Twoj paszport traci waznosc wczesniej niz za 2 lata, ETA wygasa razem z paszportem — w takim wypadku najpierw odnow paszport, a dopiero potem zloz wniosek o ETA.
              </p>
            </div>
            <div className="card reveal reveal-delay-1">
              <h3 className="feature-title mb-2">Termin skladania wniosku</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-light)" }}>
                Decyzje otrzymasz zwykle w ciagu <strong style={{ color: "var(--color-blue)" }}>3 dni roboczych</strong>, choc w niektorych przypadkach (np. prosba o dodatkowe dokumenty) moze to potrwac do 30 dni. Wniosek najlepiej zlozyc od razu po zaplanowaniu podrozy. Po zatwierdzeniu otrzymasz e-mail z potwierdzeniem; przy wjezdzie zwykle nie trzeba okazywac numeru ETA, ale warto zachowac potwierdzenie (zrzut ekranu lub wydruk).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === Co jest potrzebne === */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-12 reveal">
            <p className="kicker">Wymagania</p>
            <div className="deco-head center"><span className="deco-line" /></div>
            <h2 className="sec-title text-3xl md:text-4xl mb-4">Co jest potrzebne do zlozenia wniosku</h2>
            <p className="sec-lead">Przygotuj te cztery rzeczy, zanim zaczniesz wypelniac wniosek o ETA.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {[
              "Wazny paszport (zdjecie lub skan strony ze zdjeciem)",
              "Zdjecie twarzy (nie jest wymagane dla dzieci w wieku 9 lat i mlodszych)",
              "Adres e-mail",
              "Karta platnicza do oplaty (Visa, Mastercard, JCB, American Express, Diners Club)",
            ].map((item, i) => (
              <div key={i} className="card flex gap-4 items-start reveal text-left">
                <span className="flex-shrink-0 w-9 h-9 rounded-full inline-flex items-center justify-center font-semibold text-white" style={{ background: "var(--color-blue)", fontFamily: "var(--font-display)" }}>{i + 1}</span>
                <p className="text-sm leading-relaxed pt-1" style={{ color: "var(--color-text-light)" }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === Application steps === */}
      <section className="py-16 md:py-20" style={{ background: "var(--color-bg-soft)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-14 reveal">
            <p className="kicker">Procedura</p>
            <div className="deco-head center"><span className="deco-line" /></div>
            <h2 className="sec-title text-3xl md:text-4xl mb-4">Jak zlozyc wniosek UK ETA?</h2>
            <p className="sec-lead">Caly proces zajmuje kilka minut i odbywa sie online w czterech krokach.</p>
          </div>
          <div className="max-w-2xl mx-auto flex flex-col gap-6 text-left">
            {steps.map((s, i) => (
              <div key={s.title} className="flex gap-4 items-start reveal">
                <span
                  className="flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center font-semibold text-white"
                  style={{ background: "var(--color-blue)", fontFamily: "var(--font-display)" }}
                >
                  {i + 1}
                </span>
                <div>
                  <h3 className="feature-title !mb-1">{s.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-light)" }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/eta-info/application/" className="content-link font-bold">
              Szczegolowy przewodnik po procedurze
            </Link>
          </div>
        </div>
      </section>

      {/* === Countries + who needs ETA / transit === */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-12 reveal">
            <p className="kicker">Kto potrzebuje ETA</p>
            <div className="deco-head center"><span className="deco-line" /></div>
            <h2 className="sec-title text-3xl md:text-4xl mb-4">Wymagana przy wjezdzie do Wielkiej Brytanii</h2>
            <p className="sec-lead">
              UK ETA dotyczy obywateli Polski i innych panstw UE oraz dziesiatek innych krajow, ktorzy wjezdzaja do Wielkiej Brytanii
              w celach turystycznych, biznesowych lub tranzytowych. Autoryzacja pozwala na pobyt do 6 miesiecy.
            </p>
          </div>

          {/* Mapa obszaru objetego ETA */}
          <div className="max-w-sm mx-auto mb-16 reveal reveal-delay-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/uk-eta-map.webp"
              alt="Mapa Wielkiej Brytanii z zaznaczonym obszarem objetym ETA: Anglia, Szkocja, Walia i Irlandia Polnocna"
              width={560}
              height={951}
              className="w-full max-w-[320px] h-auto mx-auto block"
            />
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-6 text-sm">
              <span className="inline-flex items-center gap-2" style={{ color: "var(--color-text)" }}>
                <span className="inline-block w-4 h-4 rounded-sm" style={{ background: "#022444" }} />
                Objete ETA (Wielka Brytania)
              </span>
              <span className="inline-flex items-center gap-2" style={{ color: "var(--color-text-light)" }}>
                <span className="inline-block w-4 h-4 rounded-sm border" style={{ background: "#d3d8de", borderColor: "var(--color-border)" }} />
                Poza ETA (Irlandia)
              </span>
            </div>
            <p className="text-center mt-4 text-sm" style={{ color: "var(--color-text-light)" }}>
              ETA obejmuje <strong style={{ color: "var(--color-blue)" }}>cala Wielka Brytanie</strong>: Anglia, Szkocja, Walia i Irlandia Polnocna. Republika Irlandii nie jest objeta systemem ETA.
            </p>
          </div>

          {/* Tranzyt */}
          <div className="max-w-3xl mx-auto reveal reveal-delay-2">
            <div className="text-center mb-8">
              <h3 className="sec-title text-2xl md:text-3xl mb-3">Tranzyt przez Wielka Brytanie</h3>
              <p className="sec-lead">Obowiazek uzyskania ETA przy przesiadce zalezy od rodzaju tranzytu.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="card">
                <span className="inline-block text-[11px] font-bold uppercase tracking-wider mb-2" style={{ color: "var(--color-blue)" }}>Tranzyt lotniczy (airside)</span>
                <p className="feature-title !text-lg mb-2">Co do zasady bez ETA</p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-light)" }}>
                  Jesli nie przechodzisz brytyjskiej kontroli granicznej i pozostajesz w strefie tranzytowej lotniska, ETA zwykle nie jest wymagane. Jesli jednak opuszczasz strefe tranzytowa (np. nocleg lub przesiadka na innym lotnisku), ETA bedzie potrzebne.
                </p>
              </div>
              <div className="card">
                <span className="inline-block text-[11px] font-bold uppercase tracking-wider mb-2" style={{ color: "var(--color-red-vivid)" }}>Tranzyt ladowy (landside)</span>
                <p className="feature-title !text-lg mb-2">Co do zasady wymaga ETA</p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-light)" }}>
                  Przy przejezdzie przez brytyjska kontrole graniczna — np. Eurostarem (pociag przez kanal La Manche) lub promem — i przejsciu odprawy granicznej, ETA jest co do zasady wymagane.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === FAQ === */}
      <section className="py-16 md:py-20" style={{ background: "var(--color-bg-soft)" }}>
        <div className="max-w-3xl mx-auto px-6">
          <div className="mb-10 reveal text-center">
            <p className="kicker">FAQ</p>
            <div className="deco-head center"><span className="deco-line" /></div>
            <h2 className="sec-title text-3xl md:text-4xl">Najczesciej zadawane pytania</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details key={f.q} className={`card group reveal reveal-delay-${(i % 4) + 1}`}>
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-bold" style={{ color: "var(--color-blue)" }}>
                  <span>{f.q}</span>
                  <span aria-hidden className="text-xl group-open:rotate-45 transition-transform" style={{ color: "var(--color-red-vivid)" }}>+</span>
                </summary>
                <p className="text-sm leading-relaxed mt-3" style={{ color: "var(--color-text-light)" }}>{f.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/faq/" className="content-link font-bold">Zobacz wszystkie pytania FAQ</Link>
          </div>
        </div>
      </section>

      {/* === Related pages === */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-10 reveal text-center">
            <p className="kicker">Przewodnik</p>
            <div className="deco-head center"><span className="deco-line" /></div>
            <h2 className="sec-title text-3xl md:text-4xl">Przydatne strony</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {links.map((item, i) => (
              <Link key={item.href} href={item.href} className={`card no-underline group reveal reveal-delay-${(i % 4) + 1}`} style={{ textDecoration: "none" }}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="feature-title text-base mb-1">{item.title}</h3>
                    <p className="text-xs" style={{ color: "var(--color-text-light)" }}>{item.desc}</p>
                  </div>
                  <span className="shrink-0 mt-1" style={{ color: "var(--color-red-vivid)" }}><Icon name="arrow" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* === Final CTA === */}
      <section className="py-20 text-white text-center" style={{ background: "var(--color-blue)" }}>
        <div className="max-w-3xl mx-auto px-6 reveal">
          <p className="kicker" style={{ color: "rgba(255,255,255,0.8)" }}>Gotowy do startu?</p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4" style={{ fontFamily: "var(--font-display)", color: "white" }}>
            Zacznij procedure skladania wniosku UK ETA
          </h2>
          <p className="mb-8 text-white/90 max-w-xl mx-auto">
            Przygotuj paszport biometryczny i zloz wniosek przez aplikacje lub strone GOV.UK. Caly proces zajmuje kilka minut.
          </p>
          <a href={GOV} target="_blank" rel="noopener noreferrer" className="btn-red text-base">
            Zloz wniosek UK ETA
          </a>
        </div>
      </section>
    </div>
  );
}
