/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    // backgroundColor: {
    //   bgColor: "rgba(0, 0, 0, .9)",
    //   bgColorVariant: "#3f3f46",
    // },
    width: {
      lgContainter: "75%",
      mdContainter: "86%",
      smContainter: "90%",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      Inter: ["Inter", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
