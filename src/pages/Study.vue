<template>
  <div class="dark:text-primary text-third">
    <BackHome class="relative"></BackHome>
    <div class="relative mt-4">
      <StudyList></StudyList>
    </div>
  </div>
</template>

<script>
import BackHome from '../components/common/BackHome.vue'
import StudyList from '../components/StudyList.vue'
export default {
  components:{
    BackHome,
    StudyList
  }
}
</script>

<style>

</style>