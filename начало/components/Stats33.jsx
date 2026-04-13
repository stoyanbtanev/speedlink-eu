"use client";

import React from "react";

export function Stats33() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Results</p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Built on experience and trust
          </h1>
          <p className="md:text-md">
            Fifteen years moving cargo across continents
          </p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-x-6 gap-y-7 sm:gap-x-6 sm:gap-y-6 lg:grid-cols-[1fr_0.5fr] lg:gap-x-8 lg:gap-y-8">
          <div className="flex w-full flex-col items-center justify-center">
            <img
              src="https://relume-assets.s3.us-east-1.amazonaws.com/placeholder-image.svg"
              alt="Relume placeholder image"
              className="aspect-[3/2] size-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center gap-x-6 gap-y-6 md:flex-row md:gap-y-8 lg:flex-col lg:gap-x-8">
            <div className="flex w-full flex-col justify-between border border-border-primary p-8">
              <p className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
                15
              </p>
              <h3 className="text-md font-bold leading-[1.4] md:text-xl">
                Years in business
              </h3>
              <p className="mt-2">
                Thousands of shipments delivered on time, every time
              </p>
            </div>
            <div className="flex w-full flex-col justify-between border border-border-primary p-8">
              <p className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
                8,400
              </p>
              <h3 className="text-md font-bold leading-[1.4] md:text-xl">
                Shipments last year
              </h3>
              <p className="mt-2">
                Serving clients in 47 countries across Europe and Asia
              </p>
            </div>
            <div className="flex w-full flex-col justify-between border border-border-primary p-8">
              <p className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
                47
              </p>
              <h3 className="text-md font-bold leading-[1.4] md:text-xl">
                Countries served
              </h3>
              <p className="mt-2">
                Partner network spanning major hubs and regional centers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
