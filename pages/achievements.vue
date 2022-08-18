<script setup>
definePageMeta({
  layout: "main",
});
useHead({
  title: 'Achievements',
  meta: [
    { hid: 'description', name: 'description', content: 'Ahmad Saugi is a professional full-stack web developer who has 4+ years of experience and currently studying computer science at Binus University. I love making open-source projects.' }
  ],
})

const achievements = [
  {
    text: '1st Place at LKS Nasional 2020 Web Technologies',
    class: 'i-mdi:trophy text-yellow-500 w-5 h-5'
  },
  {
    text: '1st Place at LKS Provinsi DKI Jakarta 2020 Web Technologies',
    class: 'i-mdi:trophy text-yellow-500 w-5 h-5'
  },
  {
    text: '3rd Place at LKS Provinsi DKI Jakarta 2019 Web Technologies',
    class: 'i-mdi:trophy text-rose-700 w-5 h-5'
  },
]
</script>
<template>
<section class="content">
  <div class="container mx-auto">
    <div class="section__header | text-center">
      <h1 class='section__title'>My Achievements</h1>
    </div>
    <ul class="pl-0">
      <li v-for="achievement in achievements" class="mb-3 list-none flex gap-3 items-center mb-5">
        <div :class="achievement.class"></div>
        <span>
          {{achievement.text}}
        </span>
      </li>
    </ul>
  </div>
</section>
</template>