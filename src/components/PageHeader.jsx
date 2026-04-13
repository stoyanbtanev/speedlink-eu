import React from "react";
import { motion } from "framer-motion";

export function PageHeader({ title, subtitle, image }) {
  return (
    <section className="relative flex min-h-[50vh] items-end overflow-hidden md:min-h-[60vh]">
      <div className="absolute inset-0">
        <img
          src={image}
          alt=""
          className="img-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/70 to-dark/30" />
      </div>
      <div className="section-padding relative z-10 pb-16 pt-40 md:pb-24 md:pt-48">
        <div className="container-xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl font-display text-display-lg text-white"
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4 max-w-lg font-body text-body-lg text-white/60"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}
