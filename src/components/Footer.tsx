import { useTranslations } from "next-intl";
import Image from "next/image";
import logo from "@/assets/logo.svg";
import {
  PRIVACY_URL,
  TERMS_URL,
  GITHUB_ISSUES_URL,
  TELEGRAM_URL,
  SUPPORT_EMAIL,
} from "@/lib/constants";

export function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="bg-surface-container-low py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* Top section: logo + tagline | link groups */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-5">
            <Image
              src={logo}
              alt={t("logoAlt")}
              height={36}
              className="h-9 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-on-surface-variant">
              {t("tagline")}
            </p>
          </div>

          {/* Link groups */}
          <div className="grid grid-cols-2 gap-8 sm:gap-12 lg:col-span-7 lg:justify-items-end">
            {/* Legal */}
            <nav aria-label={t("legal")}>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.08em] text-on-surface">
                {t("legal")}
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href={PRIVACY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-on-surface-variant transition-colors duration-200 hover:text-on-surface"
                  >
                    {t("privacy")}
                  </a>
                </li>
                <li>
                  <a
                    href={TERMS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-on-surface-variant transition-colors duration-200 hover:text-on-surface"
                  >
                    {t("terms")}
                  </a>
                </li>
              </ul>
            </nav>

            {/* Support */}
            <nav aria-label={t("support")}>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.08em] text-on-surface">
                {t("support")}
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href={GITHUB_ISSUES_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-on-surface-variant transition-colors duration-200 hover:text-on-surface"
                  >
                    {t("githubIssues")}
                  </a>
                </li>
                <li>
                  <a
                    href={TELEGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-on-surface-variant transition-colors duration-200 hover:text-on-surface"
                  >
                    {t("telegram")}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${SUPPORT_EMAIL}`}
                    className="text-sm text-on-surface-variant transition-colors duration-200 hover:text-on-surface"
                  >
                    {t("email")}
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="mt-10 border-t border-outline-variant pt-6">
          <p className="text-center text-xs text-on-surface-variant">
            {t("copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
