import { useState } from "react";

const PIPS_MAP: Record<number, [number, number][]> = {
  1: [[0, 0]],
  2: [
    [-1, -1],
    [1, 1],
  ],
  3: [
    [-1, -1],
    [0, 0],
    [1, 1],
  ],
  4: [
    [-1, -1],
    [1, -1],
    [-1, 1],
    [1, 1],
  ],
  5: [
    [-1, -1],
    [1, -1],
    [0, 0],
    [-1, 1],
    [1, 1],
  ],
  6: [
    [-1, -1],
    [1, -1],
    [-1, 0],
    [1, 0],
    [-1, 1],
    [1, 1],
  ],
};

interface CornerDiceProps {
  initialValue?: number;
  size?: number;
  color?: string;
  pipColor?: string;
  className?: string;
  showLinedCorner?: boolean;
}

export function CornerDice({
  initialValue = 5,
  size = 40,
  color = "#e5262c",
  pipColor = "#f6f4f0",
  className = "",
  showLinedCorner = false,
}: CornerDiceProps) {
  const [val, setVal] = useState(initialValue);
  const [spinning, setSpinning] = useState(false);

  const roll = () => {
    if (spinning) return;
    setSpinning(true);
    let next = Math.floor(Math.random() * 6) + 1;
    while (next === val) next = Math.floor(Math.random() * 6) + 1;
    setTimeout(() => {
      setVal(next);
      setSpinning(false);
    }, 400);
  };

  const pips = PIPS_MAP[val] ?? PIPS_MAP[1];

  return (
    <button
      type="button"
      onClick={roll}
      title={`Roll dice (currently ${val})`}
      className={`group relative p-1 inline-flex items-center justify-center
        transition-transform active:scale-95 cursor-pointer focus:outline-none ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full overflow-visible"
        aria-hidden="true"
      >
        {showLinedCorner && (
          <>
            <path
              d="M 0 115 L 115 115 L 115 0"
              fill="none"
              stroke={color}
              strokeWidth="2.5"
            />
            <path
              d="M 0 128 L 128 128 L 128 0"
              fill="none"
              stroke={color}
              strokeWidth="1.5"
            />
          </>
        )}

        {/* Outer Dice Box with offset shadow */}
        <rect
          x="12"
          y="12"
          width="76"
          height="76"
          rx="6"
          fill="#141414"
          className="translate-x-[2px] translate-y-[2px]"
        />
        <rect
          x="10"
          y="10"
          width="76"
          height="76"
          rx="6"
          fill={color}
          stroke="#141414"
          strokeWidth="2"
        />

        {/* Pips with roll animation */}
        <g
          className={`transition-transform duration-300 origin-center ${
            spinning ? "rotate-[360deg] scale-75" : "group-hover:rotate-6"
          }`}
          transform="translate(48, 48)"
        >
          {pips.map(([px, py], i) => (
            <circle
              key={i}
              cx={px * 20}
              cy={py * 20}
              r="6"
              fill={pipColor}
            />
          ))}
        </g>
      </svg>
    </button>
  );
}
