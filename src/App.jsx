import React, { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { CookieBanner } from "./components/CookieBanner";
import { ScrollTrigger } from "./lib/gsap-config";
import HomePage from "../home";
import ServicesPage from "../services";
import { FaqSection } from "../home/components/FaqSection";
import ContactPage from "../contact";

const DESKTOP_MQ = "(min-width: 1024px)";

const easeInOutCubic = (t) => (t < 0.5
  ? 4 * t * t * t
  : 1 - Math.pow(-2 * t + 2, 3) / 2);

class ErrorBoundary extends React.Component {
  constructor(props) { super(props); this.state = { hasError: false }; }
  static getDerivedStateFromError() { return { hasError: true }; }
  componentDidCatch(error, info) { console.error("App error:", error, info); }
  render() {
    if (!this.state.hasError) return this.props.children;
    return (
      <section className="section-padding flex min-h-[100svh] items-center justify-center">
        <div className="container-xl mx-auto max-w-xl text-center">
          <span className="tag mb-6 inline-flex">Error</span>
          <h1 className="font-display text-display-md text-heading">Something went wrong.</h1>
          <p className="mt-4 font-body text-body-md text-heading/50">Please reload the page.</p>
          <button type="button" onClick={() => window.location.reload()} className="btn-primary mt-10">Reload</button>
        </div>
      </section>
    );
  }
}

export default function App() {
  useEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const mediaQuery = window.matchMedia(DESKTOP_MQ);

    const onDocumentClick = (event) => {
      if (!mediaQuery.matches) return;
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const link = event.target.closest('a[href^="#"]');
      if (!link) return;

      const hash = link.getAttribute("href");
      if (!hash || hash === "#") return;

      const target = document.querySelector(hash);
      if (!target) return;

      event.preventDefault();

      const header = document.querySelector("header");
      const headerOffset = header ? header.getBoundingClientRect().height : 96;
      const startY = window.scrollY;
      const targetY = Math.max(0, target.getBoundingClientRect().top + window.scrollY - headerOffset);
      const distance = targetY - startY;
      const duration = Math.min(700, Math.max(420, Math.abs(distance) * 0.35));
      const startTime = performance.now();

      const step = (now) => {
        const progress = Math.min(1, (now - startTime) / duration);
        const easedProgress = easeInOutCubic(progress);
        window.scrollTo({ top: startY + distance * easedProgress, behavior: "auto" });

        if (progress < 1) {
          window.requestAnimationFrame(step);
          return;
        }

        window.history.replaceState(null, "", hash);
        ScrollTrigger.refresh();
      };

      window.requestAnimationFrame(step);
    };

    document.addEventListener("click", onDocumentClick);
    return () => document.removeEventListener("click", onDocumentClick);
  }, []);

  return (
    <>
      <CookieBanner />
      <div className="noise-overlay hidden sm:block" />
      <Navbar />
      <main>
        <ErrorBoundary>
          <section id="home"><HomePage /></section>
          <section id="services"><ServicesPage /></section>
          <section id="faq"><FaqSection /></section>
          <section id="contact"><ContactPage /></section>
        </ErrorBoundary>
      </main>
      <Footer />
    </>
  );
}
