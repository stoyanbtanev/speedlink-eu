import { useRef, useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap, isLowEndDevice, useGSAP } from "../../src/lib/gsap-config"; // Keep GSAP for text if desired, but framer-motion is fine too.
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
    } else {
      setLockedH(null);
    }
  }, [isDesktop]);

  const titleText = useMemo(() => t(hero.title, lang), [lang]);

  // Framer Motion variants for text content
  const FADE_UP_VARIANTS = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: "spring", 
        stiffness: 80, 
        damping: 15,
        duration: 0.8
      } 
    },
  };

  const STAGGER_CONTAINER_VARIANTS = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const splitChars = (text) => {
    const tokens = text.split(/(\s|\n)/);
    return tokens.map((token, wi) => {
      if (token === "\n") return <br key={`br-${wi}`} />;
      if (token === " ")
        return (
          <span key={`sp-${wi}`} className="inline-block" style={{ whiteSpace: "pre" }}>
            {" "}
          </span>
        );
      if (token === "") return null;
      return (
        <span key={`w-${wi}`} className="inline-block whitespace-nowrap">
          {token.split("").map((char, ci) => (
            <span key={ci} className="inline-block">
              {char}
            </span>
          ))}
        </span>
      );
    });
  };

  const heroImages = Array.isArray(IMAGES.hero) ? IMAGES.hero : [];
  // Triple the images for very long containers to ensure no gaps
  const duplicatedImages = [...heroImages, ...heroImages, ...heroImages];
  const useCssMarquee = isLowEndDevice && !isDesktop;

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full flex flex-col items-center justify-center text-center px-4 transition-colors duration-500"
      style={{ minHeight: lockedH ? `${lockedH}px` : "100svh" }}
    >
      <motion.div 
        variants={STAGGER_CONTAINER_VARIANTS}
        initial="hidden"
        animate="show"
        className="z-10 flex flex-col items-center pb-16 sm:pb-20 lg:pb-28 w-full max-w-7xl pt-24 sm:pt-28 lg:pt-32"
      >
        <motion.div variants={FADE_UP_VARIANTS}>
          <span className="tag mb-4 sm:mb-8 inline-flex">{t(hero.tag, lang)}</span>
        </motion.div>

        <motion.h1
          variants={FADE_UP_VARIANTS}
          className="mx-auto w-full max-w-[22ch] px-2 font-display text-display-xl uppercase text-heading sm:px-0"
        >
          {splitChars(titleText)}
        </motion.h1>

        <motion.p
          variants={FADE_UP_VARIANTS}
          className="mx-auto mt-4 max-w-[52ch] px-6 font-body text-body-lg leading-[1.7] tracking-[-0.005em] text-body/90 sm:px-0 sm:mt-6"
        >
          {t(hero.subtitle, lang)}
        </motion.p>

        <motion.div
          variants={FADE_UP_VARIANTS}
          className="mx-auto mt-6 h-px w-24 bg-accent sm:mt-8 sm:w-32"
          style={{ transformOrigin: "center" }}
        />

        <motion.div
          variants={FADE_UP_VARIANTS}
          className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:mt-10 sm:gap-4"
        >
          <a href="#contact" className="btn-primary" aria-label={t(hero.cta1, lang)}>
            {t(hero.cta1, lang)}
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M14 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="5" cy="12" r="0.7" fill="currentColor" opacity="0.3"/>
            </svg>
          </a>
          <a href="tel:+359877404599" className="btn-secondary bg-surface/10 backdrop-blur-sm" aria-label={t(hero.cta2, lang)}>
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
              <path d="M5 4.5C5 3.67 5.67 3 6.5 3h2.7c.46 0 .87.3 1 .74l1.1 3.48a1 1 0 0 1-.35 1.05l-1.6 1.2a12.5 12.5 0 0 0 5.17 5.17l1.2-1.6a1 1 0 0 1 1.05-.35l3.48 1.1c.44.14.74.54.74 1v2.7c0 .83-.67 1.5-1.5 1.5C10.8 19 5 13.2 5 4.5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
              <path d="M15 3.5c2.5.5 4.5 2.5 5 5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
              <path d="M15.5 6.5c1.2.3 2.2 1.3 2.5 2.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.35"/>
            </svg>
            {t(hero.cta2, lang)}
          </a>
        </motion.div>

        <motion.div
          variants={FADE_UP_VARIANTS}
          className="hero-stats mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-x-8 sm:gap-x-12 lg:gap-x-16 gap-y-3 drop-shadow-sm"
        >
          <div className="flex items-center gap-2">
            <span className="font-display text-[clamp(1.5rem,3.5vw,2.5rem)] leading-none tracking-[0.03em] text-accent drop-shadow-sm">47</span>
            <span className="font-mono text-[0.6875rem] leading-[1.5] tracking-[0.14em] uppercase text-heading/80">{lang === "bg" ? "държави" : "countries"}</span>
          </div>
          <div className="hero-stats-divider h-4 w-px bg-border/40" />
          <div className="flex items-center gap-2">
            <span className="font-display text-[clamp(1.5rem,3.5vw,2.5rem)] leading-none tracking-[0.03em] text-accent drop-shadow-sm">8,400+</span>
            <span className="font-mono text-[0.6875rem] leading-[1.5] tracking-[0.14em] uppercase text-heading/80">{lang === "bg" ? "пратки/год." : "shipments/yr"}</span>
          </div>
          <div className="hero-stats-divider h-4 w-px bg-border/40" />
          <div className="flex items-center gap-2">
            <span className="font-display text-[clamp(1.5rem,3.5vw,2.5rem)] leading-none tracking-[0.03em] text-accent drop-shadow-sm">15+</span>
            <span className="font-mono text-[0.6875rem] leading-[1.5] tracking-[0.14em] uppercase text-heading/80">{lang === "bg" ? "години" : "years"}</span>
          </div>
        </motion.div>
      </motion.div>

      {/* INFINITE FRAMER MOTION MARQUEE */}
      <div 
        className="absolute bottom-0 left-0 w-full h-[28vh] md:h-[35vh] lg:h-[40vh] pointer-events-none pb-4 overflow-hidden" 
        style={{
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)",
          maskImage: "linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)",
        }}
      >
        {useCssMarquee ? (
          <div
            className="flex gap-4 sm:gap-6 w-max absolute bottom-4"
            style={{ animation: "speedlink-marquee 60s linear infinite" }}
          >
            {duplicatedImages.map((src, index) => (
              <div
                key={index}
                className="relative aspect-[3/4] h-48 sm:h-56 md:h-64 lg:h-[20rem] flex-shrink-0"
                style={{ transform: `rotate(${index % 2 === 0 ? -1.5 : 2.5}deg)`, pointerEvents: "none" }}
              >
                <img
                  src={src}
                  alt={`SpeedLink logistics ${index + 1}`}
                  className="w-full h-full object-cover rounded-xl sm:rounded-2xl border border-border/20 shadow-xl shadow-black/30"
                  loading={index < heroImages.length ? "eager" : "lazy"}
                  decoding={index < heroImages.length ? "sync" : "async"}
                  width={400}
                  height={533}
                />
              </div>
            ))}
          </div>
        ) : (
          <motion.div
            className="flex gap-4 sm:gap-6 w-max absolute bottom-4"
            initial={{ x: 0 }}
            animate={{ x: "-33.33%" }}
            transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 50, ease: "linear" } }}
          >
            {duplicatedImages.map((src, index) => (
              <div
                key={index}
                className="relative aspect-[3/4] h-48 sm:h-56 md:h-64 lg:h-[20rem] flex-shrink-0"
                style={{ transform: `rotate(${index % 2 === 0 ? -1.5 : 2.5}deg)`, pointerEvents: "none" }}
              >
                <img
                  src={src}
                  alt={`SpeedLink logistics ${index + 1}`}
                  className="w-full h-full object-cover rounded-xl sm:rounded-2xl border border-border/20 shadow-xl shadow-black/30 dark:shadow-black/60"
                  loading={index < heroImages.length ? "eager" : "lazy"}
                  decoding={index < heroImages.length ? "sync" : "async"}
                  width={400}
                  height={533}
                />
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
