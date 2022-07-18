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
    <div class="my-20">
      <Skills></Skills>
    </div>
  </div>
</template>

<script>
import HeadLineVue from '../components/HeadLine.vue'
import Introduce from '../components/Introduce.vue'
import Pictures from '../components/Pictures.vue'
import Skills from '../components/Skills.vue'
export default {
    components:{
        HeadLineVue,
        Introduce,
        Pictures,
        Skills
    }
}
</script>

<style>

</style>