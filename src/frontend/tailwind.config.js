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
      colors: {
        primary: "#1E4272",
        secondary: "#cccccc",
        purple: "#6E01F1",
      },
    },
  },
  plugins: [],
}
