import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // Brand rule: NO RED. The `red` palette is stripped from the default
    // theme so utilities like `bg-red-500` or `text-red-*` simply don't exist.
    // Also skip deprecated Tailwind aliases without reading them, which
    // would otherwise trigger rename warnings on every build.
    colors: ({ colors }) => {
      const SKIP = new Set([
        "red",
        "lightBlue",
        "warmGray",
        "trueGray",
        "coolGray",
        "blueGray",
      ]);
      const source = colors as unknown as Record<string, unknown>;
      const allowed: Record<string, unknown> = {};
      for (const key of Object.keys(source)) {
        if (!SKIP.has(key)) {
          allowed[key] = source[key];
        }
      }
      return {
        ...allowed,
        sodaGreen: "#6FCB1F",
        sodaBlue: "#2DB8E0",
        sodaPink: "#FF1F8F",
        sodaYellow: "#FFD600",
        sodaCream: "#F5E8C8",
        cream: "#FFF8EC",
      };
    },
    extend: {
      fontFamily: {
        heading: ["var(--font-fredoka)", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      keyframes: {
        "hero-float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "hero-float": "hero-float 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
