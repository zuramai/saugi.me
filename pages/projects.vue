<script setup lang="ts">
import TabPane from '~~/components/Tabs/TabPane.vue';
import TabContent from '~~/components/Tabs/TabContent.vue';
import { useProjectsStore } from '~~/store/data/projects';
definePageMeta({
  layout: "main",
});
useHead({
  title: 'Projects',
})
const showTab = ref('opensource')

const store = useProjectsStore()
const openSource = computed(() => store.projects.filter((p) => p.opensource))
const closedSource = computed(() => store.projects.filter((p) => !p.opensource))

</script>
<template>
<section class="content">
  <div class="px-3 lg:px-0 mx-auto max-w-[75ch]!">
    <div class="prose">
      <h1 class="text-center">My Projects</h1>
      
      <div class="project-cards | grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-5 py-5">
        <Card v-for="(project, index) in store.projects" :key="index"
          :title="project.title" 
          :image="project.image" 
          :stacks="project.technologies"  
          :description="project.description" 
          class="w-full"
          :github="project.github_url" 
          :opensource="project.opensource"
          >
        </Card>
      </div>
    </div>
  </div>
</section>
</template>