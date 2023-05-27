// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: resolve(__dirname, "src"),
  base: "./",
  preview: {
    host: true,
  },
  publicDir: resolve("public"),
  build: {
    outDir: resolve("dist"),
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        priser: resolve(__dirname, "src/priser.html"),
        fysiurgiskmassage: resolve(__dirname, "src/fysiurgiskmassage.html"),
        japansklifting: resolve(__dirname, "src/japansklifting.html"),
        kombi: resolve(__dirname, "src/kombi.html"),
        kontakt: resolve(__dirname, "src/kontakt.html"),
        om: resolve(__dirname, "src/om.html"),
        zoneterapi: resolve(__dirname, "src/zoneterapi.html"),
        // about: resolve(__dirname, "src/about.html"),
      },
    },
  },
});
