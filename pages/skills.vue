<template>
    <div id="page-content" class='container'>
        <div class="flex w-full">
            <h1 class='page-heading text-6xl text-center mx-auto mt-32 font-light text-gray-800 mb-8'>Skills</h1>
        </div>
        <div class="page-body">
            <div class="flex flex-row flex-wrap">
                <div class="w-1/2 md:w-1/4 px-2" v-for="(skill,index) in $store.state.skills" :key="index">
                    <div class="card bg-white shadow-2xl rounded-lg px-5 py-5 mb-2" >
                        <div class="d-flex flex-col text-center">
                            <i :class="skill.icon" v-if="!!skill.icon" class='text-6xl'></i>
                            <img :src="skill.icon_url" v-else :alt="skill.name" class='h-16 mx-auto'>
                            <h5 class='ml-2 text-xl mt-5 mb-2 font-medium text-gray-800'>{{skill.name}}</h5>
                            <p><span class='font-bold'>{{ skill.years }}</span> of experience.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>