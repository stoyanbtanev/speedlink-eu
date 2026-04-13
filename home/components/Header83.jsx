"use client";

import { Button } from "@relume_io/relume-ui";
import React, { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "../../src/lib/gsap-config";

export function Header83() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const overlayRef = useRef(null);
  const gridRef = useRef(null);

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (contentRef.current) {
      gsap.to(contentRef.current, {
        opacity: 0, ease: "none",
        scrollTrigger: { trigger: section, start: "top top", end: "50% top", scrub: true },
      });
    }
    if (overlayRef.current) {
      gsap.to(overlayRef.current, {
        opacity: 0, ease: "none",
        scrollTrigger: { trigger: section, start: "top top", end: "bottom top", scrub: true },
      });
    }
    if (gridRef.current) {
      gsap.fromTo(gridRef.current, { scale: 3.2 }, {
        scale: 1, ease: "none",
        scrollTrigger: { trigger: section, start: "top top", end: "bottom top", scrub: true },
      });
    }
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="section" className="relative h-[300svh]">
      <div className="sticky top-0 h-svh overflow-hidden">
        <div
          ref={contentRef}
          className="flex h-full items-center justify-center"
        >
          <div className="px-[5%] py-16 md:py-24 lg:py-28">
            <div className="relative z-10 mx-auto max-w-lg text-center">
              <h1 className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-10xl">
                Your quote in twenty-four hours
              </h1>
              <p className="text-text-alternative md:text-md">
                We move your cargo across Europe and Asia with precision. Real
                people answer the phone. Real answers arrive by morning.
              </p>
              <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
                <Button title="Quote">Quote</Button>
                <Button title="Call" variant="secondary-alt">
                  Call
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 z-0">
          <div
            ref={overlayRef}
            className="absolute inset-0 z-10 bg-black/50"
          />
          <div
            ref={gridRef}
            className="grid size-full auto-cols-fr grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-3"
          >
            <div className="relative hidden md:block">
              <img src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg" alt="Placeholder image 1" className="absolute inset-0 size-full object-cover" />
            </div>
            <div className="relative">
              <img src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg" alt="Placeholder image 2" className="absolute inset-0 size-full object-cover" />
            </div>
            <div className="relative hidden md:block">
              <img src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg" alt="Placeholder image 3" className="absolute inset-0 size-full object-cover" />
            </div>
            <div className="relative hidden md:block">
              <img src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg" alt="Placeholder image 4" className="absolute inset-0 size-full object-cover" />
            </div>
            <div className="relative">
              <img src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg" alt="Placeholder image 5" className="absolute inset-0 size-full object-cover" />
            </div>
            <div className="relative hidden md:block">
              <img src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg" alt="Placeholder image 6" className="absolute inset-0 size-full object-cover" />
            </div>
            <div className="relative hidden md:block">
              <img src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg" alt="Placeholder image 7" className="absolute inset-0 size-full object-cover" />
            </div>
            <div className="relative">
              <img src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg" alt="Placeholder image 8" className="absolute inset-0 size-full object-cover" />
            </div>
            <div className="relative hidden md:block">
              <img src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg" alt="Placeholder image 9" className="absolute inset-0 size-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
