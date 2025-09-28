// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/fonts'],
  css: ['~/assets/css/main.css'],
  vite: { plugins: [tailwindcss()] },
  fonts: {
    // Configure font families
    families: [
      // Google Fonts
      { name: 'Nunito', provider: 'google' },
      { name: 'Playfair Display', provider: 'google' },
    ]
  }
});
