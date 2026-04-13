import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { gsap, useGSAP } from "../../src/lib/gsap-config";
import { useLang } from "../../src/context/LanguageContext";
import { whyUs, t } from "../../src/data/translations";
import { IMAGES } from "../../src/data/images";

const ICONS = [
  // Speed — angular bolt with split prong and decorative spark
  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
    <path d="M14.5 2L6 13h5.5l-1.5 9L19 10h-5.5L16 2h-1.5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
    <path d="M5.5 7.5l-1.2-.8M4 12H2.5M5.5 16.5l-1.2.8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
  </svg>,
  // Coverage — globe with latitude arcs, offset meridian, and orbit ring
  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
    <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.4"/>
    <ellipse cx="12" cy="12" rx="4" ry="9.5" stroke="currentColor" strokeWidth="1" opacity="0.6"/>
    <path d="M3.5 8.5h17M3.5 15.5h17" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.45"/>
    <circle cx="19.5" cy="4.5" r="2" stroke="currentColor" strokeWidth="1" opacity="0.7"/>
    <circle cx="19.5" cy="4.5" r="0.6" fill="currentColor" opacity="0.7"/>
  </svg>,
  // Customs — clipboard with official stamp mark and stacked lines
  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
    <path d="M8 2h8v3a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
    <rect x="5" y="4" width="14" height="18" rx="2" stroke="currentColor" strokeWidth="1.4"/>
    <path d="M8.5 10h7M8.5 13.5h5M8.5 17h3" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.55"/>
    <circle cx="16.5" cy="17" r="2.5" stroke="currentColor" strokeWidth="1.2" opacity="0.7"/>
    <path d="M15.3 17l.8.8 1.7-1.6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.7"/>
  </svg>,
  // Tracking — signal pulse with pin dot and radiating arcs
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

const CARD_ROTATIONS = [-2, 1.5, -1, 2];

export function WhyUsSection() {
  const { lang } = useLang();
  const sectionRef = useRef(null);

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    const headerEls = section.querySelectorAll(".reveal-header-child");
    gsap.set(headerEls, { y: 50, opacity: 0 });
    gsap.to(headerEls, {
      y: 0, opacity: 1, duration: 1.1, ease: "silk",
      stagger: { each: 0.1, ease: "power2.out" },
      scrollTrigger: { trigger: section, start: "top 82%", once: true },
    });

    const cards = section.querySelectorAll(".why-card");
    cards.forEach((card, i) => {
      gsap.set(card, { y: 70, opacity: 0, scale: 0.92, rotation: CARD_ROTATIONS[i] || 0 });
      gsap.to(card, {
        y: 0, opacity: 1, scale: 1, rotation: 0,
        duration: 1.05 + i * 0.05, ease: "silk",
        scrollTrigger: { trigger: section, start: "top 72%", once: true },
        delay: 0.14 * i,
      });
    });

    const featured = section.querySelector(".why-featured");
    if (featured) {
      gsap.set(featured, { clipPath: "inset(8% 8% 8% 8%)", scale: 0.95, opacity: 0 });
      gsap.to(featured, {
        clipPath: "inset(0% 0% 0% 0%)", scale: 1, opacity: 1,
        duration: 1.2, ease: "heavy",
        scrollTrigger: { trigger: section, start: "top 72%", once: true },
        delay: 0.3,
      });
    }
  }, { scope: sectionRef });

  return (
    <section className="section-padding section-py" ref={sectionRef}>
      <div className="container-xl">
        <div className="mx-auto mb-16 max-w-2xl text-center md:mb-20">
          <span className="reveal-header-child tag mb-6 inline-flex">
            {t(whyUs.tag, lang)}
          </span>
          <h2 className="reveal-header-child font-display text-display-lg text-heading">
            {t(whyUs.title, lang)}
          </h2>
          <p className="reveal-header-child mt-4 font-body text-body-lg text-heading/50">
            {t(whyUs.subtitle, lang)}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
          {whyUs.cards.map((card, i) => (
            <div
              key={i}
              className="why-card group glass-card overflow-hidden transition-all duration-500 hover:border-brand/30 hover:shadow-[0_20px_60px_-15px_rgba(232,168,56,0.15)]"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={CARD_IMAGES[i]}
                  alt={t(card.title, lang)}
                  className="img-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-card to-transparent" />
              </div>
              <div className="p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 text-brand transition-transform duration-500 group-hover:-translate-y-1">
                  {ICONS[i]}
                </div>
                <span className="font-display text-label uppercase tracking-wider text-brand">
                  {t(card.tag, lang)}
                </span>
                <h3 className="mt-2 font-display text-display-sm text-heading">
                  {t(card.title, lang)}
                </h3>
                <p className="mt-2 font-body text-body-sm text-heading/50">
                  {t(card.desc, lang)}
                </p>
              </div>
            </div>
          ))}

          <div className="why-featured group glass-card overflow-hidden transition-all duration-500 hover:border-brand/30 sm:col-span-2 lg:col-span-2 lg:row-span-2 lg:col-start-3 lg:row-start-1">
            <div className="relative h-64 overflow-hidden lg:h-80">
              <img
                src={IMAGES.services.warehouse}
                alt={t(whyUs.featured.title, lang)}
                className="img-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-card via-surface-card/50 to-transparent" />
            </div>
            <div className="flex flex-1 flex-col justify-center p-8 lg:p-10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7">
                  <path d="M12 2v20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M16.5 6H10a3 3 0 0 0 0 6h4.5a3 3 0 0 1 0 6H7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 3.5l1.5 1M16 19.5l-1.5 1" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" opacity="0.4"/>
                  <circle cx="18.5" cy="8" r="1" fill="currentColor" opacity="0.35"/>
                  <circle cx="5.5" cy="16" r="1" fill="currentColor" opacity="0.35"/>
                </svg>
              </div>
              <span className="font-display text-label uppercase tracking-wider text-brand">
                {t(whyUs.featured.tag, lang)}
              </span>
              <h3 className="mt-2 font-display text-display-md text-heading">
                {t(whyUs.featured.title, lang)}
              </h3>
              <p className="mt-3 font-body text-body-md text-heading/50">
                {t(whyUs.featured.desc, lang)}
              </p>
              <div className="mt-8 flex gap-4">
                <Link to="/contact" className="btn-primary text-sm">
                  {t(whyUs.featured.cta, lang)}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
