"use client";

import React, { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "../../src/lib/gsap-config";

export function Gallery24() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useGSAP(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    gsap.to(track, {
      x: () => -(track.scrollWidth - window.innerWidth + 100),
      ease: "none",
      scrollTrigger: {
        trigger: section.querySelector(".gallery24-scroll"),
        start: "top top",
        end: () => `+=${track.scrollWidth - window.innerWidth}`,
        scrub: 1.5,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="section">
      <div className="px-[5%] pt-16 md:pt-24 lg:pt-28">
        <div className="container text-center">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Our network
          </h2>
          <p className="md:text-md">Routes across Europe, Asia, and beyond</p>
        </div>
      </div>
      <div className="gallery24-scroll h-[100svh]">
        <div
          ref={trackRef}
          className="flex h-full w-max items-center gap-x-6 px-[5%] md:gap-x-8"
        >
          <a className="inline-block max-w-full">
            <div className="relative size-full max-w-full overflow-hidden">
              <img
                className="h-[80svh] max-h-[25rem] object-cover sm:max-h-[30rem] sm:w-[90vw] md:max-h-[40rem] md:w-[80vw] lg:max-h-none"
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Placeholder image 1"
              />
            </div>
          </a>
          <a className="inline-block max-w-full">
            <div className="relative size-full max-w-full overflow-hidden">
              <img
                className="h-[80svh] max-h-[25rem] object-cover sm:max-h-[30rem] sm:w-[90vw] md:max-h-[40rem] md:w-[80vw] lg:max-h-none"
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Placeholder image 2"
              />
            </div>
          </a>
          <a className="inline-block max-w-full">
            <div className="relative size-full max-w-full overflow-hidden">
              <img
                className="h-[80svh] max-h-[25rem] object-cover sm:max-h-[30rem] sm:w-[90vw] md:max-h-[40rem] md:w-[80vw] lg:max-h-none"
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Placeholder image 3"
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
