/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'color-primary': 'var(--color-primary)',
        'color-secondary': 'var(--color-secondary)',
        'color-cards': 'var(--color-cards)',
        'color-text': 'var(--color-text)',
        'color-bg': 'var(--color-bg)',
        'color-text-footer': 'var(--color-text-footer)',
        'color-secondary-text': 'var(--color-secondary-text)',
        'color-cards-desk': 'var(--color-cards-desk)',
        'color-cards-light': 'var(--color-cards-light)'
      },
      fontFamily: {
        'font-main': 'var(--font-main)',
        'font-text': 'var(--font-text)',
        'font-title': 'var(--font-title)'
      }
    }
  },
  plugins: []
};
