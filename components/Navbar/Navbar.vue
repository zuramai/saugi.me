<template>
    <div id="navbar" class='w-full absolute top-0  z-10'>
        <div class="flex flex-col">
            <div class="block md:hidden">
                <button class="flex float-right items-center mt-5 mr-5 p-5 border rounded duration-200 text-green-600 border-green-400 hover:bg-green-600 hover:text-white hover:border-green-600 " @click="navbar_show = !navbar_show">
                    <svg class="fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <nav class='pt-8'>
                <ul :class="{'nav flex flex-col md:flex-row justify-center w-full':true, 'navbar-show':navbar_show}">
                    <nav-item :to="{name: 'index'}" @click="navbar_show=false">Home</nav-item>
                    <nav-item :to="{name: 'achievements'}" @click="navbar_show=false">Achievements</nav-item>
                    <nav-item :to="{name: 'projects'}" @click="navbar_show=false">Projects</nav-item>
                    <nav-item :to="{name: 'skills'}" @click="navbar_show=false">Skills</nav-item>
                    <nav-item :to="{name: 'contact'}" @click="navbar_show=false">Contact</nav-item>
                </ul>
            </nav>
        </div>
    </div>
</template>
<script>
import NavItem from './NavItem';

export default {
    name: 'Navbar',
    components: {
        NavItem
    },
    data: () => ({
        navbar_show: false
    })
}
</script>