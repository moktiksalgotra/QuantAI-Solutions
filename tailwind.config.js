/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Or any other font you choose from Google Fonts
        dmsans: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 