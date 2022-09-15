/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes : {
        "comeFromLeft" : {
          "0%" : {transform : "translateX(-24rem)"},
          "60%" : {transform : "translateX(3rem)"},
          "80%" : {transform : "translateX(3rem)"},
          "100%" : {transform : "translateX(0)"},
        },
        "open-from-center" : {
          "0%" : {transform : "matrix(0.1, 0, 0, 1, 30, -30)"},
          "100%" : {transform : "matrix(1, 0, 0, 1, 0, 0)"},
        },
      },
      animation: {
        "comeFromLeft" : ".5s ease-in-out comeFromLeft",
        "open-from-center" : ".3s ease-in-out open-from-center",
      }
    },
  },
  plugins: [],
}