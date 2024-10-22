/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f5f7fa",
          100: "#e9eef5",
          200: "#cfdce8",
          300: "#a5bfd4",
          400: "#759dbb",
          500: "#5381a4",
          600: "#406789",
          700: "#35536f",
          800: "#2f475d",
          900: "#2b3d4f",
          950: "#1d2834",
        },
        secondary: {
          50: "#fcfcea",
          100: "#f8f9c8",
          200: "#f3f295",
          300: "#ece558",
          400: "#e5d32a",
          500: "#d5bb1d",
          600: "#b89516",
          700: "#926c15",
          800: "#7a5619",
          900: "#68471b",
          950: "#3c260c",
        },
      },
    },
    fontFamily: {
      body: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      sans: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
    },
  },
  plugins: [require("flowbite/plugin")],
}
