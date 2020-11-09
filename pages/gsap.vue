<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-8 p-5"
  >
    <box v-for="n in 16" :key="n"></box>
  </div>
</template>

<script>
import gsap from 'gsap'
import { custom } from '@/utils/transitions.js'
export default {
  layout: 'custom',
  // transition: custom,
  transition: {
    name: 'custom',
    appear: true,
    beforeEnter(el) {
      gsap.set(el.children, {
        scale: 0.5,
        opacity: 0,
      })
    },
    enter(el) {
      gsap.to(el.children, {
        duration: 1.5,
        scale: 1,
        opacity: 1,
        ease: 'elastic',
        stagger: 0.2,
      })
    },
  },
}
</script>
