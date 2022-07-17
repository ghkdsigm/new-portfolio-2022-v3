<template>   
      <transition name="route" mode="out-in">
        <component :is="layout"></component>
      </transition>
</template>

<script>
import DefaultLayout from '../layout/DefaultLayout.vue'
import SubLayout from '../layout/SubLayout.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

export default {
  components: { DefaultLayout,SubLayout },
  setup() {
    const route = useRoute()
    const layout = computed(() => route.meta.layout || 'DefaultLayout' || 'SubLayout')
    return {
      layout,
    }
  },
}
</script>

<style>

</style>