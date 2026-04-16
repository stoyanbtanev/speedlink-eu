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

export const isLowEndDevice = (() => {
  if (typeof window === "undefined") return false;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return true;

  if (navigator.deviceMemory && navigator.deviceMemory < 2) return true;

  if (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2) return true;

  try {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    if (gl) {
      const dbg = gl.getExtension("WEBGL_debug_renderer_info");
      if (dbg) {
        const renderer = gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL).toLowerCase();
        if (
          renderer.includes("swiftshader") ||
          renderer.includes("llvmpipe") ||
          renderer.includes("software") ||
          renderer.includes("microsoft basic")
        ) return true;
      }
    }
  } catch (_) {}

  return false;
})();

if (typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  gsap.globalTimeline.timeScale(20);
}

if (isLowEndDevice && typeof window !== "undefined") {
  gsap.globalTimeline.timeScale(3);
}

ScrollTrigger.config({ ignoreMobileResize: true });

if (typeof window !== "undefined" && "ontouchstart" in window && !isLowEndDevice) {
  ScrollTrigger.normalizeScroll({
    allowNestedScroll: true,
    type: "touch",
  });
}

export { gsap, ScrollTrigger, CustomEase, useGSAP };
