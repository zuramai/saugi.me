<script setup lang="ts">
const props = defineProps({
    text: String,
    active: Boolean
})
defineEmits(['click'])
</script>

<template>
<div :class="['tab__pane', active ? 'tab__pane--active' : '']" class="w-full flex-1 text-center">
    <a href="#" @click.prevent="$emit('click')">{{ text }}</a>
</div>
</template>
<style lang="postcss">
.tab__pane a {
    text-decoration: none;
    padding: .5rem;
    font-size: var(--vp-code-font-size);
    display: block;
    @apply text-gray-400;
}
.tab__pane a:hover {
    @apply text-gray-600;
}
.tab__pane--active a {
    background-color: var(--vp-c-black-mute);
    pointer-events: none;
    @apply text-gray-800 dark:text-gray-100;
    border-bottom: 1px solid;
}
</style>