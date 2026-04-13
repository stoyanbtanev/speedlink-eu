import React, { createContext, useContext, useState, useCallback } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("speedlink-lang") || "bg";
    }
    return "bg";
  });

  const toggleLang = useCallback(() => {
    setLang((prev) => {
      const next = prev === "bg" ? "en" : "bg";
      localStorage.setItem("speedlink-lang", next);
      return next;
    });
  }, []);

  const setLanguage = useCallback((newLang) => {
    localStorage.setItem("speedlink-lang", newLang);
    setLang(newLang);
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be inside LanguageProvider");
  return ctx;
}

export function useT(key) {
  const { lang } = useLang();
  return (translations) => {
    const entry = translations[key];
    if (!entry) return key;
    return entry[lang] || entry.en || key;
  };
}
