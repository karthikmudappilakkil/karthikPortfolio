/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',
        surface: '#FFFFFF',
        subtle: '#FAFAFA',
        mutedSurface: '#F4F4F5',
        zinc: {
          950: '#09090B',
          800: '#27272A',
          700: '#3F3F46',
          600: '#52525B',
          500: '#71717A',
          400: '#A1A1AA',
          300: '#D4D4D8',
          200: '#E4E4E7',
          100: '#F4F4F5',
          50: '#FAFAFA',
        },
        accent: {
          DEFAULT: '#2563EB',
          hover: '#1D4ED8',
          subtle: '#EFF6FF',
          border: '#BFDBFE',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 1px 2px 0 rgba(0, 0, 0, 0.04)',
        'card': '0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px -1px rgba(0, 0, 0, 0.04)',
        'card-hover': '0 4px 16px -2px rgba(0, 0, 0, 0.06), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'elevated': '0 8px 30px rgba(0, 0, 0, 0.08)',
        'glow': '0 0 25px -5px rgba(37, 99, 235, 0.15)',
      },
      animation: {
        marquee: 'marquee var(--duration, 30s) linear infinite',
        'marquee-reverse': 'marquee-reverse var(--duration, 30s) linear infinite',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0%)' },
          to: { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          from: { transform: 'translateX(-50%)' },
          to: { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
};
