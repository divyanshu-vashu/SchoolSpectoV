// tailwind.config.js

module.exports = {
  content: ["./src/**/*.{js,jsx}"], // Specify where Tailwind should look for classes
  mode: "jit", // Just-in-Time mode for faster builds and runtime performance

  theme: {
    extend: {
      colors: {
        secondary: "#aaa6c3",
        tertiary: "#151030",
        primary: "#ffffff",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.jpeg')",
      },
      backgroundColor: {
        "hero-white": "#ffffff",
      },
    },
  },

  plugins: [], // Additional plugins if needed
};
