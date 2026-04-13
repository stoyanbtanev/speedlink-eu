import React from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLang } from "../../src/context/LanguageContext";
import { hero, t } from "../../src/data/translations";
import { IMAGES } from "../../src/data/images";

export function HeroSection() {
  const { lang } = useLang();
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.15]);
  const y = useTransform(scrollYProgress, [0, 0.3], [0, 80]);

  return (
    <section className="relative h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          style={{ scale }}
        >
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
                  className="img-cover transition-transform duration-700"
                  loading={i < 3 ? "eager" : "lazy"}
                />
              </div>
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/80 to-dark" />
        </motion.div>

        <motion.div
          className="relative z-10 flex h-full items-center justify-center"
          style={{ opacity, y }}
        >
          <div className="section-padding w-full">
            <div className="container-xl text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="tag mb-8 inline-flex">{t(hero.tag, lang)}</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="mx-auto max-w-4xl font-display text-display-xl text-white"
                style={{ whiteSpace: "pre-line" }}
              >
                {t(hero.title, lang)}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="mx-auto mt-6 max-w-xl font-body text-body-lg text-white/60"
              >
                {t(hero.subtitle, lang)}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.75 }}
                className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
              >
                <Link to="/контакт" className="btn-primary">
                  {t(hero.cta1, lang)}
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
                <a href="tel:+359877404599" className="btn-secondary">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  {t(hero.cta2, lang)}
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="mt-16 flex flex-wrap items-center justify-center gap-4 text-white/30 sm:gap-8"
              >
                <div className="flex items-center gap-2">
                  <span className="font-display text-2xl font-bold text-brand">47</span>
                  <span className="font-body text-body-sm">{lang === "bg" ? "държави" : "countries"}</span>
                </div>
                <div className="h-4 w-px bg-white/20" />
                <div className="flex items-center gap-2">
                  <span className="font-display text-2xl font-bold text-brand">8,400+</span>
                  <span className="font-body text-body-sm">{lang === "bg" ? "пратки/год." : "shipments/yr"}</span>
                </div>
                <div className="h-4 w-px bg-white/20" />
                <div className="flex items-center gap-2">
                  <span className="font-display text-2xl font-bold text-brand">15+</span>
                  <span className="font-body text-body-sm">{lang === "bg" ? "години" : "years"}</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/20 pt-1.5">
            <div className="h-2 w-1 rounded-full bg-brand" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
