<template>
  <div id="slideshow" class="pt-20">
    <div class="mx-auto flex flex-col border-2">
      <h1 class="text-2xl">{{ slide.title }}</h1>
      <!-- <div class="text-left px-10">{{ slide.description }}</div> -->
      <nuxt-content :document="slide"> </nuxt-content>
    </div>

    <navigation :prev="prev" :next="next" name="slides-id"> </navigation>
  </div>
</template>
<script>
export default {
  transition(to, from) {
    if (!from) {
      return 'slideRight'
    }
    return +to.params.id < +from.params.id ? 'slideLeft' : 'slideRight'
  },
  // transition(to, from) {
  //   if (!from) {
  //     return 'slideDown'
  //   }
  //   return +to.params.id < +from.params.id ? 'slideUp' : 'slideDown'
  // },
  async asyncData({ $content, params }) {
    const slide = await $content('slides', params.id).fetch()
    const [prev, next] = await $content('slides')
      .only(['title'])
      .sortBy('createdAt', 'asc')
      .surround(params.id)
      .fetch()

    return { slide, prev, next }
  },
}
</script>
<style>
/* Animate.css */

/* Sliding up and down*/
.slideDown-enter-active {
  animation: slideInDown 0.5s;
}
.slideDown-leave-active {
  animation: slideOutDown 0.5s;
}
.slideUp-enter-active {
  animation: slideInUp 0.5s;
}
.slideUp-leave-active {
  animation: slideOutUp 0.5s;
}

/* Sliding left and right*/
.slideRight-enter-active {
  animation: slideInRight 0.5s;
}
.slideRight-leave-active {
  animation: slideOutLeft 0.5s;
}
.slideLeft-enter-active {
  animation: slideInLeft 0.5s;
}
.slideLeft-leave-active {
  animation: slideOutRight 0.5s;
}
h1 {
  font-size: 35px;
  font-weight: bold;
  padding: 20px 0;
}
.nuxt-content {
  @apply text-left p-10;
}
.nuxt-content h2 {
  font-size: 25px;
  padding: 20px 0;
}
</style>
