import React, { useState, useEffect, useRef } from "react";
import { useLang } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { nav, t } from "../data/translations";
import { ScrollTrigger } from "../lib/gsap-config";
import { useIsDesktop } from "../hooks/useIsDesktop";

export function Navbar() {
  const { lang, toggleLang } = useLang();
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const isDesktop = useIsDesktop();
  const headerRef = useRef(null);

  useEffect(() => {
    let prev = false;
    const onScroll = () => {
      const now = window.scrollY > 40;
      if (now !== prev) {
        prev = now;
        headerRef.current?.toggleAttribute("data-scrolled", now);
        if (now) {
          headerRef.current?.style.setProperty("will-change", "backdrop-filter");
        } else {
          headerRef.current?.style.removeProperty("will-change");
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [activeSection]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
      requestAnimationFrame(() => {
        if (typeof ScrollTrigger !== "undefined") {
          ScrollTrigger.refresh();
        }
      });
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const ids = ["home", "services", "reviews", "contact"];
    const observers = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.3 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  const links = [
    { id: "home",     label: nav.home },
    { id: "services", label: nav.services },
    { id: "reviews",  label: nav.reviews },
    { id: "contact",  label: nav.contact },
  ];

  const textBase = "text-body hover:text-heading transition-colors duration-300";
  const textActive = "text-accent";
  const hamburgerBg = "bg-heading";

  return (
    <header
      ref={headerRef}
      className={`group fixed top-0 z-50 w-full border-b border-border bg-nav-scrolled/95 backdrop-blur-md transition-[background-color,box-shadow] duration-500 ease-out-expo ${
        isOpen ? "bg-menu" : ""
      }`}
    >
      <div className="px-4 md:px-8 lg:px-12">
        <div className="container-xl flex h-20 items-center justify-between md:h-24">
          <a href="#home" className="flex items-center -translate-y-[2px]" aria-label="SpeedLink Home">
            {/* Precision crop container: adjusted aspect ratio to show the cabin icon and 'Speedlink Logistics' text, but hide 'worldwide delivery' at the bottom */}
            <div className="relative overflow-hidden w-20 md:w-[6rem] lg:w-[7rem] aspect-[1500/850]">
              <div 
                className="absolute top-0 w-full aspect-[1500/1099] bg-[#DB971F]"
                style={{
                  maskImage: 'url(/images/logovector.png)',
                  WebkitMaskImage: 'url(/images/logovector.png)',
                  maskSize: 'contain',
                  WebkitMaskSize: 'contain',
                  maskPosition: 'top center',
                  WebkitMaskPosition: 'top center',
                  maskRepeat: 'no-repeat',
                  WebkitMaskRepeat: 'no-repeat'
                }}
              />
            </div>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                data-active={activeSection === link.id || undefined}
                className={`nav-link px-4 py-2 font-mono text-[0.75rem] uppercase tracking-[0.15em] transition-colors duration-300 ${
                  activeSection === link.id ? textActive : textBase
                }`}
                onClick={() => setIsOpen(false)}
              >
                {t(link.label, lang)}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <button
              onClick={toggleTheme}
              className={`flex h-9 w-9 items-center justify-center border border-border transition-[color,border-color] duration-300 hover:border-accent/40 ${textBase}`}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M12 2v3M12 19v3M2 12h3M19 12h3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                  <path d="M5.6 5.6l1.8 1.8M16.6 16.6l1.8 1.8M5.6 18.4l1.8-1.8M16.6 7.4l1.8-1.8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
                </svg>
              ) : (
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                  <path d="M20.5 12.5A8.5 8.5 0 1 1 11.5 3.5a6.5 6.5 0 0 0 9 9z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                  <circle cx="15" cy="9" r="0.8" fill="currentColor" opacity="0.3"/>
                  <circle cx="12" cy="14" r="1.2" fill="currentColor" opacity="0.2"/>
                </svg>
              )}
            </button>
            <button
              onClick={toggleLang}
              className={`flex h-9 items-center gap-1.5 border border-border px-3 font-mono text-xs uppercase tracking-wider transition-[color,border-color] duration-300 hover:border-accent/40 ${textBase}`}
            >
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.4"/>
                <ellipse cx="12" cy="12" rx="3.8" ry="9.5" stroke="currentColor" strokeWidth="1" opacity="0.6"/>
                <path d="M3.5 8.5h17M3.5 15.5h17" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" opacity="0.4"/>
              </svg>
              {t(nav.language, lang)}
            </button>
            <a href="#contact" className="btn-primary text-xs">
              {t(nav.quote, lang)}
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M14 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="5" cy="12" r="0.7" fill="currentColor" opacity="0.3"/>
              </svg>
            </a>
          </div>

          <button
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-5 origin-center rounded-full ${hamburgerBg} transition-transform duration-250 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isOpen ? "translate-y-[5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 origin-center rounded-full ${hamburgerBg} transition-transform duration-250 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isOpen ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      <div
        className="grid border-t border-border bg-menu overflow-hidden transition-[grid-template-rows,opacity] duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden"
        style={{
          gridTemplateRows: isOpen ? "1fr" : "0fr",
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
        }}
        aria-hidden={!isOpen}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="section-padding flex flex-col gap-2 py-6">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`block px-4 py-3 font-mono text-base uppercase tracking-wide transition-colors ${
                  activeSection === link.id
                    ? "bg-accent/10 text-accent"
                    : "text-body hover:bg-heading/5 hover:text-heading"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {t(link.label, lang)}
              </a>
            ))}
            <div className="mt-4 flex gap-3 px-4">
              <button onClick={toggleTheme} className="btn-secondary flex-1 text-xs">
                {theme === "dark" ? "☀ Light" : "☾ Dark"}
              </button>
              <button
                onClick={toggleLang}
                className="btn-secondary flex-1 text-xs"
              >
                {t(nav.language, lang)}
              </button>
              <a href="#contact" className="btn-primary flex-1 text-xs" onClick={() => setIsOpen(false)}>
                {t(nav.quote, lang)}
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
