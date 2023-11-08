export default defineNuxtConfig({
  extends: '@nuxt/ui-pro',
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    // '@nuxtjs/tailwindcss',
    // '@nuxtjs/color-mode',
    // 'nuxt-icon',
    '@nuxt/ui',
    '@nuxthq/studio',
    
  ],
  ui: {
    icons: ['simple-icons', 'ph'],
  },
  // https://color-mode.nuxtjs.org
  colorMode: {
    classSuffix: '',
    fallback: 'light'
  },
  // https://content.nuxtjs.org
  content: {
    documentDriven: true,
    highlight: {
      // See the available themes on https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-theme
      theme: {
        dark: 'github-dark',
        default: 'github-light'
      }
    }
  }
})