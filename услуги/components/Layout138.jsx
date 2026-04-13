"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout138() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center">
        <p className="mb-3 font-semibold md:mb-4">За нас</p>
        <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
          Вашият доверен партньор в логистиката
        </h2>
        <p className="mb-5 md:mb-6 md:text-md">
          Speedlink Logistics е българска компания с глобална мрежа. Двуезичен
          екип, реален контакт, доказана надеждност в Европа и Азия.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 py-2">
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
            alt="Webflow logo 1"
            className="max-h-14"
          />
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
            alt="Webflow logo 1"
            className="max-h-14"
          />
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
            alt="Webflow logo 1"
            className="max-h-14"
          />
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
            alt="Webflow logo 1"
            className="max-h-14"
          />
        </div>
        <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
          <Button title="Запитай" variant="secondary">
            Запитай
          </Button>
          <Button
            title="Повече"
            variant="link"
            size="link"
            iconRight={<RxChevronRight />}
          >
            Повече
          </Button>
        </div>
      </div>
    </section>
  );
}
