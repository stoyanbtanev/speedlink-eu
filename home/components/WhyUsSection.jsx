import React, { useRef, useState, Suspense } from "react";
import { gsap, useGSAP } from "../../src/lib/gsap-config";
import { useLang } from "../../src/context/LanguageContext";
import { useTheme } from "../../src/context/ThemeContext";
import { whyUs, t } from "../../src/data/translations";
import { IMAGES } from "../../src/data/images";
import { Modal } from "../../src/components/Modal";
import { ContactForm } from "../../src/components/ContactForm";

const LeafletMap = React.lazy(() =>
  import("../../src/components/LeafletMap").then((m) => ({ default: m.LeafletMap }))
);

const ICONS = [
  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
    <path d="M14.5 2L6 13h5.5l-1.5 9L19 10h-5.5L16 2h-1.5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
    <path d="M5.5 7.5l-1.2-.8M4 12H2.5M5.5 16.5l-1.2.8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
    <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.4"/>
    <ellipse cx="12" cy="12" rx="4" ry="9.5" stroke="currentColor" strokeWidth="1" opacity="0.6"/>
    <path d="M3.5 8.5h17M3.5 15.5h17" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.45"/>
    <circle cx="19.5" cy="4.5" r="2" stroke="currentColor" strokeWidth="1" opacity="0.7"/>
    <circle cx="19.5" cy="4.5" r="0.6" fill="currentColor" opacity="0.7"/>
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
    <path d="M8 2h8v3a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
    <rect x="5" y="4" width="14" height="18" rx="2" stroke="currentColor" strokeWidth="1.4"/>
    <path d="M8.5 10h7M8.5 13.5h5M8.5 17h3" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.55"/>
    <circle cx="16.5" cy="17" r="2.5" stroke="currentColor" strokeWidth="1.2" opacity="0.7"/>
    <path d="M15.3 17l.8.8 1.7-1.6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.7"/>
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
    <circle cx="12" cy="14" r="2.5" stroke="currentColor" strokeWidth="1.4"/>
    <circle cx="12" cy="14" r="0.8" fill="currentColor"/>
    <path d="M7.5 10a6.5 6.5 0 0 1 9 0" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    <path d="M5 7a10.5 10.5 0 0 1 14 0" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
    <path d="M12 17v4.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    <path d="M9.5 21.5h5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
  </svg>,
];

const CARD_IMAGES = [
  IMAGES.services.ftl,
  IMAGES.services.ocean,
  IMAGES.services.customs,
  IMAGES.services.warehouse,
];

