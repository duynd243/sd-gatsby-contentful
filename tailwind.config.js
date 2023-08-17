/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [`./src/pages/**/*.{js,jsx,ts,tsx}`, `./src/components/**/*.{js,jsx,ts,tsx}`],
  theme: {
    fontFamily: {
      sans: ['Nunito Sans, sans-serif'],
    },
    extend: {
      fontSize: {
        h1: [
          '3.75rem',
          {
            lineHeight: '140%',
            fontWeight: '900',
            letterSpacing: '0.0375rem',
          },
        ],
        h2: [
          '1.875rem;',
          {
            lineHeight: '150%',
            fontWeight: '700',
          },
        ],
        'hero-title': [
          '3.875rem',
          {
            lineHeight: '130%',
            fontWeight: '900',
            letterSpacing: '0.03875rem',
          },
        ],
        'hero-description': [
          '1.125rem',
          {
            lineHeight: '140%',
            fontWeight: '400',
            letterSpacing: '180%',
          },
        ],
      },
      dropShadow: {
        'intro-block': '0px 4px 120px rgba(58, 86, 78, 0.07)',
        button: '0px 4px 60px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};
