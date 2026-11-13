/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#F8F9FA',
        ink: {
          950: '#111215',
          900: '#1C1E23', // Primary deep graphite typography
          800: '#2E3037',
          700: '#42454E',
          600: '#58585A', // Exact official Logo Charcoal
          500: '#6A6D76', // Muted secondary body text
          400: '#8B8E97',
          300: '#B5B8C1',
          200: '#DADBDF',
          100: '#ECEEF0',
          50: '#F5F6F8',
        },
        cobalt: {
          950: '#0C2237',
          900: '#133857',
          800: '#17476F',
          700: '#1B588D', // Exact official Logo Blue (#1B588D)
          600: '#1E6BB3',
          500: '#2881D0',
          400: '#4B9EE7',
          300: '#81C1F3',
          200: '#B9DCF9',
          100: '#E0EFFC',
          50: '#F0F6FD',
        },
        lavender: {
          800: '#3D4556',
          700: '#525C70',
          600: '#67748C',
          400: '#919EBA',
          200: '#C9D2E3',
          100: '#E4E8F1',
          50: '#F3F5F9',
        },
        sand: {
          50: '#FAFAFB',
          100: '#F4F5F7',
          200: '#ECEEF1',
          300: '#E1E3E8', // Hairline borders
          400: '#C9CCD4',
          500: '#9FA3AE',
        },
        night: {
          950: '#0A0D12',
          900: '#0F141C', // Dark storytelling surface
          800: '#161D28',
          700: '#202938',
          600: '#2C374A',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Newsreader', 'Playfair Display', 'Georgia', 'serif'],
        editorial: ['Newsreader', 'Georgia', 'serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(23, 25, 31, 0.04), 0 1px 2px -1px rgba(23, 25, 31, 0.02)',
        'card': '0 4px 20px -2px rgba(23, 25, 31, 0.05), 0 2px 6px -1px rgba(23, 25, 31, 0.03)',
        'lifted': '0 12px 32px -4px rgba(23, 25, 31, 0.08), 0 4px 12px -2px rgba(23, 25, 31, 0.03)',
      },
      animation: {
        'marquee': 'marquee 32s linear infinite',
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
