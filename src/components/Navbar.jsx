import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLang } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { nav, t } from "../data/translations";
import { ScrollTrigger } from "../lib/gsap-config";

const ROUTE_IMPORTERS = {
  "/": () => import("../../home"),
  "/services": () => import("../../services"),
  "/reviews": () => import("../../reviews"),
  "/contact": () => import("../../contact"),
};

function prefetchRoute(to) {
  const importer = ROUTE_IMPORTERS[to];
  if (importer) importer();
}

export function Navbar() {
  const { lang, toggleLang } = useLang();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [location.pathname]);

  const scrollLockRef = React.useRef(0);

  useEffect(() => {
    if (isOpen) {
      scrollLockRef.current = window.scrollY;
      document.documentElement.style.setProperty("--scroll-lock-top", `-${scrollLockRef.current}px`);
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `var(--scroll-lock-top)`;
      document.body.style.left = "0";
      document.body.style.right = "0";
    } else {
      const savedY = scrollLockRef.current;
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.documentElement.style.removeProperty("--scroll-lock-top");
      window.scrollTo({ top: savedY, behavior: "instant" });
      requestAnimationFrame(() => {
        if (typeof ScrollTrigger !== "undefined") {
          ScrollTrigger.refresh();
        }
      });
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.documentElement.style.removeProperty("--scroll-lock-top");
    };
  }, [isOpen]);

  const links = [
    { to: "/", label: nav.home },
    { to: "/services", label: nav.services },
    { to: "/reviews", label: nav.reviews },
    { to: "/contact", label: nav.contact },
  ];

  const isActive = (path) => decodeURIComponent(location.pathname) === path;

  const textBase = scrolled ? "text-heading/70 hover:text-heading" : "text-white/70 hover:text-white";
  const textActive = "text-brand";
  const logoText = scrolled ? "text-heading" : "text-white";
  const hamburgerBg = isOpen ? "bg-heading" : scrolled ? "bg-heading" : "bg-white";

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-[background-color,box-shadow,backdrop-filter] duration-500 ease-out-expo ${
        isOpen
          ? "bg-menu shadow-lg shadow-black/10"
          : scrolled
            ? "bg-nav-scrolled/80 shadow-lg shadow-black/10 backdrop-blur-xl"
            : "bg-transparent"
      }`}
    >
      <div className="section-padding">
        <div className="container-xl flex h-20 items-center justify-between md:h-24">
          <Link to="/" className="flex items-center gap-3" aria-label="SpeedLink Home">
            <img
              src="/images/logo.png"
              alt="SpeedLink logo"
              width={1201}
              height={880}
              decoding="async"
              fetchpriority="high"
              className="logo-img block h-10 w-auto shrink-0 object-contain sm:h-11 md:h-12 lg:h-14"
            />
            <span className={`font-display text-xl font-semibold tracking-tight transition-colors duration-300 md:text-2xl ${logoText}`}>
              SpeedLink<span className="text-brand">.</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onMouseEnter={() => prefetchRoute(link.to)}
                onFocus={() => prefetchRoute(link.to)}
                className={`relative rounded-lg px-4 py-2 font-body text-sm font-medium transition-colors duration-300 ${
                  isActive(link.to) ? textActive : textBase
                }`}
              >
                {t(link.label, lang)}
                {isActive(link.to) && (
                  <div className="absolute bottom-0 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-brand" />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <button
              onClick={toggleTheme}
              className={`flex h-9 w-9 items-center justify-center rounded-lg border border-surface-border transition-[color,border-color] duration-300 hover:border-brand/40 ${
                scrolled ? "text-heading/70 hover:text-heading" : "text-white/70 hover:text-white"
              }`}
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
              className={`flex h-9 items-center gap-1.5 rounded-lg border border-surface-border px-3 font-display text-xs font-semibold uppercase tracking-wider transition-[color,border-color] duration-300 hover:border-brand/40 ${
                scrolled ? "text-heading/70 hover:text-heading" : "text-white/70 hover:text-white"
              }`}
            >
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.4"/>
                <ellipse cx="12" cy="12" rx="3.8" ry="9.5" stroke="currentColor" strokeWidth="1" opacity="0.6"/>
                <path d="M3.5 8.5h17M3.5 15.5h17" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" opacity="0.4"/>
              </svg>
              {t(nav.language, lang)}
            </button>
            <Link to="/contact" onMouseEnter={() => prefetchRoute("/contact")} className="btn-primary text-xs">
              {t(nav.quote, lang)}
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M14 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="5" cy="12" r="0.7" fill="currentColor" opacity="0.3"/>
              </svg>
            </Link>
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
        className="grid border-t border-surface-border bg-menu backdrop-blur-xl overflow-hidden transition-[grid-template-rows,opacity] duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden"
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
              <Link
                key={link.to}
                to={link.to}
                onMouseEnter={() => prefetchRoute(link.to)}
                className={`block rounded-xl px-4 py-3 font-display text-lg font-medium transition-colors ${
                  isActive(link.to)
                    ? "bg-brand/10 text-brand"
                    : "text-heading/80 hover:bg-heading/5 hover:text-heading"
                }`}
              >
                {t(link.label, lang)}
              </Link>
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
              <Link to="/contact" onMouseEnter={() => prefetchRoute("/contact")} className="btn-primary flex-1 text-xs">
                {t(nav.quote, lang)}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
