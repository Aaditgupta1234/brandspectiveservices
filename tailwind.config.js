/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#F8F8F5',
        ink: {
          950: '#111317',
          900: '#17191F', // Primary typography
          800: '#272B33',
          700: '#3A3F4B',
          500: '#5A606E', // Muted secondary body text
          400: '#7E8594',
          300: '#A6ACB8',
          200: '#D2D6DE',
          100: '#EAECEF',
          50: '#F4F5F7',
        },
        cobalt: {
          900: '#15344C',
          800: '#1C496B',
          700: '#245C86', // Confident brand accent
          600: '#2E6F9F',
          500: '#3E87BE',
          400: '#64A4D4',
          200: '#B8D9EF',
          100: '#DCEBF5',
          50: '#EDF5FA',
        },
        lavender: {
          800: '#48425C',
          700: '#675E82', // Muted secondary accent
          600: '#7A7297',
          400: '#A49CBF',
          200: '#D5CFE4',
          100: '#E8E4F1',
          50: '#F3F0F8',
        },
        sand: {
          50: '#FBFBFA',
          100: '#F8F8F5', // Light neutral primary canvas
          200: '#F1F1EB',
          300: '#E6E6DE', // Hairline borders
          400: '#D5D5CA',
          500: '#B5B5A7',
        },
        night: {
          950: '#0B0D11',
          900: '#12141A', // Dark storytelling surface
          800: '#171A22',
          700: '#222631',
          600: '#303544',
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
