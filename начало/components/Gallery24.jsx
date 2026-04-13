"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef, useState } from "react";

const useRelume = () => {
  const transformRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: transformRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  return {
    transformRef,
    x,
  };
};

export function Gallery24() {
  const useScroll = useRelume();
  return (
    <section
      id="relume"
      ref={useScroll.transformRef}
    >
      <div className="px-[5%] pt-16 md:pt-24 lg:pt-28">
        <div className="container text-center">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Our network
          </h2>
          <p className="md:text-md">Routes across Europe, Asia, and beyond</p>
        </div>
      </div>
      <div className="h-[400vh]">
        <div className="sticky top-0 mt-[-10vh] flex h-screen w-screen max-w-full flex-col items-start justify-center overflow-hidden px-[5%] md:mt-0">
          <motion.div
            style={{ x: useScroll.x }}
            className="flex w-[150vh] items-center gap-x-6 sm:w-[200vh] md:gap-x-8 lg:w-[400vh]"
          >
            <a className="inline-block max-w-full">
              <div className="relative size-full max-w-full overflow-hidden">
                <img
                  className="h-[80vh] max-h-[25rem] object-cover sm:max-h-[30rem] sm:w-[90vw] md:max-h-[40rem] md:w-[80vw] lg:max-h-none"
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Relume placeholder image 1"
                />
              </div>
            </a>
            <a className="inline-block max-w-full">
              <div className="relative size-full max-w-full overflow-hidden">
                <img
                  className="h-[80vh] max-h-[25rem] object-cover sm:max-h-[30rem] sm:w-[90vw] md:max-h-[40rem] md:w-[80vw] lg:max-h-none"
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Relume placeholder image 2"
                />
              </div>
            </a>
            <a className="inline-block max-w-full">
              <div className="relative size-full max-w-full overflow-hidden">
                <img
                  className="h-[80vh] max-h-[25rem] object-cover sm:max-h-[30rem] sm:w-[90vw] md:max-h-[40rem] md:w-[80vw] lg:max-h-none"
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Relume placeholder image 3"
                />
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
