<script setup>
const isNavbarOpen = ref(true)
</script>
<template>
  <nav>
    <div class="navbar__brand | italic text-center flex justify-center py-3">
      <div class='w-1/3'></div>
      <h3 class="w-1/3 text-xl my-0">Saugi</h3>
      <div class='w-1/3'>
        <button class="p-2 bg-transparent border-none md:hidden inline-block" type="button" @click="isNavbarOpen=!isNavbarOpen">
          <div class="i-mdi-menu"></div>
        </button>
      </div>
    </div>
    <div class="navbar__menu">
      <ul class="flex decoration-none list-none gap-5 justify-center p-0 flex-col md:flex-row text-right pr-8 lg:p-0 lg:text-center"  v-show="isNavbarOpen">
        <li class="navbar__item">
          <nuxt-link to="/" class="navbar__link">About</nuxt-link>
        </li>
        <li class="navbar__item">
          <nuxt-link to="/achievements" class="navbar__link">Achievements</nuxt-link>
        </li>
        <li class="navbar__item">
          <nuxt-link to="/projects" class="navbar__link">Projects</nuxt-link>
        </li>
        <li class="navbar__item">
          <nuxt-link to="/contact" class="navbar__link">Reach me!</nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
<style>
.navbar__link {
  @apply p-2 decoration-none;
}
.navbar__link.router-link-active {
  @apply border-b;
}
</style>