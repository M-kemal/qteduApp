<template>
    <div class="bg-white border-gray-200 ">
        <HeaderLayout />
        <HeroLayout />
        <FiltersCourses />
    </div>
</template>

<script>
import HeaderLayout from './HeaderLayout.vue';
import HeroLayout from './HeroLayout.vue';
import FiltersCourses from './FiltersCourses.vue'
export default {
  components: {
    HeaderLayout,
    HeroLayout,
    FiltersCourses,
  },
  setup() {
    return {
    }
  }

}
</script>

<style>

</style>