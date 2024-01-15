import { defineConfig } from "vite";

export default defineConfig({
    base: "/API-joke-project/",
    build: {
        target: "es2022"
      },
      esbuild: {
        supported: {
          'top-level-await': true
        },
      },
})