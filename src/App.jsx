import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ScrollTrigger } from "./lib/gsap-config";
import HomePage from "../начало";
import ServicesPage from "../услуги";
import ReviewsPage from "../отзиви";
import ContactPage from "../контакт";

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
      <main className="min-h-[100svh]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/услуги" element={<ServicesPage />} />
          <Route path="/отзиви" element={<ReviewsPage />} />
          <Route path="/контакт" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
