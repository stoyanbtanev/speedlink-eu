import React from "react";
import { HeroSection } from "./components/HeroSection";
import { WhyUsSection } from "./components/WhyUsSection";
import { IndustriesSection } from "./components/IndustriesSection";
import { StatsSection } from "./components/StatsSection";
import { CtaDualSection } from "./components/CtaDualSection";
import { FaqSection } from "./components/FaqSection";

export default function Page() {
  return (
    <>
      <HeroSection />
      <WhyUsSection />
      <IndustriesSection />
      <StatsSection />
      <CtaDualSection />
      <FaqSection />
    </>
  );
}
