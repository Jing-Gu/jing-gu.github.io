/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{html,ts}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["inter", "sans-serif"],
    },
    fill: {
      current: 'currentColor',
    },
    colors: {
      teal: "#00A19D",
      salmon: "#E05D5D",
      cream: "#FFF8E5",
      charcoal: "#333333",
      smoke: "#757575",
      fog: "#d3d3d3",
      offwhite: "#ececec",
      white: "#fff",
      transparent: "transparent"
    },
    extend: {},
  },
  plugins: [],
}

