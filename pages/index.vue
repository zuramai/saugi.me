<script setup>
definePageMeta({
  layout: "main",
});
useHead({
  title: 'Home',
  meta: [
    { hid: 'description', name: 'description', content: 'Ahmad Saugi is a professional full-stack web developer who has 4+ years of experience and currently studying computer science at Binus University. I love making open-source projects.' }
  ],
})
</script>
<template>
<section class="content">
  <div class="container mx-auto">
    <div class="prose">
      <h1 class="text-center">Hi, Saugi's here!</h1>
      <p>
        I am Ahmad Saugi, a bachelor of computer science student. My passion for software lies with dreaming up ideas and making them come true with elegant interfaces. I take great care in experience, architecture, and code quality of the things I build.
      </p>
      <p>
        I am also an open-source enthusiast and maintainer. You can see <nuxt-link to="projects">list of my projects here</nuxt-link>. I love how collaboration and knowledge sharing happens through open-source and I am happy to see what I do could eventually feedback to the community and industry.
      </p>
      <p>
        Outside of programming, I enjoy reading books. I love the pleasure and excitement of gaining new knowledge other than programming from the books I read.
      </p>
      <hr>
      <p>If you like my works, consider sponsoring me on <a href="https://github.com/sponsors/zuramai" target="_blank">GitHub Sponsor</a> to keep them sustainable.</p>
    </div>
  </div>
</section>
</template>