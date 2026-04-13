import React from "react";
import { useLang } from "../../src/context/LanguageContext";
import { logos, t } from "../../src/data/translations";

const PARTNERS = ["DHL", "DB Schenker", "Maersk", "Kuehne+Nagel", "DSV", "GEFCO"];

export function LogoStrip() {
  const { lang } = useLang();

  return (
    <section className="border-y border-surface-border bg-dark py-10 md:py-14">
      <div className="section-padding">
        <div className="container-xl">
          <p className="mb-8 text-center font-display text-label uppercase tracking-wider text-white/30">
            {t(logos.title, lang)}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 md:gap-x-16">
            {PARTNERS.map((name) => (
              <div
                key={name}
                className="font-display text-lg font-semibold tracking-tight text-white/20 transition-colors duration-300 hover:text-white/40 md:text-xl"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
