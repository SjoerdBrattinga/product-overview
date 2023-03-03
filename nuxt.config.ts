// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        // The private keys which are only available server-side
        //apiKey: '6d3a42a3-6d93-4f98-838d-bcc0ab2307fd'

        // Keys within public are also exposed client-side
        public: {
          apiBase: 'https://api.dekamarkt.nl/v1',
          apiKey: '6d3a42a3-6d93-4f98-838d-bcc0ab2307fd'
        }
      }
})
