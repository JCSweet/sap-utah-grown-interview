import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "green1": "#103c00",
        "green2": "#35711f",
        "green3": "#60a543",
        "green4": "#e6efc5",
        "tan1": "#4f463c",
        "tan2": "#e7cbaf",
        "grey1": "#333333",
        "grey2": "#808080",
        "grey3": "#f2f2f2",
      },
      fontFamily: {
        "header": "Proxima Nova, sans-serif",
        "body": "Interstate Condensed, sans-serif"
      },
    },
  },
  plugins: [],
};
export default config;
