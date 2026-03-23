"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image, { type StaticImageData } from "next/image";
import { PhoneMockup } from "./PhoneMockup";
import { fadeUpProps } from "@/lib/motion";

import homeScreen from "@/assets/screenshots/home_screen.png";
import editModeScreen from "@/assets/screenshots/edit_mode_screen.png";
import homeActiveSession from "@/assets/screenshots/home_active_session.png";
import shieldScreen from "@/assets/screenshots/shield_screen.png";
import usageStats from "@/assets/screenshots/usage_stats.png";
import blockingStats from "@/assets/screenshots/blocking_stats.png";
import friendsScreen from "@/assets/screenshots/friends_screen.png";
import leaderboardScreen from "@/assets/screenshots/leaderboard_screen.png";
import nfcScanningScreen from "@/assets/screenshots/nfc_scanning_screen.png";

interface ScreenItem {
  label: string;
  image: StaticImageData;
}

const screens: ScreenItem[] = [
  { label: "Dashboard", image: homeScreen },
  { label: "Mode Editor", image: editModeScreen },
  { label: "Active Session", image: homeActiveSession },
  { label: "Shield", image: shieldScreen },
  { label: "Usage Stats", image: usageStats },
  { label: "Blocking Stats", image: blockingStats },
  { label: "Friends", image: friendsScreen },
  { label: "Leaderboard", image: leaderboardScreen },
  { label: "NFC Unlock", image: nfcScanningScreen },
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
                <Image
                  src={screen.image}
                  alt={screen.label}
                  fill
                  sizes="168px"
                  quality={90}
                  className="object-cover object-top"
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