export function WhyUsSection() {
  const { lang } = useLang();
  const { theme } = useTheme();
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [mapModalOpen, setMapModalOpen] = useState(false);

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    // --- Header reveal ---
    const headerEls = section.querySelectorAll(".reveal-header-child");
    gsap.set(headerEls, { y: 36, opacity: 0 });
    gsap.to(headerEls, {
      y: 0, opacity: 1, duration: 1.1, ease: "silk",
      stagger: { each: 0.1, ease: "power2.out" },
      scrollTrigger: { trigger: section, start: "top 80%", once: true },
    });

    // --- Card entry reveal ---
    const cards = section.querySelectorAll(".why-card");
    cards.forEach((card, i) => {
      gsap.set(card, { y: 80, opacity: 0, scale: 0.96 });
      gsap.to(card, {
        y: 0, opacity: 1, scale: 1,
        duration: 1.1, ease: "silk",
        scrollTrigger: { trigger: card, start: "top 88%", once: true },
        delay: (i % 2) * 0.1,
      });
    });

    // --- Per-card image parallax (desktop only) ---
    const isDesktop = window.innerWidth >= 1024;
    if (isDesktop) {
      cards.forEach((card) => {
        const img = card.querySelector(".why-card-img");
        if (!img) return;
        gsap.fromTo(
          img,
          { yPercent: -8, scale: 1.12 },
          {
            yPercent: 8,
            scale: 1.12,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          }
        );
      });
    }

    // --- Featured card entry ---
    const featured = section.querySelector(".why-featured");
    if (featured) {
      gsap.set(featured, { opacity: 0, scale: 0.96 });
      gsap.to(featured, {
        opacity: 1, scale: 1,
        duration: 1.2, ease: "heavy",
        scrollTrigger: { trigger: featured, start: "top 82%", once: true },
      });
    }
  }, { scope: sectionRef });

  return (
    <section className="section-padding section-py" ref={sectionRef}>
      <div className="container-xl">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,26rem)_1fr] lg:gap-16">
          {/* STICKY HEADER COLUMN */}
          <div ref={headerRef} className="lg:sticky lg:top-28 lg:self-start mb-12 sm:mb-16 lg:mb-20">
            <span className="reveal-header-child tag mb-6 inline-flex">
              {t(whyUs.tag, lang)}
            </span>
            <h2 className="reveal-header-child font-display text-display-md text-heading">
              {t(whyUs.title, lang)}
            </h2>
            <p className="reveal-header-child mt-4 font-body text-body-lg text-heading/50">
              {t(whyUs.subtitle, lang)}
            </p>
            <div className="reveal-header-child mt-8 hidden lg:block">
              <a href="#contact" className="btn-ghost">
                {t(whyUs.featured.cta, lang)}
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M14 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>

          {/* CARDS COLUMN */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whyUs.cards.map((card, i) => {
              const isQuoteCard = i === 0;
              const isReachCard = i === 1;
              const isClickable = isQuoteCard || isReachCard;
              return (
                <article
                  key={i}
                  onClick={
                    isQuoteCard ? () => setModalOpen(true)
                    : isReachCard ? () => setMapModalOpen(true)
                    : undefined
                  }
                  className={`why-card group relative overflow-hidden border border-border aspect-[4/3] sm:aspect-[4/5] transition-[border-color,transform] duration-500 hover:border-accent/40 hover:-translate-y-0.5 ${
                    isClickable ? "cursor-pointer" : ""
                  }`}
                >
                  <img
                    src={CARD_IMAGES[i]}
                    alt={t(card.title, lang)}
                    width={800}
                    height={1000}
                    loading="lazy"
                    decoding="async"
                    className="why-card-img absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
                  <div className="absolute inset-x-0 top-0 flex items-start justify-between p-5">
                    <div className="flex h-11 w-11 items-center justify-center border border-accent/30 bg-black/50 text-white transition-[background-color,color] duration-500 group-hover:bg-accent/90 group-hover:text-bg">
                      {ICONS[i]}
                    </div>
                    <span className="border border-white/20 bg-black/40 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-white">
                      {t(card.tag, lang)}
                    </span>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 lg:p-7">
                    <h3 className="font-display text-display-sm leading-[1.1] tracking-[0.03em] text-white mt-4 mb-2">
                      {t(card.title, lang)}
                    </h3>
                    <p className="font-body text-[0.9375rem] leading-[1.65] tracking-[-0.005em] text-white/70">
                      {t(card.desc, lang)}
                    </p>
                    {isQuoteCard && (
                      <button className="btn-primary mt-4 text-xs">
                        {lang === "bg" ? "Попълни форма" : "Fill form"}
                      </button>
                    )}
                    {isReachCard && (
                      <button className="btn-primary mt-4 text-xs">
                        {lang === "bg" ? "Виж обхвата" : "Show range"}
                      </button>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <ContactForm isModal={true} />
      </Modal>

      <Modal isOpen={mapModalOpen} onClose={() => setMapModalOpen(false)}>
        <div className="p-4 sm:p-6 md:p-8">
          <p className="mb-1 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-accent">
            {lang === "bg" ? "Обхват" : "Coverage"}
          </p>
          <h2 className="font-display text-display-sm text-heading mb-4">
            {lang === "bg" ? "47 държави" : "47 countries"}
          </h2>
          <p className="mb-6 font-body text-body-sm text-heading/50">
            {lang === "bg"
              ? "Собствена партньорска мрежа от терминали и хъбове в Европа, Турция и Централна Азия."
              : "Dedicated partner network of terminals and hubs across Europe, Turkey and Central Asia."}
          </p>
          <Suspense fallback={
            <div className="flex h-64 items-center justify-center border border-border">
              <div className="h-6 w-6 animate-spin rounded-full border-2 border-accent border-t-transparent" />
            </div>
          }>
            <LeafletMap lang={lang} theme={theme} mode="range" wrapClass="border border-border" />
          </Suspense>
        </div>
      </Modal>
    </section>
  );
}
