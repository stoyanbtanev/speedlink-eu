import React, { useLayoutEffect } from "react";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ScrollTrigger } from "./lib/gsap-config";
import { useLang } from "./context/LanguageContext";
import HomePage from "../home";
import ServicesPage from "../services";
import ReviewsPage from "../reviews";
import ContactPage from "../contact";

function ScrollToTop() {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    const raf = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });
    return () => cancelAnimationFrame(raf);
  }, [pathname]);
  return null;
}

function NotFound() {
  const { lang } = useLang();
  const copy = lang === "bg"
    ? { tag: "404", title: "Страницата не е намерена", body: "Линкът може да е грешен или страницата да е преместена.", cta: "Към началото" }
    : { tag: "404", title: "Page not found", body: "The link may be wrong or the page may have moved.", cta: "Back home" };
  return (
    <section className="section-padding flex min-h-svh items-center justify-center">
      <div className="container-xl mx-auto max-w-xl text-center">
        <span className="tag mb-6 inline-flex">{copy.tag}</span>
        <h1 className="font-display text-display-lg text-heading">{copy.title}</h1>
        <p className="mt-4 font-body text-body-lg text-heading/50">{copy.body}</p>
        <Link to="/" className="btn-primary mt-10">{copy.cta}</Link>
      </div>
    </section>
  );
}

class ErrorBoundary extends React.Component {
  constructor(props) { super(props); this.state = { hasError: false }; }
  static getDerivedStateFromError() { return { hasError: true }; }
  componentDidCatch(error, info) { console.error("App error:", error, info); }
  render() {
    if (!this.state.hasError) return this.props.children;
    return (
      <section className="section-padding flex min-h-svh items-center justify-center">
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
  return (
    <>
      <div className="noise-overlay" />
      <ScrollToTop />
      <Navbar />
      <main className="min-h-svh">
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ErrorBoundary>
      </main>
      <Footer />
    </>
  );
}
