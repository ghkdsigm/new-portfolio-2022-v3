<template>
  <div class="picWrapper grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-0">
    <div class="flex items-center h-80 overflow-hidden"><img src="@/assets/images/11.jpg" class="object-cover object-center h-full w-full" alt="With 박지성"></div>
    <!-- With 박지성 -->
    <div class="flex items-center h-80 overflow-hidden"><img src="@/assets/images/22.jpg" class="object-cover object-center h-full w-full" alt="유벤투스 vs 팀k리그 친선경기"></div>
    <!-- 유벤투스 vs 팀k리그 친선경기 -->
    <div class="flex items-center h-80 overflow-hidden"><img src="@/assets/images/33.jpg" class="object-cover object-center h-full w-full" alt="GXG NFT 제작"></div>
    <!-- GXG NFT 제작 -->
    <div class="flex items-center h-80 overflow-hidden"><img src="@/assets/images/44.jpg" class="object-cover object-center h-full w-full" alt="With 오중석 포토그래퍼"></div>
    <!-- With 오중석 포토그래퍼 -->
    <div class="flex items-center h-80 overflow-hidden"><img src="@/assets/images/77.jpg" class="object-cover object-center h-full w-full" alt="GXG NFT 제작"></div>
    <!-- GXG NFT 제작 -->
    <div class="flex items-center h-80 overflow-hidden"><img src="@/assets/images/55.jpg" class="object-cover object-center h-full w-full" alt="With 박문성 해설위원"></div>
    <!-- With 박문성 해설위원 -->
    <div class="flex items-center h-80 overflow-hidden"><img src="@/assets/images/66.jpg" class="object-cover object-center h-full w-full" alt="유벤투스 vs 팀k리그 친선경기"></div>
    <!-- 유벤투스 vs 팀k리그 친선경기 -->
    <div class="flex items-center h-80 overflow-hidden"><img src="@/assets/images/88.jpg" class="object-cover object-center h-full w-full" alt="WITH UNBIZ"></div>
    <!-- WITH UNBIZ -->    
  </div> 
</template>

<script>
import router from '../router'

export default {
  
}
</script>

<style scoped>
.picWrapper > div {
    filter: grayscale(30%) contrast(1) brightness(80%);
}
.picWrapper > div:hover {
  filter: grayscale(0%) contrast(1) brightness(100%);
}
/* .picWrapper > div img {
  opacity: 0.5;
} */
.picWrapper > div:hover img {
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
  display: block;
  transition: all 0.3s ease-out;
  opacity: 1;
}
</style>