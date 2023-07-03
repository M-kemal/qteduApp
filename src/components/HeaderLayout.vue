<template>
    <header class="navigation h-[100px] z-50 w-full text-white" :class="{'sticky': isScrolled}">
        <nav class="navbar h-full my-2 mx-auto k15:max-w-[1400px] k1:max-w-[1240px]">
            <div class="container mx-auto flex justify-between items-center relative h-full">
                <a href="/" class="h-full flex items-center justify-center ">
                <img src="../assets/brand.svg" alt="brand" class="w-auto h-[67%] mb-[15px] max-w-[50vw]">
                </a>
                <div class=" ml-auto flex items-center justify-center relative top-auto w-auto xl:left-[25px] right-0 ">
                    <div class="container nav-links  items-center justify-center hidden xl:flex">
                        <ul class="flex justify-end h-full items-center font-medium">
                            <li v-for="(link, index) in menuItems" :key="index" class="mr-6" :class="link.classes">
                                <a href="#" class="text-base self-center">
                                    {{ link.name }}
                                    <span :class="link.icon"></span>
                                </a>
                            </li>
                            <div class="butonlar flex justify-between items-center space-x-4">
                            <button class="btn py-[0.5em] px-[1em] rounded-full mr-1  transition duration-100">Get involved</button>
                            <button class="bg-white text-gray-500 py-[0.5em] px-[1em] rounded-full  flex justify-center items-center hover:bg-blue-700 hover:text-white transition duration-200 ease-in-out">Login <span class="ml-1">
                            <img src="../assets/btnIcon.svg" class="w-5" alt="">
                            </span> 
                            </button>
                            </div>
                        </ul>
                    </div>
                    <button @click="isOpen = !isOpen" class="xl:px-4 mr-2 xl:mr-0">
                        <span class="block xl:border-l xl:border-white xl:px-4">
                            <SearchIcon class="w-11 h-11 border-2 p-2.5 rounded-full btn text-white" />
                        </span>
                    </button>
                    <button @click="isOpen = !isOpen" type="button" class="MiniNavBtn mr-1 xl:mr-0 inline-flex items-center  text-sm rounded-lg xl:hidden text-white hover:text-orange-500  btn">
                    <span class="sr-only">Open menu</span>
                        <MenuBtn class="p-2.5 " /> 
                    </button>
                </div>
            </div>
            <div class="border-class border-t container z-10 mx-auto"></div>
            <!-- MiniNav -->
            <div  :class="{ 'hidden': isOpen, 'block': !isOpen }" class="items-center justify-between  container mx-auto" id="navbar-search">
            <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <SearchIcon class="w-5" />
                </div>
                <input type="text" id="search-navbar" class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search...">
            </div>
                <ul class="flex flex-col p-4  font-medium border border-blue-900 rounded-lg bg-blue-900 space-y-3  md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 dark:text-white">
                    <li v-for="(link, index) in miniMenu" :key="index" class="align-middle mt-4 p-2 cursor-pointer hover:bg-blue-950 transition duration-300 ease-linear border-b border-double border-blue-200 hover:border-blue-500 rounded-md">
                       {{ link }}
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>

import Header from '@/composables/Header'
import MenuBtn from './icons/MenuBtn.vue';
import SearchIcon from './icons/SearchIcon.vue'
export default {
    components : {
        MenuBtn,
        SearchIcon
    },
    setup () {
        const {isOpen,isScrolled,handleScroll,onMounted,onUnmounted,miniMenu,menuItems} = Header();

        return { isOpen, isScrolled, handleScroll, onMounted, onUnmounted, miniMenu, menuItems }
    }
}
</script>

<style>

</style>