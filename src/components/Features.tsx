"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  Shield,
  SmartphoneNfc,
  CalendarClock,
  BarChart3,
  Sparkles,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { fadeUp, fadeUpProps, staggerContainerProps } from "@/lib/motion";

interface Feature {
  key: string;
  Icon: LucideIcon;
}

const features: Feature[] = [
  { key: "hardBlocking", Icon: Shield },
  { key: "nfcUnlock", Icon: SmartphoneNfc },
  { key: "schedules", Icon: CalendarClock },
  { key: "analytics", Icon: BarChart3 },
  { key: "aiInsights", Icon: Sparkles },
  { key: "friends", Icon: Users },
];

export function Features() {
  const t = useTranslations("Features");

  return (
    <section id="features" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          {...fadeUpProps}
          className="mb-14 text-center text-3xl font-bold tracking-tight text-on-surface sm:text-4xl"
        >
          {t("heading")}
        </motion.h2>

        <motion.div
          {...staggerContainerProps}
          className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {features.map(({ key, Icon }) => (
            <motion.div
              key={key}
              variants={fadeUp}
              className="group relative rounded-2xl border border-outline-variant bg-surface-container-low p-6 transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                <Icon
                  className="h-5 w-5 text-primary"
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </div>

              <h3 className="mb-2 text-lg font-semibold leading-snug text-on-surface">
                {t(`${key}.title`)}
              </h3>
              <p className="text-sm leading-relaxed text-on-surface-variant">
                {t(`${key}.description`)}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
