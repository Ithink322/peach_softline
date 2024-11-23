// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  app: {
    head: {
      title: "Peach Softline",
    },
    baseURL: "/peach_softline/",
  },
  mode: "static",
  router: {
    base: "/peach_softline/",
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: undefined,
        },
      },
      publicPath: "/peach_softline/_nuxt/",
    },
    server: {
      hmr: {
        overlay: false,
      },
    },
  },
});
