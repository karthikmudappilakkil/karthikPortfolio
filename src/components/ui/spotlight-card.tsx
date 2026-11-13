import React, { useRef, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}

export function SpotlightCard({
  children,
  className,
  spotlightColor = "rgba(37, 99, 235, 0.05)",
  ...props
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative rounded-2xl border border-zinc-200/90 bg-white p-6",
        "shadow-card transition-all duration-300 hover:border-zinc-300",
        "hover:shadow-card-hover overflow-hidden",
        className
      )}
      {...props}
    >
      {/* Dynamic Cursor Spotlight Layer */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl
          opacity-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background:
            `radial-gradient(550px circle at ${position.x}px ${position.y}px, ` +
            `${spotlightColor}, transparent 75%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
