import React, { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ScrollTrigger } from "./lib/gsap-config";
import HomePage from "../home";
import ServicesPage from "../services";
import { FaqSection } from "../home/components/FaqSection";
import ContactPage from "../contact";

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

  return (
    <>
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
