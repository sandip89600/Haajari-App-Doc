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
          orange: '#FF5B06',
          navy: '#0C1E29',
          navyDark: '#0B1E36',
          navyDeep: '#071424',
          grayLight: '#F3F4F6',
          grayBg: '#F8FAFC',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Outfit', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 4px 20px -2px rgba(12, 30, 41, 0.08), 0 2px 12px -2px rgba(255, 91, 6, 0.04)',
        'premium-hover': '0 10px 30px -5px rgba(12, 30, 41, 0.15), 0 4px 18px -2px rgba(255, 91, 6, 0.08)',
        'premium-dark': '0 4px 20px -2px rgba(0, 0, 0, 0.4), 0 2px 12px -2px rgba(255, 91, 6, 0.05)',
        'premium-dark-hover': '0 10px 30px -5px rgba(0, 0, 0, 0.6), 0 4px 18px -2px rgba(255, 91, 6, 0.1)',
      }
    },
  },
  plugins: [],
}
