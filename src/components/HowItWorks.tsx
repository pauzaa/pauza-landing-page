import { useTranslations } from "next-intl";

export function HowItWorks() {
  const t = useTranslations("HowItWorks");

  return (
    <section id="how-it-works">
      {/* TODO: 3-step visual explanation with phone mockups */}
      <h2>{t("heading")}</h2>
    </section>
  );
}
