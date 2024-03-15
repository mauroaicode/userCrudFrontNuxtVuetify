import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  vite: {
    ssr: {
      noExternal: ['vuetify']
    }
  },
  modules: [
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    async (options, nuxt) => {
      // @ts-ignore
      nuxt.hooks.hook('vite:extendConfig', config => config.plugins.push(
          vuetify()
      ))
    },
  ],
})

