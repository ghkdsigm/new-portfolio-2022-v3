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
    <div class="my-20">
      <div class="max-h-[800px]overflow-hidden">
        <img class="align-top" src="https://raw.githubusercontent.com/ghkdsigm/new-portfolio-2022/main/src/assets/images/worksImg.png" alt="design image" />
      </div>
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