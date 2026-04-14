import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  css: {
    transformer: "postcss",
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react-router") || id.includes("/react-dom/") || id.includes("/react/") || id.includes("scheduler")) {
              return "vendor-react";
            }
            if (id.includes("gsap") || id.includes("@gsap")) {
              return "vendor-gsap";
            }
          }
        },
      },
    },
  },
});
