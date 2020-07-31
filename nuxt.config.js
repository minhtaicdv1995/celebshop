import webpack from 'webpack'
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css:  ["@/assets/css/bootstrap.min.css","@/assets/css/jquery-simple-mobilemenu.css","@/assets/css/slick.css","@/assets/css/slick-theme.css","@/assets/css/jBox.css","@/assets/css/style.css","@/assets/css/styleclone.css",], 
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    
  ],
  
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
   // 'bootstrap-vue/nuxt',
  ],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    
  },
  server: {
    port: 443, // default: 3000
  },
  env: {
    "browser": true,
    "node": true,
    baseUrl: process.env.BASE_URL || 'https://apiceleb.trungkienit.com/wp-json/wc/v3',
    baseKey: process.env.BASE_KEY || 'consumer_key=ck_fe7141bf2f63c8ac3b453f98ffac5aeab778cc06&consumer_secret=cs_f934b0959423d9cf6c4c97f0ec23f1e6f92a44a1'
  }, 
}
