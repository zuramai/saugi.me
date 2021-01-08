<template>
    <div id="page-content" class='container'>
        <div class="flex w-full">
        </div>
        <div class="card bg-white shadow-2xl rounded-lg  mt-32  px-12 py-8 mb-2">
            <h1 class='page-heading text-4xl text-left mx-autofont-light text-gray-800 mb-5'>{{ story.name }}</h1>
            <img :src="story.content.thumbnail.filename" :alt="story.content.thumbnail.alt" class='h-72 w-full mb-5 object-cover rounded-lg shadow-lg'>
            <div class="content" v-html="$md.render(story.content.paragraph)"></div>
        </div>
    </div>
</template>
<script>
export default {
    async asyncData({app, isDev, route, store, env, params, query, req, res, redirect, error}) {
        let story;

        await app.$storyapi.get(`cdn/stories/ahmadsaugi-com/${params.slug}`)
        .then((res) => {
            story = res.data.story
        }).catch((res) => {
            if (!res.response) {
                console.error(res)
                error({ statusCode: 404, message: 'Failed to receive content form api' })
            } else {
                console.error(res.response.data)
                error({ statusCode: res.response.status, message: res.response.data })
            }
        })
        console.log(story)
        return {
            story
        }
    },
}
</script>
<style lang="scss">
    .content * {
        margin-bottom: 1rem;
    }
    .content p {
        color: #656565;
        font-size: 1.2rem;
    }
</style>