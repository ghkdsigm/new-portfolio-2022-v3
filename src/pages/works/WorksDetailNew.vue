<template>
  <div class="dark:text-primary text-third">
    <div class="flex justify-between lg:mt-0 mt-10">
      <BackWorks class="relative"></BackWorks>
      <a href="#" class="lg:mt-12 mt-0 dark:hover:bg-amber-400 relative lg:text-lg text-xs border py-2 px-4 rounded-full dark:border-gray-100 dark:hover:border-transparent border-third text-third dark:hover:text-black dark:text-gray-100 font-bold hover:bg-third hover:text-white">Visit the website</a>
    </div>
    <div class="relative mt-4">
      <div class="lg:text-2xl text-xl lg:font-extrabold font-bold font-base my-6">{{data.title}}</div>
      <div class="my-4">
        <img :src="data.innerImage" class="mx-auto block" alt="" />
      </div>
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
      data:this.$store.state.infodatas[index],
    }
  },  
  created() {
    this.$store.dispatch("FETCH_INFO");
    return
  },
}
</script>

<style>

</style>