import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, CustomEase);

// "Silk" — signature ease for most reveals.
// Almost imperceptible acceleration, peaks mid-arc,
// long breathy deceleration tail.
CustomEase.create("silk", "M0,0 C0.062,0.165 0.12,0.685 0.225,0.86 0.345,1.06 0.542,1.005 1,1");

// "Whip" — elements snap into place with confidence.
// Explosive start, controlled overshoot, graceful settle.
CustomEase.create("whip", "M0,0 C0.11,0.494 0.192,0.726 0.318,0.852 0.45,0.984 0.504,1.05 0.63,1.035 0.79,1.015 0.878,1 1,1");

// "Breathe" — floating/ambient elements.
// Sinusoidal with slight asymmetry.
CustomEase.create("breathe", "M0,0 C0.2,0 0.2,0.65 0.5,0.75 0.8,0.85 0.8,1 1,1");

// "Magnetic" — hover interactions.
// Immediate response with elastic overshoot on release.
CustomEase.create("magnetic", "M0,0 C0.075,0.82 0.165,1 0.3,1.02 0.435,1.04 0.68,0.995 1,1");

// "Heavy" — large images, hero backgrounds.
// Weight simulation: slow departure, gravity-accelerated arrival.
CustomEase.create("heavy", "M0,0 C0.15,0.005 0.14,0.425 0.26,0.64 0.38,0.855 0.585,1 1,1");

// "Elastic-Subtle" — micro-bounce, not cartoonish.
CustomEase.create("elasticSubtle", "M0,0 C0.28,0.84 0.42,1.04 0.58,1.02 0.72,1.005 0.86,0.998 1,1");

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
