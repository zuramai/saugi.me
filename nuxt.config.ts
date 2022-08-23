import { defineNuxtConfig } from 'nuxt'
import transformerDirective from '@unocss/transformer-directives'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    '@pinia/nuxt',
  ],
  // Global page headers (https://go.nuxtjs.dev/config-head)
 
  buildModules: [
    '@nuxtjs/google-fonts'
  ],
  css: [
    'normalize.css',
    'assets/css/style.css',
  ],
  unocss: {
    uno: true, 
    icons: true, 
    attributify: true, 

    // core options
    shortcuts: [],
    transformers: [
      transformerDirective(),
    ],
    rules: [],
    theme: {
      colors: {
        'heading': '#2E2E2E',
        'subheading': '#16221C',
        'body': '#555555'
      }
    },
  },
  googleFonts: {
    families: {
      Lexend: true,
      Inter: [400],
    }
  }
})
