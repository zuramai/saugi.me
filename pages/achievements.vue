<script setup>
definePageMeta({
  layout: "main",
});
useHead({
  title: 'Achievements',
})

const achievements = [
  {
    text: 'Silver Medalist at WorldSkills ASEAN 2023 Web Technologies',
    class: 'i-mdi:trophy dark:text-gray-200 text-gray-500 w-6 h-6',
    description: `The competition consists of six parts, which are:
    1. Speed Test: Working on many small task in short amount of time (e.g. loading animation, slider, etc) 
    2. CMS: Create Wordpress theme and plugins (topic: recipe site) 
    3. Backend: Create REST API and admin dashboard using Laravel
    4. Frontend: Create a frontend (Vue 3) for competition registration
    5. Client side: Create a client-side game using vanilla JavaScript
    6. Web Design: Create a single-page design and implement it into website`
  },
  {
    text: '2nd Place at Indonesia Skills 2022 Web Technologies',
    class: 'i-mdi:trophy dark:text-gray-200 text-gray-500 w-6 h-6',
    description: `The competition consists of six parts, which are:
    1. Laravel 9 and Vue 3: Job vacancies website
    2. Wordpress: Online course website 
    3. Javascript: Web-based game with HTML5 Canvas`
  },
  {
    text: '1st Place at National LKS 2020 Web Technologies',
    class: 'i-mdi:trophy text-yellow-500 w-6 h-6',
    description: `The competition consists of four parts, which are:
      1. Speedtest
      2. CMS Wordpress Module (create theme and plugins)
      3. Serverside (using Laravel and VueJS)
      4. Clientside (create html5 snake game) `
  },
  {
    text: '1st Place at LKS DKI Jakarta Province 2020 Web Technologies',
    class: 'i-mdi:trophy text-yellow-500 w-6 h-6',
    description: `The competition consists of two parts, which are:
    1. HTML5 Canvas Game (2048 Game) for 6 hours
    2. Website for books information with Laravel & VueJS for 5 hour`
  },
  {
    text: '3rd Place at LKS DKI Jakarta Province 2019 Web Technologies',
    class: 'i-mdi:trophy text-rose-700 w-6 h-6',
    description: `The competition consists of three parts, which are:
    1. Designing in Photoshop and Slicing to HTML and CSS
    2. PHP Laravel API
    3. Wordpress Create a Template and Plugin (Gallery and Contact Form)`
  },
]
</script>
<template>
<section class="content">
  <div class="container mx-auto">
    <div class="section__header | text-center">
      <h1 class='section__title'>My Achievements</h1>
    </div>
    <ul class="pl-0 list-none">
      <li v-for="achievement in achievements" class="achievement-item mb-5">
        <div class="achievement-name list-none flex gap-3 items-center ">
          <div :class="achievement.class"></div>
          <span class="font-bold text-lg">
            {{achievement.text}}
          </span>
        </div>
        <div class="achievement-description pl-10 py-5 leading-loose dark:opacity-80" v-html="achievement.description.replaceAll(new RegExp('\n', 'g'), '<br/>')">
        </div>
      </li>
    </ul>
  </div>
</section>
</template>