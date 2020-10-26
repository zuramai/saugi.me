<template>
    <div id="page-content" class='container'>
        <div class="flex w-full mb-12">
            <h1 class='page-heading text-6xl text-center mx-auto mt-32 font-light text-gray-800'>Projects</h1>
        </div>
        <div class="page-body">
            <div class="flex flex-row flex-wrap">
                <div class="w-full md:w-1/2 lg:w-1/3 px-5" v-for="(project,index) in $store.state.projects" :key="index">
                    <card :title="project.title" 
                        :image="require(`~/assets/images/projects/${project.image}`)" 
                        :description="project.description"
                        :technologies="project.technologies"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Card from '~/components/Card/Card.vue';

export default {
    components: {
        Card
    }    
}
</script>