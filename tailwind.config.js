/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#02040a',
          900: '#040714',
          800: '#070b1d',
          700: '#0d1527',
        },
        electric: {
          blue: '#1d4ed8',
          cyan: '#38bdf8',
          glow: '#0066ff',
          neon: '#00d4ff',
        },
        violet: {
          accent: '#8b5cf6',
          magenta: '#d946ef',
          glow: '#a855f7',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-blue': '0 0 50px -10px rgba(37, 99, 235, 0.45)',
        'glow-cyan': '0 0 40px -10px rgba(56, 189, 248, 0.4)',
        'glow-pill': '0 0 25px rgba(255, 255, 255, 0.25)',
      },
      animation: {
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee': 'marquee 28s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}

