import { useTranslations } from "next-intl";
import { StoreBadges } from "./StoreBadges";

export function DownloadCta() {
  const t = useTranslations("DownloadCta");

  return (
    <section
      id="download"
      className="relative overflow-hidden bg-primary py-20 text-on-primary lg:py-28"
    >
      {/* Soft radial highlight for depth against the burgundy field */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06)_0%,transparent_70%)]"
      />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-5">
          {t("heading")}
        </h2>

        <p className="text-lg leading-relaxed text-on-primary/80 mb-9">
          {t("subtitle")}
        </p>

        <StoreBadges variant="inverted" className="justify-center" />
      </div>
    </section>
  );
}
