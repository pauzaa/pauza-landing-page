import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "ru", "uz", "uz-Cyrl"],
  defaultLocale: "en",
});
