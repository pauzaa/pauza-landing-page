import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer>
      {/* TODO: Logo, tagline, legal links, social icons, copyright */}
      <p>{t("tagline")}</p>
      <p>{t("copyright")}</p>
    </footer>
  );
}
