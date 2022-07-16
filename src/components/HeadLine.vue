<template>
  <div class="self-center xl:mt-[35vh] lg:mt-80 md:mt-12 mt-12 text-right flex-col flex">
    <div style="text-align:right; text-align:-webkit-right;" >
      <router-link :to="route.path" class="transition-all ease-in-out linkWrap block w-fit 2xl:my-20 xl:my-12 my-6" v-for="route in routes" :key="route">
        <div v-if="route.meta.isMenu" class="">
            <i :class="route.icon"></i> 
            <span class="lg:ml-5 font-light lg:inline-block navLink hearderList text-5xl" :class="`${dark ? 'white_navLink' : 'dark_navLink'}`" style="font-family: 'Archivo Black', sans-serif;">{{route.title}}</span>
        </div>
      </router-link>  
    </div>
  </div> 
</template>

<script>
import { ref,onBeforeMount,onMounted, computed } from 'vue'
import { useStore, mapGetters } from 'vuex'
import router from '../router'

export default {
  setup(){
    const routes = ref([])
    
    onBeforeMount(()=>{
      //routes.value = router.options.routes
      routes.value = router.options.routes.filter((route) => route.meta.isMenu == true)
    });
    return {
      routes,
      router, 
    }
  },
  computed: {
    ...mapGetters(['dark'])
  },
}
</script>

<style scoped>
  .dark_navLink {    
    color: hsl(216deg 8% 12%);
    -webkit-text-stroke: 1px #fff;
    text-stroke: 1px #000;
  }
  .dark_navLink:hover {color: #fff;}
  .white_navLink {    
    color: #fff;
    -webkit-text-stroke: 1px #11216b;
    text-stroke: 1px #11216b;
  }
  .white_navLink:hover {color:#20317d;}
  /* .linkWrap:hover .navLink {
    color: #fff;
  } */
  .hearderList:hover {transition: all .15s ease-out;}
  @screen xl {
   .hearderList{font-size: 10vh;}
  }
</style>