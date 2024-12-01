/** @type {import('tailwindcss').Config} */

/* MATERIAL TAILWIND CONFIG */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "source-light": ["Source-Light", "sans-serif"],
        "source-regular": ["Source-Regular", "sans-serif"],
        "source-medium": ["Source-Regular", "sans-serif"],
        "source-semibold": ["Source-Semibold", "sans-serif"],
        "source-bold": ["Source-Bold", "sans-serif"],
        "inter-extrabold": ["Inter-Extrabold", "sans-serif"],
        "inter-black": ["Inter-Black", "sans-serif"],
        "inter-bold": ["Inter-Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
});
