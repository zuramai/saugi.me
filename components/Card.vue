<script setup lang="ts">
const props = defineProps({
  title: String,
  description: String,
  github: String,
  demo: String,
  image: String,
  opensource: Boolean,
  stacks: Array
})
const isNotYetOpen = props.opensource && !props.github
</script>
<template>
<div class="w-full bg-white border border-gray-200 shadow-md dark:bg-zinc-800/50 dark:border-gray-800 relative">
    <a :href="github" target="_blank" class="block">
        <lazy-client-only>
            <img class="w-full sm:h-35 aspect-video" :src="image" :alt="`Image for ${title}`" />
        </lazy-client-only>
    </a>
    <div class="p-3 pb-8">
        <h5 class="mb-2 text-xl mt-0 font-bold tracking-tight text-gray-900 dark:text-white">{{title}}</h5>
        <p class="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">{{ description }}</p>
        <a :href="github" v-if="opensource" :class="['absolute right-2 bottom-2']" target="_blank" :disabled="isNotYetOpen" :title="isNotYetOpen ? 'Will be released soon' :  title+' Github link'">
            <div :class="['i-mdi-github w-5 h-5',  isNotYetOpen ? 'bg-gray-300' : '']" ></div>
        </a>

        <div class="stacks | flex gap-2 absolute bottom-2 w-[80%] overflow-auto">
            <span v-for="stack in stacks" class="whitespace-nowrap bg-gradient-to-r from-blue-500 to-blue-400 shadow-sm text-white px-2 py-1 rounded-full text-[.7rem] ">{{ stack }}</span>
        </div>
    </div>
</div>
</template>
<style>
.stacks {
    scrollbar-width: thin;
}
</style>