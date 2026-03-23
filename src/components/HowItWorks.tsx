"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { fadeUpProps, staggerContainerProps } from "@/lib/motion";
const steps = ["step1", "step2", "step3"] as const;

export function HowItWorks() {
  const t = useTranslations("HowItWorks");

  return (
    <section id="how-it-works" className="bg-surface-container-low py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          {...fadeUpProps}
          className="mb-14 text-center text-3xl font-bold tracking-tight text-on-surface sm:text-4xl"
        >
          {t("heading")}
        </motion.h2>

        <motion.div
          {...staggerContainerProps}
          className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8"
        >
          {steps.map((key, index) => (
            <motion.div
              key={key}
              variants={fadeUpProps.variants}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full bg-primary font-bold text-on-primary">
                {index + 1}
              </div>

              <h3 className="mb-2 text-lg font-semibold leading-snug text-on-surface">
                {t(`${key}.title`)}
              </h3>
              <p className="max-w-xs text-sm leading-relaxed text-on-surface-variant">
                {t(`${key}.description`)}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
