import { useTranslations } from "next-intl";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/constants";

interface StoreBadgesProps {
  className?: string;
  variant?: "default" | "inverted";
}

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M11.182 0c.076.738-.214 1.477-.678 2.003-.464.527-1.226.935-1.97.881-.09-.738.25-1.507.692-1.987C9.69.37 10.506-.015 11.182 0Zm2.274 5.26c-.04.027-1.61.935-1.594 2.788.019 2.212 1.942 2.95 1.963 2.958-.016.049-.306 1.054-.993 2.088-.601.893-1.224 1.783-2.207 1.8-.964.018-1.274-.572-2.376-.572-1.102 0-1.447.555-2.363.59-1.013.033-1.697-.966-2.303-1.856-1.24-1.818-2.186-5.136-.914-7.377.631-.913 1.759-1.546 2.983-1.563.93-.018 1.808.626 2.376.626.569 0 1.636-.775 2.757-.661.47.02 1.789.19 2.636 1.428l.035-.249Z" />
    </svg>
  );
}

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M3.5 1.713a.75.75 0 0 1 .77.026l8.5 5.287a.75.75 0 0 1 0 1.274l-8.5 5.287A.75.75 0 0 1 3 12.887V3.413a.75.75 0 0 1 .5-.7Z" />
    </svg>
  );
}

const badges = [
  { key: "appStore", href: APP_STORE_URL, Icon: AppleIcon },
  { key: "googlePlay", href: PLAY_STORE_URL, Icon: PlayIcon },
] as const;

export function StoreBadges({
  className,
  variant = "default",
}: StoreBadgesProps) {
  const t = useTranslations("StoreBadges");
  const badgeClasses =
    variant === "inverted"
      ? "bg-surface text-on-surface"
      : "bg-on-surface text-surface";

  return (
    <div
      className={`flex flex-wrap items-center gap-3 ${className ?? ""}`}
    >
      {badges.map(({ key, href, Icon }) => (
        <a
          key={key}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t(`${key}Aria`)}
          className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium tracking-tight transition-opacity duration-200 hover:opacity-80 motion-reduce:transition-none ${badgeClasses}`}
        >
          <Icon className="shrink-0" />
          <span>{t(key)}</span>
        </a>
      ))}
    </div>
  );
}
