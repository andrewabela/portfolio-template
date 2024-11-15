import { text } from "stream/consumers";
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
        background: "var(--background)",
        foreground: "var(--foreground)",
        'brown': {
          100: '#f7f3f0',
          200: '#e1d8d0',
          300: '#a8856e',
          400: '#8f6d5b',
          500: '#775548',
          600: '#6c4b3f',
          700: '#5a3e34',
          800: '#493028',
          900: '#3d2722',
          950: '#2d1a16',
        },
      },
      borderRadius: {
        "large": '24px',
        "mid": '22px',
      },
      padding: {
        px: '1px',
      },
    },
  },
  safelist: [
    {
      pattern: /bg-(gray|slate|zinc|neutral|brown|red|orange|amber|yellow|lime|green|emerald|teal|blue|indigo|purple|fuchsia|pink|rose|black|white)-300/,
    },
    {
      pattern: /text-(gray|slate|zinc|neutral|brown|red|orange|amber|yellow|lime|green|emerald|teal|blue|indigo|purple|fuchsia|pink|rose|black|white)-300/,
    },
  ],
  plugins: [],
};
export default config;
