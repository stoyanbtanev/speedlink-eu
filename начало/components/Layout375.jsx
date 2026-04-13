"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout375() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Why us</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Six reasons to choose Speedlink
            </h2>
            <p className="md:text-md">
              We move fast. We move right. We move your way.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:gap-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
            <div className="flex flex-col border border-border-primary">
              <div className="flex items-center justify-center">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 1"
                  className="w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center p-6">
                <div>
                  <p className="mb-2 text-sm font-semibold">Speed</p>
                  <h3 className="mb-2 text-xl font-bold md:text-2xl">
                    Quote in 24 hours
                  </h3>
                  <p>
                    No waiting. No delays. Firm pricing by noon the next day.
                  </p>
                </div>
                <div className="mt-5 flex items-center gap-4 md:mt-6">
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
            <div className="flex flex-col border border-border-primary">
              <div className="flex items-center justify-center">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 2"
                  className="w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center p-6">
                <div>
                  <p className="mb-2 text-sm font-semibold">Speed</p>
                  <h3 className="mb-2 text-xl font-bold md:text-2xl">
                    Quote in 24 hours
                  </h3>
                  <p>
                    No waiting. No delays. Firm pricing by noon the next day.
                  </p>
                </div>
                <div className="mt-5 flex items-center gap-4 md:mt-6">
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
            <div className="flex flex-col border border-border-primary">
              <div className="flex items-center justify-center">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 3"
                  className="w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center p-6">
                <div>
                  <p className="mb-2 text-sm font-semibold">Speed</p>
                  <h3 className="mb-2 text-xl font-bold md:text-2xl">
                    Quote in 24 hours
                  </h3>
                  <p>
                    No waiting. No delays. Firm pricing by noon the next day.
                  </p>
                </div>
                <div className="mt-5 flex items-center gap-4 md:mt-6">
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
            <div className="flex flex-col border border-border-primary">
              <div className="flex items-center justify-center">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 4"
                  className="w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center p-6">
                <div>
                  <p className="mb-2 text-sm font-semibold">Speed</p>
                  <h3 className="mb-2 text-xl font-bold md:text-2xl">
                    Quote in 24 hours
                  </h3>
                  <p>
                    No waiting. No delays. Firm pricing by noon the next day.
                  </p>
                </div>
                <div className="mt-5 flex items-center gap-4 md:mt-6">
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
            <div className="flex flex-col border border-border-primary sm:col-span-2 sm:col-start-1 sm:row-span-2 sm:row-start-3 lg:col-span-2 lg:col-start-3 lg:row-span-2 lg:row-start-1">
              <div className="flex items-center justify-center">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 5"
                  className="w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col justify-center p-6 md:p-8 lg:p-12">
                <div>
                  <p className="mb-2 text-sm font-semibold">Pricing</p>
                  <h3 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                    Transparent rates with no surprises
                  </h3>
                  <p>
                    What we quote is what you pay. No hidden fees, no
                    last-minute surcharges, no fine print.
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button title="Get a quote" variant="secondary">
                    Get a quote
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
          </div>
        </div>
      </div>
    </section>
  );
}
