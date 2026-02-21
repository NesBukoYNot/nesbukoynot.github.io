/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2d5a28',
          hover: '#1e3d1a',
          light: '#4a8a42',
        },
        secondary: {
          DEFAULT: '#8b5a2b',
          hover: '#6d4621',
        },
        accent: '#f4ebd0',
      },
      fontFamily: {
        outfit: ['Outfit', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
