import { useRef, useMemo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap, useGSAP } from "../../src/lib/gsap-config";
import { useLang } from "../../src/context/LanguageContext";
import { hero, t } from "../../src/data/translations";
import { IMAGES } from "../../src/data/images";
import { useIsDesktop } from "../../src/hooks/useIsDesktop";

export function HeroSection() {
  const { lang } = useLang();
  const sectionRef = useRef(null);
  const tagRef = useRef(null);
  const h1Ref = useRef(null);
  const subtitleRef = useRef(null);
  const ruleRef = useRef(null);
  const ctaRef = useRef(null);
  const statsRef = useRef(null);
  const isDesktop = useIsDesktop();

  const [lockedH, setLockedH] = useState(null);

  useEffect(() => {
    if (!isDesktop) {
      setLockedH(window.innerHeight);
    }
  }, [isDesktop]);

  const titleText = useMemo(() => t(hero.title, lang), [lang]);

  useGSAP(() => {
    const isMobile = window.innerWidth < 768;

    const tl = gsap.timeline({ delay: 0.15 });

    if (tagRef.current) {
      if (isMobile) {
        gsap.set(tagRef.current, { opacity: 0, y: 15 });
        tl.to(tagRef.current, { opacity: 1, y: 0, duration: 0.5, ease: "silk" });
      } else {
        gsap.set(tagRef.current, { clipPath: "inset(0 100% 0 0)", opacity: 1 });
        tl.to(tagRef.current, { clipPath: "inset(0 0% 0 0)", duration: 0.6, ease: "silk" });
      }
    }

    if (h1Ref.current) {
      h1Ref.current.style.visibility = "visible";
      if (isMobile) {
        gsap.set(h1Ref.current, { opacity: 0, y: 20 });
        tl.to(h1Ref.current, { opacity: 1, y: 0, duration: 0.6, ease: "silk" }, "-=0.2");
      } else {
        const chars = h1Ref.current.querySelectorAll(".hero-char");
        gsap.set(chars, { y: 60, opacity: 0, rotateX: 8 });
        tl.to(chars, {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.9,
          stagger: { each: 0.02, ease: "power3.inOut" },
          ease: "silk",
        }, "-=0.2");
      }
    }

    if (subtitleRef.current) {
      gsap.set(subtitleRef.current, { y: isMobile ? 15 : 30, opacity: 0 });
      tl.to(subtitleRef.current, { y: 0, opacity: 1, duration: isMobile ? 0.5 : 0.9, ease: "silk" }, "-=0.5");
    }

    if (ruleRef.current) {
      tl.to(ruleRef.current, {
        opacity: 1, scaleX: 1,
        duration: 0.8, ease: "silk",
      }, "-=0.3");
    }

    if (ctaRef.current) {
      const buttons = ctaRef.current.children;
      gsap.set(buttons, { y: isMobile ? 15 : 30, opacity: 0, scale: 0.95 });
      tl.to(buttons, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: isMobile ? 0.5 : 0.7,
        stagger: 0.08,
        ease: "whip",
      }, "-=0.4");
    }

    if (statsRef.current) {
      if (isMobile) {
        gsap.set(statsRef.current, { opacity: 0, y: 10 });
        tl.to(statsRef.current, { opacity: 1, y: 0, duration: 0.4, ease: "silk" }, "-=0.2");
      } else {
        gsap.set(statsRef.current, { clipPath: "inset(0 50% 0 50%)", opacity: 1 });
        tl.to(statsRef.current, { clipPath: "inset(0 0% 0 0%)", duration: 0.8, ease: "silk" }, "-=0.2");
      }
    }

    tl.eventCallback("onComplete", () => {
      gsap.set([tagRef.current, h1Ref.current, subtitleRef.current, ruleRef.current, ctaRef.current, statsRef.current].filter(Boolean), { willChange: "auto" });
    });

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

  const heroImages = Array.isArray(IMAGES.hero) ? IMAGES.hero : [];
  const duplicatedImages = [...heroImages, ...heroImages];

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full overflow-hidden bg-dark flex flex-col items-center justify-center text-center px-4"
      style={{ minHeight: lockedH ? `${lockedH}px` : "100svh" }}
    >
      <div className="z-10 flex flex-col items-center pb-24 sm:pb-32 lg:pb-40 w-full max-w-7xl">
        <div ref={tagRef} style={{ opacity: 0 }}>
          <span className="tag mb-4 sm:mb-8 inline-flex">{t(hero.tag, lang)}</span>
        </div>

        <h1
          ref={h1Ref}
          className="mx-auto max-w-4xl px-4 font-display text-[2rem] uppercase leading-[1.1] text-[#F5F0E8] sm:text-5xl md:text-display-xl sm:px-0"
          style={{ visibility: "hidden" }}
        >
          {splitChars(titleText)}
        </h1>

        <p
          ref={subtitleRef}
          className="mx-auto mt-3 max-w-xl px-6 font-body text-base text-[#B4AEA5] sm:text-body-lg sm:px-0 sm:mt-6"
          style={{ opacity: 0 }}
        >
          {t(hero.subtitle, lang)}
        </p>

        <div
          ref={ruleRef}
          className="mx-auto mt-4 h-px w-24 bg-accent sm:mt-6 sm:w-32"
          style={{ opacity: 0, transform: "scaleX(0)", transformOrigin: "left" }}
        />

        <div
          ref={ctaRef}
          className="mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row sm:mt-10 sm:gap-4"
          style={{ opacity: 0 }}
        >
          <Link to="/contact" className="btn-primary" aria-label={t(hero.cta1, lang)}>
            {t(hero.cta1, lang)}
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M14 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="5" cy="12" r="0.7" fill="currentColor" opacity="0.3"/>
            </svg>
          </Link>
          <a href="tel:+359877404599" className="btn-secondary" aria-label={t(hero.cta2, lang)}>
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
          className="hero-stats mt-4 sm:mt-12 md:mt-16 flex flex-wrap items-center justify-center gap-4 text-body sm:gap-8"
          style={{ opacity: 0 }}
        >
          <div className="flex items-center gap-2">
            <span className="font-display text-2xl text-accent">47</span>
            <span className="font-mono text-body-sm uppercase tracking-wider">{lang === "bg" ? "държави" : "countries"}</span>
          </div>
          <div className="hero-stats-divider h-4 w-px bg-border" />
          <div className="flex items-center gap-2">
            <span className="font-display text-2xl text-accent">8,400+</span>
            <span className="font-mono text-body-sm uppercase tracking-wider">{lang === "bg" ? "пратки/год." : "shipments/yr"}</span>
          </div>
          <div className="hero-stats-divider h-4 w-px bg-border" />
          <div className="flex items-center gap-2">
            <span className="font-display text-2xl text-accent">15+</span>
            <span className="font-mono text-body-sm uppercase tracking-wider">{lang === "bg" ? "години" : "years"}</span>
          </div>
        </div>
      </div>

      {/* MARQUEE IMAGE STRIP */}
      <div 
        className="absolute bottom-0 left-0 w-full h-[28vh] md:h-[35vh] lg:h-[40vh] pointer-events-none pb-4" 
        style={{
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
          maskImage: "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
        }}
      >
        <div className="flex gap-4 sm:gap-6 w-max animate-marquee">
          {duplicatedImages.map((src, index) => (
            <div
              key={index}
              className="relative aspect-[3/4] h-48 sm:h-56 md:h-64 lg:h-[18rem] flex-shrink-0"
              style={{
                transform: `rotate(${index % 2 === 0 ? -2 : 3}deg)`,
                pointerEvents: 'none',
              }}
            >
              <img
                src={src}
                alt={`SpeedLink logistics ${index + 1}`}
                className="w-full h-full object-cover rounded-xl sm:rounded-2xl shadow-xl shadow-black/40"
                loading={index < heroImages.length ? "eager" : "lazy"}
                decoding={index < heroImages.length ? "sync" : "async"}
                width={400}
                height={533}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

