import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: "./src", // La raíz del proyecto se establece en "src"
  build: {
    outDir: "../docs", // La salida de la construcción va a la carpeta "docs"
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"), // Página principal
        index2: resolve(__dirname, "src/index2.html"), // Otra página
      },
    },
  },
  base: "./", // Usamos rutas relativas para mayor compatibilidad en GitHub Pages
});
