import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import { visualizer } from "rollup-plugin-visualizer"
import { viteStaticCopy } from "vite-plugin-static-copy"
import * as path from "path"
import { setDefaultResultOrder } from "dns"

setDefaultResultOrder("verbatim")

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "localhost",
    open: true,
    port: 3000,
    strictPort: true,
  },
  plugins: [
    react(),
    visualizer({
      gzipSize: true,
      brotliSize: true,
      open: false,
      filename: "dist/stats.html",
    }),
    viteStaticCopy({
      targets: [
        {
          src: "staticwebapp.config.json",
          dest: "",
        },
      ],
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
      $assets: path.resolve(__dirname, "./src/assets"),
    },
  },
})
