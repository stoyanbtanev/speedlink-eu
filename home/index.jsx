import React from "react";
import { HeroSection } from "./components/HeroSection";
import { WhyUsSection } from "./components/WhyUsSection";
import { IndustriesSection } from "./components/IndustriesSection";
import { StatsSection } from "./components/StatsSection";

export default function Page() {
  return (
    <>
      <HeroSection />
      <WhyUsSection />
      <IndustriesSection />
      <StatsSection />
    </>
  );
}
