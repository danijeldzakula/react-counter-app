/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  prefix: '',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
      },
    },
    extend: {
      colors: {},
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'clamp-404': 'clamp(160px, 14vw, 320px)',
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('tailwindcss-animate'), require('tailwind-scrollbar-hide')],
};
