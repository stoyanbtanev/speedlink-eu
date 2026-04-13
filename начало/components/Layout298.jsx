"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout298() {
  return (
    <section id="section" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-start">
          <div className="mx-auto mb-12 max-w-lg md:mb-18 lg:mb-20">
            <div>
              <p className="mb-3 text-center font-semibold md:mb-4">
                Industries
              </p>
              <h2 className="mb-5 text-center text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                We serve eight verticals across Europe and Asia
              </h2>
              <p className="text-center md:text-md">
                Every industry has its own rhythm. We know yours.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-4">
            <div className="w-full">
              <div className="mb-5 flex justify-center md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-12"
                  alt="Logo 1"
                />
              </div>
              <h3 className="mb-3 text-center text-xl font-bold md:mb-4 md:text-2xl">
                E-commerce and retail
              </h3>
              <p className="text-center">
                Fast inventory turns, tight delivery windows, reverse logistics.
                We keep your shelves full and your customers happy.
              </p>
            </div>
            <div className="w-full">
              <div className="mb-5 flex justify-center md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-12"
                  alt="Logo 1"
                />
              </div>
              <h3 className="mb-3 text-center text-xl font-bold md:mb-4 md:text-2xl">
                Automotive and parts
              </h3>
              <p className="text-center">
                JIT delivery, temperature control, secure handling. We move
                components and finished vehicles with zero tolerance for delay.
              </p>
            </div>
            <div className="w-full">
              <div className="mb-5 flex justify-center md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-12"
                  alt="Logo 1"
                />
              </div>
              <h3 className="mb-3 text-center text-xl font-bold md:mb-4 md:text-2xl">
                Pharmaceuticals and healthcare
              </h3>
              <p className="text-center">
                Cold chain compliance, traceability, regulated borders. We know
                the rules. Your cargo arrives intact and on time.
              </p>
            </div>
            <div className="w-full">
              <div className="mb-5 flex justify-center md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-12"
                  alt="Logo 1"
                />
              </div>
              <h3 className="mb-3 text-center text-xl font-bold md:mb-4 md:text-2xl">
                Chemicals and hazmat
              </h3>
              <p className="text-center">
                Specialized handling, certified drivers, full documentation.
                Safety is not negotiable. Neither is our track record.
              </p>
            </div>
          </div>
          <div className="mt-12 flex w-full flex-wrap items-center justify-center gap-4 md:mt-18 lg:mt-20">
            <Button title="Explore industries" variant="secondary">
              Explore industries
            </Button>
            <Button
              title="Arrow"
              variant="link"
              size="link"
              iconRight={<RxChevronRight />}
            >
              Arrow
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
