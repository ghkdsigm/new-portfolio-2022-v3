<template>
  <div class="dark:text-primary text-third">
    <div class="flex justify-between">
      <BackWorks class="relative"></BackWorks>
      <a href="#" class="lg:mt-12 mt-0 dark:hover:bg-amber-400 relative lg:text-lg text-xs border py-2 px-4 rounded-full dark:border-gray-100 dark:hover:border-transparent border-third text-third dark:hover:text-black dark:text-gray-100 font-bold hover:bg-third hover:text-white">Visit the website</a>
    </div>
    <div class="relative mt-4">
      <div>{{data.title}}</div>
      <img :src="data.innerImage" alt="">
      <rounter-link :to="data.url">ss</rounter-link>
      <div>{{data.language}}</div>
      <div>{{data.party}}</div>
      <div>{{data.created_at}}</div>
    </div>
  </div>
</template>

<script>
import BackWorks from '@/components/common/BackWorks.vue'
//import data from '@/data'
export default {
  components:{
    BackWorks
  },
  name:'worksDetail',
  data(){
    const index = this.$route.params.contentId;
    return{
      index:index,
      //data:data.Content[index],
      data:this.$store.state.frontworks[index],
    }
  },  
  created() {
    this.$store.dispatch("FECTH_MYFRONT");
    this.$store.dispatch("FETCH_OPERATION");
    return
  },
}
</script>

<style>

</style>