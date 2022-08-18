<script setup lang="ts">
import TabPane from '~~/components/Tabs/TabPane.vue';
import TabContent from '~~/components/Tabs/TabContent.vue';
import { useProjectsStore } from '~~/store/data/projects';
definePageMeta({
  layout: "main",
});
useHead({
  title: 'Home',
  meta: [
    { hid: 'description', name: 'description', content: 'Ahmad Saugi is a professional full-stack web developer who has 4+ years of experience and currently studying computer science at Binus University. I love making open-source projects.' }
  ],
})
const showTab = ref('opensource')

const store = useProjectsStore()

console.log(store.projects)
</script>
<template>
<section class="content">
  <div class="container mx-auto">
    <div class="prose">
      <h1 class="text-center">My Projects</h1>
      
      <Tabs>
        <tab-content name="open" text="Open Source">
          open
        </tab-content>
        <tab-content name="closed" text="Closed Source">
          close
        </tab-content>
      </Tabs>
    </div>
  </div>
</section>
</template>