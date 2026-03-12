/** @type {import('tailwindcss').Config} */
import scrollbarHide from 'tailwind-scrollbar-hide';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: {
          soft: '#FFE066',
          light: '#FFF9C4',
          dark: '#F5C800',
        },
        pink: {
          soft: '#FF8FAB',
          light: '#FFD6E0',
          dark: '#E05C80',
        },
        mint: {
          soft: '#A8E6CF',
          light: '#D4F5E9',
          dark: '#52C99A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      animation: {
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'blob': 'blob-move 8s ease-in-out infinite',
      },
    },
  },
  plugins: [scrollbarHide],
};
