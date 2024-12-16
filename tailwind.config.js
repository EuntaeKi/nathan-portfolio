/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "app-accent": "#FF4949",
        "app-red": "#EC7979",
        "app-blue": "#85ECE0",
        "web-blue": "#7BDDFF",
        "web-gray": "#8F9094",
        "web-dark-blue": "#4B60C0",
        "web-bg": "#1B1B23",
        "web-dirty-white": "#F2F5F6",
      },
      fontFamily: {
        "press-start-2p": "'Press Start 2P'",
        "clash-variable": "ClashDisplay-Variable",
        "clash-extra-light": "ClashDisplay-Extralight",
        "clash-light": "ClashDisplay-Light",
        "clash-regular": "ClashDisplay-Regular",
        "clash-medium": "ClashDisplay-Medium",
        "clash-semibold": "ClashDisplay-Semibold",
        "clash-bold": "ClashDisplay-Bold",
        inter: "Inter",
        rubik: "Rubik",
        "bebas-neue-bold": "Bebas-Neue-Bold",
        "bebas-neue-book": "Bebas-Neue-Book",
        "bebas-neue": "Bebas-Neue",
        "bebas-neue-light": "Bebas-Neue-Light",
        "bebas-neue-thin": "Bebas-Neue-Thin",
      },
      flex: {
        2: "2 2 0%",
        3: "3 3 0%",
        4: "4 4 0%",
        5: "5 5 0%",
      },
      backgroundImage: {
        "web-img-background-gradient":
          "linear-gradient(180deg, rgba(75, 96, 192, 0) 0%, rgba(75, 96, 192, 0.94) 80%, #4B60C0 100%)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".web-profile-slider-thumb": {
            appearance: "none",
            width: "1rem",
            height: "1rem",
            "background-color": "#4B60C0",
            "border-radius": "9999px",
          },
          ".web-profile-slider": {
            appearance: "none",
            width: "100%",
            height: "3px",
            "background-color": "#8F9094",
            outline: "none",
          },
          ".web-profile-quote-before::before": {
            content: '"\\201C"',
            color: "#4B60C0",
            "font-family": "ClashDisplay-Bold",
            "font-size": "2rem",
            "margin-right": "1rem",
            "margin-left": "-2rem",
          },
          ".web-profile-quote-after::after": {
            content: '"\\201D"',
            color: "#4B60C0",
            "font-family": "ClashDisplay-Bold",
            "font-size": "2rem",
            "margin-left": "1rem",
          },
          ".web-user-journey-step-after::after": {
            content:
              'url("data:image/svg+xml;utf8,<svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"20\\" height=\\"20\\" viewBox=\\"0 0 20 20\\"><polygon points=\\"0,0 20,0 10,18\\" fill=\\"gray\\" /></svg>")',
            display: "inline-block",
            transform: "rotate(270deg)",
            width: "20px",
            height: "20px",
            marginLeft: "25%",
          },
        },
        ["&::-webkit-slider-thumb", "&::-moz-range-thumb"]
      );
    },
  ],
};
