import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useLang } from "../../src/context/LanguageContext";
import { faq, t } from "../../src/data/translations";

function FaqItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="border-b border-surface-border">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between gap-4 py-6 text-left transition-colors duration-300 hover:text-brand"
      >
        <span className="font-display text-lg font-medium text-white">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-surface-border text-white/40"
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
            <p className="pb-6 font-body text-body-md leading-relaxed text-white/50">
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
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding section-py border-t border-surface-border" ref={ref}>
      <div className="container-xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-display-lg text-white">
                {t(faq.title, lang)}
              </h2>
              <p className="mt-4 font-body text-body-lg text-white/50">
                {t(faq.subtitle, lang)}
              </p>
              <div className="mt-8 rounded-2xl border border-surface-border bg-surface-card p-6">
                <h3 className="font-display text-lg font-semibold text-white">
                  {t(faq.stillHave, lang)}
                </h3>
                <p className="mt-2 font-body text-body-sm text-white/40">
                  {t(faq.stillHaveDesc, lang)}
                </p>
                <Link to="/контакт" className="btn-primary mt-6 w-full text-sm">
                  {t(faq.cta, lang)}
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-8">
            {faq.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.08 * i }}
              >
                <FaqItem
                  question={t(item.q, lang)}
                  answer={t(item.a, lang)}
                  isOpen={openIndex === i}
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
