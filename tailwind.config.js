/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...defaultTheme.colors,
      inherit: "inherit",
      current: "currentColor",
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      primary: {
        DEFAULT: "var(--primary-color)",
        bold: "var(--primary-color-bold)",
        opacity: "var(--primary-color-opacity)",
      },
      screen: {
        DEFAULT: "var(--screen-color)",
      },
      secondary: {
        DEFAULT: "var(--secondary-color)",
        bold: "var(--secondary-color-bold)",
        opacity: "var(--secondary-color-opacity)",
      },
    },
    extend: {
      ...defaultTheme,
      screens: {
        xs: "320px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      fontFamily: {
        primary: ["FC Iconic", ...defaultTheme.fontFamily.sans],
      },
  },
  plugins: [],
}
}
