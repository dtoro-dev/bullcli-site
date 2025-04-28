/** @type {import('tailwindcss').Config} */
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
        'gray-light': '#9ca3af'
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: '#0f172a',
            a: {
              color: '#38bdf8',
              '&:hover': {
                color: '#22aba6',
              },
            },
            'h1,h2,h3,h4': {
              color: '#0f172a',
            },
          },
        },
        invert: {
          css: {
            color: '#fff',
            'h1,h2,h3,h4': {
              color: '#fff',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}