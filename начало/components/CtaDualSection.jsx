import React from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useLang } from "../../src/context/LanguageContext";
import { ctaDual, t } from "../../src/data/translations";

export function CtaDualSection() {
  const { lang } = useLang();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding section-py" ref={ref}>
      <div className="container-xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="glass-card relative overflow-hidden p-8 md:p-12"
          >
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-brand/5 blur-3xl" />
            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/10">
                <svg className="h-7 w-7 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
                </svg>
              </div>
              <h3 className="font-display text-display-md text-white">
                {t(ctaDual.ship.title, lang)}
              </h3>
              <p className="mt-3 font-body text-body-md text-white/50">
                {t(ctaDual.ship.desc, lang)}
              </p>
              <div className="mt-8 flex gap-3">
                <Link to="/контакт" className="btn-primary text-sm">
                  {t(ctaDual.ship.cta1, lang)}
                </Link>
                <a href="tel:+359877404599" className="btn-secondary text-sm">
                  {t(ctaDual.ship.cta2, lang)}
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="glass-card relative overflow-hidden p-8 md:p-12"
          >
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-brand/5 blur-3xl" />
            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/10">
                <svg className="h-7 w-7 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </div>
              <h3 className="font-display text-display-md text-white">
                {t(ctaDual.track.title, lang)}
              </h3>
              <p className="mt-3 font-body text-body-md text-white/50">
                {t(ctaDual.track.desc, lang)}
              </p>
              <div className="mt-8 flex gap-3">
                <button className="btn-primary text-sm">
                  {t(ctaDual.track.cta1, lang)}
                </button>
                <button className="btn-secondary text-sm">
                  {t(ctaDual.track.cta2, lang)}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
