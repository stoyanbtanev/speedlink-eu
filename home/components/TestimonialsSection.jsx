import React, { useRef } from "react";
import { gsap, useGSAP } from "../../src/lib/gsap-config";
import { useLang } from "../../src/context/LanguageContext";
import { testimonials, t } from "../../src/data/translations";

export function TestimonialsSection() {
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

    const cards = section.querySelectorAll(".test-card");
    cards.forEach((card, i) => {
      gsap.set(card, { y: 80, opacity: 0, scale: 0.88 });
      gsap.to(card, {
        y: 0, opacity: 1, scale: 1,
        duration: 1.2, ease: "silk",
        scrollTrigger: { trigger: section, start: "top 70%", once: true },
        delay: i === 1 ? 0 : 0.2,
      });

      const stars = card.querySelectorAll(".test-star");
      stars.forEach((star, j) => {
        gsap.set(star, { scale: 0, rotation: -180 });
        gsap.to(star, {
          scale: 1, rotation: 0, duration: 0.5, ease: "elasticSubtle",
          scrollTrigger: { trigger: section, start: "top 70%", once: true },
          delay: (i === 1 ? 0 : 0.2) + 0.6 + j * 0.06,
        });
      });

      const avatar = card.querySelector(".test-avatar");
      if (avatar) {
        gsap.set(avatar, { scale: 0 });
        gsap.to(avatar, {
          scale: 1, duration: 0.6, ease: "whip",
          scrollTrigger: { trigger: section, start: "top 70%", once: true },
          delay: (i === 1 ? 0 : 0.2) + 0.9,
        });
      }
    });
  }, { scope: sectionRef });

  return (
    <section className="section-padding section-py" ref={sectionRef}>
      <div className="container-xl">
        <div className="mx-auto mb-16 max-w-2xl text-center md:mb-20">
          <h2 className="reveal-header-child font-display text-display-lg text-heading">
            {t(testimonials.title, lang)}
          </h2>
          <p className="reveal-header-child mt-4 font-body text-body-lg text-heading/50">
            {t(testimonials.subtitle, lang)}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.items.map((item, i) => (
            <div
              key={i}
              className="test-card glass-card flex flex-col justify-between p-8 transition-[transform,border-color] duration-500 hover:-translate-y-1 hover:border-brand/30"
            >
              <div>
                <div className="mb-6 flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="test-star h-5 w-5 text-brand" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <blockquote className="font-body text-body-lg leading-relaxed text-heading/80">
                  "{t(item.quote, lang)}"
                </blockquote>
              </div>
              <div className="mt-8 flex items-center gap-4 border-t border-surface-border pt-6">
                <div className="test-avatar flex h-11 w-11 items-center justify-center rounded-full bg-brand/10 font-display text-sm font-bold text-brand">
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
