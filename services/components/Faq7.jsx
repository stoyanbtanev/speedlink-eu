"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Faq7() {
  return (
    <section id="section" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container w-full max-w-lg">
        <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            FAQs
          </h2>
          <p className="md:text-md">
            Answers to the questions our clients ask most often about shipping
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:gap-y-12">
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What is FTL versus LTL?
            </h2>
            <p>
              FTL means your cargo fills the entire truck—you pay for the whole
              vehicle and get dedicated space. LTL means you share the truck
              with other shipments and pay only for what you use. Choose FTL for
              volume, LTL for cost savings on smaller loads.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              How secure is your warehousing?
            </h2>
            <p>
              Our facilities are ISO-certified with 24/7 surveillance, climate
              control, and real-time inventory tracking. Every item is logged
              and monitored from arrival to dispatch. Your goods are protected
              like they're our own.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Do you handle customs clearance?
            </h2>
            <p>
              Yes. We manage the entire customs process for shipments entering
              or leaving the EU and Asia. Our bilingual team handles
              documentation, tariffs, and compliance so you don't have to.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What are your transit times?
            </h2>
            <p>
              FTL within Europe typically takes 3–7 days depending on distance.
              Asia routes range from 14–30 days by sea. We provide exact
              timelines in your quote based on origin, destination, and cargo
              type.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Is cargo insured during transit?
            </h2>
            <p>
              Standard coverage is included in all shipments. We also offer
              enhanced insurance for high-value or sensitive goods. Rates are
              transparent and quoted upfront with no hidden fees.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Need more answers?
          </h4>
          <p className="md:text-md">
            Call us or request a quote and we'll respond in hours
          </p>
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
