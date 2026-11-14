/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: '#f6f4f0',
        paperDark: '#ede8e0',
        ink: '#141414',
        posterRed: {
          DEFAULT: '#e5262c',
          hover: '#c81e24',
          subtle: '#fde8e9',
        },
        accent: {
          DEFAULT: '#e5262c',
          hover: '#c81e24',
          subtle: '#fde8e9',
          border: '#f8b4b7',
        },
      },
      fontFamily: {
        sans: [
          'Plus Jakarta Sans',
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'sans-serif',
        ],
        mono: ['JetBrains Mono', 'monospace'],
        poster: [
          'Futura',
          'Century Gothic',
          'Avenir Next',
          'ui-sans-serif',
          'sans-serif',
        ],
      },
      boxShadow: {
        'poster': '0 2px 0 #141414',
        'poster-lg': '4px 4px 0 #141414',
        'poster-red': '4px 4px 0 #e5262c',
        'paper': '0 10px 30px -10px rgba(20, 20, 20, 0.08)',
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
