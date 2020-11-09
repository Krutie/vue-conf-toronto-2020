<template>
  <div class="flex flex-col mx-auto">
    <h1 class="text-center text-4xl">CSS Animation</h1>
    <box class="slow-scale"> </box>
  </div>
</template>

<script>
export default {
  // transition: {
  //   name: 'zoom',
  //   appear: true,
  // },
}
</script>

<style>
.slow-scale {
  animation: slow-move 3s infinite;
}

@keyframes slow-move {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
