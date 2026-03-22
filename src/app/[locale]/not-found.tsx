import Link from "next/link";
import { useTranslations } from "next-intl";

export default function NotFoundPage() {
  const t = useTranslations("NotFound");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl font-bold">{t("heading")}</h1>
      <p className="mt-4 text-on-surface-variant">{t("subtitle")}</p>
      <Link
        href="/"
        className="mt-8 rounded-lg bg-primary px-6 py-3 text-on-primary"
      >
        {t("goHome")}
      </Link>
    </main>
  );
}
