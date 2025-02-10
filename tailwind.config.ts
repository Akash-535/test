import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "light-black":"#2E2F37",
        "light-gray":"#656566",
        "again-black":"#14191C",
        "light-white":"#D0D5DD",
        "medium-gray":"#475467",
        "custom-blue":"#0031E2"
      },
    },
  },
  plugins: [],
} satisfies Config;
