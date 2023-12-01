import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },
    extend: {
      animation: {
        fadeIn: "fadeIn .4s ease-in-out",
        fadeOut: "fadeOut 1s",
      },
      colors: {
        "qq-primary": "#EAB62F",
        "qq-title": "#333",
        "qq-description": "#666",
        "qq-light": "#999",
        "qq-green": "#939B45",
        "qq-red": "#BA3127",
        "qq-greenghost": "#F4F5EC",
        "qq-redghost": "#F8EAE9",
        "qq-background": "#F2F9FF",
        "qq-border": "#F3F3F3",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        fade: {
          "0%, ": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      transitionProperty: {
        width: "width",
        heigth: "heigth",
      },
    },
  },
  plugins: [],
};
export default config;
