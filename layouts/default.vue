<template>
  <div class='w-full'>
    <Particles
      id="tsparticles"
      :options="{
            background: {
                color: {
                    value: '#f2f2f2'
                }
            },
            fpsLimit: 60,
            interactivity: {
                detectsOn: 'canvas',
                events: {
                    onClick: {
                        enable: true,
                        mode: 'push'
                    },
                    onHover: {
                        enable: true,
                        mode: 'repulse'
                    },
                    resize: true
                },
                modes: {
                    bubble: {
                        distance: 400,
                        duration: 2,
                        opacity: 0.8,
                        size: 40
                    },
                    push: {
                        quantity: 4
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    }
                }
            },
            particles: {
                color: {
                    value: '#beabea'
                },
                links: {
                    color: '#cecece',
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1
                },
                collisions: {
                    enable: true
                },
                move: {
                    direction: 'none',
                    enable: true,
                    outMode: 'bounce',
                    random: false,
                    speed: 3,
                    straight: false
                },
                number: {
                    density: {
                        enable: true,
                        value_area: 800
                    },
                    value: 80
                },
                opacity: {
                    value: 0.2
                },
                shape: {
                    type: 'circle'
                },
                size: {
                    random: true,
                    value: 5
                }
            },
            detectRetina: true
        }"
    />
    <Navbar/>
    <transition name="fade" mode="out-in">
      <Nuxt />
    </transition>
  </div>
</template>
<script>
import Navbar from "~/components/Navbar/Navbar"
export default {
  components: {
    Navbar
  }
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
