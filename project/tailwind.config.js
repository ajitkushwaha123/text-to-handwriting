// tailwind.config.js
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  screens: {
    as : "0px",
    xs: "480px",
    ss: "620px",
    km: "768px",
    sm :"952px",
    md: "1060px",
    lg: "1280px",
    xl: "1700px",
  },
  darkMode: "class",
  plugins: [nextui()]
}