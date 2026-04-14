import React, { useRef } from "react";
import { gsap, useGSAP, ScrollTrigger } from "../../src/lib/gsap-config";
import { useLang } from "../../src/context/LanguageContext";
import { logos, t } from "../../src/data/translations";

const PARTNERS = ["DHL", "DB Schenker", "Maersk", "Kuehne+Nagel", "DSV", "GEFCO"];
const REPEAT_COUNT = 8;

export function LogoStrip() {
  const { lang } = useLang();
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useGSAP(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const titleEl = section.querySelector(".logo-title");
    if (titleEl) {
      gsap.set(titleEl, { y: 20, opacity: 0 });
      gsap.to(titleEl, {
        y: 0, opacity: 1, duration: 0.8, ease: "silk",
        scrollTrigger: { trigger: section, start: "top 90%", once: true },
      });
    }

    const borders = section.querySelectorAll(".logo-border");
    borders.forEach((b) => {
      gsap.set(b, { scaleX: 0 });
      gsap.to(b, {
        scaleX: 1, duration: 1, ease: "silk", transformOrigin: "center",
        scrollTrigger: { trigger: section, start: "top 90%", once: true },
      });
    });

    const halfWidth = track.scrollWidth / 2;
    let isHovering = false;

    const tween = gsap.to(track, {
      x: -halfWidth,
      duration: 160,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % halfWidth),
      },
    });

    const handleEnter = () => {
      isHovering = true;
      gsap.to(tween, { timeScale: 0, duration: 0.8, ease: "silk", overwrite: true });
    };
    const handleLeave = () => {
      isHovering = false;
      gsap.to(tween, { timeScale: 1, duration: 1.2, ease: "silk", overwrite: true });
    };

    track.addEventListener("mouseenter", handleEnter);
    track.addEventListener("mouseleave", handleLeave);

    let decayTimeout;
    const st = ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        if (isHovering) return;
        const velocity = Math.abs(self.getVelocity());
        const speed = Math.min(1 + velocity / 3000, 1.8);
        tween.timeScale(speed * (self.direction || 1));

        clearTimeout(decayTimeout);
        decayTimeout = setTimeout(() => {
          gsap.to(tween, { timeScale: 1, duration: 2, ease: "power3.out", overwrite: true });
        }, 150);
      },
    });

    return () => {
      track.removeEventListener("mouseenter", handleEnter);
      track.removeEventListener("mouseleave", handleLeave);
      clearTimeout(decayTimeout);
      if (st) st.kill();
    };
  }, { scope: sectionRef });

  const oneSet = [];
  for (let r = 0; r < REPEAT_COUNT; r++) {
    PARTNERS.forEach((name) => oneSet.push(name));
  }
  const allPartners = [...oneSet, ...oneSet];

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-bg py-10 md:py-14">
      <div className="logo-border absolute left-0 right-0 top-0 h-px bg-border" />
      <div className="section-padding">
        <p className="logo-title mb-8 text-center font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted">
          {t(logos.title, lang)}
        </p>
      </div>
      <div className="overflow-hidden">
        <div
          ref={trackRef}
          className="flex w-max items-center gap-x-12 md:gap-x-16"
        >
          {allPartners.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex-shrink-0 select-none font-mono text-lg uppercase tracking-wider text-muted/40 transition-colors duration-300 hover:text-accent/50 md:text-xl"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
      <div className="logo-border absolute bottom-0 left-0 right-0 h-px bg-border" />
    </section>
  );
}
