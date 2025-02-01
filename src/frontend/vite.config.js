import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'url';
import environment from 'vite-plugin-environment';
import dotenv from 'dotenv';
import tailwindcss from '@tailwindcss/vite'

dotenv.config({ path: '../../.env' });

export default defineConfig({
  build: {
    emptyOutDir: true,
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: "globalThis",
      },
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:4943",
        changeOrigin: true,
      },
    },
  },
  publicDir: "assets",
  plugins: [
    environment("all", { prefix: "CANISTER_" }),
    environment("all", { prefix: "DFX_" }),
    tailwindcss({
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
    }),
  ],
  resolve: {
    alias: [
      {
        find: "declarations",
        replacement: fileURLToPath(
          new URL("../declarations", import.meta.url)
        ),
      },
    ],
    dedupe: ['@dfinity/agent'],
  },
});
