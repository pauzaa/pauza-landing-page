"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
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

const COUNT = screens.length;
const AUTO_PLAY_MS = 4000;
const PAUSE_AFTER_INTERACTION_MS = 8000;

/* ── Slot config: position offsets from center ──────────────── */
interface SlotStyle {
  x: number;
  scale: number;
  opacity: number;
  z: number;
}

/* Desktop slot positions (px offsets from center) */
const desktopSlots: SlotStyle[] = [
  { x: -420, scale: 0.7, opacity: 0.4, z: 1 },
  { x: -200, scale: 0.85, opacity: 0.7, z: 2 },
  { x: 0, scale: 1, opacity: 1, z: 3 },
  { x: 200, scale: 0.85, opacity: 0.7, z: 2 },
  { x: 420, scale: 0.7, opacity: 0.4, z: 1 },
];

/* Mobile slot positions (tighter spacing) */
const mobileSlots: SlotStyle[] = [
  { x: -240, scale: 0.65, opacity: 0.3, z: 1 },
  { x: -115, scale: 0.82, opacity: 0.65, z: 2 },
  { x: 0, scale: 1, opacity: 1, z: 3 },
  { x: 115, scale: 0.82, opacity: 0.65, z: 2 },
  { x: 240, scale: 0.65, opacity: 0.3, z: 1 },
];

/** Wrapping modulo that always returns positive */
function mod(n: number, m: number): number {
  return ((n % m) + m) % m;
}

export function Screenshots() {
  const t = useTranslations("Screenshots");
  const prefersReducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const pauseUntilRef = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragStartX = useRef(0);

  const advance = useCallback((dir: 1 | -1) => {
    setActiveIndex((prev) => mod(prev + dir, COUNT));
  }, []);

  const pauseAutoPlay = useCallback(() => {
    pauseUntilRef.current = Date.now() + PAUSE_AFTER_INTERACTION_MS;
  }, []);

  /* Auto-advance timer */
  useEffect(() => {
    if (prefersReducedMotion) return;

    const id = setInterval(() => {
      if (Date.now() > pauseUntilRef.current) {
        advance(1);
      }
    }, AUTO_PLAY_MS);

    return () => clearInterval(id);
  }, [advance, prefersReducedMotion]);

  /* Keyboard support */
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        pauseAutoPlay();
        advance(-1);
      } else if (e.key === "ArrowRight") {
        pauseAutoPlay();
        advance(1);
      }
    },
    [advance, pauseAutoPlay],
  );

  /** Map each screen to its slot style relative to activeIndex.
   *  Only 5 slots are visible (center ±2). Items further away are hidden. */
  function getSlotForIndex(i: number, slots: SlotStyle[]): SlotStyle | null {
    // Shortest signed distance around the ring
    const diff = mod(i - activeIndex + Math.floor(COUNT / 2), COUNT) - Math.floor(COUNT / 2);
    // diff is in range [-(COUNT-1)/2 .. +(COUNT-1)/2]
    if (diff < -2 || diff > 2) return null; // off-screen
    // Map diff (-2..+2) to slot index (0..4)
    return slots[diff + 2];
  }

  return (
    <motion.section
      id="screenshots"
      className="overflow-hidden py-20 lg:py-32"
      {...fadeUpProps}
    >
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-14 text-center text-3xl font-bold tracking-tight text-on-surface sm:text-4xl lg:mb-20">
          {t("heading")}
        </h2>

        {/* Carousel container */}
        <div
          ref={containerRef}
          className="relative mx-auto select-none"
          role="region"
          aria-roledescription="carousel"
          aria-label={t("heading")}
          tabIndex={0}
          onKeyDown={handleKeyDown}
          /* Pointer-based swipe detection */
          onPointerDown={(e) => {
            dragStartX.current = e.clientX;
          }}
          onPointerUp={(e) => {
            const dx = e.clientX - dragStartX.current;
            if (Math.abs(dx) > 40) {
              pauseAutoPlay();
              advance(dx < 0 ? 1 : -1);
            }
          }}
          style={{ touchAction: "pan-y" }}
        >
          {/* Burgundy glow behind center */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              width: "min(500px, 80vw)",
              height: "min(500px, 80vw)",
              background:
                "radial-gradient(ellipse at center, rgba(128,0,32,0.18) 0%, rgba(128,0,32,0.06) 40%, transparent 70%)",
            }}
          />

          {/* ── Desktop carousel ──────────────────────────────── */}
          <div className="relative mx-auto hidden h-[540px] max-w-4xl items-center justify-center md:flex">
            {screens.map((screen, i) => {
              const slot = getSlotForIndex(i, desktopSlots);
              return (
                <motion.div
                  key={screen.label}
                  className="absolute w-[220px] cursor-pointer"
                  animate={
                    slot
                      ? { x: slot.x, scale: slot.scale, opacity: slot.opacity, zIndex: slot.z }
                      : { x: 0, scale: 0.5, opacity: 0, zIndex: 0 }
                  }
                  transition={{
                    duration: prefersReducedMotion ? 0 : 0.5,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  onClick={() => {
                    if (slot && slot.z < 3) {
                      pauseAutoPlay();
                      setActiveIndex(i);
                    }
                  }}
                  aria-hidden={!slot || slot.z < 3}
                >
                  <PhoneMockup>
                    <Image
                      src={screen.image}
                      alt={screen.label}
                      fill
                      sizes="220px"
                      quality={90}
                      className="object-cover object-top"
                    />
                  </PhoneMockup>
                </motion.div>
              );
            })}
          </div>

          {/* ── Mobile carousel ───────────────────────────────── */}
          <div className="relative mx-auto flex h-[420px] items-center justify-center md:hidden">
            {screens.map((screen, i) => {
              const slot = getSlotForIndex(i, mobileSlots);
              return (
                <motion.div
                  key={screen.label}
                  className="absolute w-[150px]"
                  animate={
                    slot
                      ? { x: slot.x, scale: slot.scale, opacity: slot.opacity, zIndex: slot.z }
                      : { x: 0, scale: 0.5, opacity: 0, zIndex: 0 }
                  }
                  transition={{
                    duration: prefersReducedMotion ? 0 : 0.5,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  onClick={() => {
                    if (slot && slot.z < 3) {
                      pauseAutoPlay();
                      setActiveIndex(i);
                    }
                  }}
                >
                  <PhoneMockup>
                    <Image
                      src={screen.image}
                      alt={screen.label}
                      fill
                      sizes="150px"
                      quality={90}
                      className="object-cover object-top"
                    />
                  </PhoneMockup>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Active screen label */}
        <div className="mt-6 flex flex-col items-center gap-4">
          <AnimatePresence mode="wait">
            <motion.p
              key={activeIndex}
              className="text-base font-medium text-on-surface-variant"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              {screens[activeIndex].label}
            </motion.p>
          </AnimatePresence>

          {/* Dot indicators */}
          <div className="flex gap-2">
            {screens.map((screen, i) => (
              <button
                key={screen.label}
                onClick={() => {
                  pauseAutoPlay();
                  setActiveIndex(i);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? "w-6 bg-primary"
                    : "w-2 bg-outline-variant hover:bg-outline"
                }`}
                aria-label={`Go to ${screen.label}`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
