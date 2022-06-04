import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { visualizer } from "rollup-plugin-visualizer"
import * as path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({
      gzipSize: true,
      brotliSize: true,
      open: false,
      filename: "dist/stats.html",
    }),
  ],
  resolve: {
    alias: {
      $components: path.resolve(__dirname, "./src/components"),
      $queries: path.resolve(__dirname, "./src/queries"),
      $lib: path.resolve(__dirname, "./src/lib"),
      $hooks: path.resolve(__dirname, "./src/hooks"),
      $types: path.resolve(__dirname, "./src/types"),
      $store: path.resolve(__dirname, "./src/store"),
    },
  },
})
