<template>
    <div class='card shadow-lg mb-8 rounded-xl  bg-white'>
        <img :src="image" class='h-48 w-full rounded-t-lg object-cover ' :alt="`Image for ${title}`" v-if="image!==''"/>
        <div class="card-body py-3 px-5 relative">
            <h3 class='text-2xl text-gray-700'>{{title}}</h3>
            <p class='mt-3 text-gray-600'>{{description}}</p>
            <div class="technologies flex flex-wrap mt-3">
                <div class="badge bg-blue-200 text-blue-800 px-2 py-1 text-sm rounded-sm mr-2 mb-2" v-for="(technology,index) in technologies" :key="index">{{technology}}</div>
            </div>

            <a :href="github_url" class="github-url absolute" target="_blank" v-if="github_url">
                <i class="devicon-github-plain"></i>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        image: String,
        title: String,
        description: String,
        github_url: String,
        technologies: Array
    },
}
</script>
<style scoped>
.card-body {
    min-height: 200px;
}
.github-url {
    right: 2rem;
    font-size: 1.5rem;
    bottom: 1.5rem;
    opacity: .5;
    transition: all .2s;
}
.github-url:hover {
    opacity: 1;
}
</style>