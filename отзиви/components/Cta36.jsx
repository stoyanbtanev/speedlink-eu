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
              Ready to ship
            </h2>
            <p>
              Get your quote in 24 hours. No waiting. No games. Just logistics.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
              <Button variant="primary">Get quote</Button>
              <Button variant="secondary">Call us</Button>
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
              Track your load
            </h2>
            <p>
              Already shipping with us? Check your shipment status in real time.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
              <Button variant="primary">Track now</Button>
              <Button variant="secondary">Contact</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
