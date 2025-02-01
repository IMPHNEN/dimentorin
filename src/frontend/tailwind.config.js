export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        "8xl": "1440px",
      },
      fontFamily: {
        baim: ["var(--font-bai-jamjuree)", "sans-serif"],
        display: ["var(--font-roboto-sans)", "sans-serif"],
        mono: ["var(--font-roboto-mono)", "monospace"],
        regular: ["var(--font-roboto-sans)", "sans-serif"],
        sans: ["var(--font-roboto-sans)", "sans-serif"],
      },
      colors: {
        primary: "#1E4272",
        secondary: "#cccccc",
        purple: "#6E01F1",
      },
    },
  },
  plugins: [],
}
