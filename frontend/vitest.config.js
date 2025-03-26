import { defineConfig } from "vite";
import { resolve } from "path";
import reactRefresh from "vite-plugin-react-refresh";
import { Buffer } from "buffer";
import crypto from "crypto-browserify";

export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      buffer: "buffer",
      crypto: "crypto-browserify"
    },
  },
  define: {
    'process.env': {},
    global: 'globalThis',
  },
  plugins: [reactRefresh()],
  test: {
    environment: 'happy-dom',
    globals: true,
    setupFiles: './src/setupTests.js',
  },
  server: {
    port: 4200,
  },
});
