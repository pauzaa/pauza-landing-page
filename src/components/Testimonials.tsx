import { useTranslations } from "next-intl";

export function Testimonials() {
  const t = useTranslations("Testimonials");

  return (
    <section id="testimonials">
      {/* TODO: Testimonial cards */}
      <h2>{t("heading")}</h2>
    </section>
  );
}
