import { useTranslations } from "next-intl";

export function DownloadCta() {
  const t = useTranslations("DownloadCta");

  return (
    <section id="download">
      {/* TODO: Download CTA with store badges */}
      <h2>{t("heading")}</h2>
      <p>{t("subtitle")}</p>
    </section>
  );
}
