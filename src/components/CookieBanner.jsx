import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "../context/LanguageContext";
import { cookiesBanner, t } from "../data/translations";

export function CookieBanner() {
  const { lang } = useLang();
  const [isVisible, setIsVisible] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  
  const [consent, setConsent] = useState({
    essential: true,
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    const storedConsent = localStorage.getItem("speedlink_cookie_consent");
    if (!storedConsent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const fullConsent = { essential: true, analytics: true, marketing: true };
    localStorage.setItem("speedlink_cookie_consent", JSON.stringify(fullConsent));
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const minimalConsent = { essential: true, analytics: false, marketing: false };
    localStorage.setItem("speedlink_cookie_consent", JSON.stringify(minimalConsent));
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem("speedlink_cookie_consent", JSON.stringify(consent));
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="fixed bottom-6 left-1/2 z-[9999] w-[calc(100%-2rem)] max-w-2xl -translate-x-1/2"
        >
          <div className="relative overflow-hidden border border-white/10 bg-black/80 p-6 shadow-2xl backdrop-blur-xl md:p-8">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
            
            {!showCustomize ? (
              <div className="flex flex-col gap-6 md:flex-row md:items-center">
                <div className="flex-1">
                  <h4 className="font-display text-lg text-heading mb-2">{t(cookiesBanner.title, lang)}</h4>
                  <p className="font-body text-sm text-body/70 leading-relaxed">
                    {t(cookiesBanner.desc, lang)}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 sm:flex-nowrap">
                  <button 
                    onClick={() => setShowCustomize(true)}
                    className="ind-btn-ghost text-xs whitespace-nowrap"
                  >
                    {t(cookiesBanner.customize, lang)}
                  </button>
                  <button 
                    onClick={handleAcceptAll}
                    className="ind-btn text-xs bg-accent text-bg border-accent whitespace-nowrap"
                  >
                    {t(cookiesBanner.acceptAll, lang)}
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h4 className="font-display text-lg text-heading">{t(cookiesBanner.customize, lang)}</h4>
                  <button 
                    onClick={() => setShowCustomize(false)}
                    className="text-muted hover:text-accent transition-colors"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M18 6L6 18M6 6l12 12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
                
                <div className="grid gap-4 sm:grid-cols-3">
                  {[
                    { key: "essential", label: cookiesBanner.essential, disabled: true },
                    { key: "analytics", label: cookiesBanner.analytics, disabled: false },
                    { key: "marketing", label: cookiesBanner.marketing, disabled: false }
                  ].map((category) => (
                    <div 
                      key={category.key} 
                      className={`flex items-center justify-between border border-border/40 p-4 ${category.disabled ? 'opacity-50' : 'cursor-pointer hover:border-accent/40'} transition-colors`}
                      onClick={() => !category.disabled && setConsent(prev => ({ ...prev, [category.key]: !prev[category.key] }))}
                    >
                      <span className="font-mono text-[0.65rem] uppercase tracking-widest text-heading">{t(category.label, lang)}</span>
                      <div className={`h-4 w-4 border ${consent[category.key] ? 'bg-accent border-accent' : 'border-border'} flex items-center justify-center`}>
                        {consent[category.key] && (
                          <svg className="h-3 w-3 text-bg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M20 6L9 17l-5-5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-end gap-3 pt-4 border-t border-white/10">
                  <button onClick={handleRejectAll} className="ind-btn-ghost text-xs">
                    {t(cookiesBanner.rejectAll, lang)}
                  </button>
                  <button onClick={handleSavePreferences} className="ind-btn text-xs bg-accent text-bg border-accent">
                    {t(cookiesBanner.save, lang)}
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
