import React, { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "../../src/lib/gsap-config";
import { useLang } from "../../src/context/LanguageContext";
import { ctaDual, t } from "../../src/data/translations";

export function CtaDualSection() {
  const { lang } = useLang();
  const sectionRef = useRef(null);
  const glowLeftRef = useRef(null);
  const glowRightRef = useRef(null);

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    const leftCard = section.querySelector(".cta-left");
    const rightCard = section.querySelector(".cta-right");

    if (leftCard) {
      gsap.set(leftCard, { x: -50, opacity: 0, rotation: -2 });
      gsap.to(leftCard, {
        x: 0, opacity: 1, rotation: 0,
        duration: 1.1, ease: "silk",
        scrollTrigger: { trigger: section, start: "top 78%", once: true },
      });
    }
    if (rightCard) {
      gsap.set(rightCard, { x: 50, opacity: 0, rotation: 2 });
      gsap.to(rightCard, {
        x: 0, opacity: 1, rotation: 0,
        duration: 1.1, ease: "silk",
        scrollTrigger: { trigger: section, start: "top 78%", once: true },
        delay: 0.2,
      });
    }

    const icons = section.querySelectorAll(".cta-icon");
    icons.forEach((icon, i) => {
      gsap.set(icon, { scale: 0, rotation: -90 });
      gsap.to(icon, {
        scale: 1, rotation: 0, duration: 0.7, ease: "whip",
        scrollTrigger: { trigger: section, start: "top 78%", once: true },
        delay: 0.3 + i * 0.2,
      });
    });

    const tweens = [glowLeftRef, glowRightRef]
      .map((ref) => {
        if (!ref.current) return null;
        return gsap.to(ref.current, {
          x: 20, y: -15, duration: 8,
          repeat: -1, yoyo: true, ease: "breathe",
          paused: true,
        });
      })
      .filter(Boolean);

    const visST = ScrollTrigger.create({
      trigger: section,
      start: "top bottom",
      end: "bottom top",
      onEnter: () => tweens.forEach((tw) => tw.play()),
      onLeave: () => tweens.forEach((tw) => tw.pause()),
      onEnterBack: () => tweens.forEach((tw) => tw.play()),
      onLeaveBack: () => tweens.forEach((tw) => tw.pause()),
    });

    return () => {
      tweens.forEach((tw) => tw.kill());
      visST.kill();
    };
  }, { scope: sectionRef });

  return (
    <section className="section-padding section-py" ref={sectionRef}>
      <div className="container-xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="cta-left glass-card relative overflow-hidden p-8 md:p-12">
            <div ref={glowLeftRef} className="absolute right-0 top-0 h-40 w-40 bg-accent/5 blur-3xl" />
            <div className="relative">
              <div className="cta-icon mb-6 flex h-14 w-14 items-center justify-center border border-accent bg-accent/10">
                <svg className="h-7 w-7 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
                </svg>
              </div>
              <h3 className="font-display text-display-md text-heading">
                {t(ctaDual.ship.title, lang)}
              </h3>
              <p className="mt-3 font-body text-body-md text-heading/50">
                {t(ctaDual.ship.desc, lang)}
              </p>
              <div className="mt-8 flex gap-3">
                <a href="#contact" className="btn-primary text-sm">
                  {t(ctaDual.ship.cta1, lang)}
                </a>
                <a href="tel:+359877404599" className="btn-secondary text-sm">
                  {t(ctaDual.ship.cta2, lang)}
                </a>
              </div>
            </div>
          </div>

          <div className="cta-right glass-card relative overflow-hidden p-8 md:p-12 grayscale opacity-80">
            <div ref={glowRightRef} className="absolute right-0 top-0 h-40 w-40 bg-accent/5 blur-3xl" />
            <div className="relative opacity-40 pointer-events-none">
              <div className="cta-icon mb-6 flex h-14 w-14 items-center justify-center border border-accent bg-accent/10">
                <svg className="h-7 w-7 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </div>
              <h3 className="font-display text-display-md text-heading">
                {t(ctaDual.track.title, lang)}
              </h3>
              <p className="mt-3 font-body text-body-md text-heading/50">
                {t(ctaDual.track.desc, lang)}
              </p>
              <div className="mt-8 flex gap-3">
                <button className="btn-primary text-sm" disabled>
                  {t(ctaDual.track.cta1, lang)}
                </button>
                <button className="btn-secondary text-sm" disabled>
                  {t(ctaDual.track.cta2, lang)}
                </button>
              </div>
            </div>
            {/* COMING SOON OVERLAY */}
            <div className="absolute inset-0 z-10 flex items-center justify-center backdrop-blur-[2px]">
              <span className="border border-white/10 bg-black/80 px-4 py-2 font-mono text-sm uppercase tracking-[0.2em] text-white/90">
                {lang === "bg" ? "Очаквайте скоро" : "Coming soon"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
