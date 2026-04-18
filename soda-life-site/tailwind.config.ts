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
        sodaGreen: "#4AD66D",
        sodaBlue: "#3BB5F0",
        sodaPink: "#FF6FB5",
        cream: "#FFF8EC",
      };
    },
    extend: {
      fontFamily: {
        heading: ["var(--font-fredoka)", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
