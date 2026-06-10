"use client";

import { useEffect, useState } from "react";

export default function StickyCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const nearBottom =
        window.innerHeight + y >= document.body.scrollHeight - 260;
      setShow(y > 520 && !nearBottom);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <a
      href="https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta"
      target="_blank"
      rel="noopener noreferrer"
      className={`cta-sticky-bar ${show ? "is-visible" : ""}`}
      aria-hidden={!show}
      tabIndex={show ? 0 : -1}
    >
      <span className="cta-sticky-main">
        <span className="cta-sticky-title">Rozpocznij wniosek UK ETA</span>
        <span className="cta-sticky-sub">
          Zloz wniosek najpozniej 72 godziny przed wyjazdem
        </span>
      </span>
      <span className="cta-sticky-go" aria-hidden>
        &rarr;
      </span>
    </a>
  );
}
