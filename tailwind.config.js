/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, js}"],
  theme: {
    extend: {
      colors: {
        tomato: "#ff6257",
        pinkato: "#ff5379",
        darkSlateGrey: "#242742",
        charcoalGrey: "#36384e",
        whitee: "#ffffff",
      },
      screens: {
        ssm: { max: "680px" },
      },
    },
  },
  plugins: [],
};
