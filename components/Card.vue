<script setup lang="ts">
const props = defineProps({
  title: String,
  description: String,
  github: String,
  demo: String,
  image: String,
  opensource: Boolean
})
const isNotYetOpen = props.opensource && !props.github
</script>
<template>
<div class="w-full bg-white border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 relative">
    <a :href="github" target="_blank" class="block">
        <lazy-client-only>
            <img class="w-full h-45 sm:h-35" :src="image" :alt="`Image for ${title}`" />
        </lazy-client-only>
    </a>
    <div class="p-3 ">
        <h5 class="mb-2 text-xl mt-0 font-bold tracking-tight text-gray-900 dark:text-white">{{title}}</h5>
        <p class="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">{{ description }}</p>
        <a :href="github" v-if="opensource" :class="['absolute right-2 bottom-2']" target="_blank" :disabled="isNotYetOpen" :title="isNotYetOpen ? 'Will be released soon' :  title+' Github link'">
            <div :class="['i-mdi-github w-5 h-5',  isNotYetOpen ? 'bg-gray-300' : '']" ></div>
        </a>
    </div>
</div>
</template>