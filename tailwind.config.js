/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/assets/**/*.{js,ts,jsx,tsx}",
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
        "showFromLeft" : {
          "0%" : {transform : "translateX(-2rem)", opacity : "0"},
          "60%" : {transform : "translateX(3rem)", opacity : "0.4"},
          "80%" : {transform : "translateX(3rem)", opacity : "0.7"},
          "100%" : {transform : "translateX(0)", opacity : "1"},
        },
        "open-from-center" : {
          "0%" : {transform : "matrix(0.1, 0, 0, 1, 30, -30)"},
          "100%" : {transform : "matrix(1, 0, 0, 1, 0, 0)"},
        },
      },
      animation: {
        "comeFromLeft" : ".5s ease-in-out comeFromLeft",
        "open-from-center" : ".3s ease-in-out open-from-center",
        "show-from-left" : ".5s ease-in-out showFromLeft"
      }
    },
  },
  plugins: [],
}