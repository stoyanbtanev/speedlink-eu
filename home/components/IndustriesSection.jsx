import React, { useRef } from "react";
import { gsap, useGSAP } from "../../src/lib/gsap-config";
import { useLang } from "../../src/context/LanguageContext";
import { industries, t } from "../../src/data/translations";
import { IMAGES } from "../../src/data/images";

const INDUSTRY_IMAGES = [
  IMAGES.industries.ecommerce,
  IMAGES.industries.automotive,
  IMAGES.industries.pharma,
  IMAGES.industries.chemical,
];

const INDUSTRY_ICONS = [
  // E-commerce — open box with upward arrow and sparkle
  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
    <path d="M3 8l3-5h12l3 5" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
    <path d="M3 8v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8" stroke="currentColor" strokeWidth="1.4"/>
    <path d="M3 8h18" stroke="currentColor" strokeWidth="1.4"/>
    <path d="M12 12v-6M9.5 8.5L12 6l2.5 2.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="8" cy="16" r="0.7" fill="currentColor" opacity="0.4"/>
    <circle cx="16" cy="14" r="0.7" fill="currentColor" opacity="0.4"/>
  </svg>,
  // Automotive — gear/cog with center bolt
  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.4"/>
    <circle cx="12" cy="12" r="1.2" fill="currentColor"/>
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    <path d="M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.55"/>
  </svg>,
  // Pharma — shield with cross and temperature indicator
  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
    <path d="M12 2L4 6v6c0 5.25 3.4 10.2 8 11.2 4.6-1 8-5.95 8-11.2V6l-8-4z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
    <path d="M12 8.5v7M8.5 12h7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    <circle cx="18" cy="4" r="1.5" stroke="currentColor" strokeWidth="0.9" opacity="0.5"/>
    <path d="M18 3.2v1.6" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.5"/>
  </svg>,
  // Hazmat — diamond with inner exclamation and corner cut
  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
    <path d="M12 2L2 12l10 10 10-10L12 2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
    <path d="M12 8v5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    <circle cx="12" cy="15.5" r="0.8" fill="currentColor"/>
    <path d="M4.5 6l1.5 1.5M19.5 6l-1.5 1.5" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" opacity="0.4"/>
  </svg>,
];

export function IndustriesSection() {
  const { lang } = useLang();
  const sectionRef = useRef(null);

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    const headerEls = section.querySelectorAll(".reveal-header-child");
    gsap.set(headerEls, { y: 36, opacity: 0 });
    gsap.to(headerEls, {
      y: 0, opacity: 1, duration: 1.1, ease: "silk",
      stagger: { each: 0.1, ease: "power2.out" },
      scrollTrigger: { trigger: section, start: "top 80%", once: true },
    });

    const cards = section.querySelectorAll(".ind-card");
    cards.forEach((card, i) => {
      gsap.set(card, { x: -80, opacity: 0, rotation: -3 });
      gsap.to(card, {
        x: 0, opacity: 1, rotation: 0,
        duration: 1.1, ease: "silk",
        scrollTrigger: { trigger: section, start: "top 68%", once: true },
        delay: 0.18 * i,
      });

      const badge = card.querySelector(".ind-badge");
      if (badge) {
        gsap.set(badge, { scale: 0 });
        gsap.to(badge, {
          scale: 1, duration: 0.7, ease: "elasticSubtle",
          scrollTrigger: { trigger: section, start: "top 68%", once: true },
          delay: 0.18 * i + 0.3,
        });
      }
    });
  }, { scope: sectionRef });

  return (
    <section className="section-padding section-py border-t border-border" ref={sectionRef}>
      <div className="container-xl">
        <div className="mx-auto mb-16 max-w-2xl text-center md:mb-20">
          <span className="reveal-header-child tag mb-6 inline-flex">
            {t(industries.tag, lang)}
          </span>
          <h2 className="reveal-header-child font-display text-display-lg text-heading">
            {t(industries.title, lang)}
          </h2>
          <p className="reveal-header-child mt-4 font-body text-body-lg text-heading/50">
            {t(industries.subtitle, lang)}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {industries.items.map((item, i) => (
            <div
              key={i}
              className="ind-card group relative overflow-hidden border border-border bg-surface transition-[transform,border-color] duration-500 hover:-translate-y-1.5 hover:border-accent/30"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={INDUSTRY_IMAGES[i]}
                  alt={t(item.title, lang)}
                  width={800}
                  height={600}
                  loading="lazy"
                  decoding="async"
                  className="img-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-card to-transparent" />
                <div className="ind-badge absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center border border-accent bg-accent/20 text-accent transition-transform duration-500 group-hover:rotate-[5deg] group-hover:scale-110">
                  {INDUSTRY_ICONS[i]}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-display-sm text-heading">
                  {t(item.title, lang)}
                </h3>
                <p className="mt-2 font-body text-body-sm text-heading/50 leading-relaxed">
                  {t(item.desc, lang)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
