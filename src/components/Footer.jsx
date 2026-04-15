import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { gsap, useGSAP } from "../lib/gsap-config";
import { useLang } from "../context/LanguageContext";
import { nav, footer, t } from "../data/translations";

export function Footer() {
  const { lang } = useLang();
  const footerRef = useRef(null);

  useGSAP(() => {
    const el = footerRef.current;
    if (!el) return;

    const divider = el.querySelector(".footer-divider-top");
    if (divider) {
      gsap.set(divider, { scaleX: 0 });
      gsap.to(divider, {
        scaleX: 1, duration: 1, ease: "silk", transformOrigin: "center",
        scrollTrigger: { trigger: el, start: "top 92%", once: true },
      });
    }

    const logoBlock = el.querySelector(".footer-logo");
    if (logoBlock) {
      gsap.set(logoBlock, { y: 40, opacity: 0 });
      gsap.to(logoBlock, {
        y: 0, opacity: 1, duration: 1.1, ease: "silk",
        scrollTrigger: { trigger: el, start: "top 88%", once: true },
      });
    }

    const navLinks = el.querySelectorAll(".footer-nav-link");
    navLinks.forEach((link, i) => {
      gsap.set(link, { x: -20, opacity: 0 });
      gsap.to(link, {
        x: 0, opacity: 1, duration: 0.8, ease: "silk",
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
        delay: 0.06 * i,
      });
    });

    const contactItems = el.querySelectorAll(".footer-contact");
    contactItems.forEach((item, i) => {
      gsap.set(item, { x: -20, opacity: 0 });
      gsap.to(item, {
        x: 0, opacity: 1, duration: 0.8, ease: "silk",
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
        delay: 0.15 + 0.06 * i,
      });
    });

    const socials = el.querySelectorAll(".footer-social");
    socials.forEach((icon, i) => {
      gsap.set(icon, { scale: 0, rotation: -15 });
      gsap.to(icon, {
        scale: 1, rotation: 0, duration: 0.6, ease: "elasticSubtle",
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
        delay: 0.3 + 0.08 * i,
      });
    });

    const bottomBar = el.querySelector(".footer-bottom");
    if (bottomBar) {
      gsap.set(bottomBar, { opacity: 0 });
      gsap.to(bottomBar, {
        opacity: 1, duration: 0.8, ease: "silk",
        scrollTrigger: { trigger: el, start: "top 80%", once: true },
        delay: 0.6,
      });
    }
  }, { scope: footerRef });

  const links = [
    { to: "/", label: nav.home },
    { to: "/services", label: nav.services },
    { to: "/reviews", label: nav.reviews },
    { to: "/contact", label: nav.contact },
  ];

  return (
    <footer ref={footerRef} className="relative border-t-2 border-accent bg-bg">
      <div className="footer-divider-top absolute left-0 right-0 top-0 h-px bg-accent/20" />
      <div className="section-padding section-py">
        <div className="container-xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="footer-logo lg:col-span-4">
              <Link to="/" className="mb-6 block" aria-label="SpeedLink Home">
                {/* Crop container: showing the icon and text, hiding 'worldwide delivery' */}
                <div className="relative overflow-hidden w-28 md:w-36 lg:w-[10rem] aspect-[1500/850]">
                  <div 
                    className="absolute top-0 w-full aspect-[1500/1099] bg-[#DB971F]"
                    style={{
                      maskImage: 'url(/images/logovector.png)',
                      WebkitMaskImage: 'url(/images/logovector.png)',
                      maskSize: 'contain',
                      WebkitMaskSize: 'contain',
                      maskPosition: 'top left',
                      WebkitMaskPosition: 'top left',
                      maskRepeat: 'no-repeat',
                      WebkitMaskRepeat: 'no-repeat'
                    }}
                  />
                </div>
              </Link>
              <p className="mt-4 max-w-xs font-body text-sm leading-relaxed text-muted">
                {lang === "bg"
                  ? "Логистични решения от България за Европа и Азия. Бързи оферти, прозрачни цени, доказана надеждност."
                  : "Logistics solutions from Bulgaria for Europe and Asia. Fast quotes, transparent pricing, proven reliability."}
              </p>
            </div>

            <div className="lg:col-span-2">
              <h4 className="mb-4 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-accent">
                {lang === "bg" ? "Навигация" : "Navigation"}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="footer-nav-link font-body text-sm text-body transition-colors duration-300 hover:text-accent"
                    >
                      {t(link.label, lang)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3">
              <h4 className="mb-4 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-accent">
                {lang === "bg" ? "Контакт" : "Contact"}
              </h4>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href="tel:+359877404599" className="footer-contact font-body text-sm text-body transition-colors hover:text-accent">
                    +359 877 404 599
                  </a>
                </li>
                <li>
                  <a href="mailto:info@speedlink-eu.com" className="footer-contact font-body text-sm text-body transition-colors hover:text-accent">
                    info@speedlink-eu.com
                  </a>
                </li>
                <li className="footer-contact font-body text-sm text-body">
                  {lang === "bg" ? "София, България" : "Sofia, Bulgaria"}
                </li>
              </ul>
            </div>

            <div className="lg:col-span-3">
              <h4 className="mb-4 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-accent">
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
                    className="footer-social flex h-10 w-10 items-center justify-center border border-border text-muted transition-[color,border-color] duration-300 hover:border-accent/40 hover:text-accent"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d={social.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="ind-divider mt-12 lg:mt-16" />

          <div className="footer-bottom mt-6 flex flex-col items-center justify-between gap-4 md:flex-row border-t border-border pt-6">
            <p className="font-mono text-[0.65rem] text-muted uppercase tracking-widest">
              {t(footer.copyright, lang)}
            </p>
            <p className="font-mono text-[0.65rem] text-muted uppercase tracking-widest">
              {lang === "bg" ? "Изработка: " : "Built by "}
              <a href="https://tanev.design" className="text-accent/60 transition-colors hover:text-accent" target="_blank" rel="noopener noreferrer">
                tanev.design
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
