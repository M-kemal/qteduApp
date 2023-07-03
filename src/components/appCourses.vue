<template>
    <div class="Courses-Section lg:col-span-3">
        <h4 class="my-0 ml-auto mr-0 text-end font-bold font-playFlair">
            <span class="text-2xl dark:text-gray-500">{{ count }} items</span>
        </h4>
        <CourseItem v-for="card in CardsData" :key="card.id">
            <template #left-col>
                <div class="DataType">
                    <span class="text-indigo-950 font-semibold text-sm uppercase">{{ card.dataType }}</span>
                </div>
                <h4 class="Title font-playFlair font-semibold text-2xl text-indigo-700">{{ card.title }}</h4>
                <div class="content">
                    <p>{{ card.content }}</p>
                </div>
                <div class="target">
                    <div class="flex lg:items-center justify-start gap-2 flex-col lg:flex-row lg:flex-wrap">
                    <p class="flex" v-for="target in card.target" :key="target">
                        <span class="mr-1.5">
                            <!-- <img src="../assets/target.svg" alt=""> -->
                            <IconTarget />
                        </span>
                        {{ target }}
                    </p>
                    </div>
                </div>
            </template>
            <template #right-col>
                <div class="text-gray-400 text-sm uppercase">{{ card.countriesText }}</div>
                <p class="font-semibold text-sm">{{ card.coverage }}</p>
                <div class="languages space-y-2">
                    <p class="text-gray-400 text-sm uppercase">{{ card.languagesText }}</p>
                    <p class="font-semibold text-sm">{{ card.languages }}</p>
                </div>
                <div class="text-gray-400 text-sm uppercase">{{ card.provideText }}</div>
                <div>
                    <p class="font-semibold text-sm">{{ card.providedBy }}, {{ card.area }}</p>
                </div>
            </template>
      </CourseItem>
    </div>
  </template>
  
  <script>
  // import { reactive, watchEffect } from 'vue';
  import CourseItem from './CourseItem.vue';
  import Courses from '@/composables/Courses'
  import IconTarget from './icons/IconTarget.vue';
  export default {
    components: {
      CourseItem,
      IconTarget
    },
    setup() {
       const { ...state } = Courses();
       return {
        ...state
       }
    }
  }
  </script>
  
  <style>
  
  </style>
  