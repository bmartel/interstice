import { defineConfig } from "vite";
// import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

export default defineConfig({
  // plugins: [vanillaExtractPlugin({ inject: false })],
  resolve: {
    alias: { "@interstice/mx": "@interstice/mx/src" },
  },
  esbuild: {
    jsxFactory: "h",
    jsxFragment: "Fragment",
    jsxInject: `import { h, Fragment } from 'million/jsx-runtime'`,
  },
});
