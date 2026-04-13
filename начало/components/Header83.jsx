"use client";

import { Button } from "@relume_io/relume-ui";
import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";

const useRelume = () => {
  const { scrollYProgress } = useScroll();
  const opacityContent = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const opacityOverlay = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [3.2, 1]);

  return {
    opacityContent,
    opacityOverlay,
    scale,
  };
};

export function Header83() {
  const useActive = useRelume();
  return (
    <section id="relume" className="relative h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          className="flex h-full items-center justify-center"
          style={{ opacity: useActive.opacityContent }}
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
        </motion.div>
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute inset-0 z-10 bg-black/50"
            style={{ opacity: useActive.opacityOverlay }}
          />
          <motion.div
            style={{ scale: useActive.scale }}
            className="grid size-full auto-cols-fr grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-3"
          >
            <div className="relative hidden md:block">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
                className="absolute inset-0 size-full object-cover"
              />
            </div>
            <div className="relative">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 2"
                className="absolute inset-0 size-full object-cover"
              />
            </div>
            <div className="relative hidden md:block">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 3"
                className="absolute inset-0 size-full object-cover"
              />
            </div>
            <div className="relative hidden md:block">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 4"
                className="absolute inset-0 size-full object-cover"
              />
            </div>
            <div className="relative">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 5"
                className="absolute inset-0 size-full object-cover"
              />
            </div>
            <div className="relative hidden md:block">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 6"
                className="absolute inset-0 size-full object-cover"
              />
            </div>
            <div className="relative hidden md:block">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 7"
                className="absolute inset-0 size-full object-cover"
              />
            </div>
            <div className="relative">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 8"
                className="absolute inset-0 size-full object-cover"
              />
            </div>
            <div className="relative hidden md:block">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 9"
                className="absolute inset-0 size-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
