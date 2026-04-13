import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { gsap, useGSAP } from "../../src/lib/gsap-config";
import { useLang } from "../../src/context/LanguageContext";
import { faq, t } from "../../src/data/translations";

function FaqItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="faq-item border-b border-surface-border">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between gap-4 py-6 text-left transition-colors duration-300 hover:text-brand"
      >
        <span className="font-display text-lg font-medium text-heading">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.35, ease: [0.28, 0.84, 0.42, 1.04] }}
          className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-surface-border text-heading/40"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 font-body text-body-md leading-relaxed text-heading/50">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FaqSection() {
  const { lang } = useLang();
  const [openIndex, setOpenIndex] = useState(0);
  const sectionRef = useRef(null);

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    const leftCol = section.querySelectorAll(".faq-left-child");
    gsap.set(leftCol, { y: 50, opacity: 0 });
    gsap.to(leftCol, {
      y: 0, opacity: 1, duration: 1.1, ease: "silk",
      stagger: 0.12,
      scrollTrigger: { trigger: section, start: "top 80%", once: true },
    });

    const contactCard = section.querySelector(".faq-contact-card");
    if (contactCard) {
      gsap.set(contactCard, { clipPath: "inset(10% 10% 10% 10%)", opacity: 0 });
      gsap.to(contactCard, {
        clipPath: "inset(0% 0% 0% 0%)", opacity: 1,
        duration: 1, ease: "heavy",
        scrollTrigger: { trigger: section, start: "top 75%", once: true },
        delay: 0.3,
      });
    }

    const faqItems = section.querySelectorAll(".faq-item");
    faqItems.forEach((item, i) => {
      gsap.set(item, { x: 30, opacity: 0 });
      gsap.to(item, {
        x: 0, opacity: 1,
        duration: 0.9, ease: "silk",
        scrollTrigger: { trigger: section, start: "top 75%", once: true },
        delay: 0.1 * i,
      });
    });
  }, { scope: sectionRef });

  return (
    <section className="section-padding section-py border-t border-surface-border" ref={sectionRef}>
      <div className="container-xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div>
              <h2 className="faq-left-child font-display text-display-lg text-heading">
                {t(faq.title, lang)}
              </h2>
              <p className="faq-left-child mt-4 font-body text-body-lg text-heading/50">
                {t(faq.subtitle, lang)}
              </p>
              <div className="faq-contact-card mt-8 rounded-2xl border border-surface-border bg-surface-card p-6">
                <h3 className="font-display text-lg font-semibold text-heading">
                  {t(faq.stillHave, lang)}
                </h3>
                <p className="mt-2 font-body text-body-sm text-heading/40">
                  {t(faq.stillHaveDesc, lang)}
                </p>
                <Link to="/contact" className="btn-primary mt-6 w-full text-sm">
                  {t(faq.cta, lang)}
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            {faq.items.map((item, i) => (
              <FaqItem
                key={i}
                question={t(item.q, lang)}
                answer={t(item.a, lang)}
                isOpen={openIndex === i}
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
