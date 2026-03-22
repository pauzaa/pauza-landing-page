"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { fadeUp, fadeUpProps, staggerContainerProps } from "@/lib/motion";

const testimonialKeys = ["testimonial1", "testimonial2", "testimonial3"] as const;

export function Testimonials() {
  const t = useTranslations("Testimonials");

  return (
    <section id="testimonials" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          {...fadeUpProps}
          className="mb-14 text-center text-3xl font-bold tracking-tight text-on-surface sm:text-4xl"
        >
          {t("heading")}
        </motion.h2>

        <motion.div
          {...staggerContainerProps}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        >
          {testimonialKeys.map((key) => (
            <motion.blockquote
              key={key}
              variants={fadeUp}
              className="relative rounded-2xl bg-surface-container-low p-7 sm:p-8"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none select-none text-7xl leading-none font-serif text-primary/20"
              >
                &ldquo;
              </span>

              <p className="mt-1 text-base leading-relaxed text-on-surface sm:text-lg">
                {t(`${key}.quote`)}
              </p>

              <footer className="mt-6 border-t border-outline-variant pt-4">
                <cite className="not-italic">
                  <span className="block text-sm font-bold text-on-surface">
                    {t(`${key}.name`)}
                  </span>
                  <span className="block text-sm text-on-surface-variant">
                    {t(`${key}.descriptor`)}
                  </span>
                </cite>
              </footer>
            </motion.blockquote>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
