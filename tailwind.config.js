/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#f69050',
        secondary: '#fb873f',
        light: '#f0e4de',
        dark: '#181d38',
      },
    },
  },
  plugins: [],
}
