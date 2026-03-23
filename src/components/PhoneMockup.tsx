import type { ReactNode } from "react";

export function PhoneMockup({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative aspect-[9/19.5] w-full ${className ?? ""}`}
    >
      {/* Outer shadow layer */}
      <div className="absolute inset-0 rounded-[2rem] shadow-[0_4px_24px_rgba(0,0,0,0.2),0_1px_6px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.6),0_1px_6px_rgba(0,0,0,0.4)]" />

      {/* Phone frame */}
      <div className="relative h-full w-full rounded-[2rem] border border-outline-variant bg-surface-container-highest p-[5px]">
        {/* Screen area */}
        <div className="relative h-full w-full overflow-hidden rounded-[1.625rem] bg-surface">
          <div className="relative h-full w-full overflow-hidden">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
