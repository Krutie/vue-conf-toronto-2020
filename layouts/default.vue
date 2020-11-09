<template>
  <div
    class="mx-auto"
    style="transition: background-color 0.5s;"
    :class="{
      'bg-pink-200': activePage === 'css-animations',
      'bg-indigo-200': activePage === 'css-transition',
      'bg-blue-200': activePage === 'slides',
      'bg-gray-200': activePage === 'gsap',
      'bg-green-200': activePage === 'index',
    }"
  >
    <header class="py-3 pl-5">
      <Menu />
    </header>
    <div class="container mx-auto">
      <nuxt />
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({ activePage: 'getActivePage' }),
  },
}
</script>
<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
</style>
