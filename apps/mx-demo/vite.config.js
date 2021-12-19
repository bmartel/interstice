import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: { "@interstice/mx": "@interstice/mx/src" },
  },
  esbuild: {
    jsxFactory: "h",
    jsxFragment: "Fragment",
    jsxInject: `import { h, Fragment } from 'million/jsx-runtime'`,
  },
});
