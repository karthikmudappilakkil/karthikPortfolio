import { useState } from "react";

interface MiniWavingCharacterProps {
  message?: string;
  className?: string;
  size?: number;
}

export function MiniWavingCharacter({
  message = "READY TO DISPATCH!",
  className = "",
  size = 140,
}: MiniWavingCharacterProps) {
  const [waving, setWaving] = useState(false);
  const [speechVisible, setSpeechVisible] = useState(false);

  const triggerWave = () => {
    if (waving) return;
    setWaving(true);
    setSpeechVisible(true);
    setTimeout(() => {
      setWaving(false);
    }, 2200);
  };

  return (
    <div
      className={`relative inline-block select-none cursor-pointer group ${className}`}
      style={{ width: size, height: size * 1.15 }}
      onClick={triggerWave}
      onMouseEnter={() => setSpeechVisible(true)}
      onMouseLeave={() => !waving && setSpeechVisible(false)}
      title="Click or hover to wave!"
    >
      {/* Speech Bubble */}
      {speechVisible && (
        <div
          className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap
            bg-paper border-2 border-ink px-2.5 py-1 text-[10px] font-mono font-bold
            text-ink shadow-[2px_2px_0_#141414] rounded-none z-20 animate-in fade-in zoom-in-90"
        >
          <span>{message}</span>
          <div
            className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0
              border-x-4 border-x-transparent border-t-4 border-t-ink"
          />
        </div>
      )}

      <svg
        viewBox="0 0 200 230"
        className="w-full h-full overflow-visible"
        aria-hidden="true"
      >
        {/* Shadow oval */}
        <ellipse cx="100" cy="218" rx="60" ry="8" fill="#141414" opacity="0.15" />

        {/* Torso & Coat */}
        <path
          d="M 60 140 Q 100 135 140 140 L 148 220 L 52 220 Z"
          fill="#141414"
        />
        {/* Shirt collar & Tie */}
        <polygon points="90,140 100,165 110,140" fill="#f6f4f0" />
        <line
          x1="100"
          y1="165"
          x2="100"
          y2="210"
          stroke="#e5262c"
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* Neck */}
        <rect
          x="90"
          y="118"
          width="20"
          height="24"
          fill="#f6f4f0"
          stroke="#141414"
          strokeWidth="3"
        />

        {/* Head */}
        <g
          className={`transition-transform duration-300 origin-bottom ${
            waving ? "-rotate-6" : "group-hover:-rotate-3"
          }`}
          transform="translate(100, 85)"
        >
          {/* Ears */}
          <circle cx="-32" cy="0" r="7" fill="#f6f4f0" stroke="#141414" strokeWidth="2.5" />
          <circle cx="32" cy="0" r="7" fill="#f6f4f0" stroke="#141414" strokeWidth="2.5" />

          {/* Face */}
          <ellipse
            cx="0"
            cy="0"
            rx="30"
            ry="34"
            fill="#f6f4f0"
            stroke="#141414"
            strokeWidth="3.5"
          />

          {/* Hair */}
          <path
            d="M -30 -10 C -25 -40 25 -40 30 -10 C 20 -25 -20 -25 -30 -10 Z"
            fill="#141414"
          />

          {/* Glasses frame */}
          <rect
            x="-24"
            y="-10"
            width="18"
            height="15"
            rx="3"
            fill="none"
            stroke="#141414"
            strokeWidth="2.5"
          />
          <rect
            x="6"
            y="-10"
            width="18"
            height="15"
            rx="3"
            fill="none"
            stroke="#141414"
            strokeWidth="2.5"
          />
          <line x1="-6" y1="-3" x2="6" y2="-3" stroke="#141414" strokeWidth="2.5" />

          {/* Eyes (Pupils) */}
          <circle cx={waving ? "-13" : "-15"} cy="-3" r="2.5" fill="#141414" />
          <circle cx={waving ? "17" : "15"} cy="-3" r="2.5" fill="#141414" />

          {/* Smile */}
          <path
            d={waving ? "M -10 14 Q 0 24 10 14" : "M -8 15 Q 0 20 8 15"}
            fill="none"
            stroke="#e5262c"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </g>

        {/* Left Arm resting */}
        <path
          d="M 60 145 Q 40 175 48 210"
          fill="none"
          stroke="#141414"
          strokeWidth="18"
          strokeLinecap="round"
        />

        {/* Right Arm - Waving! */}
        <g
          className={`origin-[135px_145px] transition-transform duration-300 ${
            waving ? "animate-pulse" : "group-hover:rotate-12"
          }`}
          style={{
            transform: waving ? "rotate(-18deg)" : "rotate(0deg)",
          }}
        >
          {/* Upper & Forearm */}
          <path
            d="M 135 145 Q 165 125 170 85"
            fill="none"
            stroke="#141414"
            strokeWidth="16"
            strokeLinecap="round"
          />
          {/* Hand with fingers */}
          <g transform="translate(170, 75)">
            <ellipse cx="0" cy="0" rx="9" ry="11" fill="#f6f4f0" stroke="#141414" strokeWidth="2.5" />
            {/* 4 waving fingers */}
            <line x1="-6" y1="-8" x2="-8" y2="-17" stroke="#141414" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="-2" y1="-10" x2="-2" y2="-20" stroke="#141414" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="3" y1="-9" x2="4" y2="-18" stroke="#141414" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="7" y1="-6" x2="11" y2="-14" stroke="#141414" strokeWidth="2.5" strokeLinecap="round" />
          </g>
        </g>
      </svg>
    </div>
  );
}
