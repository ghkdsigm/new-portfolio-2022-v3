<template>
  <div>
    <div class="">
      <HeadLineVue></HeadLineVue>
    </div>
    <div class="">
      <Introduce></Introduce>
    </div>
    <div class="my-20">
      <Pictures></Pictures>
    </div>
  </div>
</template>

<script>
import HeadLineVue from '../components/HeadLine.vue'
import Introduce from '../components/Introduce.vue'
import Pictures from '../components/Pictures.vue'
export default {
    components:{
        HeadLineVue,
        Introduce,
        Pictures
    }
}
</script>

<style>

</style>