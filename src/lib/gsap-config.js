import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, CustomEase);

// "Silk" — industrial reveal: sharp start, controlled decel.
CustomEase.create("silk", "M0,0 C0.08,0.5 0.15,0.85 0.3,0.94 0.5,1.04 0.7,1 1,1");

// "Whip" — hard snap with minimal overshoot.
CustomEase.create("whip", "M0,0 C0.2,0.8 0.3,1.04 0.5,1.02 0.7,1 0.9,1 1,1");

// "Breathe" — slow industrial pulse.
CustomEase.create("breathe", "M0,0 C0.25,0 0.25,0.6 0.5,0.7 0.75,0.8 0.75,1 1,1");

// "Magnetic" — immediate response, no overshoot.
CustomEase.create("magnetic", "M0,0 C0.1,0.9 0.2,1 0.4,1 0.6,1 0.8,1 1,1");

// "Heavy" — industrial weight: deliberate start, hard stop.
CustomEase.create("heavy", "M0,0 C0.2,0 0.2,0.5 0.35,0.75 0.5,1 0.7,1 1,1");

// "Elastic-Subtle" — minimal industrial bounce.
CustomEase.create("elasticSubtle", "M0,0 C0.3,0.9 0.45,1.02 0.6,1.01 0.75,1 0.9,1 1,1");

if (typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  gsap.globalTimeline.timeScale(20);
}

ScrollTrigger.config({ ignoreMobileResize: true });

if (typeof window !== "undefined" && "ontouchstart" in window) {
  ScrollTrigger.normalizeScroll({
    allowNestedScroll: true,
    type: "touch",
  });
}

export { gsap, ScrollTrigger, CustomEase, useGSAP };
