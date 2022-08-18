<script setup>
useHead({
  titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} - Saugi` : 'Saugi';
    },
})
</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>
