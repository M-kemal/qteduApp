<template>
    <div class="CourseCards flex flex-col lg:flex-row justify-between bg-gray-100 p-8 hover:bg-indigo-50 cursor-pointer mb-10">
      <div class="Left-Col w-[70%] space-y-4 mb-4 lg:mb-0">
        <slot name="left-col" />
      </div>
      <div class="Right-Col lg:w-[25%] border-t-2 pt-4 lg:border-l-2 lg:border-t-0 lg:pl-4 border-dashed border-gray-300 font-avenirAlter space-y-2">
        <slot name="right-col" />
      </div>
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'CourseItem'
  });
  </script>
  
  <style>

  </style>
  