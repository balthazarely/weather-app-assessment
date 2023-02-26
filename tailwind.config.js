/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "400px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        weatherBlue: "#115DA3",
        weatherCyan: "#4ECFED",
        textblue: "#65AED5",
        textgray: "#4A4A4A",
      },
      fontFamily: {
        sans: ['"Open Sans"', "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 2s linear infinite",
      },
    },
  },
};
