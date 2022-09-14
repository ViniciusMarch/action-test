import { defineConfig, loadEnv } from "vite";
import rollupPluginCopy from "rollup-plugin-copy";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return defineConfig({
    base: "./",
    build: {
      outDir: "./dist/assets",
      assetsDir: "./",
      emptyOutDir: true,
    },
    plugins: [
      react(),
      tsconfigPaths(),
      rollupPluginCopy({
        verbose: true,
        hook: "writeBundle",
        targets: [
          { src: "./translations/*", dest: "dist/translations" },
          {
            src: "./manifest.json",
            dest: "dist/",
            transform: (contents) =>
              contents
                .toString()
                .replace(
                  `http://localhost:3000`,
                  "assets/index.html"
                ),
          },
          {
            src: "./zcli.apps.config.json",
            dest: "dist/",
          },
        ],
      }),
    ],
  });
};