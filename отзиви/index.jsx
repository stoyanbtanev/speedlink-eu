import React from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useLang } from "../src/context/LanguageContext";
import { reviewsPage, t } from "../src/data/translations";
import { IMAGES } from "../src/data/images";
import { PageHeader } from "../src/components/PageHeader";

function TestimonialsGrid() {
  const { lang } = useLang();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding section-py" ref={ref}>
      <div className="container-xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="font-display text-display-lg text-white">{t(reviewsPage.testimonialsTitle, lang)}</h2>
          <p className="mt-4 font-body text-body-lg text-white/50">{t(reviewsPage.testimonialsSubtitle, lang)}</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {reviewsPage.items.map((item, i) => (
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
                  &ldquo;{t(item.quote, lang)}&rdquo;
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

function StatsSection() {
  const { lang } = useLang();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding section-py border-t border-surface-border" ref={ref}>
      <div className="container-xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="tag mb-6 inline-flex">{t(reviewsPage.statsTag, lang)}</span>
          <h2 className="font-display text-display-lg text-white">{t(reviewsPage.statsTitle, lang)}</h2>
          <p className="mt-4 font-body text-body-lg text-white/50">{t(reviewsPage.statsSubtitle, lang)}</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {reviewsPage.statsItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.12 * i }}
              className="glass-card p-8 text-center"
            >
              <p className="font-display text-5xl font-bold text-brand md:text-6xl">{item.value}</p>
              <p className="mt-3 font-display text-lg font-semibold text-white">{t(item.label, lang)}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 glass-card flex flex-col items-center justify-between gap-6 p-8 md:flex-row md:p-12"
        >
          <div>
            <h3 className="font-display text-display-sm text-white">
              {lang === "bg" ? "Готови да станете следващия доволен клиент?" : "Ready to become our next happy client?"}
            </h3>
            <p className="mt-2 font-body text-body-md text-white/50">
              {lang === "bg" ? "Твърда оферта до 24 часа. Без задължение." : "Firm quote within 24 hours. No obligation."}
            </p>
          </div>
          <Link to="/контакт" className="btn-primary flex-shrink-0">
            {lang === "bg" ? "Поискай оферта" : "Get a quote"}
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default function Page() {
  const { lang } = useLang();
  return (
    <>
      <PageHeader
        title={t(reviewsPage.heroTitle, lang)}
        subtitle={t(reviewsPage.heroSubtitle, lang)}
        image={IMAGES.pageHeaders.reviews}
      />
      <TestimonialsGrid />
      <StatsSection />
    </>
  );
}
