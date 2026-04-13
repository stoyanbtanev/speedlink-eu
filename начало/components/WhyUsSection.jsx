import React from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useLang } from "../../src/context/LanguageContext";
import { whyUs, t } from "../../src/data/translations";
import { IMAGES } from "../../src/data/images";

const ICONS = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
];

const CARD_IMAGES = [
  IMAGES.services.ftl,
  IMAGES.services.ocean,
  IMAGES.services.customs,
  IMAGES.services.air,
];

export function WhyUsSection() {
  const { lang } = useLang();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding section-py" ref={ref}>
      <div className="container-xl">
        <div className="mx-auto mb-16 max-w-2xl text-center md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="tag mb-6 inline-flex"
          >
            {t(whyUs.tag, lang)}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-display-lg text-white"
          >
            {t(whyUs.title, lang)}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 font-body text-body-lg text-white/50"
          >
            {t(whyUs.subtitle, lang)}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
          {whyUs.cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className="group glass-card overflow-hidden transition-all duration-500 hover:border-brand/30"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={CARD_IMAGES[i]}
                  alt={t(card.title, lang)}
                  className="img-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-card to-transparent" />
              </div>
              <div className="p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 text-brand">
                  {ICONS[i]}
                </div>
                <span className="font-display text-label uppercase tracking-wider text-brand">
                  {t(card.tag, lang)}
                </span>
                <h3 className="mt-2 font-display text-display-sm text-white">
                  {t(card.title, lang)}
                </h3>
                <p className="mt-2 font-body text-body-sm text-white/50">
                  {t(card.desc, lang)}
                </p>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="group glass-card overflow-hidden transition-all duration-500 hover:border-brand/30 sm:col-span-2 lg:col-span-2 lg:row-span-2 lg:col-start-3 lg:row-start-1"
          >
            <div className="relative h-56 overflow-hidden lg:h-64">
              <img
                src={IMAGES.services.warehouse}
                alt={t(whyUs.featured.title, lang)}
                className="img-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-card via-surface-card/50 to-transparent" />
            </div>
            <div className="flex flex-1 flex-col justify-center p-8 lg:p-10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
                  <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <span className="font-display text-label uppercase tracking-wider text-brand">
                {t(whyUs.featured.tag, lang)}
              </span>
              <h3 className="mt-2 font-display text-display-md text-white">
                {t(whyUs.featured.title, lang)}
              </h3>
              <p className="mt-3 font-body text-body-md text-white/50">
                {t(whyUs.featured.desc, lang)}
              </p>
              <div className="mt-8 flex gap-4">
                <Link to="/контакт" className="btn-primary text-sm">
                  {t(whyUs.featured.cta, lang)}
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
