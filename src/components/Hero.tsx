import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations("Hero");

  return (
    <section id="hero">
      {/* TODO: Hero layout with headline, subtitle, store badges, phone mockup */}
      <h1>{t("headline")}</h1>
      <p>{t("subtitle")}</p>
    </section>
  );
}
