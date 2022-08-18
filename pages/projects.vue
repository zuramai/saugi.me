<script setup>
definePageMeta({
  layout: "main",
});
useHead({
  title: 'Home',
  meta: [
    { hid: 'description', name: 'description', content: 'Ahmad Saugi is a professional full-stack web developer who has 4+ years of experience and currently studying computer science at Binus University. I love making open-source projects.' }
  ],
})
</script>
<template>
<section class="content">
  <div class="container mx-auto">
    <div class="prose">
      <h1 class="text-center">My Projects</h1>
      
    </div>
  </div>
</section>
</template>
<style>
.content {
  @apply py-8;
}
p {
  @apply tracking-wide leading-8;
}
</style>