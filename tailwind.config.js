/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    screens: {
      xs: '0px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      'masthead-xl': '1199px',
      xl: '1200px',
    },
    extend: {
      colors: {
        crimson: 'rgb(158, 6, 6)',
        primary: '#007bff',
        secondary: '#53aff4',
        success: '#28a745',
        info: '#17a2b8',
        warning: '#ffc107',
        danger: '#dc3545',
        light: '#f8f9fa',
        dark: '#343a40',
        'brand-navy': '#002752',
      },
      fontFamily: {
        sans: ['GlacialIndifference', 'Arial', 'sans-serif'],
        mono: [
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'Courier New',
          'monospace',
        ],
      },
      fontSize: {
        'masthead-title': ['4rem', { lineHeight: '4rem' }],
        'masthead-title-md': ['5rem', { lineHeight: '5rem' }],
        'masthead-title-xl': ['6.4rem', { lineHeight: '6.4rem' }],
        'masthead-subtitle': ['1.6rem', { lineHeight: '2rem' }],
        'masthead-copy': ['1.3rem', { lineHeight: 'inherit' }],
        'press-title': ['2rem', { lineHeight: '1.2rem' }],
        'press-subtitle': ['1.75rem', { lineHeight: '1.2rem' }],
      },
    },
  },
  plugins: [],
};