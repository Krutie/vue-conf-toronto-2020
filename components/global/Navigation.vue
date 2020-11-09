<template>
  <div class="flex justify-between p-5 text-sm" style="bottom: 0;">
    <nuxt-link v-if="prev" :to="{ name: name, params: { id: prev.slug } }">
      <div class="flex items-center">
        <icon
          name="angle-left"
          scale="4"
          class="text-indigo-600 hover:text-orange-500"
        />
        <!-- Prev -->
      </div>
    </nuxt-link>
    <span v-else>&nbsp;</span>

    <nuxt-link v-if="next" :to="{ name: name, params: { id: next.slug } }">
      <div class="flex items-center">
        <icon
          name="angle-right"
          scale="4"
          class="text-indigo-600 hover:text-orange-500"
        />
        <!-- Next -->
      </div>
    </nuxt-link>
    <span v-else>&nbsp;</span>
  </div>
</template>
<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => null,
    },
    next: {
      type: Object,
      default: () => null,
    },
    name: {
      type: String,
    },
  },
  mounted() {
    window.addEventListener('keydown', this.keyEventHandler)
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.keyEventHandler)
  },
  methods: {
    keyEventHandler(e) {
      if (e.key === 'ArrowLeft' && !!this.prev) {
        this.$router.push({
          name: this.name,
          params: { id: this.prev.slug },
        })
      }

      if (e.key === 'ArrowRight' && !!this.next) {
        this.$router.push({
          name: this.name,
          params: { id: this.next.slug },
        })
      }
    },
  },
}
</script>
