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

console.log(store.projects)
</script>
<template>
<section class="content">
  <div class="container mx-auto max-w-[75ch]!">
    <div class="prose">
      <h1 class="text-center">My Projects</h1>
      
      <Tabs>
        <tab-content name="open" text="Open Source">
          <div class="project-cards | grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 py-5">
            <Card v-for="(project, index) in openSource" :key="index"
              :title="project.title" 
              :image="project.image" 
              :description="project.description" 
              :github="project.github_url" 
              :opensource="project.description" 
              class="w-full"
              >
            </Card>
          </div>
        </tab-content>
        <tab-content name="closed" text="Closed Source">
          <div class="project-cards | grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-5 py-5">
            <Card v-for="(project, index) in closedSource" :key="index"
              :title="project.title" 
              :image="project.image" 
              :description="project.description" 
              class="w-full"
              >
            </Card>
          </div>
        </tab-content>
      </Tabs>
    </div>
  </div>
</section>
</template>