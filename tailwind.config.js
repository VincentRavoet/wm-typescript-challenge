/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pampas: "#f2f2e9",
        radial: "#ff495d",
      },
    },
  },
  plugins: [],
};
