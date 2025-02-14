import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        castoro: ["Castoro"],
      },
      colors: {
        "Green-Success": "#49A569",
        "Green-300": "#2B5F44",
        "Green-500": "#243831",
      },
    },
  },
  plugins: [],
} satisfies Config;
