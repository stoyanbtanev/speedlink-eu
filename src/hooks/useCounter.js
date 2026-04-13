import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "../lib/gsap-config";

/**
 * Animated number counter triggered on scroll.
 * @param {number} target — the number to count to
 * @param {string} suffix — appended after the number (e.g. "+", "%")
 * @param {object} opts — { duration, ease, start, locale }
 */
export function useCounter(target = 0, suffix = "", opts = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const {
      duration = 2.2,
      ease = "power2.out",
      start = "top 80%",
      locale = "bg-BG",
    } = opts;

    const obj = { val: 0 };
    const formatter = new Intl.NumberFormat(locale);

    const tween = gsap.to(obj, {
      val: target,
      duration,
      ease,
      snap: { val: 1 },
      scrollTrigger: {
        trigger: el,
        start,
        once: true,
      },
      onUpdate: () => {
        el.textContent = formatter.format(Math.round(obj.val)) + suffix;
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [target, suffix]);

  return ref;
}
