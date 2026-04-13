import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "../lib/gsap-config";

/**
 * Scroll-triggered reveal with organic staggering.
 * Replaces ALL Framer Motion useInView + initial/animate patterns.
 */
export function useReveal(opts = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const {
      children = null,
      y = 60,
      x = 0,
      opacity = 0,
      scale = 1,
      rotation = 0,
      duration = 1.1,
      ease = "silk",
      stagger = children
        ? { each: 0.12, from: "start", ease: "power2.out" }
        : 0,
      start = "top 82%",
      toggleActions = "play none none none",
      once = true,
    } = opts;

    const targets = children ? el.querySelectorAll(children) : el;

    gsap.set(targets, {
      y,
      x,
      opacity,
      scale,
      rotation,
      willChange: "transform, opacity",
    });

    const tl = gsap.to(targets, {
      y: 0,
      x: 0,
      opacity: 1,
      scale: 1,
      rotation: 0,
      duration,
      ease,
      stagger,
      scrollTrigger: {
        trigger: el,
        start,
        toggleActions,
        once,
      },
      onComplete: () => {
        gsap.set(targets, { willChange: "auto" });
      },
    });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return ref;
}
