import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  envPrefix: "VITE_",
  envDir: "./",
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: "build",
  },
});
