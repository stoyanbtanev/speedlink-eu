import React, { useRef, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { gsap, ScrollTrigger, useGSAP } from "../../src/lib/gsap-config";
import { useLang } from "../../src/context/LanguageContext";
import { hero, t } from "../../src/data/translations";
import { IMAGES } from "../../src/data/images";

const GRID_PARALLAX_SPEEDS = [
  -0.15, -0.08, -0.15,
  -0.08,  0,    -0.08,
  -0.15, -0.08, -0.15,
];

const GRID_SCALE_TARGETS = [
  1.06, 1.04, 1.06,
  1.04, 1.02, 1.04,
  1.06, 1.04, 1.06,
];

export function HeroSection() {
  const { lang } = useLang();
  const sectionRef = useRef(null);
  const stickyRef = useRef(null);
  const gridRef = useRef(null);
  const contentRef = useRef(null);
  const overlayRef = useRef(null);
  const tagRef = useRef(null);
  const h1Ref = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const statsRef = useRef(null);

  const titleText = useMemo(() => t(hero.title, lang), [lang]);

  useGSAP(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const grid = gridRef.current;
    const overlay = overlayRef.current;
    if (!section || !content || !grid) return;

    // --- GRID IMAGE DEPTH PARALLAX ---
    const gridImages = grid.querySelectorAll(".hero-grid-img");
    gridImages.forEach((img, i) => {
      const speed = GRID_PARALLAX_SPEEDS[i] || 0;
      const scaleTarget = GRID_SCALE_TARGETS[i] || 1;
      if (speed === 0 && scaleTarget === 1) return;

      gsap.to(img, {
        y: speed * 200,
        scale: scaleTarget,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "50% top",
          scrub: 1.5,
        },
      });
    });

    // --- GRADIENT OVERLAY INTENSIFY ---
    if (overlay) {
      gsap.to(overlay, {
        opacity: 0.95,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "40% top",
          scrub: 1,
        },
      });
    }

    // --- CONTENT SCROLL-AWAY ---
    gsap.to(content, {
      y: -80,
      opacity: 0,
      rotateX: 2,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "35% top",
        scrub: 0.8,
      },
    });

    // --- GRID SCALE ON SCROLL ---
    gsap.to(grid, {
      scale: 1.15,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "50% top",
        scrub: 1.5,
      },
    });

    // --- TEXT REVEAL CHOREOGRAPHY ---
    const tl = gsap.timeline({ delay: 0.15 });

    // Tag: clip-path wipe from left
    if (tagRef.current) {
      gsap.set(tagRef.current, { clipPath: "inset(0 100% 0 0)", opacity: 1 });
      tl.to(tagRef.current, {
        clipPath: "inset(0 0% 0 0)",
        duration: 0.6,
        ease: "silk",
      });
    }

    // H1: character wave reveal
    if (h1Ref.current) {
      h1Ref.current.style.visibility = "visible";
      const chars = h1Ref.current.querySelectorAll(".hero-char");
      gsap.set(chars, { y: 80, opacity: 0, rotation: -5 });
      tl.to(chars, {
        y: 0,
        opacity: 1,
        rotation: 0,
        duration: 0.8,
        stagger: { each: 0.025, ease: "power3.inOut" },
        ease: "silk",
      }, "-=0.2");
    }

    // Subtitle: fade up with focus pull
    if (subtitleRef.current) {
      gsap.set(subtitleRef.current, { y: 30, opacity: 0, filter: "blur(2px)" });
      tl.to(subtitleRef.current, {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.9,
        ease: "silk",
      }, "-=0.5");
    }

    // CTAs: snap in with whip ease
    if (ctaRef.current) {
      const buttons = ctaRef.current.children;
      gsap.set(buttons, { y: 30, opacity: 0, scale: 0.95 });
      tl.to(buttons, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.7,
        stagger: 0.08,
        ease: "whip",
      }, "-=0.4");
    }

    // Stats bar: clip-path expand from center
    if (statsRef.current) {
      gsap.set(statsRef.current, { clipPath: "inset(0 50% 0 50%)", opacity: 1 });
      tl.to(statsRef.current, {
        clipPath: "inset(0 0% 0 0%)",
        duration: 0.8,
        ease: "silk",
      }, "-=0.2");
    }

  }, { scope: sectionRef, dependencies: [lang] });

  const splitChars = (text) => {
    const tokens = text.split(/(\s|\n)/);
    return tokens.map((token, wi) => {
      if (token === "\n") return <br key={`br-${wi}`} />;
      if (token === " ")
        return (
          <span key={`sp-${wi}`} className="hero-char inline-block" style={{ whiteSpace: "pre" }}>
            {" "}
          </span>
        );
      if (token === "") return null;
      return (
        <span key={`w-${wi}`} className="inline-block whitespace-nowrap">
          {token.split("").map((char, ci) => (
            <span key={ci} className="hero-char inline-block">
              {char}
            </span>
          ))}
        </span>
      );
    });
  };

  return (
    <section ref={sectionRef} className="relative h-[300svh]">
      <div ref={stickyRef} className="sticky top-0 h-svh overflow-hidden" style={{ perspective: "1200px" }}>
        <div ref={gridRef} className="absolute inset-0 z-0">
          <img
            src={IMAGES.hero[4]}
            alt="SpeedLink logistics"
            className="img-cover md:hidden"
            loading="eager"
          />
          <div className="hidden h-full w-full grid-cols-3 grid-rows-3 gap-1 md:grid">
            {IMAGES.hero.map((src, i) => (
              <div key={i} className="relative overflow-hidden">
                <img
                  src={src}
                  alt={`SpeedLink logistics ${i + 1}`}
                  className="hero-grid-img img-cover"
                  loading={i < 3 ? "eager" : "lazy"}
                />
              </div>
            ))}
          </div>
          <div
            ref={overlayRef}
            className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/80 to-dark"
            style={{ opacity: 0.7 }}
          />
        </div>

        <div
          ref={contentRef}
          className="relative z-10 flex h-full items-center justify-center"
          style={{ transformOrigin: "center bottom" }}
        >
          <div className="section-padding w-full">
            <div className="container-xl text-center">
              <div ref={tagRef} style={{ opacity: 0 }}>
                <span className="tag mb-8 inline-flex">{t(hero.tag, lang)}</span>
              </div>

              <h1
                ref={h1Ref}
                className="mx-auto max-w-4xl font-display text-4xl font-bold leading-tight text-white sm:text-5xl md:text-display-xl"
                style={{ visibility: "hidden" }}
              >
                {splitChars(titleText)}
              </h1>

              <p
                ref={subtitleRef}
                className="mx-auto mt-6 max-w-xl font-body text-body-lg text-white/60"
                style={{ opacity: 0 }}
              >
                {t(hero.subtitle, lang)}
              </p>

              <div
                ref={ctaRef}
                className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
                style={{ opacity: 0 }}
              >
                <Link to="/contact" className="btn-primary">
                  {t(hero.cta1, lang)}
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M14 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="5" cy="12" r="0.7" fill="currentColor" opacity="0.3"/>
                  </svg>
                </Link>
                <a href="tel:+359877404599" className="btn-secondary">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <path d="M5 4.5C5 3.67 5.67 3 6.5 3h2.7c.46 0 .87.3 1 .74l1.1 3.48a1 1 0 0 1-.35 1.05l-1.6 1.2a12.5 12.5 0 0 0 5.17 5.17l1.2-1.6a1 1 0 0 1 1.05-.35l3.48 1.1c.44.14.74.54.74 1v2.7c0 .83-.67 1.5-1.5 1.5C10.8 19 5 13.2 5 4.5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
                    <path d="M15 3.5c2.5.5 4.5 2.5 5 5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
                    <path d="M15.5 6.5c1.2.3 2.2 1.3 2.5 2.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.35"/>
                  </svg>
                  {t(hero.cta2, lang)}
                </a>
              </div>

              <div
                ref={statsRef}
                className="hero-stats mt-16 flex flex-wrap items-center justify-center gap-4 text-white/30 sm:gap-8"
                style={{ opacity: 0 }}
              >
                <div className="flex items-center gap-2">
                  <span className="font-display text-2xl font-bold text-brand">47</span>
                  <span className="font-body text-body-sm">{lang === "bg" ? "държави" : "countries"}</span>
                </div>
                <div className="hero-stats-divider h-4 w-px bg-white/20" />
                <div className="flex items-center gap-2">
                  <span className="font-display text-2xl font-bold text-brand">8,400+</span>
                  <span className="font-body text-body-sm">{lang === "bg" ? "пратки/год." : "shipments/yr"}</span>
                </div>
                <div className="hero-stats-divider h-4 w-px bg-white/20" />
                <div className="flex items-center gap-2">
                  <span className="font-display text-2xl font-bold text-brand">15+</span>
                  <span className="font-body text-body-sm">{lang === "bg" ? "години" : "years"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
