import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { gsap, useGSAP } from "../src/lib/gsap-config";
import { useLang } from "../src/context/LanguageContext";
import { reviewsPage, t } from "../src/data/translations";
import { IMAGES } from "../src/data/images";
import { PageHeader } from "../src/components/PageHeader";

function TestimonialsGrid() {
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

    const cards = section.querySelectorAll(".rev-card");
    cards.forEach((card, i) => {
      gsap.set(card, { y: 70, opacity: 0, scale: 0.9 });
      gsap.to(card, {
        y: 0, opacity: 1, scale: 1,
        duration: 1.2, ease: "silk",
        scrollTrigger: { trigger: section, start: "top 70%", once: true },
        delay: i === 1 ? 0 : 0.18,
      });

      const stars = card.querySelectorAll(".rev-star");
      stars.forEach((star, j) => {
        gsap.set(star, { scale: 0, rotation: -180 });
        gsap.to(star, {
          scale: 1, rotation: 0, duration: 0.5, ease: "elasticSubtle",
          scrollTrigger: { trigger: section, start: "top 70%", once: true },
          delay: (i === 1 ? 0 : 0.18) + 0.5 + j * 0.06,
        });
      });
    });
  }, { scope: sectionRef });

  return (
    <section className="section-padding section-py" ref={sectionRef}>
      <div className="container-xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="reveal-header-child font-display text-display-lg text-heading">{t(reviewsPage.testimonialsTitle, lang)}</h2>
          <p className="reveal-header-child mt-4 font-body text-body-lg text-heading/50">{t(reviewsPage.testimonialsSubtitle, lang)}</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {reviewsPage.items.map((item, i) => (
            <div
              key={i}
              className="rev-card glass-card flex flex-col justify-between p-8 transition-[transform,border-color] duration-500 hover:-translate-y-1 hover:border-brand/30"
            >
              <div>
                <div className="mb-6 flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="rev-star h-5 w-5 text-brand" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <blockquote className="font-body text-body-lg leading-relaxed text-heading/80">
                  &ldquo;{t(item.quote, lang)}&rdquo;
                </blockquote>
              </div>
              <div className="mt-8 flex items-center gap-4 border-t border-surface-border pt-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand/10 font-display text-sm font-bold text-brand">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <p className="font-display text-sm font-semibold text-heading">{item.name}</p>
                  <p className="font-body text-body-sm text-heading/40">{t(item.role, lang)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
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

    const cards = section.querySelectorAll(".stat-card");
    cards.forEach((card, i) => {
      gsap.set(card, { y: 50, opacity: 0, scale: 0.92 });
      gsap.to(card, {
        y: 0, opacity: 1, scale: 1,
        duration: 1, ease: "silk",
        scrollTrigger: { trigger: section, start: "top 72%", once: true },
        delay: 0.15 * i,
      });
    });

    const ctaBlock = section.querySelector(".stat-cta");
    if (ctaBlock) {
      gsap.set(ctaBlock, { y: 40, opacity: 0 });
      gsap.to(ctaBlock, {
        y: 0, opacity: 1, duration: 1.1, ease: "heavy",
        scrollTrigger: { trigger: section, start: "top 60%", once: true },
      });
    }
  }, { scope: sectionRef });

  return (
    <section className="section-padding section-py border-t border-surface-border" ref={sectionRef}>
      <div className="container-xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="reveal-header-child tag mb-6 inline-flex">{t(reviewsPage.statsTag, lang)}</span>
          <h2 className="reveal-header-child font-display text-display-lg text-heading">{t(reviewsPage.statsTitle, lang)}</h2>
          <p className="reveal-header-child mt-4 font-body text-body-lg text-heading/50">{t(reviewsPage.statsSubtitle, lang)}</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {reviewsPage.statsItems.map((item, i) => (
            <div
              key={i}
              className="stat-card glass-card p-8 text-center"
            >
              <p className="font-display text-5xl font-bold text-brand md:text-6xl">{item.value}</p>
              <p className="mt-3 font-display text-lg font-semibold text-heading">{t(item.label, lang)}</p>
            </div>
          ))}
        </div>

        <div className="stat-cta mt-12 glass-card flex flex-col items-center justify-between gap-6 p-8 md:flex-row md:p-12">
          <div>
            <h3 className="font-display text-display-sm text-heading">
              {lang === "bg" ? "Готови да станете следващия доволен клиент?" : "Ready to become our next happy client?"}
            </h3>
            <p className="mt-2 font-body text-body-md text-heading/50">
              {lang === "bg" ? "Твърда оферта до 24 часа. Без задължение." : "Firm quote within 24 hours. No obligation."}
            </p>
          </div>
          <Link to="/contact" className="btn-primary flex-shrink-0">
            {lang === "bg" ? "Поискай оферта" : "Get a quote"}
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  const { lang } = useLang();
  return (
    <>
      <PageHeader
        title={t(reviewsPage.heroTitle, lang)}
        subtitle={t(reviewsPage.heroSubtitle, lang)}
        image={IMAGES.pageHeaders.reviews}
      />
      <TestimonialsGrid />
      <StatsSection />
    </>
  );
}
