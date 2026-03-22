import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header() {
  const t = useTranslations("Header");

  return (
    <header>
      <nav>
        {/* TODO: Logo, navigation, language switcher, download CTA */}
        <LanguageSwitcher />
        <a href="#download">{t("download")}</a>
      </nav>
    </header>
  );
}
