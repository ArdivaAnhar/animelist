/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      primary100: "#FFFFFF",
      primary200: "#e0e0e0",
      primary300: "#9b9b9b",
      accent100: "#FFD700",
      accent200: "#917800",
      text100: "#FFFFFF",
      text200: "#e0e0e0",
      bg100: "#0F1626",
      bg200: "#1e2436",
      bg300: "#363c4e",
    },
  },
  plugins: [],
};
