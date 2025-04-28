// tailwind.config.js
/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography'

export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0f172a',
        secondary: '#38bdf8',
        accent: '#22aba6',
        background: '#9dbdeb',
        'gray-text': '#6b7280',
        'gray-light': '#9ca3af',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: theme('colors.primary'),
            a: {
              color: theme('colors.secondary'),
              '&:hover': {
                color: theme('colors.accent'),
              },
            },
            strong: { color: theme('colors.primary') },
            'h1,h2,h3,h4': {
              color: theme('colors.primary'),
            },
          },
        },
        invert: {
          css: {
            color: theme('colors.white'),
            a: {
              color: theme('colors.secondary'),
              '&:hover': {
                color: theme('colors.accent'),
              },
            },
            strong: { color: theme('colors.white') },
            'h1,h2,h3,h4': {
              color: theme('colors.white'),
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
}
