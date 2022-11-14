const locales = [
  {
    code: 'en',
    name: 'EN',
    langFile: 'en.json'
  }
];
const defaultLocale = 'en';

module.exports = {
  head: {
    title: "Vgate",
    meta: [
      {charset: "utf-8"},
      {name: "viewport", content: "width=device-width, initial-scale=1, user-scalable=yes"},
    ],
    link: [
      {rel: "icon", type: "image/x-icon", href: "/icon.png"}
    ]
  },
  loading: {color: "#1FDB84"},
  plugins: [{ src: "~/plugins/element-ui.js", ssr: true }, "~plugins/ga.js"],
  build: {
    extractCSS: true,
    vendor: ["babel-polyfill", "~/plugins/element-ui.js"],
    babel: {
      "plugins": [["component", {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }]]
    },
    postcss: {
      plugins: {
        'postcss-custom-properties': {
          warnings: false // Fix bulma css warnings
        }
      }
    }
  },
  router: {
    middleware: "i18n"
  },
  css: [
    '~assets/css/main.scss'
  ],
  modules: [
    ['nuxt-i18n', {
      seo: false,
      locales,
      defaultLocale,
      detectBrowserLanguage: true,
      redirectCookieKey: 'redirected',
      useRedirectCookie: true,
      loadLanguagesAsync: true,
      langDir: 'locales/',
      ignorePaths: [],
      vueI18n: {
        fallbackLocale: defaultLocale,
        messages: {
          /*
          * make the default locale can work in fallback in ssr.
          * */
          en: require('./locales/en.json')
        }
      }
    }]
  ]
};

