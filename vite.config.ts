import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import md, { Mode } from "vite-plugin-markdown";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/lab",
  build: {
    assetsDir: "./",
  },
  plugins: [react(), md({ mode: [Mode.MARKDOWN] })],
  server: {
    proxy: {
      "/hits.seeyoufarm.com": {
        target: "https://hits.seeyoufarm.com",
        changeOrigin: true,
      }
    }
  }
});
