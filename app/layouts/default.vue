<template>
  <section class="body" style="min-height: 100vh">
    <div>
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
  console.log('loaded')
</script>

<style scoped>
  .body {
    padding: 20px;
  }
</style>