import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        whereWhite: "#F1F1F1",
        whereBlack: "#474747",
        white: "#FFFFFF",
        primary: "#FF8B13",
        orange: "#FF8B13",
        secondary: "#FFA500",
        error: "#E8443F",
        success: "#6FC772",
        grey: "#BFBFBF",
        info: "#2196F3",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        ming: {
          whereWhite: "#F1F1F1",
          whereBlack: "#474747",
          white: "#FFFFFF",
          primary: "#FF8B13",
          secondary: "#FFA500",
          error: "#E8443F",
          success: "#6FC772",
          grey: "#BFBFBF",
          info: "#2196F3",
        },
      }, 
    ],
  },
};
export default config;
