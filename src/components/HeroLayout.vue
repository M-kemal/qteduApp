<template>
    <div class="w-full hero-section">
        <header  class="header-intro min-h-[44vh] pt-[calc(100px+2rem)] relative bg-[##071152] padi overflow-hidden flex flex-col justify-end before:contents before:absolute before:top-0 before:left-0">
            <div class="container mx-auto mt-7 flex flex-col justify-end z-10 items-center text-center text-white">
                <h1 class="mb-10 text-6xl font-playFlair">{{ heroSection.title }}</h1>
                <h5 class="mb-10 text-2xl relative"> <span class="iconHero pl-10"></span> {{ heroSection.subTitle }} </h5>
                <h6 class="w-[70%] mx-auto  leading-loose font-avenirAlter font-medium  text-gray-300 mb-10">
                    {{ heroSection.content }}
                </h6>
                <button class="btn mb-20 py-1.5 px-8 text-lg rounded-full mr-1  transition duration-100">
                    Submit
                </button>
            </div>
            <img src="../assets/banner-page.png" alt="" class="absolute top-0 z-0 object-cover w-full h-full object-top">
        </header>
    </div>
</template>

<script>
import Hero from '@/composables/Hero'
export default {
    setup() {
        const { heroSection } = Hero();
        return {
            heroSection
        }
    }
}
</script>

<style>

</style>