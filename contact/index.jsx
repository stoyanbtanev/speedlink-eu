import React, { useState, useRef } from "react";
import { gsap, useGSAP } from "../src/lib/gsap-config";
import { useLang } from "../src/context/LanguageContext";
import { faq, t } from "../src/data/translations";
import { ContactForm } from "../src/components/ContactForm";

function ContactFaq() {
  const { lang } = useLang();
  const [openIndex, setOpenIndex] = useState(0);
  const faqRef = useRef(null);

  useGSAP(() => {
    const section = faqRef.current;
    if (!section) return;

    const headerEls = section.querySelectorAll(".reveal-header-child");
    gsap.set(headerEls, { y: 50, opacity: 0 });
    gsap.to(headerEls, {
      y: 0, opacity: 1, duration: 1.1, ease: "silk",
      stagger: { each: 0.1, ease: "power2.out" },
      scrollTrigger: { trigger: section, start: "top 80%", once: true },
    });

    const faqItems = section.querySelectorAll(".cfaq-item");
    faqItems.forEach((item, i) => {
      gsap.set(item, { x: 30, opacity: 0 });
      gsap.to(item, {
        x: 0, opacity: 1, duration: 0.9, ease: "silk",
        scrollTrigger: { trigger: section, start: "top 75%", once: true },
        delay: 0.1 * i,
      });
    });
  }, { scope: faqRef });

  return (
    <section className="section-padding section-py border-t border-border" ref={faqRef}>
      <div className="container-xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="reveal-header-child font-display text-display-lg text-heading">{t(faq.title, lang)}</h2>
          <p className="reveal-header-child mt-4 font-body text-body-lg text-heading/50">{t(faq.subtitle, lang)}</p>
        </div>
        <div className="mx-auto max-w-3xl">
          {faq.items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="cfaq-item border-b border-border">
                <button onClick={() => setOpenIndex(isOpen ? -1 : i)} className="flex w-full items-center justify-between gap-4 py-6 text-left">
                  <span className="font-display text-lg font-medium text-heading">{t(item.q, lang)}</span>
                  <div className={`flex h-8 w-8 flex-shrink-0 items-center justify-center border border-border text-muted transition-transform duration-250 ${isOpen ? "rotate-45" : ""}`}>
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </div>
                </button>
                <div
                  className="grid overflow-hidden transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p className="pb-6 font-body text-body-md leading-relaxed text-heading/50">{t(item.a, lang)}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <>
      <ContactForm />
      <ContactFaq />
    </>
  );
}
