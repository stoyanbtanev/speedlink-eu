"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Faq7() {
  return (
    <section id="section" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container w-full max-w-lg">
        <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Questions
          </h2>
          <p className="md:text-md">
            Everything you need to know about working with us
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:gap-y-12">
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              How fast can you quote?
            </h2>
            <p>
              We deliver quotes within 24 hours. Send your shipment details and
              we'll call you back the same day with a firm price. No delays, no
              surprises.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What areas do you cover?
            </h2>
            <p>
              We operate across Europe, Asia, and globally. Our partner network
              reaches over 150 countries. Whether you're shipping to Sofia or
              Shanghai, we handle it.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Do you handle customs?
            </h2>
            <p>
              Yes. Customs clearance is included in our door-to-door service. We
              manage all documentation, duties, and compliance so you don't have
              to.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Can you do partial loads?
            </h2>
            <p>
              Absolutely. We consolidate LTL shipments with other cargo to save
              you money. You pay only for the space you use, not a full truck.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What about insurance?
            </h2>
            <p>
              All shipments are insured. We offer standard coverage and can
              arrange additional protection for high-value cargo. Ask us about
              your specific needs.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Still have questions?
          </h4>
          <p className="md:text-md">Call us or fill out the form below</p>
          <div className="mt-6 md:mt-8">
            <Button title="Contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
