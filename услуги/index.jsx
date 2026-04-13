import React from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useLang } from "../src/context/LanguageContext";
import { servicesPage, faq, ctaDual, t } from "../src/data/translations";
import { IMAGES } from "../src/data/images";
import { PageHeader } from "../src/components/PageHeader";

const SERVICE_IMAGES = [IMAGES.services.ftl, IMAGES.services.ltl, IMAGES.services.ocean, IMAGES.services.air];

function ServicesGrid() {
  const { lang } = useLang();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding section-py" ref={ref}>
      <div className="container-xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="tag mb-6 inline-flex">{t(servicesPage.tag, lang)}</span>
          <h2 className="font-display text-display-lg text-white">{t(servicesPage.title, lang)}</h2>
          <p className="mt-4 font-body text-body-lg text-white/50">{t(servicesPage.subtitle, lang)}</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {servicesPage.cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="group glass-card overflow-hidden transition-all duration-500 hover:border-brand/30"
            >
              <div className="relative h-52 overflow-hidden">
                <img src={SERVICE_IMAGES[i]} alt={t(card.title, lang)} className="img-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-card to-transparent" />
                <span className="absolute bottom-4 left-4 rounded-lg bg-brand/20 px-3 py-1 font-display text-xs font-bold text-brand backdrop-blur-sm">
                  {typeof card.tag === "string" ? card.tag : t(card.tag, lang)}
                </span>
              </div>
              <div className="p-8">
                <h3 className="font-display text-display-sm text-white">{t(card.title, lang)}</h3>
                <p className="mt-3 font-body text-body-md text-white/50">{t(card.desc, lang)}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2"
        >
          <div className="glass-card overflow-hidden">
            <img src={IMAGES.services.customs} alt={t(servicesPage.featured.title, lang)} className="aspect-video img-cover" loading="lazy" />
          </div>
          <div className="glass-card flex flex-col justify-center p-8 md:p-12">
            <span className="tag mb-4 inline-flex w-fit">{t(servicesPage.featured.tag, lang)}</span>
            <h3 className="font-display text-display-md text-white">{t(servicesPage.featured.title, lang)}</h3>
            <p className="mt-4 font-body text-body-md text-white/50">{t(servicesPage.featured.desc, lang)}</p>
            <Link to="/контакт" className="btn-primary mt-8 w-fit text-sm">{t(servicesPage.featured.cta, lang)}</Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function WhyChoose() {
  const { lang } = useLang();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding section-py border-t border-surface-border" ref={ref}>
      <div className="container-xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="tag mb-6 inline-flex">{t(servicesPage.whyTag, lang)}</span>
          <h2 className="font-display text-display-lg text-white">{t(servicesPage.whyTitle, lang)}</h2>
          <p className="mt-4 font-body text-body-lg text-white/50">{t(servicesPage.whySubtitle, lang)}</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {servicesPage.whyCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.12 * i }}
              className="glass-card p-8 text-center"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/10">
                <span className="font-display text-2xl font-bold text-brand">{i + 1}</span>
              </div>
              <h3 className="font-display text-display-sm text-white">{t(card.title, lang)}</h3>
              <p className="mt-3 font-body text-body-md text-white/50">{t(card.desc, lang)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  const { lang } = useLang();
  return (
    <section className="section-padding section-py border-t border-surface-border">
      <div className="container-xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="tag mb-6 inline-flex">{t(servicesPage.aboutTag, lang)}</span>
            <h2 className="font-display text-display-lg text-white">{t(servicesPage.aboutTitle, lang)}</h2>
            <p className="mt-6 font-body text-body-lg leading-relaxed text-white/50">{t(servicesPage.aboutDesc, lang)}</p>
            <div className="mt-8 flex gap-4">
              <Link to="/контакт" className="btn-primary">{lang === "bg" ? "Запитай" : "Inquire"}</Link>
              <Link to="/отзиви" className="btn-secondary">{lang === "bg" ? "Отзиви" : "Reviews"}</Link>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl">
            <img src={IMAGES.services.warehouse} alt="SpeedLink warehouse" className="aspect-[4/3] img-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-tr from-dark/30 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  const { lang } = useLang();
  return (
    <>
      <PageHeader
        title={t(servicesPage.heroTitle, lang)}
        subtitle={t(servicesPage.heroSubtitle, lang)}
        image={IMAGES.pageHeaders.services}
      />
      <ServicesGrid />
      <WhyChoose />
      <AboutSection />
    </>
  );
}
