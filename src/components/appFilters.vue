<template>
     <div class="Filters-Section lg:col-span-1">
        <div class="Filters-Icon FiltersTitle">
            <div class="relative">
            <p>
                <span class="flex text-gray-500">
                <img src="../assets/filter.svg" alt="filterIcon" class="mr-2">
                FILTERS
                </span>
            </p>
            <div class="lg:hidden absolute top-0 left-[95%]">
                <button @click="show = !show" class="group">
                <i >
                    <IconChevron class="h-8 w-8 dark:text-indigo-500 group-hover:transform group-hover:rotate-180 transition duration-300" />
                </i>
                </button>
            </div>
            <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700">
            </div>
        </div>
        <div v-if="show" class="Filter-Courses-Btn flex flex-col gap-4 ">
            <button v-for="item in filters" :key="item" class="FiltersBtn px-2 py-4 border border-indigo-500 hover:bg-indigo-500 hover:text-white text-indigo-500 transform duration-100 ease-linear">
            <span class=" uppercase">{{ item.text }}</span>
            </button>
            <select name="languages" class="border-b-2 border-b-gray-300 p-1 outline-none cursor-pointer ">
            <option v-for="option in Languages.option" :key="option.id" :value="option.value">
                {{ option.title }}
            </option>
            </select>
            <select name="target" class="border-b-2 border-b-gray-300 p-1 outline-none cursor-pointer ">
            <option v-for="option in Target.option" :key="option.id" :value="option.value">
                {{ option.title }}
            </option>
            </select>
            <select name="location" class="border-b-2 border-b-gray-300 p-1 outline-none cursor-pointer ">
            <option v-for="country in countres" :key="country.id" :value="country">
                {{ country }}
            </option>
            </select>
            <button class="ResetBtn w-2/5 mx-auto px-4 py-2 rounded-3xl border border-indigo-900 text-indigo-900 hover:text-white hover:bg-indigo-900 dark:text-indigo-500 dark:border-indigo-500 group">
            <span class="flex items-center justify-center"> Reset <ResetIcon class="w-4 ml-auto group-hover:transform group-hover:rotate-180 transition duration-300"/> </span>
            </button>
        </div>
      </div>
</template>

<script>
// import { ref, reactive } from 'vue';
import IconChevron from './icons/IconChevron.vue';
import ResetIcon from './icons/ResetIcon.vue';
import Filters from '@/composables/Filters.js'
export default {
components : {
IconChevron,
ResetIcon
},
setup() {
        const {  show, Languages, Target, countres, ...filters } = Filters();
        return { show, ...filters, Languages, Target, countres }
    }
}
</script>

<style>

</style>