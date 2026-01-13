<script setup>
const isNavbarOpen = ref(true)
import { useDark, useToggle } from '@vueuse/core'

onBeforeMount(() => {
  if(document.body.clientWidth < 768) {
    isNavbarOpen.value = false
  }
})

const isDark = useDark({
  selector: 'body',
  attribute: 'class',
  valueDark: 'dark',
  valueLight: 'light',
})
const toggleDark = useToggle(isDark)
</script>
<template>
  <nav>
    <div class="navbar__brand | italic text-center flex justify-center py-3 px-8">
      <div class='w-1/3'></div>
      <h3 class="w-1/3 text-xl my-0 flex items-center justify-center">
        <router-link to="/" class="decoration-none | dark:text-white!">Saugi</router-link>
      </h3>
      <div class='w-1/3 flex justify-end gap-3 items-center'>
        <a href="#" class="navbar__link | p-2! md:hidden block" @click.prevent="toggleDark()">
          <div class="text-xl i-mdi-weather-night" v-if="isDark == true"></div>
          <div class="text-xl i-mdi-lightbulb-on-outline" v-else></div>
        </a>
        <button class="p-2 bg-transparent border-none md:hidden inline-block" type="button" name="toggle-menu" aria-label="Toggle Menu" @click="isNavbarOpen=!isNavbarOpen">
          <div class="i-mdi-menu text-xl"></div>
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
          <a target="_blank" href="https://blog.saugi.me" class="navbar__link">Blog</a>
        </li>
        <li class="navbar__item">
          <a target="_blank" href="https://til.saugi.me" class="navbar__link">TIL</a>
        </li>
        <li class="navbar__item">
          <nuxt-link to="/contact" class="navbar__link">Reach me!</nuxt-link>
        </li>
        <li class="navbar__item ">
          <a href="#" class="navbar__link | p-0! hidden md:block" @click.prevent="toggleDark()">
            <div class="i-mdi-weather-night" v-if="isDark == true"></div>
            <div class="i-mdi-lightbulb-on-outline" v-else></div>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>
<style lang="postcss">
.navbar__link {
  padding: 0.5rem;
  text-decoration: none;
}
.navbar__link.router-link-active {
  @apply dark:text-gray-50;
  border-bottom: 1px solid;
}
</style>