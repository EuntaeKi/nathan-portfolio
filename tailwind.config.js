/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "app-red": "#EC7979",
        "app-blue": "#85ECE0",
        "web-blue": "#7BDDFF",
        "web-gray": "#8F9094",
        "web-dark-blue": "#4B60C0",
        "web-bg": "#1B1B23",
      },
      fontFamily: {
        "clash-variable": "ClashDisplay-Variable",
        "clash-extra-light": "ClashDisplay-Extralight",
        "clash-light": "ClashDisplay-Light",
        "clash-regular": "ClashDisplay-Regular",
        "clash-medium": "ClashDisplay-Medium",
        "clash-semibold": "ClashDisplay-Semibold",
        "clash-bold": "ClashDisplay-Bold",
        inter: "Inter",
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
  plugins: [],
};
