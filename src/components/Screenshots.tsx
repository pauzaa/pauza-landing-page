"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { PhoneMockup } from "./PhoneMockup";
import { fadeUpProps } from "@/lib/motion";

interface ScreenItem {
  label: string;
  gradient: string;
}

const screens: ScreenItem[] = [
  {
    label: "Dashboard",
    gradient:
      "linear-gradient(145deg, #800020 0%, #4a0e2b 40%, #1a1a2e 100%)",
  },
  {
    label: "Mode Editor",
    gradient:
      "linear-gradient(160deg, #2d1b3d 0%, #800020 50%, #c2185b 100%)",
  },
  {
    label: "Shield",
    gradient:
      "linear-gradient(135deg, #800020 0%, #b71c1c 35%, #ff6f00 100%)",
  },
  {
    label: "Usage Stats",
    gradient:
      "linear-gradient(150deg, #0d3b66 0%, #1a535c 45%, #4ecdc4 100%)",
  },
  {
    label: "Blocking Stats",
    gradient:
      "linear-gradient(140deg, #1b1b3a 0%, #800020 55%, #e8a87c 100%)",
  },
  {
    label: "AI Insights",
    gradient:
      "linear-gradient(155deg, #2e1065 0%, #7c3aed 40%, #c084fc 100%)",
  },
  {
    label: "Friends",
    gradient:
      "linear-gradient(130deg, #134e5e 0%, #1a6b5a 50%, #71b280 100%)",
  },
  {
    label: "Leaderboard",
    gradient:
      "linear-gradient(145deg, #3a1c51 0%, #800020 45%, #d4a574 100%)",
  },
];

export function Screenshots() {
  const t = useTranslations("Screenshots");

  return (
    <motion.section
      id="screenshots"
      className="py-20 lg:py-28"
      {...fadeUpProps}
    >
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-14 text-center text-3xl font-bold tracking-tight text-on-surface sm:text-4xl">
          {t("heading")}
        </h2>

        <div
          className="scrollbar-hide -mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-4"
        >
          {screens.map((screen) => (
            <div
              key={screen.label}
              className="flex shrink-0 snap-start flex-col items-center"
            >
              <PhoneMockup className="w-[168px]">
                <div
                  className="h-full w-full"
                  style={{ background: screen.gradient }}
                />
              </PhoneMockup>
              <p className="mt-3 text-center text-sm text-on-surface-variant">
                {screen.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
