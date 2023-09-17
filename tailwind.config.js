/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        darkgray: "rgba(166, 170, 180, 0.6)",
        ghostwhite: "#f8f8ff",
        black: "#000",
        purple: "#613eea",
        blueviolet: "rgba(97, 62, 234, 0.4)",
        slategray: "#757f8c",
      },
      spacing: {},
      fontFamily: {
        "open-sans": "'Open Sans'",
        "sf-pro-text": "'SF Pro Text'",
      },
    },
    fontSize: {
      base: "1rem",
      mid: "1.06rem",
      inherit: "inherit", 
      xl:"1.1rem"
    },
  },
  corePlugins: {
    preflight: false,
  },
};
