<template>
  <div class='w-full'>
   <Particles
      :particlesInit="particlesInit"
      :particlesLoaded="particlesLoaded"
      id="tsparticles"
      :options="particleOptions"/>
    <Navbar/>
    <transition name="fade" mode="out-in">
      <Nuxt />
    </transition>
  </div>
</template>
<script>
import Navbar from "~/components/Navbar/Navbar"
import { loadTrianglesPreset } from "tsparticles-preset-triangles";
export default {
  components: {
    Navbar
  },
  methods: {
    particlesLoaded(particle) {
      particle.loadTheme("light")
    },
    async particlesInit(engine) {
      await loadTrianglesPreset(engine);
    }
  },
  data: () => ({
    particleOptions: {
    }
  })
}
</script>
<style>
.fade-enter-active, .fade-leave-active {
  transition: all .2s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.fade-enter-to, .fade-leave {
  opacity: 1;
}
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
