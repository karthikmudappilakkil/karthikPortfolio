import * as React from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  pauseOnHover?: boolean;
  direction?: "left" | "right";
  speed?: number;
}

export function Marquee({
  children,
  pauseOnHover = true,
  direction = "left",
  speed = 28,
  className,
  ...props
}: MarqueeProps) {
  return (
    <div
      className={cn("w-full overflow-hidden select-none py-2", className)}
      {...props}
    >
      <div className="relative flex w-full overflow-hidden">
        <div
          className={cn(
            "flex w-max shrink-0 items-center gap-4",
            direction === "left" ? "animate-marquee" : "animate-marquee-reverse",
            pauseOnHover && "hover:[animation-play-state:paused]"
          )}
          style={{ "--duration": `${speed}s` } as React.CSSProperties}
        >
          {children}
          {children}
        </div>
      </div>
    </div>
  );
}

