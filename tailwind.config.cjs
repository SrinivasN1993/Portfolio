/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#121212",
        secondary: "#aaa6c3",
        tertiary: "#1F1B24",
        "black-100": "#000000",
        "black-200": "#121212",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobgbw.png')",
      },
    },
  },
  plugins: [],
};
