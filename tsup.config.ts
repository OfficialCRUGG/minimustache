import { defineConfig } from "tsup";

export default defineConfig([
  // Configuration for the library build
  {
    entry: ["src/lib.ts"],
    outDir: "dist",
    format: ["esm", "cjs"], // Library should be usable in both ESM and CommonJS
    target: "node20",
    sourcemap: false,
    clean: true,
    minify: true,
    dts: true, // Generate TypeScript declarations for the library
  },
]);
