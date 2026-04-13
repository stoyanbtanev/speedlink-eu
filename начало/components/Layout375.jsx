"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { BsLightningFill } from "react-icons/bs";
import { BiGlobe } from "react-icons/bi";
import { HiOutlineDocumentText } from "react-icons/hi";
import { MdOutlineSensors } from "react-icons/md";
import { FiDollarSign } from "react-icons/fi";

export function Layout375() {
  return (
    <section id="section" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Why us</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Six reasons to choose Speedlink
            </h2>
            <p className="md:text-md">
              We move fast. We move right. We move your way.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:gap-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
            
            {/* Card 1 */}
            <div className="relative flex min-h-[420px] lg:min-h-[460px] flex-col overflow-hidden rounded-3xl border border-surface-border bg-surface-card transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
              <div className="absolute inset-x-0 top-0 h-[65%] w-full overflow-hidden">
                <img src="/images/hero-1.jpg" alt="Speed" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--c-surface-card))] via-[rgb(var(--c-surface-card))/0.3] to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[rgb(var(--c-surface-card))] to-transparent" />
              </div>
              <div className="relative z-10 flex flex-1 flex-col justify-end p-6 md:p-8 pt-32">
                <div>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-brand dark:bg-orange-950">
                    <BsLightningFill className="text-xl" />
                  </div>
                  <p className="mb-2 text-xs font-bold uppercase tracking-widest text-brand">Speed</p>
                  <h3 className="mb-3 text-2xl font-bold">Quote in 24 hours</h3>
                  <p className="text-muted text-sm leading-relaxed">No waiting. No delays. Firm pricing by noon the next day.</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative flex min-h-[420px] lg:min-h-[460px] flex-col overflow-hidden rounded-3xl border border-surface-border bg-surface-card transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
              <div className="absolute inset-x-0 top-0 h-[65%] w-full overflow-hidden">
                <img src="/images/service-ocean.jpg" alt="Coverage" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--c-surface-card))] via-[rgb(var(--c-surface-card))/0.3] to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[rgb(var(--c-surface-card))] to-transparent" />
              </div>
              <div className="relative z-10 flex flex-1 flex-col justify-end p-6 md:p-8 pt-32">
                <div>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-brand dark:bg-orange-950">
                    <BiGlobe className="text-xl" />
                  </div>
                  <p className="mb-2 text-xs font-bold uppercase tracking-widest text-brand">Coverage</p>
                  <h3 className="mb-3 text-2xl font-bold">47 countries</h3>
                  <p className="text-muted text-sm leading-relaxed">Partner network spanning major hubs and regional centers across Europe and Asia.</p>
                </div>
              </div>
            </div>

            {/* Pricing Card (Large) */}
            <div className="relative flex h-full min-h-[600px] flex-col overflow-hidden rounded-3xl border border-surface-border bg-surface-card transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 sm:col-span-2 sm:col-start-1 sm:row-span-2 sm:row-start-3 lg:col-span-2 lg:col-start-3 lg:row-span-2 lg:row-start-1">
              <div className="absolute inset-x-0 top-0 h-[60%] w-full overflow-hidden">
                <img src="/images/industry-ecommerce.jpg" alt="Pricing Warehouse" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--c-surface-card))] via-[rgb(var(--c-surface-card))/0.4] to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[rgb(var(--c-surface-card))] to-transparent" />
              </div>
              <div className="relative z-10 flex flex-1 flex-col justify-end p-6 md:p-10 lg:p-12 pt-40">
                <div>
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-brand dark:bg-orange-950">
                    <FiDollarSign className="text-2xl" />
                  </div>
                  <p className="mb-3 text-xs font-bold uppercase tracking-widest text-brand">Pricing</p>
                  <h3 className="mb-5 text-4xl font-bold leading-tight md:text-5xl lg:text-5xl">
                    Transparent rates with no surprises
                  </h3>
                  <p className="mb-8 text-lg text-muted md:w-5/6">
                    What we quote is what you pay. No hidden fees, no last-minute surcharges, no fine print.
                  </p>
                  <Button className="btn-primary w-fit px-8 py-4 text-base shadow-lg shadow-brand/30">Get a quote</Button>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative flex min-h-[420px] lg:min-h-[460px] flex-col overflow-hidden rounded-3xl border border-surface-border bg-surface-card transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
               <div className="absolute inset-x-0 top-0 h-[65%] w-full overflow-hidden">
                <img src="/images/service-customs.jpg" alt="Customs" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--c-surface-card))] via-[rgb(var(--c-surface-card))/0.3] to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[rgb(var(--c-surface-card))] to-transparent" />
              </div>
              <div className="relative z-10 flex flex-1 flex-col justify-end p-6 md:p-8 pt-32">
                <div>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-brand dark:bg-orange-950">
                    <HiOutlineDocumentText className="text-2xl" />
                  </div>
                  <p className="mb-2 text-xs font-bold uppercase tracking-widest text-brand">Customs</p>
                  <h3 className="mb-3 text-2xl font-bold">Full clearance</h3>
                  <p className="text-muted text-sm leading-relaxed">Documents, tariffs, and compliance — all included. No surprises at the border.</p>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="relative flex min-h-[420px] lg:min-h-[460px] flex-col overflow-hidden rounded-3xl border border-surface-border bg-surface-card transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
              <div className="absolute inset-x-0 top-0 h-[65%] w-full overflow-hidden">
                <img src="/images/service-air.jpg" alt="Tracking" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--c-surface-card))] via-[rgb(var(--c-surface-card))/0.3] to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[rgb(var(--c-surface-card))] to-transparent" />
              </div>
              <div className="relative z-10 flex flex-1 flex-col justify-end p-6 md:p-8 pt-32">
                <div>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-brand dark:bg-orange-950">
                    <MdOutlineSensors className="text-2xl" />
                  </div>
                  <p className="mb-2 text-xs font-bold uppercase tracking-widest text-brand">Tracking</p>
                  <h3 className="mb-3 text-2xl font-bold">Real-time</h3>
                  <p className="text-muted text-sm leading-relaxed">Monitor your cargo in real time. Know where it is at every moment.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
