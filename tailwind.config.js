/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      height: {
        screen: "100dvh",
      },
      minHeight: {
        screen: "100dvh",
      },
      fontFamily: {
        monoton: ["Monoton", "cursive"],
        concertOne: ["Concert One", "cursive"],
      },
      colors: {
        primary: "#F9001F",
        secondary: "#111111",
        white: "#FFFFFF",
        black: "#000000",
      },
    },
  },
  plugins: [],
};
