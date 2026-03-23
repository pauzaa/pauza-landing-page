import Image from "next/image";
import { useTranslations } from "next-intl";
import { PhoneMockup } from "./PhoneMockup";
import { StoreBadges } from "./StoreBadges";
import homeScreen from "@/assets/screenshots/home_screen.png";

export function Hero() {
  const t = useTranslations("Hero");

  return (
    <section
      id="hero"
      className="relative overflow-hidden py-20 lg:py-32"
    >
      {/* Subtle radial glow behind content — decorative, adds depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-1/4 left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-primary/[0.04] blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-center lg:gap-20">
          {/* Left column — text content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-on-surface sm:text-5xl lg:text-6xl">
              {t("headline")}
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-on-surface-variant lg:mx-0">
              {t("subtitle")}
            </p>

            <StoreBadges className="mt-8 justify-center lg:justify-start" />
          </div>

          {/* Right column — phone mockup */}
          <div className="w-full max-w-xs flex-shrink-0 lg:max-w-sm">
            <PhoneMockup className="mx-auto">
              <Image
                src={homeScreen}
                alt={t("headline")}
                fill
                priority
                sizes="(max-width: 1024px) 320px, 384px"
                className="object-cover object-top"
              />
            </PhoneMockup>
          </div>
        </div>
      </div>
    </section>
  );
}
