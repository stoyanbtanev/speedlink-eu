import React, { useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useLang } from "../src/context/LanguageContext";
import { contactPage, faq, t } from "../src/data/translations";
import { IMAGES } from "../src/data/images";
import { PageHeader } from "../src/components/PageHeader";

function ContactForm() {
  const { lang } = useLang();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding section-py" ref={ref}>
      <div className="container-xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <span className="tag mb-6 inline-flex">{t(contactPage.formTag, lang)}</span>
            <h2 className="font-display text-display-md text-white">{t(contactPage.formTitle, lang)}</h2>
            <p className="mt-3 font-body text-body-lg text-white/50">{t(contactPage.formSubtitle, lang)}</p>

            <form className="mt-10 space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block font-display text-label uppercase tracking-wider text-white/40">{t(contactPage.firstName, lang)}</label>
                  <input type="text" className="w-full rounded-xl border border-surface-border bg-surface-card px-4 py-3 font-body text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-brand/50" />
                </div>
                <div>
                  <label className="mb-2 block font-display text-label uppercase tracking-wider text-white/40">{t(contactPage.lastName, lang)}</label>
                  <input type="text" className="w-full rounded-xl border border-surface-border bg-surface-card px-4 py-3 font-body text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-brand/50" />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block font-display text-label uppercase tracking-wider text-white/40">{t(contactPage.email, lang)}</label>
                  <input type="email" className="w-full rounded-xl border border-surface-border bg-surface-card px-4 py-3 font-body text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-brand/50" />
                </div>
                <div>
                  <label className="mb-2 block font-display text-label uppercase tracking-wider text-white/40">{t(contactPage.phone, lang)}</label>
                  <input type="tel" className="w-full rounded-xl border border-surface-border bg-surface-card px-4 py-3 font-body text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-brand/50" />
                </div>
              </div>
              <div>
                <label className="mb-2 block font-display text-label uppercase tracking-wider text-white/40">{t(contactPage.serviceLabel, lang)}</label>
                <select className="w-full rounded-xl border border-surface-border bg-surface-card px-4 py-3 font-body text-sm text-white/70 outline-none transition-colors focus:border-brand/50">
                  <option value="">{lang === "bg" ? "Изберете услуга" : "Select a service"}</option>
                  {contactPage.serviceOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{t(opt.label, lang)}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-2 block font-display text-label uppercase tracking-wider text-white/40">{t(contactPage.roleLabel, lang)}</label>
                <select className="w-full rounded-xl border border-surface-border bg-surface-card px-4 py-3 font-body text-sm text-white/70 outline-none transition-colors focus:border-brand/50">
                  <option value="">{lang === "bg" ? "Изберете роля" : "Select role"}</option>
                  {contactPage.roles.map((role) => (
                    <option key={role.value} value={role.value}>{t(role.label, lang)}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-2 block font-display text-label uppercase tracking-wider text-white/40">{t(contactPage.message, lang)}</label>
                <textarea rows="4" placeholder={t(contactPage.messagePlaceholder, lang)} className="w-full resize-none rounded-xl border border-surface-border bg-surface-card px-4 py-3 font-body text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-brand/50" />
              </div>
              <div className="flex items-start gap-3">
                <input type="checkbox" id="terms" className="mt-1 h-4 w-4 rounded border-surface-border bg-surface-card accent-brand" />
                <label htmlFor="terms" className="font-body text-body-sm text-white/50">{t(contactPage.terms, lang)}</label>
              </div>
              <button type="submit" className="btn-primary w-full sm:w-auto">
                {t(contactPage.send, lang)}
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="sticky top-32 space-y-6">
              <div className="glass-card p-8">
                <span className="tag mb-6 inline-flex">{t(contactPage.directTag, lang)}</span>
                <h3 className="font-display text-display-sm text-white">{t(contactPage.directTitle, lang)}</h3>
                <p className="mt-3 font-body text-body-md text-white/50">{t(contactPage.directSubtitle, lang)}</p>

                <div className="mt-8 space-y-5">
                  {[
                    { icon: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM22 6l-10 7L2 6", label: contactPage.emailAddress, href: `mailto:${contactPage.emailAddress}` },
                    { icon: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z", label: "+359 877 404 599", href: "tel:+359877404599" },
                    { icon: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0zM12 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6z", label: t(contactPage.officeAddress, lang), href: null },
                  ].map((info, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d={info.icon} />
                        </svg>
                      </div>
                      <div>
                        {info.href ? (
                          <a href={info.href} className="font-body text-body-md text-white transition-colors hover:text-brand">{info.label}</a>
                        ) : (
                          <p className="font-body text-body-md text-white">{info.label}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl">
                <img src={IMAGES.contactMap} alt={t(contactPage.officeAddress, lang)} className="aspect-[4/3] img-cover" loading="lazy" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactFaq() {
  const { lang } = useLang();
  const [openIndex, setOpenIndex] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding section-py border-t border-surface-border" ref={ref}>
      <div className="container-xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="font-display text-display-lg text-white">{t(faq.title, lang)}</h2>
          <p className="mt-4 font-body text-body-lg text-white/50">{t(faq.subtitle, lang)}</p>
        </div>
        <div className="mx-auto max-w-3xl">
          {faq.items.map((item, i) => (
            <div key={i} className="border-b border-surface-border">
              <button onClick={() => setOpenIndex(openIndex === i ? -1 : i)} className="flex w-full items-center justify-between gap-4 py-6 text-left">
                <span className="font-display text-lg font-medium text-white">{t(item.q, lang)}</span>
                <motion.div animate={{ rotate: openIndex === i ? 45 : 0 }} transition={{ duration: 0.25 }} className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-surface-border text-white/40">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }} className="overflow-hidden">
                    <p className="pb-6 font-body text-body-md leading-relaxed text-white/50">{t(item.a, lang)}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
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
        title={t(contactPage.heroTitle, lang)}
        subtitle={t(contactPage.heroSubtitle, lang)}
        image={IMAGES.pageHeaders.contact}
      />
      <ContactForm />
      <ContactFaq />
    </>
  );
}
