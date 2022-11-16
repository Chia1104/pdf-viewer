module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  screen: {
    sm: "375px",
    md: "767px",
    lg: "1023px",
    xl: "1440px",
  },
  theme: {
    extend: {
      colors: {
        primary: "#455A64",
        primaryTransparent: "rgba(69, 90, 100, 0.5)",
        secondary: "#7FABBE",
        red: "#E93C3C",
        blue: "#3C6CE9",
        error: "#973232",
        success: "#4caf50",
        info: "#2196f3",
        warning: "#ff9800",
        danger: "#f44336",
        light: "#fafafa",
        dark: "#212121",
        white: "#ffffff",
        black: "#000000",
        code: "#24292e",
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
    require("tailwind-scrollbar")({ nocompatible: true }),
    require("@tailwindcss/typography"),
  ],
  darkMode: "class",
};
