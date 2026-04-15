import React, { Suspense, useState, useRef } from "react";
import { gsap, useGSAP } from "../lib/gsap-config";
import { useLang } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { contactPage, t } from "../data/translations";

const LeafletMap = React.lazy(() =>
  import("./LeafletMap").then((m) => ({ default: m.LeafletMap }))
);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function ContactForm({ isModal }) {
  const { lang } = useLang();
  const { theme } = useTheme();
  const sectionRef = useRef(null);
  const [values, setValues] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    service: "", role: "", message: "", terms: false, website: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const setField = (key) => (e) => {
    const v = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setValues((prev) => ({ ...prev, [key]: v }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validate = () => {
    const errs = {};
    const req = lang === "bg" ? "Задължително поле" : "Required field";
    if (!values.firstName.trim()) errs.firstName = req;
    if (!values.lastName.trim()) errs.lastName = req;
    if (!values.email.trim()) errs.email = req;
    else if (!EMAIL_RE.test(values.email.trim())) errs.email = lang === "bg" ? "Невалиден имейл" : "Invalid email";
    if (!values.message.trim()) errs.message = req;
    if (!values.terms) errs.terms = lang === "bg" ? "Приемете условията" : "Please accept the terms";
    return errs;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (values.website) return;
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length) return;
    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...values }),
      });
      if (res.ok) setStatus("sent"); else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    const formCol = section.querySelector(".contact-form-col");
    if (formCol) {
      gsap.set(formCol, { y: 50, opacity: 0 });
      gsap.to(formCol, {
        y: 0, opacity: 1, duration: 1.1, ease: "silk",
        scrollTrigger: { trigger: section, start: "top 80%", once: true },
      });
    }

    const sideCol = section.querySelector(".contact-side-col");
    if (sideCol) {
      gsap.set(sideCol, { x: 50, opacity: 0 });
      gsap.to(sideCol, {
        x: 0, opacity: 1, duration: 1.1, ease: "silk",
        scrollTrigger: { trigger: section, start: "top 80%", once: true },
        delay: 0.2,
      });
    }
  }, { scope: sectionRef });

  const inputBase = "w-full border bg-surface px-4 py-3 font-body text-sm text-heading placeholder-muted outline-none transition-colors focus:border-accent";
  const inputCls = (k) => `${inputBase} ${errors[k] ? "border-red-500/60" : "border-border"}`;
  const errText = (k) => errors[k] ? <p className="mt-1.5 font-body text-xs text-red-500/80">{errors[k]}</p> : null;

  return (
    <section className="section-padding section-py" ref={sectionRef}>
      <div className="container-xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="contact-form-col lg:col-span-7">
            <span className="tag mb-6 inline-flex">{t(contactPage.formTag, lang)}</span>
            <h2 className="font-display text-display-md text-heading">{t(contactPage.formTitle, lang)}</h2>
            <p className="mt-3 font-body text-body-lg text-heading/50">{t(contactPage.formSubtitle, lang)}</p>

            <form className="mt-10 space-y-6" onSubmit={onSubmit} noValidate>
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={values.website}
                onChange={setField("website")}
                style={{ position: "absolute", left: "-10000px", width: 1, height: 1, opacity: 0 }}
                aria-hidden="true"
              />

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted">{t(contactPage.firstName, lang)}</label>
                  <input type="text" autoComplete="given-name" value={values.firstName} onChange={setField("firstName")} className={inputCls("firstName")} />
                  {errText("firstName")}
                </div>
                <div>
                  <label className="mb-2 block font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted">{t(contactPage.lastName, lang)}</label>
                  <input type="text" autoComplete="family-name" value={values.lastName} onChange={setField("lastName")} className={inputCls("lastName")} />
                  {errText("lastName")}
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted">{t(contactPage.email, lang)}</label>
                  <input type="email" autoComplete="email" value={values.email} onChange={setField("email")} className={inputCls("email")} />
                  {errText("email")}
                </div>
                <div>
                  <label className="mb-2 block font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted">{t(contactPage.phone, lang)}</label>
                  <input type="tel" autoComplete="tel" value={values.phone} onChange={setField("phone")} className={inputCls("phone")} />
                </div>
              </div>
              <div>
                <label className="mb-2 block font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted">{t(contactPage.serviceLabel, lang)}</label>
                <select autoComplete="off" value={values.service} onChange={setField("service")} className={`${inputCls("service")} text-heading/70`}>
                  <option value="">{lang === "bg" ? "Изберете услуга" : "Select a service"}</option>
                  {contactPage.serviceOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{t(opt.label, lang)}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-2 block font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted">{t(contactPage.roleLabel, lang)}</label>
                <select autoComplete="off" value={values.role} onChange={setField("role")} className={`${inputCls("role")} text-heading/70`}>
                  <option value="">{lang === "bg" ? "Изберете роля" : "Select role"}</option>
                  {contactPage.roles.map((role) => (
                    <option key={role.value} value={role.value}>{t(role.label, lang)}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-2 block font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted">{t(contactPage.message, lang)}</label>
                <textarea rows="4" autoComplete="off" placeholder={t(contactPage.messagePlaceholder, lang)} value={values.message} onChange={setField("message")} className={`${inputCls("message")} resize-none`} />
                {errText("message")}
              </div>
              <div className="flex items-start gap-3">
                <input type="checkbox" id="terms" checked={values.terms} onChange={setField("terms")} className="mt-1 h-4 w-4 border-border bg-surface accent-accent" />
                <label htmlFor="terms" className="font-body text-body-sm text-heading/50">{t(contactPage.terms, lang)}</label>
              </div>
              {errors.terms && <p className="-mt-4 font-body text-xs text-red-500/80">{errors.terms}</p>}
              <button type="submit" className="btn-primary w-full sm:w-auto">
                {t(contactPage.send, lang)}
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              {status === "sent" && (
                <p className="font-mono text-sm text-accent">
                  {lang === "bg" ? "Благодарим! Ще се свържем до 24 часа." : "Thanks! We will reply within 24 hours."}
                </p>
              )}
              {status === "error" && (
                <p className="font-mono text-sm text-red-500/80">
                  {lang === "bg" ? "Грешка при изпращане. Моля опитайте отново." : "Submission failed. Please try again."}
                </p>
              )}
            </form>
          </div>

          <div className="contact-side-col lg:col-span-5">
            <div className="sticky top-32 space-y-6">
              <div className="glass-card p-8">
                <span className="tag mb-6 inline-flex">{t(contactPage.directTag, lang)}</span>
                <h3 className="font-display text-display-sm text-heading">{t(contactPage.directTitle, lang)}</h3>
                <p className="mt-3 font-body text-body-md text-heading/50">{t(contactPage.directSubtitle, lang)}</p>

                <div className="mt-8 space-y-5">
                  {[
                    { icon: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM22 6l-10 7L2 6", label: contactPage.emailAddress, href: `mailto:${contactPage.emailAddress}` },
                    { icon: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z", label: "+359 877 404 599", href: "tel:+359877404599" },
                    { icon: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0zM12 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6z", label: t(contactPage.officeAddress, lang), href: null },
                  ].map((info, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center border border-accent bg-accent/10 text-accent">
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d={info.icon} />
                        </svg>
                      </div>
                      <div>
                        {info.href ? (
                          <a href={info.href} className="font-body text-body-md text-heading transition-colors hover:text-accent">{info.label}</a>
                        ) : (
                          <p className="font-body text-body-md text-heading">{info.label}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Suspense
                fallback={
                  <div className="aspect-[4/3] w-full animate-pulse border border-border bg-surface sm:aspect-[16/10]" />
                }
              >
                <LeafletMap lang={lang} theme={theme} />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
