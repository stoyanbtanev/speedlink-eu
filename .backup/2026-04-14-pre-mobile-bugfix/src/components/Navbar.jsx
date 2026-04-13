import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useLang } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { nav, t } from "../data/translations";

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
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollLockRef.current}px`;
      document.body.style.width = "100%";
    } else {
      const savedY = scrollLockRef.current;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, savedY);
    }
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
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
  const hamburgerBg = scrolled ? "bg-heading" : "bg-white";

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ease-out-expo ${
        scrolled
          ? "bg-nav-scrolled/80 shadow-lg shadow-black/10 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="section-padding">
        <div className="container-xl flex h-16 items-center justify-between md:h-20">
          <Link to="/" className="flex items-center gap-3" aria-label="SpeedLink Home">
            <img
              src="/images/logo.png"
              alt="SpeedLink logo"
              width={40}
              height={40}
              className="logo-img h-11 w-11 object-contain"
            />
            <span className={`font-display text-lg font-semibold tracking-tight transition-colors duration-300 ${logoText}`}>
              SpeedLink<span className="text-brand">.</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative rounded-lg px-4 py-2 font-body text-sm font-medium transition-colors duration-300 ${
                  isActive(link.to) ? textActive : textBase
                }`}
              >
                {t(link.label, lang)}
                {isActive(link.to) && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-brand"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <button
              onClick={toggleTheme}
              className={`flex h-9 w-9 items-center justify-center rounded-lg border border-surface-border transition-all duration-300 hover:border-brand/40 ${
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
              className={`flex h-9 items-center gap-1.5 rounded-lg border border-surface-border px-3 font-display text-xs font-semibold uppercase tracking-wider transition-all duration-300 hover:border-brand/40 ${
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
            <Link to="/contact" className="btn-primary text-xs">
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
            <motion.span
              className={`block h-0.5 w-5 rounded-full ${hamburgerBg}`}
              animate={isOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
            />
            <motion.span
              className={`block h-0.5 w-5 rounded-full ${hamburgerBg}`}
              animate={isOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-surface-border bg-menu/95 backdrop-blur-xl lg:hidden"
          >
            <div className="section-padding flex flex-col gap-2 py-6">
              {links.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                >
                  <Link
                    to={link.to}
                    className={`block rounded-xl px-4 py-3 font-display text-lg font-medium transition-colors ${
                      isActive(link.to)
                        ? "bg-brand/10 text-brand"
                        : "text-heading/80 hover:bg-heading/5 hover:text-heading"
                    }`}
                  >
                    {t(link.label, lang)}
                  </Link>
                </motion.div>
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
                <Link to="/contact" className="btn-primary flex-1 text-xs">
                  {t(nav.quote, lang)}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
