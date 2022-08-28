<template>
  <div class="dark:text-primary text-third">
    <div class="flex justify-between">
      <BackStudy class="relative"></BackStudy>
    </div>
    <div class="relative lg:mt-10 mt-4 text-left">
      <div class="lg:mt-4 block dark:text-secondary text-secondary-dark mb-20">
        <div class="xl:flex items-center lg:block block">
          <div class="w-full newswrap">
            <iframe width=”100%” height=”100%” src="https://www.youtube.com/embed/FJfwehhzIhw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>   
        </div>  
      </div>
    </div>
  </div>
</template>

<script>
import BackHome from '../components/common/BackHome.vue'
import BackStudy from '../components/common/BackStudy.vue'

export default {
  components:{
    BackHome,
    BackStudy
},  
}
</script>

<style scoped>
.newswrap {
  height: 85vh;
}
.newswrap iframe {
  width: 100%;
  height: 100%;
}
@media (max-width: 1024px) {
  .newswrap {
    height: 50vh;
  }
}
@media (max-width: 770px) {
  .newswrap {
    height: 40vh;
  }
}
@media (max-width: 490px) {
  .newswrap {
    height: 30vh;
  }
}
</style>