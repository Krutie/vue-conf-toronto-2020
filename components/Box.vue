<template>
  <div :class="`p-2 border-2 rounded-lg h-16 w-16 ${color}`">
    <slot />
  </div>
</template>
<script>
export default {
  props: {
    color: {
      type: String,
      default: 'bg-gray-700',
    },
  },
}
</script>
