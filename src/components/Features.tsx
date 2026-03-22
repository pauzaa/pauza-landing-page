import { useTranslations } from "next-intl";

export function Features() {
  const t = useTranslations("Features");

  return (
    <section id="features">
      {/* TODO: Feature cards with icons */}
      <h2>{t("heading")}</h2>
    </section>
  );
}
