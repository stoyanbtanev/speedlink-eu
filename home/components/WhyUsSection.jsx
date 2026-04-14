import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { gsap, useGSAP } from "../../src/lib/gsap-config";
import { useLang } from "../../src/context/LanguageContext";
import { whyUs, t } from "../../src/data/translations";
import { IMAGES } from "../../src/data/images";

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
  IMAGES.services.air,
];

export function WhyUsSection() {
  const { lang } = useLang();
  const sectionRef = useRef(null);
  const headerRef = useRef(null);

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    // --- Header reveal ---
    const headerEls = section.querySelectorAll(".reveal-header-child");
    gsap.set(headerEls, { y: 40, opacity: 0 });
    gsap.to(headerEls, {
      y: 0, opacity: 1, duration: 1, ease: "silk",
      stagger: { each: 0.1, ease: "power2.out" },
      scrollTrigger: { trigger: section, start: "top 82%", once: true },
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
        <div className="grid gap-12 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-16">
          {/* STICKY HEADER COLUMN */}
          <div ref={headerRef} className="lg:sticky lg:top-28 lg:self-start">
            <span className="reveal-header-child tag mb-6 inline-flex">
              {t(whyUs.tag, lang)}
            </span>
            <h2 className="reveal-header-child font-display text-display-lg text-heading">
              {t(whyUs.title, lang)}
            </h2>
            <p className="reveal-header-child mt-4 font-body text-body-lg text-heading/50">
              {t(whyUs.subtitle, lang)}
            </p>
            <div className="reveal-header-child mt-8 hidden lg:block">
              <Link to="/contact" className="btn-ghost">
                {t(whyUs.featured.cta, lang)}
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M14 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* CARDS COLUMN */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {whyUs.cards.map((card, i) => (
              <article
                key={i}
                className="why-card group relative overflow-hidden rounded-2xl border border-surface-border aspect-[3/4] sm:aspect-[4/5] transition-[border-color,box-shadow,transform] duration-500 hover:border-brand/40 hover:shadow-[0_24px_70px_-20px_rgba(232,168,56,0.25)]"
              >
                <img
                  src={CARD_IMAGES[i]}
                  alt={t(card.title, lang)}
                  width={800}
                  height={1000}
                  loading="lazy"
                  decoding="async"
                  className="why-card-img absolute inset-0 h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
                <div className="absolute inset-x-0 top-0 flex items-start justify-between p-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-black/50 text-white transition-[background-color,color] duration-500 group-hover:bg-brand/90 group-hover:text-dark">
                    {ICONS[i]}
                  </div>
                  <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1 font-display text-[0.7rem] uppercase tracking-wider text-white">
                    {t(card.tag, lang)}
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-3 sm:p-5 md:p-6">
                  <h3 className="font-display text-base font-semibold text-white sm:text-2xl md:text-display-sm">
                    {t(card.title, lang)}
                  </h3>
                  <p className="mt-1 font-body text-xs text-white/70 sm:mt-2 sm:text-body-sm">
                    {t(card.desc, lang)}
                  </p>
                </div>
              </article>
            ))}

            {/* FEATURED FULL-BLEED */}
            <article className="why-featured group relative col-span-2 min-h-[280px] sm:min-h-[320px] overflow-hidden rounded-2xl border border-surface-border transition-[border-color,box-shadow] duration-500 hover:border-brand/40">
              <img
                src={IMAGES.services.warehouse}
                alt={t(whyUs.featured.title, lang)}
                width={1600}
                height={1000}
                loading="lazy"
                decoding="async"
                className="why-card-img absolute inset-0 h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/90 via-black/50 to-transparent" />
              <div className="absolute inset-x-0 top-0 flex items-start justify-between p-4 sm:p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black/50 text-white transition-[background-color,color] duration-500 group-hover:bg-brand/90 group-hover:text-dark">
                  <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7">
                    <path d="M12 2v20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M16.5 6H10a3 3 0 0 0 0 6h4.5a3 3 0 0 1 0 6H7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1 font-display text-[0.7rem] uppercase tracking-wider text-white">
                  {t(whyUs.featured.tag, lang)}
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 max-w-2xl p-4 sm:p-6 md:p-8">
                <h3 className="font-display text-display-sm text-white md:text-display-md">
                  {t(whyUs.featured.title, lang)}
                </h3>
                <p className="mt-3 max-w-lg font-body text-body-md text-white/70">
                  {t(whyUs.featured.desc, lang)}
                </p>
                <Link to="/contact" className="btn-primary mt-6 text-sm">
                  {t(whyUs.featured.cta, lang)}
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M14 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
