import { defineNuxtConfig } from 'nuxt'
import transformerDirective from '@unocss/transformer-directives'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
  ],
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Ahmad Saugi',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Ahmad Saugi is a professional full-stack web developer who has 4+ years of experience and currently studying computer science at Binus University. I love making open-source projects.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/gh/devicons/devicon@master/devicon.min.css' }
    ]
  },
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
        'body': '#6B6B6B'
      }
    },
  },
  googleFonts: {
    families: {
      Lexend: true,
    }
  }
})
