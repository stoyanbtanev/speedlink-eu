import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { gsap, useGSAP } from "../src/lib/gsap-config";
import { useLang } from "../src/context/LanguageContext";
import { servicesPage, faq, ctaDual, t } from "../src/data/translations";
import { IMAGES } from "../src/data/images";
import { PageHeader } from "../src/components/PageHeader";

const SERVICE_IMAGES = [IMAGES.services.ftl, IMAGES.services.ltl, IMAGES.services.ocean, IMAGES.services.air];

function ServicesGrid() {
  const { lang } = useLang();
  const sectionRef = useRef(null);

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    const headerEls = section.querySelectorAll(".reveal-header-child");
    gsap.set(headerEls, { y: 50, opacity: 0 });
    gsap.to(headerEls, {
      y: 0, opacity: 1, duration: 1.1, ease: "silk",
      stagger: { each: 0.1, ease: "power2.out" },
      scrollTrigger: { trigger: section, start: "top 82%", once: true },
    });

    const cards = section.querySelectorAll(".svc-card");
    cards.forEach((card, i) => {
      gsap.set(card, { y: 60, opacity: 0, scale: 0.94 });
      gsap.to(card, {
        y: 0, opacity: 1, scale: 1,
        duration: 1.1, ease: "silk",
        scrollTrigger: { trigger: section, start: "top 72%", once: true },
        delay: 0.14 * i,
      });
    });

    const featured = section.querySelector(".svc-featured");
    if (featured) {
      gsap.set(featured, { y: 50, opacity: 0 });
      gsap.to(featured, {
        y: 0, opacity: 1, duration: 1.2, ease: "heavy",
        scrollTrigger: { trigger: section, start: "top 60%", once: true },
      });
    }
  }, { scope: sectionRef });

  return (
    <section className="section-padding section-py" ref={sectionRef}>
      <div className="container-xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="reveal-header-child tag mb-6 inline-flex">{t(servicesPage.tag, lang)}</span>
          <h2 className="reveal-header-child font-display text-display-lg text-heading">{t(servicesPage.title, lang)}</h2>
          <p className="reveal-header-child mt-4 font-body text-body-lg text-heading/50">{t(servicesPage.subtitle, lang)}</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {servicesPage.cards.map((card, i) => (
            <div
              key={i}
              className="svc-card group glass-card overflow-hidden transition-[border-color,box-shadow] duration-500 hover:border-brand/30"
            >
              <div className="relative h-52 overflow-hidden">
                <img src={SERVICE_IMAGES[i]} alt={t(card.title, lang)} width={1200} height={675} loading="lazy" decoding="async" className="img-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-card to-transparent" />
                <span className="absolute bottom-4 left-4 rounded-lg bg-brand/20 px-3 py-1 font-display text-xs font-bold text-brand backdrop-blur-sm">
                  {typeof card.tag === "string" ? card.tag : t(card.tag, lang)}
                </span>
              </div>
              <div className="p-8">
                <h3 className="font-display text-display-sm text-heading">{t(card.title, lang)}</h3>
                <p className="mt-3 font-body text-body-md text-heading/50">{t(card.desc, lang)}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="svc-featured mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="glass-card overflow-hidden">
            <img src={IMAGES.services.customs} alt={t(servicesPage.featured.title, lang)} width={1600} height={900} loading="lazy" decoding="async" className="aspect-video img-cover" />
          </div>
          <div className="glass-card flex flex-col justify-center p-8 md:p-12">
            <span className="tag mb-4 inline-flex w-fit">{t(servicesPage.featured.tag, lang)}</span>
            <h3 className="font-display text-display-md text-heading">{t(servicesPage.featured.title, lang)}</h3>
            <p className="mt-4 font-body text-body-md text-heading/50">{t(servicesPage.featured.desc, lang)}</p>
            <Link to="/contact" className="btn-primary mt-8 w-fit text-sm">{t(servicesPage.featured.cta, lang)}</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  const { lang } = useLang();
  const sectionRef = useRef(null);

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    const headerEls = section.querySelectorAll(".reveal-header-child");
    gsap.set(headerEls, { y: 50, opacity: 0 });
    gsap.to(headerEls, {
      y: 0, opacity: 1, duration: 1.1, ease: "silk",
      stagger: { each: 0.1, ease: "power2.out" },
      scrollTrigger: { trigger: section, start: "top 82%", once: true },
    });

    const cards = section.querySelectorAll(".why-card");
    cards.forEach((card, i) => {
      gsap.set(card, { y: 50, opacity: 0, scale: 0.92 });
      gsap.to(card, {
        y: 0, opacity: 1, scale: 1,
        duration: 1, ease: "silk",
        scrollTrigger: { trigger: section, start: "top 72%", once: true },
        delay: 0.15 * i,
      });
    });
  }, { scope: sectionRef });

  return (
    <section className="section-padding section-py border-t border-surface-border" ref={sectionRef}>
      <div className="container-xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="reveal-header-child tag mb-6 inline-flex">{t(servicesPage.whyTag, lang)}</span>
          <h2 className="reveal-header-child font-display text-display-lg text-heading">{t(servicesPage.whyTitle, lang)}</h2>
          <p className="reveal-header-child mt-4 font-body text-body-lg text-heading/50">{t(servicesPage.whySubtitle, lang)}</p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5 md:gap-6">
          {servicesPage.whyCards.map((card, i) => (
            <div
              key={i}
              className="why-card glass-card px-5 py-6 text-center sm:px-6 sm:py-7"
            >
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 sm:mb-4 sm:h-12 sm:w-12">
                <span className="font-display text-lg font-bold text-brand sm:text-xl">{i + 1}</span>
              </div>
              <h3 className="font-display text-lg font-semibold text-heading sm:text-xl">{t(card.title, lang)}</h3>
              <p className="mt-2 font-body text-body-sm text-heading/50 sm:text-body-md">{t(card.desc, lang)}</p>
            </div>
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
            <h2 className="font-display text-display-lg text-heading">{t(servicesPage.aboutTitle, lang)}</h2>
            <p className="mt-6 font-body text-body-lg leading-relaxed text-heading/50">{t(servicesPage.aboutDesc, lang)}</p>
            <div className="mt-8 flex gap-4">
              <Link to="/contact" className="btn-primary">{lang === "bg" ? "Запитай" : "Inquire"}</Link>
              <Link to="/reviews" className="btn-secondary">{lang === "bg" ? "Отзиви" : "Reviews"}</Link>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl">
            <img src={IMAGES.services.warehouse} alt="SpeedLink warehouse" width={1200} height={900} loading="lazy" decoding="async" className="aspect-[4/3] img-cover" />
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
