module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "haulogy-blue": "#16D5C1",
        "haulogy-orange": "#F48F5A",
        "haulogy-purple": "#AB47BC",
        "umons-red": "#C22049",
        "umons-red2": "#931535",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/forms")],
  darkMode: "class",
};
