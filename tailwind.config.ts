import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        lexend: 'var(--font-lexend)',
        roboto: 'var(--font-roboto)',
        space_mono: 'var(--font-space_mono)',
      },
    },
  },
  plugins: [],
} satisfies Config;
