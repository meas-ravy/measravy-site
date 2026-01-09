import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react(), tailwindcss()],
    // Vercel deploys at `/` by default. Only set `VITE_BASE_PATH` for subpath deploys
    // (ex: GitHub Pages `/repo-name/`).
    base: env.VITE_BASE_PATH || "/",
  };
});
