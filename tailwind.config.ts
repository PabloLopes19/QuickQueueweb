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
        "qq-title": "#333",
        "qq-description": "#666",
        "qq-light": "#999",
        "qq-green": "#939B45",
        "qq-red": "#BA3127",
        "qq-greenghost": "#F4F5EC",
        "qq-redghost": "#F8EAE9",
        "fd-background": "#F2F9FF",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
