<template>
  <div class="slide">
    <h1 class="text-center text-4xl">Slides</h1>
    <div class="divide-y-2 divide-gray-500 divide-dashed">
      <div v-for="(slide, index) in slides" class="py-2">
        {{ index }}.
        <nuxt-link :to="`${slide.path}`" class="text-xl">{{
          slide.title
        }}</nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const slides = await $content('slides').fetch()
    return { slides }
  },
}
</script>
