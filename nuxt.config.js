export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Ahmad Saugi',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Ahmad Saugi adalah seorang fullstack web developer yang sekarang sedang berkuliah di Binus University. Saugi sudah berpengalaman lebih dari 3 tahun dalam dunia programming.'  }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href:'https://cdn.jsdelivr.net/gh/devicons/devicon@master/devicon.min.css' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    "@/assets/scss/app.scss"
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {src: "./plugins/particles.js", ssr: false}
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@aceforth/nuxt-optimized-images',
    '@nuxtjs/moment',
    '@nuxtjs/google-analytics'
  ],

  optimizedImages: {
    optimizeImages: true
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/markdownit',
    ['@nuxtjs/axios'],
    ['@nuxtjs/proxy'],
    ['storyblok-nuxt', {
      accessToken: 'DelMgZAS1kgdH9kVQregQAtt',
      cacheProvider: 'memory',
      customParent: 'YOUR_URL_WHERE_RUN_STORYBLOK_APP' // optional https://www.storyblok.com/docs/Guides/storyblok-latest-js#storyblokinitconfig
    }],
  ],

  axios: {
    proxy: true // Can be also an object with default options
  },


  markdownit: {
    injected: true
  },

  moment: {
    defaultTimezone: 'Asia/Jakarta'
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  googleAnalytics: {
    id: 'G-93R5E9GHY0'
  }
}
