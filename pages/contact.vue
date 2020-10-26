<template>
    <div id="page-content" class='container'>
        <div class="flex w-full">
            <h1 class='page-heading text-6xl text-center mx-auto mt-32 font-light text-gray-800 mb-5'>Contact</h1>
        </div>
        <div class="page-body px-5">
            <div class="card  bg-white shadow-2xl rounded-lg px-12 py-8 mb-2">
                <div class="contact flex flex-row items-center mb-5">
                    <div class="image">
                        <img src="@/assets/socmed/telegram.svg" alt="Telegram" class='w-8 mr-3'>
                    </div>
                    <a class='text-blue-600 hover:text-blue-400' href="https://t.me/amsaugi/" target="_blank">https://t.me/amsaugi/</a>
                </div>
                <div class="contact flex flex-row items-center mb-5">
                    <div class="image">
                        <img src="@/assets/socmed/facebook-circle.svg" alt="Facebook" class='w-8 mr-3'>
                    </div>
                    <a class='text-blue-600 hover:text-blue-400' href="https://www.facebook.com/ahmadsaugi.gis/" target="_blank">https://www.facebook.com/ahmadsaugi.gis/</a>
                </div>
                <div class="contact flex flex-row items-center mb-5">
                    <div class="image">
                        <img src="@/assets/socmed/github-circle.svg" alt="Github" class='w-8 mr-3'>
                    </div>
                    <a class='text-blue-600 hover:text-blue-400' href="https://github.com/zuramai/" target="_blank">https://github.com/zuramai/</a>
                </div>
                <div class="contact flex flex-row items-center mb-5">
                    <div class="image">
                        <img src="@/assets/socmed/instagram.svg" alt="Instagram" class='w-8 mr-3'>
                    </div>
                    <a class='text-blue-600 hover:text-blue-400' href="https://www.instagram.com/asawgi/" target="_blank">https://www.instagram.com/asawgi</a>
                </div>
                <div class="contact flex flex-row items-center mb-5">
                    <img src="@/assets/socmed/linkedin-circle.svg" alt="LinkedIn" class='w-8 mr-3'>
                    <a class='text-blue-600 hover:text-blue-400' href="https://www.linkedin.com/in/ahmad-saugi/" target="_blank">https://www.linkedin.com/in/ahmad-saugi/</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
@media screen and (max-width: 768px) {
    .contact {
        flex-direction: column;
        text-align: center;
        margin-bottom: 2rem;
    }
}
</style>