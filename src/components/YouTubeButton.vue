<template>
  <a :href="props.url"
     target="_blank"
     :class="`btn ${props.url?'active_btn':'inactive_btn'}`"
  >
    <slot>
      YouTube
    </slot>
  </a>
</template>

<script setup lang="ts">
  const props = defineProps<{
    url: string
  }>();
</script>

<style scoped>
  .btn{
    @apply px-3 py-2 rounded border-2 transition-colors text-white
  }
  .active_btn{
    @apply border-orange-600 bg-orange-500 hover:bg-orange-600
  }

  .inactive_btn{
    @apply border-gray-600 bg-gray-500 hover:bg-gray-600 cursor-not-allowed
  }
</style>