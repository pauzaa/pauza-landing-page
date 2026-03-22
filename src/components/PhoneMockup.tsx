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
      <div className="absolute inset-0 rounded-[3rem] shadow-[0_8px_40px_rgba(0,0,0,0.12),0_2px_12px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_40px_rgba(0,0,0,0.5),0_2px_12px_rgba(0,0,0,0.3)]" />

      <div className="relative h-full w-full rounded-[3rem] border-[3px] border-outline bg-surface-container-highest p-[10px]">
        {/* Side button accents — power button (right side) */}
        <div className="absolute -right-[5px] top-[28%] h-[10%] w-[3px] rounded-r-sm bg-outline" />

        {/* Volume up (left side) */}
        <div className="absolute -left-[5px] top-[22%] h-[6%] w-[3px] rounded-l-sm bg-outline" />

        {/* Volume down (left side) */}
        <div className="absolute -left-[5px] top-[30%] h-[6%] w-[3px] rounded-l-sm bg-outline" />

        {/* Silent switch (left side) */}
        <div className="absolute -left-[5px] top-[16%] h-[3%] w-[3px] rounded-l-sm bg-outline" />

        <div className="relative h-full w-full overflow-hidden rounded-[2.25rem] border border-outline-variant bg-surface">
          {/* Dynamic Island */}
          <div className="absolute left-1/2 top-[10px] z-10 h-[28px] w-[100px] -translate-x-1/2 rounded-full bg-surface-container-highest ring-1 ring-outline-variant" />

          <div className="relative h-full w-full overflow-hidden">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
