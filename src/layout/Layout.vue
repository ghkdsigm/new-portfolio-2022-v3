<template>   
      <transition name="route" mode="out-in">
        <component :is="layout"></component>
      </transition>
</template>

<script>
import DefaultLayout from '../layout/DefaultLayout.vue'
import SubLayout from '../layout/SubLayout.vue'
import { computed, onMounted, watchEffect } from 'vue'
import { useRoute } from 'vue-router'

export default {
  components: { DefaultLayout,SubLayout },
  setup() {
    const route = useRoute()
    const layout = computed(() => route.meta.layout || 'DefaultLayout' || 'SubLayout')
    onMounted(()=>{
      //console.log(layout._value)
      //console.log(route.name)
    })
    watchEffect(()=>{
      //console.log(layout._value)
      //console.log(route.name)
      let canvasBG = document.getElementsByClassName('canvasWrap')[0]
      //console.log(canvasBG)
      if(layout._value == 'DefaultLayout' && route.name == 'home'){
        // canvasBG.style.display = 'block'
        // canvasBG.style.visibility = 'visible'
        //console.log(1)
      } 
    })
    return {
      layout,
    }
  },
}
</script>

<style>

</style>