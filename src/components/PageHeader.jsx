import React, { useRef } from "react";
import { gsap, useGSAP } from "../lib/gsap-config";

export function PageHeader({ title, subtitle, image }) {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    const img = section.querySelector(".ph-img");
    if (img) {
      gsap.set(img, { scale: 1.12 });
      gsap.to(img, { scale: 1, duration: 1.8, ease: "heavy" });
    }

    const h1 = section.querySelector(".ph-title");
    if (h1) {
      gsap.set(h1, { y: 60, opacity: 0, clipPath: "inset(0 0 100% 0)" });
      gsap.to(h1, {
        y: 0, opacity: 1, clipPath: "inset(0 0 0% 0)",
        duration: 1, ease: "silk", delay: 0.15,
      });
    }

    const p = section.querySelector(".ph-subtitle");
    if (p) {
      gsap.set(p, { y: 30, opacity: 0 });
      gsap.to(p, {
        y: 0, opacity: 1,
        duration: 0.9, ease: "silk", delay: 0.35,
      });
    }
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative flex min-h-[50svh] items-end overflow-hidden md:min-h-[60svh]">
      <div className="absolute inset-0">
        <img
          src={image}
          alt=""
          width={1920}
          height={1080}
          loading="eager"
          fetchpriority="high"
          decoding="sync"
          className="ph-img img-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/70 to-dark/30" />
      </div>
      <div className="section-padding relative z-10 pb-16 pt-40 md:pb-24 md:pt-48">
        <div className="container-xl">
          <h1 className="ph-title max-w-2xl font-display text-display-lg text-white">
            {title}
          </h1>
          {subtitle && (
            <p className="ph-subtitle mt-4 max-w-lg font-body text-body-lg text-white/60">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
