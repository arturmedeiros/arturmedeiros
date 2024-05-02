const title = "Artur Medeiros";
const description = "Desenvolvedor de Software Sênior";
const url = "https://arturmedeiros.pages.dev";
const color = "#14b8a6";
const favicon = "https://arturmedeiros.pages.dev/avatar.png";

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "nuxt-icon",
    "@nuxtjs/google-fonts",
    "@nuxtjs/fontaine",
    "@nuxt/image",
    "@nuxt/content",
    "@nuxthq/studio",
    "@vueuse/nuxt"
  ],
  ui: {
    icons: ["heroicons", "lucide"],
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      htmlAttrs: {
        lang: "en",
        class: "h-full",
      },
      titleTemplate: `%s • ${description}`,
      title: title,
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: description },
        { name: "format-detection", content: "telephone=no" },
        { name: "theme-color", content: color },
        { name: "author", content: title },
        { name: "robots", content: "index, follow" },
        { name: "keywords", content: "artur medeiros, artur josue de medeiros, software developer, desenvolvedor de software, programador" },
        // OpenGraph
        { property: "og:site_name", content: title },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
        { property: "og:image:secure_url", content: favicon },
        { property: "og:secure_url", content: url },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:image", content: favicon },
        // Twitter
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:url", content: url },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: favicon },
      ],
      link: [
        // URL Canonical
        { rel: 'canonical', href: url },
        // Icons
        { rel: 'shortcut icon', type: 'image/png', href: favicon },
        { rel: 'icon', type: 'image/png', href: favicon },
        {
          rel:  'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap'
        },
      ],
      script: [
        // Google
        { src: 'https://www.googletagmanager.com/gtag/js?id=G-GP378MEVWT' }
      ],
      bodyAttrs: {
        class: "antialiased bg-gray-50 dark:bg-black min-h-screen",
      },
    },
  },
  content: {
    highlight: {
      theme: "github-dark",
    },
  },
  googleFonts: {
    display: "swap",
    families: {
      Inter: [400, 500, 600, 700, 800, 900],
    },
  },
});
