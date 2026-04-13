"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Cta36() {
  return (
    <section id="section" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid auto-cols-fr grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:gap-x-16">
          <div className="flex flex-col items-center justify-center text-center">
            <div>
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                className="mb-5 size-12 md:mb-6"
                alt="Logo"
              />
            </div>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Ready to ship?
            </h2>
            <p>
              Get a firm quote in 24 hours. Call us now or submit your details
              below.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
              <Button variant="primary">Quote</Button>
              <Button variant="secondary">Call</Button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <div>
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                className="mb-5 size-12 md:mb-6"
                alt="Logo"
              />
            </div>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Already shipping with us?
            </h2>
            <p>
              Track your shipment in real time. Enter your reference number to
              see where your cargo is right now.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
              <Button variant="primary">Track</Button>
              <Button variant="secondary">Support</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
