import React, { useRef } from "react";
import { gsap, useGSAP, ScrollTrigger } from "../../src/lib/gsap-config";
import { useLang } from "../../src/context/LanguageContext";
import { logos, t } from "../../src/data/translations";

const PARTNERS = ["DHL", "DB Schenker", "Maersk", "Kuehne+Nagel", "DSV", "GEFCO"];

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

    let isHovering = false;

    const tween = gsap.to(track, {
      x: "-50%",
      duration: 40, // Base pace is now lower
      ease: "none",
      repeat: -1,
    });

    const handleEnter = () => {
      isHovering = true;
      gsap.to(tween, { timeScale: 0, duration: 0.8, ease: "silk" });
    };
    
    const handleLeave = () => {
      isHovering = false;
      gsap.to(tween, { timeScale: 1, duration: 0.8, ease: "silk" });
    };

    track.addEventListener("mouseenter", handleEnter);
    track.addEventListener("mouseleave", handleLeave);

    const st = ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        if (isHovering) return;

        const velocity = Math.abs(self.getVelocity());
        let speed = 1 + velocity / 300;
        speed = Math.min(speed, 6);
        let signedSpeed = speed * self.direction; // Change direction based on scroll

        gsap.to(tween, {
          timeScale: signedSpeed,
          duration: 0.1,
          overwrite: true,
          onComplete: () => {
            if (!isHovering) {
              gsap.to(tween, { timeScale: 1, duration: 1.5, ease: "power3.out" });
            }
          }
        });
      }
    });

    return () => {
      track.removeEventListener("mouseenter", handleEnter);
      track.removeEventListener("mouseleave", handleLeave);
      if (st) st.kill();
    };
  }, { scope: sectionRef });

  const allPartners = [...PARTNERS, ...PARTNERS, ...PARTNERS];

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-page py-10 md:py-14">
      <div className="logo-border absolute left-0 right-0 top-0 h-px bg-surface-border" />
      <div className="section-padding">
        <p className="logo-title mb-8 text-center font-display text-label uppercase tracking-wider text-heading/30">
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
              className="flex-shrink-0 font-display text-lg font-semibold tracking-tight text-heading/20 transition-colors duration-300 hover:text-heading/40 md:text-xl"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
      <div className="logo-border absolute bottom-0 left-0 right-0 h-px bg-surface-border" />
    </section>
  );
}
