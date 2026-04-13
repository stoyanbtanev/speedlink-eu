import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLang } from "../../src/context/LanguageContext";
import { gallery, t } from "../../src/data/translations";
import { IMAGES } from "../../src/data/images";

export function GallerySection() {
  const { lang } = useLang();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-60%"]);

  return (
    <section ref={containerRef} className="relative">
      <div className="section-padding pt-20 md:pt-28">
        <div className="container-xl text-center">
          <span className="tag mb-6 inline-flex">{t(gallery.title, lang)}</span>
          <h2 className="font-display text-display-lg text-white">
            {t(gallery.title, lang)}
          </h2>
          <p className="mt-4 font-body text-body-lg text-white/50">
            {t(gallery.subtitle, lang)}
          </p>
        </div>
      </div>
      <div className="h-[300vh]">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div
            style={{ x }}
            className="flex gap-6 pl-8"
          >
            {IMAGES.gallery.map((src, i) => (
              <div
                key={i}
                className="relative h-[70vh] w-[80vw] flex-shrink-0 overflow-hidden rounded-2xl md:w-[60vw] lg:h-[75vh] lg:w-[50vw]"
              >
                <img
                  src={src}
                  alt={`SpeedLink network ${i + 1}`}
                  className="img-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
