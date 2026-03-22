import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { BASE_URL } from "@/lib/constants";

function localeUrl(locale: string): string {
  return locale === routing.defaultLocale
    ? BASE_URL
    : `${BASE_URL}/${locale}`;
}

const languageAlternates = Object.fromEntries(
  routing.locales.map((l) => [l, localeUrl(l)]),
);

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return routing.locales.map((locale) => ({
    url: localeUrl(locale),
    lastModified: now,
    alternates: { languages: languageAlternates },
  }));
}
