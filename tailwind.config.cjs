/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      white: '#ffffff',

      primary: {
        50: '#eef8fd',
        100: '#d7eefb',
        200: '#b0def6',
        300: '#7cc8ef',
        400: '#52b5e9',
        500: '#39abe2', // your brand blue
        600: '#2d96f0',
        700: '#1f7fc9',
        800: '#1868a3',
        900: '#145681',
        950: '#0e3a57',
      },

      charcoal: '#3c3c3b',
      gray: '#dadad9',

      stone: colors.stone,
    },


    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },

    fontSize: {
      xs: ['0.75rem', '1rem'],
      sm: ['0.875rem', '1.25rem'],
      base: ['1rem', '1.75rem'],
      lg: ['1.125rem', '2rem'],
      xl: ['1.25rem', '2.125rem'],
      '2xl': ['1.5rem', '2rem'],
      '3xl': ['1.875rem', '2.375rem'],
      '4xl': ['2.25rem', '2.75rem'],
      '5xl': ['3rem', '3.5rem'],
      '6xl': ['3.75rem', '4.25rem'],
    },
  },
};
