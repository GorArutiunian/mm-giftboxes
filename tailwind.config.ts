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
        ivory: "#FAF7F2",
        cream: "#F3EBE0",
        sage: {
          DEFAULT: "#7F8F72",
          soft: "#A8B59C",
          deep: "#5F6E54",
        },
        coffee: {
          DEFAULT: "#5C4033",
          deep: "#3D2A22",
          soft: "#8A6A56",
        },
        gold: {
          DEFAULT: "#C4A574",
          soft: "#D9C4A0",
        },
      },
      fontFamily: {
        display: [
          "var(--font-display)",
          "var(--font-display-hy)",
          "Georgia",
          "serif",
        ],
        sans: [
          "var(--font-sans)",
          "var(--font-sans-hy)",
          "system-ui",
          "sans-serif",
        ],
      },
      boxShadow: {
        soft: "0 12px 40px -20px rgba(61, 42, 34, 0.28)",
      },
      backgroundImage: {
        "paper-grain":
          "radial-gradient(ellipse at 20% 0%, rgba(196,165,116,0.12), transparent 50%), radial-gradient(ellipse at 90% 10%, rgba(127,143,114,0.10), transparent 45%), linear-gradient(180deg, #FAF7F2 0%, #F3EBE0 100%)",
        "hero-glow":
          "radial-gradient(ellipse at 50% 20%, rgba(217,196,160,0.35), transparent 55%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "soft-pulse": {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "0.85" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        "fade-up-delay": "fade-up 0.7s ease-out 0.12s both",
        "fade-up-delay-2": "fade-up 0.7s ease-out 0.24s both",
        "soft-pulse": "soft-pulse 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
