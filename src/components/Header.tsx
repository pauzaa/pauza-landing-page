"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.svg";
import { LanguageSwitcher } from "./LanguageSwitcher";

const NAV_LINKS = [
  { key: "features", href: "#features" },
  { key: "howItWorks", href: "#how-it-works" },
  { key: "screenshots", href: "#screenshots" },
] as const;

export function Header() {
  const t = useTranslations("Header");
  const tLang = useTranslations("LanguageSwitcher");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setMenuOpen(false);
    }
    if (menuOpen) {
      document.addEventListener("keydown", onKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-outline-variant bg-surface/80 backdrop-blur-lg">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          {/* Logo */}
          <a
            href="#hero"
            className="relative flex shrink-0 items-center transition-opacity hover:opacity-80"
            aria-label={t("aria.backToTop")}
          >
            <Image
              src={logo}
              alt={t("logoAlt")}
              height={30}
              className="h-[30px] w-auto"
              priority
            />
          </a>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-6 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-on-surface-variant transition-colors hover:text-on-surface"
              >
                {t(`nav.${link.key}`)}
              </a>
            ))}

            {/* Language switcher wrapper */}
            <div className="rounded-lg border border-outline-variant bg-surface-container-low px-2 py-1 text-sm text-on-surface-variant transition-colors hover:border-outline [&_select]:cursor-pointer [&_select]:border-none [&_select]:bg-transparent [&_select]:text-sm [&_select]:text-on-surface-variant [&_select]:outline-none">
              <LanguageSwitcher />
            </div>

            {/* Download CTA */}
            <a
              href="#download"
              className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-on-primary transition-opacity hover:opacity-90"
            >
              {t("download")}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="flex size-10 items-center justify-center rounded-lg text-on-surface transition-colors hover:bg-surface-container-low md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? t("aria.closeMenu") : t("aria.openMenu")}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X size={24} aria-hidden="true" />
            ) : (
              <Menu size={24} aria-hidden="true" />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay — rendered outside <header> to escape its backdrop-blur stacking context */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 top-16 z-50 flex flex-col bg-surface md:hidden"
          >
            <div className="flex flex-1 flex-col gap-1 px-6 pt-6">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.2 }}
                  className="rounded-lg px-3 py-3 text-lg font-medium text-on-surface-variant transition-colors hover:bg-surface-container-low hover:text-on-surface"
                >
                  {t(`nav.${link.key}`)}
                </motion.a>
              ))}

              <div className="my-4 h-px bg-outline-variant" />

              {/* Language switcher in mobile menu */}
              <div className="px-3">
                <p className="mb-2 text-xs font-medium tracking-wide text-on-surface-variant/60 uppercase">
                  {tLang("label")}
                </p>
                <div className="w-fit rounded-lg border border-outline-variant bg-surface-container-low px-3 py-2 text-sm text-on-surface-variant [&_select]:cursor-pointer [&_select]:border-none [&_select]:bg-transparent [&_select]:text-sm [&_select]:text-on-surface-variant [&_select]:outline-none">
                  <LanguageSwitcher />
                </div>
              </div>

              <div className="my-4 h-px bg-outline-variant" />

              {/* Download CTA in mobile menu */}
              <a
                href="#download"
                onClick={closeMenu}
                className="mx-3 rounded-full bg-primary py-3 text-center text-base font-medium text-on-primary transition-opacity hover:opacity-90"
              >
                {t("download")}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
