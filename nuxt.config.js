import colors from "vuetify/es5/util/colors";

export default {
  ssr: false,
  head: {
    titleTemplate: "%s - Wired Wood Sound",
    title: "Wired Wood Sound",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image", href: "/icon.jpg" }]
  },
  css: ["~/assets/theme.scss"],
  plugins: [],
  components: true,
  buildModules: ["@nuxt/typescript-build", "@nuxtjs/vuetify"],
  modules: ["@nuxtjs/axios", "@nuxtjs/pwa"],
  axios: {},
  pwa: {
    manifest: {
      lang: "en"
    }
  },
  vuetify: {
    treeShake: true,
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  build: {}
};
