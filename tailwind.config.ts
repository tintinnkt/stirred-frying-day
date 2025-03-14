import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";

const config: Config = {
  important: true,
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#1E1E1E",
        primary: {
          50: "#E6F0F9",
          100: "#CCE1F3",
          200: "#99C3E7",
          300: "#66A4DB",
          400: "#3386CF",
          500: "#247BBA",
          600: "#1D6295",
          700: "#154872",
          800: "#0E2F4F",
          900: "#06172B",
          DEFAULT: "247BBA",
        },
        secondary: {
          50: "#FFF4DC",
          100: "#FFE9BA",
          200: "#FFD47A",
          300: "#FFC048",
          400: "#FFAC26",
          500: "#FBAD18",
          600: "#D28C12",
          700: "#A86A0D",
          800: "#7F4909",
          900: "#552905",
          DEFAULT: "FBAD18",
        },
        grayLight: "#E5E5E5",
        orangeLight: "#FF8E30",
        componentBackground: "#FFF9E6",
        grayMedium: "#D9D9D9",
        background: "#FFFFF2",
      },
    },
  },
  darkMode: "class",
  plugins: [typography()],
};
export default config;
