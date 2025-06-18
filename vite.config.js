import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/Youtube_clone/",
  build: {
    outDir: "dist", // 👈 Optional, but explicit
    rollupOptions: {
      input: "index.html", // ✅ FIX: remove leading slash!
    },
  },
});
