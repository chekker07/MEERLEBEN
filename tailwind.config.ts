import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0D2F5A",
        ocean: "#2F8DEB",
        gold: "#F2B941",
        cream: "#F7F5F1",
        sand: "#EADCC7",
        ink: "#10243D",
      },
      boxShadow: {
        soft: "0 24px 70px rgba(13,47,90,.10)",
        lift: "0 18px 40px rgba(13,47,90,.16)",
      },
      borderRadius: { "4xl": "2rem" },
      letterSpacing: { brand: ".18em", display: "-.045em" },
    },
  },
  plugins: [],
} satisfies Config;
