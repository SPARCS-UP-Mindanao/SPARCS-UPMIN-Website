/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        arca: ["ArcaMajora3", "sans-serif"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        dazzlingBlue: {
          DEFAULT: "#3853A4",
          50: "#0122BA",
        },
      },
      fontSize: {
        "13xl": "13rem",
      },
      height: {
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "30rem": "30rem",
        "55rem": "55rem",
      },
    },
  },
  plugins: [],
};
