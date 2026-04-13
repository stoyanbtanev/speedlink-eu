import React from "react";
import { HeroSection } from "./components/HeroSection";
import { LogoStrip } from "./components/LogoStrip";
import { WhyUsSection } from "./components/WhyUsSection";
import { IndustriesSection } from "./components/IndustriesSection";
import { GallerySection } from "./components/GallerySection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { StatsSection } from "./components/StatsSection";
import { CtaDualSection } from "./components/CtaDualSection";
import { FaqSection } from "./components/FaqSection";

export default function Page() {
  return (
    <>
      <HeroSection />
      <LogoStrip />
      <WhyUsSection />
      <IndustriesSection />
      <GallerySection />
      <TestimonialsSection />
      <StatsSection />
      <CtaDualSection />
      <FaqSection />
    </>
  );
}
