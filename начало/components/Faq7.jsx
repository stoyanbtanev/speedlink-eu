"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Faq7() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container w-full max-w-lg">
        <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Questions
          </h2>
          <p className="md:text-md">Answers to what matters most</p>
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:gap-y-12">
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              How do you price shipments?
            </h2>
            <p>
              We quote based on weight, distance, cargo type, and current market
              rates. No markup surprises. What we quote is what you pay. We send
              a detailed breakdown with every offer.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What are typical transit times?
            </h2>
            <p>
              FTL within Europe takes 2–5 days depending on origin and
              destination. LTL consolidation adds 1–2 days. Sea freight to Asia
              runs 20–30 days. Air freight reaches 180 countries in 2–4 days.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Do you offer cargo insurance?
            </h2>
            <p>
              Yes. We arrange all-risk coverage through trusted carriers.
              Insurance is included in our quote. You own the cargo from pickup
              to delivery.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Who handles customs clearance?
            </h2>
            <p>
              We do. Our team files all documents, verifies compliance, and
              coordinates with border authorities. Customs fees are included in
              the final invoice. No surprises at the border.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What's the difference between FTL and LTL?
            </h2>
            <p>
              FTL means you book the entire truck. Your cargo alone. No shared
              space, no waiting for other shipments. LTL means you share the
              truck with compatible cargo and split the cost. Choose FTL for
              speed and control. Choose LTL to save money on smaller loads.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Still have questions?
          </h4>
          <p className="md:text-md">
            Call us or send an email. We answer in hours.
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
