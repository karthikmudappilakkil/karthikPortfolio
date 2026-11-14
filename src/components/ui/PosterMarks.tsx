export function CornerCross({
  className = "",
  size = 14,
  color = "#141414",
}: {
  className?: string;
  size?: number;
  color?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      className={`select-none pointer-events-none ${className}`}
    >
      <line x1="8" y1="0" x2="8" y2="16" stroke={color} strokeWidth="1.5" />
      <line x1="0" y1="8" x2="16" y2="8" stroke={color} strokeWidth="1.5" />
    </svg>
  );
}

export function CornerTicks({
  className = "",
  color = "#141414",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
    >
      <span
        className="absolute top-1 left-1.5 font-mono text-[10px] leading-none"
        style={{ color }}
      >
        ⌜
      </span>
      <span
        className="absolute top-1 right-1.5 font-mono text-[10px] leading-none"
        style={{ color }}
      >
        ⌝
      </span>
      <span
        className="absolute bottom-1 left-1.5 font-mono text-[10px] leading-none"
        style={{ color }}
      >
        ⌞
      </span>
      <span
        className="absolute bottom-1 right-1.5 font-mono text-[10px] leading-none"
        style={{ color }}
      >
        ⌟
      </span>
    </div>
  );
}

export function PosterDoubleRule({
  title,
  serial,
  className = "",
}: {
  title?: string;
  serial?: string;
  className?: string;
}) {
  return (
    <div className={`w-full my-6 select-none ${className}`}>
      <div className="flex items-center justify-between text-[10px] font-mono font-bold tracking-widest text-ink/70 pb-1 uppercase">
        <span>+ {title || "SYSTEM BLUEPRINT"} +</span>
        <span className="text-posterRed">{serial || "SERIAL: 2026-KMP"}</span>
      </div>
      <div className="w-full border-t-2 border-ink" />
      <div className="w-full border-t border-ink/40 mt-[3px]" />
    </div>
  );
}

export function BarcodeStrip({
  code = "2026-KMP-FULLSTACK",
  className = "",
}: {
  code?: string;
  className?: string;
}) {
  const bars = [2, 1, 3, 1, 2, 4, 1, 3, 2, 1, 4, 2, 1, 3, 1, 2, 3, 1, 4, 2];
  return (
    <div className={`inline-flex flex-col items-center select-none ${className}`}>
      <div className="flex items-end h-7 gap-[2px]">
        {bars.map((w, i) => (
          <div
            key={i}
            className="bg-ink"
            style={{ width: `${w * 1.5}px`, height: i % 3 === 0 ? "100%" : "85%" }}
          />
        ))}
      </div>
      <span className="text-[9px] font-mono tracking-widest text-ink mt-1 font-bold">
        *{code}*
      </span>
    </div>
  );
}
