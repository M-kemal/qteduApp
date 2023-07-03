<template>
  <div class="Course-Cards mx-auto w-full md:w-4/5 mt-10">
    <!--? Filters & Cards  -->
    <div class="Filters-Courses-Container lg:grid lg:grid-cols-4 grid grid-flow-row gap-4">
        <!--? Fİlters Section -->
        <appFilters />
      <!--? Card Section  -->
        <appCourses />
    </div>
  </div>
</template>

<script>
import appFilters from '@/components/appFilters.vue'
import appCourses from '@/components/appCourses.vue'
export default {
    components : {
        appFilters,
        appCourses,
    },
    setup() {
        return {
        }
    }
}
</script>

<style>

</style>