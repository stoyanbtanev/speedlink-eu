"use client";

import React from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";

export function Contact15() {
  return (
    <section id="section" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div>
          <div className="mb-12 grid auto-cols-fr grid-cols-1 gap-x-12 gap-y-12 md:mb-20 md:grid-cols-[1fr_.75fr] md:gap-x-20 md:gap-y-16">
            <div className="rb-12 max-w-lg">
              <p className="mb-3 font-semibold md:mb-4">Reach</p>
              <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                Direct line
              </h2>
              <p className="md:text-md">
                Call or email anytime. We answer in hours, not days.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="grid auto-cols-fr grid-cols-1 gap-x-4 gap-y-6 py-2">
                <div className="flex flex-row">
                  <div className="mr-4 md:mb-4">
                    <BiEnvelope className="size-6" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">
                      Email
                    </h3>
                    <a className="underline" href="#">
                      hello@relume.io
                    </a>
                  </div>
                </div>
                <div className="flex flex-row">
                  <div className="mr-4 md:mb-4">
                    <BiPhone className="size-6" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">
                      Phone
                    </h3>
                    <a className="underline" href="#">
                      +359 877 404 599
                    </a>
                  </div>
                </div>
                <div className="flex flex-row">
                  <div className="mr-4 md:mb-4">
                    <BiMap className="size-6" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">
                      Office
                    </h3>
                    <p>Sofia, Bulgaria. Serving Europe, Asia, and beyond.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
            className="w-full object-cover"
            alt="Placeholder image"
          />
        </div>
      </div>
    </section>
  );
}
