<template>
    <li class='nav-item mr-0 text-2xl  bg-white md:bg-transparent' @click="$emit('click')">
        <nuxt-link :to="to" class='block nav-link text-gray-700 p-3 relative tracking-wide'>
            <slot/>
        </nuxt-link>
    </li>   
</template>
<script>
export default {
    props: {
        to: String
    }
}
</script>
<style lang="scss">
.nav-link {
    &:after {
        position: absolute;
        content: '';
        width: 0;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: #00c58e;
        transition: all .2s ease-out;
    }
    &:hover:after {
        width: 100%;
    }
}
@media screen and (min-width: 768px) {
    .nav-item:not(:last-child) {
        margin-right: 3rem;
    }
}
</style>