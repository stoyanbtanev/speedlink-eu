"use client";

import { Button, Input } from "@relume_io/relume-ui";
import React from "react";

export function Cta26() {
  return (
    <section id="section" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center">
        <div>
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Tell us what you ship
          </h2>
          <p className="md:text-md">
            Fill in the details below. We'll respond with a firm quote before
            noon the next business day.
          </p>
          <div className="mx-auto mt-6 w-full max-w-sm md:mt-8">
            <form className="rb-4 mb-4 grid max-w-sm grid-cols-1 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-4">
              <Input id="email" type="email" placeholder="Your email" />
              <Button
                title="Send"
                variant="primary"
                size="sm"
                className="items-center justify-center px-6 py-3"
              >
                Send
              </Button>
            </form>
            <p className="text-xs">
              We respect your inbox. No spam, no follow-up calls you didn't ask
              for.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
