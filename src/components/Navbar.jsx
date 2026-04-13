import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useLang } from "../context/LanguageContext";
import { nav, t } from "../data/translations";

export function Navbar() {
  const { lang, toggleLang } = useLang();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [location.pathname]);

  const links = [
    { to: "/", label: nav.home },
    { to: "/услуги", label: nav.services },
    { to: "/отзиви", label: nav.reviews },
    { to: "/контакт", label: nav.contact },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ease-out-expo ${
        scrolled
          ? "bg-dark/80 shadow-lg shadow-black/20 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="section-padding">
        <div className="container-xl flex h-16 items-center justify-between md:h-20">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand">
              <span className="font-display text-lg font-bold text-dark">S</span>
            </div>
            <span className="font-display text-lg font-semibold tracking-tight text-white">
              SpeedLink<span className="text-brand">.</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative rounded-lg px-4 py-2 font-body text-sm font-medium transition-colors duration-300 ${
                  isActive(link.to)
                    ? "text-brand"
                    : "text-white/70 hover:text-white"
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
              onClick={toggleLang}
              className="flex h-9 items-center gap-1.5 rounded-lg border border-surface-border px-3 font-display text-xs font-semibold uppercase tracking-wider text-white/70 transition-all duration-300 hover:border-brand/40 hover:text-white"
            >
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              {t(nav.language, lang)}
            </button>
            <Link to="/контакт" className="btn-primary text-xs">
              {t(nav.quote, lang)}
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <button
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              className="block h-0.5 w-5 rounded-full bg-white"
              animate={isOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
            />
            <motion.span
              className="block h-0.5 w-5 rounded-full bg-white"
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
            className="overflow-hidden border-t border-surface-border bg-dark/95 backdrop-blur-xl lg:hidden"
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
                        : "text-white/80 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {t(link.label, lang)}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-4 flex gap-3 px-4">
                <button
                  onClick={toggleLang}
                  className="btn-secondary flex-1 text-xs"
                >
                  {t(nav.language, lang)}
                </button>
                <Link to="/контакт" className="btn-primary flex-1 text-xs">
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
