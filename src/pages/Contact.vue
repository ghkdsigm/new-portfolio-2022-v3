<template>
  <div class="dark:text-primary text-third">
    <BackHome class="relative"></BackHome>
    <div class="relative mt-4">
      <ContactView></ContactView>
    </div>
  </div>
</template>

<script>
import BackHome from '../components/common/BackHome.vue'
import ContactView from '../components/ContactView.vue'
export default {
  components:{
    BackHome,
    ContactView
  }
}
</script>

<style>

</style>