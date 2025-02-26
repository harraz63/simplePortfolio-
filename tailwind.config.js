/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      spacing: {
        pySection: "60px",
      },
      container: {
        center: true,
        screens: {
          sm: '100%',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          "2xl": "1280px",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
