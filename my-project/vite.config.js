import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: "./src", // Cambia la raíz del proyecto a "src"
  build: {
    outDir: "../docs", // Los archivos construidos irán a la carpeta "docs" (GitHub Pages usa esta carpeta automáticamente)
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"), // Página principal
        index2: resolve(__dirname, "src/index2.html"), // Otra página (index2.html)
      },
    },
  },
  base: "./", // Usa rutas relativas para mayor compatibilidad en GitHub Pages
});
