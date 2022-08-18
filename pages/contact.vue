<script setup>
definePageMeta({
  layout: "main",
});
useHead({
  title: 'Contact',
})
</script>
<template>
<section class="content">
  <div class="container mx-auto">
    <div class="prose">
      <h1 class="text-center">Reach Me!</h1>

      <div class="cards max-w-[300px] mx-auto">
        <div class="contact | flex items-center gap-3 mb-5">
          <div class="i-mdi-gmail w-6 h-6 bg-red-500"></div>
          <a href="saugi.dev@gmail.com">saugi.dev@gmail.com</a>
        </div>
        <div class="contact | flex items-center gap-3 mb-5">
          <div class="i-mdi-telegram w-6 h-6 bg-[#2294cf]"></div>
          <a href="https://t.me/zuramai" target="_blank">@zuramai</a>
        </div>
        <div class="contact | flex items-center gap-3 mb-5">
          <div class="i-mdi-linkedin w-6 h-6 bg-blue-500"></div>
          <a href="https://t.me/zuramai" target="_blank">Ahmad Saugi</a>
        </div>
        <div class="contact | flex items-center gap-3 mb-5">
          <div class="i-mdi-instagram w-6 h-6 bg-red-500"></div>
          <a href="https://instagram.com/asawgi" target="_blank">@asawgi</a>
        </div>
      </div>
    </div>
  </div>
</section>
</template>