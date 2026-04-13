import React from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "../../src/context/LanguageContext";
import { industries, t } from "../../src/data/translations";
import { IMAGES } from "../../src/data/images";

const INDUSTRY_IMAGES = [
  IMAGES.industries.ecommerce,
  IMAGES.industries.automotive,
  IMAGES.industries.pharma,
  IMAGES.industries.chemical,
];

const INDUSTRY_ICONS = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>,
];

export function IndustriesSection() {
  const { lang } = useLang();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding section-py border-t border-surface-border" ref={ref}>
      <div className="container-xl">
        <div className="mx-auto mb-16 max-w-2xl text-center md:mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="tag mb-6 inline-flex"
          >
            {t(industries.tag, lang)}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-display text-display-lg text-white"
          >
            {t(industries.title, lang)}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="mt-4 font-body text-body-lg text-white/50"
          >
            {t(industries.subtitle, lang)}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {industries.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="group relative overflow-hidden rounded-2xl border border-surface-border bg-surface-card transition-all duration-500 hover:border-brand/30"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={INDUSTRY_IMAGES[i]}
                  alt={t(item.title, lang)}
                  className="img-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-card to-transparent" />
                <div className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand/20 text-brand backdrop-blur-sm">
                  {INDUSTRY_ICONS[i]}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-display-sm text-white">
                  {t(item.title, lang)}
                </h3>
                <p className="mt-2 font-body text-body-sm text-white/50 leading-relaxed">
                  {t(item.desc, lang)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
