/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#3563BE", // Blue - main brand color
        secondary: "#F3EEDE", // Cream - neutral backgrounds
        accent: "#E05353", // Coral red - CTAs, alerts
        green: "#426A5A", // Forest green - secondary accent
        tan: "#C1B4AE", // Warm tan - tertiary
        dark: "#3B1F2B", // Burgundy - dark sections/footer
        neutral: {
          50: "#FFFFFF",
          100: "#F3EEDE",
          200: "#C1B4AE",
          300: "#9a9588",
          400: "#6b6659",
          500: "#4a463d",
          600: "#3B1F2B",
          700: "#35332c",
          800: "#262420",
          900: "#1a1815",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ['"Bebas Neue"', "system-ui", "sans-serif"],
        display: ['"Bebas Neue"', "system-ui", "sans-serif"],
      },
      fontSize: {
        mega: ["8rem", { lineHeight: "0.9", letterSpacing: "-0.02em" }],
        huge: ["6rem", { lineHeight: "0.95", letterSpacing: "-0.02em" }],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        daley: {
          primary: "#3563BE",
          secondary: "#F3EEDE",
          accent: "#E05353",
          neutral: "#C1B4AE",
          "base-100": "#ffffff",
          info: "#3563BE",
          success: "#426A5A",
          warning: "#E05353",
          error: "#E05353",
        },
      },
    ],
    darkTheme: false,
    base: true,
    styled: true,
    utils: true,
  },
};
