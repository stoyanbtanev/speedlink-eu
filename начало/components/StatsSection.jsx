import React from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "../../src/context/LanguageContext";
import { stats, t } from "../../src/data/translations";
import { IMAGES } from "../../src/data/images";

export function StatsSection() {
  const { lang } = useLang();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding section-py border-t border-surface-border" ref={ref}>
      <div className="container-xl">
        <div className="mx-auto mb-16 max-w-2xl text-center md:mb-20">
          <span className="tag mb-6 inline-flex">{t(stats.tag, lang)}</span>
          <h2 className="font-display text-display-lg text-white">
            {t(stats.title, lang)}
          </h2>
          <p className="mt-4 font-body text-body-lg text-white/50">
            {t(stats.subtitle, lang)}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-2xl lg:col-span-3"
          >
            <img
              src={IMAGES.stats}
              alt="SpeedLink operations"
              className="aspect-[3/2] img-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-dark/60 to-transparent" />
          </motion.div>

          <div className="flex flex-col gap-4 lg:col-span-2">
            {stats.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 * i }}
                className="glass-card flex-1 p-6 md:p-8"
              >
                <p className="font-display text-4xl font-bold text-brand md:text-5xl">
                  {item.value}
                </p>
                <h3 className="mt-2 font-display text-lg font-semibold text-white">
                  {t(item.label, lang)}
                </h3>
                <p className="mt-1 font-body text-body-sm text-white/40">
                  {t(item.desc, lang)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
