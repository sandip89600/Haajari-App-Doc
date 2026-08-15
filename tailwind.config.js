/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#F54F1B',
          navy: '#1E223D',
          navyDark: '#171B33',
          navyDeep: '#1E223D',
          grayLight: '#F3F4F6',
          grayBg: '#F8FAFC',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Outfit', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 4px 20px -2px rgba(30, 34, 61, 0.08), 0 2px 12px -2px rgba(245, 79, 27, 0.04)',
        'premium-hover': '0 10px 30px -5px rgba(30, 34, 61, 0.15), 0 4px 18px -2px rgba(245, 79, 27, 0.08)',
        'premium-dark': '0 4px 20px -2px rgba(0, 0, 0, 0.4), 0 2px 12px -2px rgba(245, 79, 27, 0.05)',
        'premium-dark-hover': '0 10px 30px -5px rgba(0, 0, 0, 0.6), 0 4px 18px -2px rgba(245, 79, 27, 0.1)',
      }
    },
  },
  plugins: [],
}
