<template>
  <div>
    <h1 class="text-center text-4xl">CSS Transitions</h1>
    <div class="toggle">
      <div @click="show = !show">Toggle</div>
    </div>

    <transition name="slide-fade">
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

<style>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}

.slide-fade-leave-active {
  transition: all 0.8s;
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(50px);
  opacity: 0;
}
</style>
