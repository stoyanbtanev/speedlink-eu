import React from "react";
import { Link } from "react-router-dom";
import { useLang } from "../context/LanguageContext";
import { nav, footer, t } from "../data/translations";

export function Footer() {
  const { lang } = useLang();

  const links = [
    { to: "/", label: nav.home },
    { to: "/услуги", label: nav.services },
    { to: "/отзиви", label: nav.reviews },
    { to: "/контакт", label: nav.contact },
  ];

  return (
    <footer className="border-t border-surface-border bg-dark">
      <div className="section-padding section-py">
        <div className="container-xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <Link to="/" className="mb-6 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand">
                  <span className="font-display text-lg font-bold text-dark">S</span>
                </div>
                <span className="font-display text-lg font-semibold tracking-tight text-white">
                  SpeedLink<span className="text-brand">.</span>
                </span>
              </Link>
              <p className="mt-4 max-w-xs font-body text-sm leading-relaxed text-white/50">
                {lang === "bg"
                  ? "Логистични решения от България за Европа и Азия. Бързи оферти, прозрачни цени, доказана надеждност."
                  : "Logistics solutions from Bulgaria for Europe and Asia. Fast quotes, transparent pricing, proven reliability."}
              </p>
            </div>

            <div className="lg:col-span-2">
              <h4 className="mb-4 font-display text-label uppercase tracking-wider text-white/40">
                {lang === "bg" ? "Навигация" : "Navigation"}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="font-body text-sm text-white/60 transition-colors duration-300 hover:text-brand"
                    >
                      {t(link.label, lang)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3">
              <h4 className="mb-4 font-display text-label uppercase tracking-wider text-white/40">
                {lang === "bg" ? "Контакт" : "Contact"}
              </h4>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href="tel:+359877404599" className="font-body text-sm text-white/60 transition-colors hover:text-brand">
                    +359 877 404 599
                  </a>
                </li>
                <li>
                  <a href="mailto:info@speedlink-eu.com" className="font-body text-sm text-white/60 transition-colors hover:text-brand">
                    info@speedlink-eu.com
                  </a>
                </li>
                <li className="font-body text-sm text-white/60">
                  {lang === "bg" ? "София, България" : "Sofia, Bulgaria"}
                </li>
              </ul>
            </div>

            <div className="lg:col-span-3">
              <h4 className="mb-4 font-display text-label uppercase tracking-wider text-white/40">
                {lang === "bg" ? "Следвайте ни" : "Follow us"}
              </h4>
              <div className="flex gap-3">
                {[
                  { label: "Facebook", icon: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
                  { label: "LinkedIn", icon: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" },
                  { label: "Instagram", icon: "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href="#"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-surface-border text-white/40 transition-all duration-300 hover:border-brand/40 hover:text-brand"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d={social.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="divider mt-12 lg:mt-16" />

          <div className="mt-6 flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="font-body text-xs text-white/30">
              {t(footer.copyright, lang)}
            </p>
            <p className="font-body text-xs text-white/30">
              {lang === "bg" ? "Изработка: " : "Built by "}
              <a href="https://tanev.design" className="text-brand/60 transition-colors hover:text-brand" target="_blank" rel="noopener noreferrer">
                tanev.design
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
