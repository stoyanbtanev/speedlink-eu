import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ScrollTrigger } from "./lib/gsap-config";
import HomePage from "../home";
import ServicesPage from "../services";
import ReviewsPage from "../reviews";
import ContactPage from "../contact";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    ScrollTrigger.refresh();
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <div className="noise-overlay" />
      <ScrollToTop />
      <Navbar />
      <main className="min-h-dvh">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
