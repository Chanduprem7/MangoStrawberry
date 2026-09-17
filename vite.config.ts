// @lovable.dev/vite-tanstack-config already includes the required plugins.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  base: "/MangoStrawberry/",

  vite: {
    base: "/MangoStrawberry/",
  },

  tanstackStart: {
    server: {
      entry: "server",
    },

    spa: {
      enabled: true,
    },
  },
});
