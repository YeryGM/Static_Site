import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brandBlue: "#174773",
        brandDark: "#203C59",
        brandGreen: "#61A33D",
        brandLime: "#9fbf2a"
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Outfit", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
