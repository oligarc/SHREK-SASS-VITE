import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: ".", // Usa la raíz del proyecto (no src)
  build: {
    outDir: "./docs", // Los archivos construidos irán directamente a la carpeta "docs"
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"), // Página principal
        index2: resolve(__dirname, "index2.html"), // Otra página (index2.html)
      },
    },
  },
  base: "./", // Usa rutas relativas para mayor compatibilidad en GitHub Pages
});
