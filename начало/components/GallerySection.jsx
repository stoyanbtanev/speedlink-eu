import React, { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "../../src/lib/gsap-config";
import { useLang } from "../../src/context/LanguageContext";
import { gallery, t } from "../../src/data/translations";
import { IMAGES } from "../../src/data/images";

export function GallerySection() {
  const { lang } = useLang();
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useGSAP(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const headerEls = section.querySelectorAll(".reveal-header-child");
    gsap.set(headerEls, { y: 50, opacity: 0 });
    gsap.to(headerEls, {
      y: 0, opacity: 1, duration: 1.1, ease: "silk",
      stagger: { each: 0.1, ease: "power2.out" },
      scrollTrigger: { trigger: section, start: "top 82%", once: true },
    });

    const scrollContainer = section.querySelector(".gallery-scroll");
    gsap.to(track, {
      x: () => -(track.scrollWidth - window.innerWidth + 60),
      ease: "none",
      scrollTrigger: {
        trigger: scrollContainer,
        start: "top top",
        end: () => `+=${track.scrollWidth - window.innerWidth}`,
        scrub: 1.5,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    const cards = track.querySelectorAll(".gallery-card");
    cards.forEach((card, i) => {
      const img = card.querySelector("img");
      if (img) {
        gsap.to(img, {
          scale: 1.08,
          ease: "none",
          scrollTrigger: {
            trigger: scrollContainer,
            start: "top top",
            end: "bottom top",
            scrub: 2,
          },
        });
      }
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative">
      <div className="section-padding pt-20 md:pt-28">
        <div className="container-xl text-center">
          <span className="reveal-header-child tag mb-6 inline-flex">{t(gallery.title, lang)}</span>
          <h2 className="reveal-header-child font-display text-display-lg text-heading">
            {t(gallery.title, lang)}
          </h2>
          <p className="reveal-header-child mt-4 font-body text-body-lg text-heading/50">
            {t(gallery.subtitle, lang)}
          </p>
        </div>
      </div>
      <div className="gallery-scroll h-[100svh]">
        <div
          ref={trackRef}
          className="flex h-full items-center gap-6 pl-8"
        >
          {IMAGES.gallery.map((src, i) => (
            <div
              key={i}
              className="gallery-card relative h-[70svh] w-[80vw] flex-shrink-0 overflow-hidden rounded-2xl md:w-[60vw] lg:h-[75svh] lg:w-[50vw]"
            >
              <img
                src={src}
                alt={`SpeedLink network ${i + 1}`}
                className="img-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
