<template>
  <div class="container">
    <div class='flex flex-col mx-auto mt-64 text-center'>
      <div class="image">
      <img src="/images/ogi.png" alt="My Picture" class="mx-auto w-64"/>
      </div>
      <h1 class="title my-8 leading-tight">
        Ahmad Saugi
      </h1>
      <p class='text-2xl'><span class='text-green-600'>Enthusiastic</span> Web Developer</p>
      <div class="links d-flex flex-row mt-5">
        <a class='socmed inline-block mr-4 duration-200 ease-in-out' href="https://github.com/zuramai">
          <img src="/socmed/github-circle.svg" alt="Github" class='w-8' target="_blank"/>
        </a>
        <a class='socmed inline-block mr-4 duration-200 ease-in-out' href="https://www.instagram.com/asawgi">
          <img src="/socmed/instagram.svg" alt="Instagram" class='w-8' target="_blank"/>
        </a>
        <a class='socmed inline-block mr-4 duration-200 ease-in-out' href="https://www.linkedin.com/in/ahmad-saugi/">
          <img src="/socmed/linkedin-square.svg" alt="Linkedin" class='w-8' target="_blank"/>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.socmed:hover {
  transform: translateY(-10px)
}
.image img {
  filter: drop-shadow(0 10px 30px #ccc)
}

.title {
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.links {
  padding-top: 15px;
}
</style>
