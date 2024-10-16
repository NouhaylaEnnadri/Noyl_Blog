/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "move-left": "moveLeft 1s ease-in-out forwards",
        "cube-spin": "cubeSpin 3s infinite linear",
      },
      extend: {
        colors: {
          "pastel-pink": "#FFB7B2",
          "pastel-blue": "#AEC6CF",
          "pastel-green": "#B4E7B8",
          "pastel-yellow": "#FFFACD",
          "pastel-purple": "#CBAACB",
          "pastel-teal": "#A1E9E8",
        },
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        moveLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        cubeSpin: {
          "0%": { transform: "rotate3d(1, 1, 0, 0deg)" },
          "100%": { transform: "rotate3d(1, 1, 0, 360deg)" },
        },
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
  daisyui: {
    themes: ["night", "winter"],
  },
};
