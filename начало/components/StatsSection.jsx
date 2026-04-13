import React, { useRef } from "react";
import { gsap, useGSAP } from "../../src/lib/gsap-config";
import { useLang } from "../../src/context/LanguageContext";
import { stats, t } from "../../src/data/translations";
import { IMAGES } from "../../src/data/images";

const STAT_TARGETS = [
  { num: 47, suffix: "" },
  { num: 8400, suffix: "+" },
  { num: 15, suffix: "+" },
  { num: 98, suffix: "%" },
];

export function StatsSection() {
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

    const imagePanel = section.querySelector(".stats-image");
    if (imagePanel) {
      gsap.set(imagePanel, { clipPath: "inset(100% 0 0 0)" });
      const img = imagePanel.querySelector("img");
      if (img) gsap.set(img, { scale: 1.15 });

      gsap.to(imagePanel, {
        clipPath: "inset(0% 0 0 0)", duration: 1.2, ease: "heavy",
        scrollTrigger: { trigger: section, start: "top 72%", once: true },
      });
      if (img) {
        gsap.to(img, {
          scale: 1, duration: 1.4, ease: "heavy",
          scrollTrigger: { trigger: section, start: "top 72%", once: true },
        });
      }
    }

    const statCards = section.querySelectorAll(".stat-card");
    statCards.forEach((card, i) => {
      gsap.set(card, { x: 60, opacity: 0, scale: 0.94 });
      gsap.to(card, {
        x: 0, opacity: 1, scale: 1,
        duration: 1.1, ease: "silk",
        scrollTrigger: { trigger: section, start: "top 72%", once: true },
        delay: 0.18 * i,
      });

      const counterEl = card.querySelector(".stat-counter");
      if (counterEl && STAT_TARGETS[i]) {
        const { num, suffix } = STAT_TARGETS[i];
        const obj = { val: 0 };
        const formatter = new Intl.NumberFormat(lang === "bg" ? "bg-BG" : "en-US");
        gsap.to(obj, {
          val: num, duration: 2.2, ease: "power2.out",
          snap: { val: 1 },
          scrollTrigger: { trigger: section, start: "top 72%", once: true },
          delay: 0.18 * i + 0.3,
          onUpdate: () => {
            counterEl.textContent = formatter.format(Math.round(obj.val)) + suffix;
          },
        });
      }
    });
  }, { scope: sectionRef });

  return (
    <section className="section-padding section-py border-t border-surface-border" ref={sectionRef}>
      <div className="container-xl">
        <div className="mx-auto mb-16 max-w-2xl text-center md:mb-20">
          <span className="reveal-header-child tag mb-6 inline-flex">{t(stats.tag, lang)}</span>
          <h2 className="reveal-header-child font-display text-display-lg text-heading">
            {t(stats.title, lang)}
          </h2>
          <p className="reveal-header-child mt-4 font-body text-body-lg text-heading/50">
            {t(stats.subtitle, lang)}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
          <div className="stats-image relative overflow-hidden rounded-2xl lg:col-span-3">
            <img
              src={IMAGES.stats}
              alt="SpeedLink operations"
              className="aspect-[3/2] img-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-dark/60 to-transparent" />
          </div>

          <div className="flex flex-col gap-4 lg:col-span-2">
            {stats.items.map((item, i) => (
              <div
                key={i}
                className="stat-card glass-card flex-1 p-6 md:p-8"
              >
                <p className="stat-counter font-display text-4xl font-bold text-brand md:text-5xl">
                  0
                </p>
                <h3 className="mt-2 font-display text-lg font-semibold text-heading">
                  {t(item.label, lang)}
                </h3>
                <p className="mt-1 font-body text-body-sm text-heading/40">
                  {t(item.desc, lang)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
