import React from "react";
import { useLang } from "../context/LanguageContext";
import { trust, t } from "../data/translations";

export function TrustSection() {
  const { lang } = useLang();

  return (
    <section className="border-t border-border bg-surface/30 py-12">
      <div className="container-xl">
        <div className="mb-10 text-center">
          <h3 className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-accent">
            {t(trust.title, lang)}
          </h3>
        </div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6 lg:gap-4">
          {trust.items.map((item, i) => (
            <div 
              key={i} 
              className="group flex flex-col items-center text-center transition-opacity hover:opacity-100 opacity-60"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center border border-border bg-bg/50 text-heading transition-colors group-hover:border-accent/40 group-hover:text-accent">
                <span className="font-display text-lg tracking-tighter">{item.label}</span>
              </div>
              <p className="font-mono text-[0.6rem] uppercase tracking-wider text-muted">
                {t(item.desc, lang)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
