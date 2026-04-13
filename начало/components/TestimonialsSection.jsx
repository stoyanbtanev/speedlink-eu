import React from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "../../src/context/LanguageContext";
import { testimonials, t } from "../../src/data/translations";

export function TestimonialsSection() {
  const { lang } = useLang();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding section-py" ref={ref}>
      <div className="container-xl">
        <div className="mx-auto mb-16 max-w-2xl text-center md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-display text-display-lg text-white"
          >
            {t(testimonials.title, lang)}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.15 }}
            className="mt-4 font-body text-body-lg text-white/50"
          >
            {t(testimonials.subtitle, lang)}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.12 * i }}
              className="glass-card flex flex-col justify-between p-8"
            >
              <div>
                <div className="mb-6 flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="h-5 w-5 text-brand" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <blockquote className="font-body text-body-lg leading-relaxed text-white/80">
                  "{t(item.quote, lang)}"
                </blockquote>
              </div>
              <div className="mt-8 flex items-center gap-4 border-t border-surface-border pt-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand/10 font-display text-sm font-bold text-brand">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <p className="font-display text-sm font-semibold text-white">{item.name}</p>
                  <p className="font-body text-body-sm text-white/40">{t(item.role, lang)}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
