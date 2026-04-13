"use client";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
  VideoIframe,
} from "@relume_io/relume-ui";
import React from "react";
import { FaCirclePlay } from "react-icons/fa6";

export function Stats21() {
  return (
    <section id="section" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">By the numbers</p>
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            What we've built
          </h2>
          <p className="md:text-md">
            A decade of moving goods. A network that works.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-y-6 md:gap-y-0 lg:grid-cols-[1fr_0.5fr]">
          <div className="flex flex-col">
            <Dialog>
              <DialogTrigger className="relative flex size-full w-full items-center justify-center">
                <img
                  src="https://assets-global.website-files.com/624380709031623bfe4aee60/6243807090316259584aee68_placeholder-video-thumbnail.svg"
                  alt="Placeholder image"
                  className="aspect-[3/2] size-full object-cover"
                />
                <span className="absolute inset-0 z-10 bg-black/50" />
                <FaCirclePlay className="absolute z-20 size-16 text-white" />
              </DialogTrigger>
              <DialogContent>
                <VideoIframe video="https://www.youtube.com/embed/8DKLYsikxTs?si=Ch9W0KrDWWUiCMMW" />
              </DialogContent>
            </Dialog>
          </div>
          <div className="grid grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-x-8 md:gap-y-12 md:p-8 lg:grid-cols-1 lg:gap-x-0 lg:p-12">
            <div>
              <p className="mb-2 text-6xl font-bold leading-[1.2] md:text-9xl lg:text-10xl">
                12
              </p>
              <h3 className="text-md font-bold leading-[1.4] md:text-xl">
                Years in business
              </h3>
            </div>
            <div>
              <p className="mb-2 text-6xl font-bold leading-[1.2] md:text-9xl lg:text-10xl">
                8,500
              </p>
              <h3 className="text-md font-bold leading-[1.4] md:text-xl">
                Shipments delivered
              </h3>
            </div>
            <div>
              <p className="mb-2 text-6xl font-bold leading-[1.2] md:text-9xl lg:text-10xl">
                47
              </p>
              <h3 className="text-md font-bold leading-[1.4] md:text-xl">
                Countries served
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
