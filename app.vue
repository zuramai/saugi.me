<script setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Saugi` : 'Saugi';
  },
  htmlAttrs: {
    lang: 'en'
  },
  meta: [
    { hid: 'description', name: 'description', content: 'Ahmad Saugi is a professional full-stack web developer who had 4+ years of experience and currently pursuing bachelor of computer science. And I love making open-source projects.' }
  ]
})
</script>
<template>
  <div id="app" class="min-h-screen">
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>
