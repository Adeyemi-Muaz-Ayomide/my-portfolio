/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    // backgroundColor: {
    //   bgColor: '#fff',

    // },
    // width: {
    //   lgContainter: "75%",
    //   mdContainter: "86%",
    //   smContainter: "90%",
    // },
    fontFamily: {
      custom: ["Monument", "sans-serif"],
      poly: ["Poly", "serif"],
      Inter: ["Inter", "sans-serif"],
      workSans: ['Work Sans',"sans-serif"],
    },
    extend: {},
    plugins: [],
  },
};
