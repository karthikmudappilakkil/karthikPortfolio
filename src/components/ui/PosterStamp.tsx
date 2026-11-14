interface PosterStampProps {
  text?: string;
  subtext?: string;
  year?: string;
  className?: string;
  variant?: "red" | "ink";
  size?: number;
}

export function PosterStamp({
  text = "KARTHIK M P • FULL STACK DEV",
  subtext = "OFFICIAL DOSSIER",
  year = "2026",
  className = "",
  variant = "red",
  size = 110,
}: PosterStampProps) {
  const color = variant === "red" ? "#e5262c" : "#141414";

  return (
    <div
      className={`inline-block select-none transition-transform duration-300
        hover:rotate-6 hover:scale-105 cursor-pointer ${className}`}
      style={{ width: size, height: size }}
      title={`${text} — ${year}`}
    >
      <svg
        viewBox="0 0 120 120"
        className="w-full h-full overflow-visible drop-shadow-sm"
      >
        {/* Outer dashed border */}
        <circle
          cx="60"
          cy="60"
          r="56"
          fill="none"
          stroke={color}
          strokeWidth="1.5"
          strokeDasharray="4 2"
        />
        {/* Inner solid border */}
        <circle
          cx="60"
          cy="60"
          r="51"
          fill="none"
          stroke={color}
          strokeWidth="2"
        />
        {/* Innermost ring */}
        <circle
          cx="60"
          cy="60"
          r="34"
          fill="none"
          stroke={color}
          strokeWidth="1"
        />

        {/* Circular text path */}
        <defs>
          <path
            id="stampCircle"
            d="M 60, 60 m -43, 0 a 43,43 0 1,1 86,0 a 43,43 0 1,1 -86,0"
          />
        </defs>
        <text
          fill={color}
          fontSize="9"
          fontFamily="'JetBrains Mono', monospace"
          fontWeight="bold"
          letterSpacing="1.8"
        >
          <textPath href="#stampCircle" startOffset="50%" textAnchor="middle">
            {text}
          </textPath>
        </text>

        {/* Center content */}
        <g transform="translate(60, 60)" textAnchor="middle">
          {/* Star or Emblem */}
          <polygon
            points="0,-10 3,-3 10,-3 4,2 6,9 0,5 -6,9 -4,2 -10,-3 -3,-3"
            fill={color}
          />
          <text
            y="9"
            fill={color}
            fontSize="8"
            fontFamily="'JetBrains Mono', monospace"
            fontWeight="bold"
            letterSpacing="0.5"
          >
            {subtext}
          </text>
          <text
            y="19"
            fill={color}
            fontSize="7.5"
            fontFamily="'JetBrains Mono', monospace"
            fontWeight="bold"
          >
            ★ {year} ★
          </text>
        </g>
      </svg>
    </div>
  );
}
