import { useTranslations } from "next-intl";

export function Screenshots() {
  const t = useTranslations("Screenshots");

  return (
    <section id="screenshots">
      {/* TODO: Screenshot carousel with phone mockups */}
      <h2>{t("heading")}</h2>
    </section>
  );
}
