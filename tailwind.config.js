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
      colors: {
        logoPrimary: "#134867",
        logoSecondary: "#e2d5a8",
        greyText: "#777777",
        greyBorder: "#E5E5E5",
        starColor: "#ffcd53",
        greyBackground: "#F5F5F5",
      },
      height: {
        footerMap: "45vh",
        testimonial: "50vh",
      },
      spacing: {
        0: "0vh",
        1: "0.4vh",
        2: "0.8vh",
        3: "1.3vh",
        4: "1.7vh",
        5: "2.1vh",
        6: "2.6vh",
        8: "3.3vh",
        10: "4.3vh",
        12: "5.1vh",
        14: "6.0vh",
        16: "6.8vh",
        20: "8.6vh",
      },
      fontSize: {
        "9xl": "8.1vh",
        "8xl": "7.1vh",
        "7xl": "6.2vh",
        "6xl": "5.3vh",
        "5xl": "4.5vh",
        "4xl": "3.8vh",
        "3xl": "3.2vh",
        "2.5xl": "2.6vh",
        "2xl": "2.3vh",
        xl: "2.2vh",
        lg: "2.0vh",
        md: "2.0vh",
        base: "1.8vh",
        sm: "1.7vh",
        xs: "1.5vh",
      },
      fontFamily: {
        "source-light": ["Source-Light", "sans-serif"],
        "source-regular": ["Source-Regular", "sans-serif"],
        "source-medium": ["Source-Medium", "sans-serif"],
        "source-semibold": ["Source-Semibold", "sans-serif"],
        "source-bold": ["Source-Bold", "sans-serif"],
        "inter-extrabold": ["Inter-Extrabold", "sans-serif"],
        "inter-black": ["Inter-Black", "sans-serif"],
        "inter-bold": ["Inter-Bold", "sans-serif"],
        playfair: ["Playfair-Display", "sans-serif"],
      },
    },
  },
  plugins: [],
});
