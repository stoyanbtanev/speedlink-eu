import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "../lib/gsap-config";

/**
 * Attaches a scroll-driven parallax transform to a ref.
 * @param {number} speed — multiplier (-1 to 1). Negative = inverse direction.
 * @param {string} axis — "y" | "x" | "both"
 * @param {object} opts — { scrub, start, end, scale, rotation }
 */
export function useParallax(speed = 0.3, axis = "y", opts = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const { scrub = 1.2, start = "top bottom", end = "bottom top", scale, rotation } = opts;
    const distance = speed * 120;

    const props = {};
    if (axis === "y" || axis === "both") props.y = distance;
    if (axis === "x" || axis === "both") props.x = distance;
    if (scale) props.scale = scale;
    if (rotation) props.rotation = rotation;

    const tween = gsap.to(el, {
      ...props,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start,
        end,
        scrub,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [speed, axis, opts]);

  return ref;
}
