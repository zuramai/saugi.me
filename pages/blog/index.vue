<template>
    <div id="page-content" class='container'>
        <div class="flex w-full">
            <h1 class='page-heading text-6xl text-center mx-auto mt-32 font-light text-gray-800 mb-5'>Blog</h1>
        </div>
        <div class="card bg-white shadow-2xl rounded-lg px-12 py-8 mb-2">
            <div class="articles" v-for="story in stories" :key="story.uuid">
                <div class="article mb-5 ">
                    <div class="flex flex-wrap">
                        <div class="w-full md:w-1/3 md:pr-5">
                            <nuxt-link :to="{name: 'blog-slug', params: {slug: story.slug}}">
                                <img :src="story.content.thumbnail.filename" :alt="story.content.thumbnail.alt" class='rounded-lg shadow-lg h-48 w-full object-cover'>
                            </nuxt-link>
                        </div>
                        <div class="w-full md:w-2/3 md:pl-5">
                            <h3 class='article-title text-4xl  mt-4 md:mt-0'>
                                <nuxt-link :to="{name: 'blog-slug', params: {slug: story.slug}}"
                                        class="text-gray-700 hover:text-green-600 transition duration-200">{{story.name}}</nuxt-link>
                            </h3>
                            <p class='time mt-2 mb-2 text-gray-600'>{{ $moment(story.created_at).format("LL") }}</p>
                            <p class='excerpt text-gray-600'>
                                {{story.content.paragraph.substr(0,300)}} <nuxt-link :to="{name: 'blog-slug', params: {slug: story.slug}}" class='text-green-600'>Read more..</nuxt-link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data: () => ({
        stories: []
    }),
    async asyncData({app, isDev, route, store, env, params, query, req, res, redirect, error}) {
        let stories;

        await app.$storyapi.get('cdn/stories', {
            'starts_with': 'ahmadsaugi-com'
        }).then((res) => {
            stories = res.data.stories
            return res.data
        }).catch((res) => {
            if (!res.response) {
                console.error(res)
                error({ statusCode: 404, message: 'Failed to receive content form api' })
            } else {
                console.error(res.response.data)
                error({ statusCode: res.response.status, message: res.response.data })
            }
        })
        console.log(stories)
        return {
            stories
        }
    },
    methods: {
        getArticles() {
            
        }
    }
}
</script>