<template>
  <div>
    <div @click="show = !show" class="toggle">
      <span v-if="show"> Slide Out </span>
      <span v-else> Slide In </span>
    </div>
    <transition
      name="custom-classes-transition"
      enter-active-class="animated slideInLeft"
      leave-active-class="animated slideOutRight"
    >
      <box v-if="show"> </box>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    }
  },
  mounted() {
    this.show = true
  },
}
</script>
