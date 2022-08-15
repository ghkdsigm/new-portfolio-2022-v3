<template>
  <div class="dark:text-primary text-third">
    <div class="flex justify-between">
      <BackHome class="relative"></BackHome>
      <a href="#" class="lg:mt-12 mt-0 dark:hover:bg-amber-400 relative lg:text-lg text-xs border py-2 px-4 rounded-full dark:border-gray-100 dark:hover:border-transparent border-third text-third dark:hover:text-black dark:text-gray-100 font-bold hover:bg-third hover:text-white">Career-Description.pdf</a>
    </div>
    <div class="relative lg:mt-20 mt-4 text-left">
      <div class="lg:mt-4 block dark:text-secondary text-secondary-dark mb-20">
        <div class="xl:flex items-center lg:block block dark:bg-blend-screen bg-blend-normal">
          <img 
            src="@/assets/images/earth.gif"
            alt="earth gif" 
            class="dark:mix-blend-screen mix-blend-exclusion lg:block xl:m-0 lg:mx-auto mx-auto"
          />
          <!-- <img 
            src="@/assets/images/earth.gif"
            alt="earth gif" 
            class="mix-blend-exclusion"
            @load="image"
            v-if="image"
          /> -->
          <!-- src="@/assets/images/earth.gif"  -->
          <!-- style="mix-blend-mode: exclusion !important;" -->
          <!--기본정보(이력)-->
          <h4 class="xl:text-2xl lg:text-xl md:text-lg text-base mb-10 font-light xl:leading-10 lg:leading-10 md:leading-8 sm:leading-7">
            수많은 대국민 서비스 프로젝트에서 <br/>다양한 역할로서의 업무 수행을 통해<br/>
            <b class="lg:text-2xl text-lg lg:font-extrabold font-bold">성공적인 결과</b>를 이끌어낸 경험과 결과는<br /> 
            누구도 쉽게 겪어보지못할 <b class="lg:text-2xl text-lg lg:font-extrabold font-bold">소중한 경험</b>이라 생각하며,<br/>
            그 순간들을 겪으며 얻은 <b class="lg:text-2xl text-lg lg:font-extrabold font-bold">생각</b>과 <b class="lg:text-2xl text-lg lg:font-extrabold font-bold">배움</b>을 <br/>또 다른 프로젝트에서 새롭게 <b class="lg:text-2xl text-lg lg:font-extrabold font-bold">담아내고자</b> 합니다.
          </h4>
        </div>
        <div class="career mb-10">
          <h5 class="font-bold lg:text-3xl text-xl dark:text-primary text-third mb-4">History</h5>
          <ul>
            <li class="py-1 lg:text-lg text-base">
              <span class="font-base"><b class="font-base">(現) HYPERNEST</b> 개발팀 기획 & 프론트 개발 총괄</span>
              <span class="font-base text-sm lg:pl-4 pl-0 lg:mb-0 mb-4 lg:font-base lg:inline-block block dark:text-gray-300 text-gray-600">2022.05. - </span>
            </li>     
            <li class="py-1 lg:text-lg text-base">
              <span class="font-base"><b class="font-base">(前) UNBIZ</b> 기업부설연구소 개발 팀장</span>
              <span class="font-base text-sm lg:pl-4 pl-0 lg:mb-0 mb-4 lg:font-base lg:inline-block block dark:text-gray-300 text-gray-600">2016.12. - 21.11</span>              
            </li>      
          </ul>
        </div>
        <div class="career mb-22">
          <h5 class="font-bold lg:text-3xl text-xl dark:text-primary text-third mb-4">Representive Projects</h5>
          <ul>
            <li class="py-1 lg:text-lg text-base">
              <span class="font-base dark:font-thin"><b class="font-base dark:font-base lg:inline-block block">[HYPERNEST]</b> GXG.Style NFT 거래소 신규 구축 및 운영</span>
              <span class="font-base text-sm lg:pl-4 pl-0 lg:mb-0 mb-4 lg:font-base lg:inline-block block dark:text-gray-300 text-gray-600">2022.05. - 22.11</span>              
            </li>
            <li class="py-1 lg:text-lg text-base">
              <span class="font-base dark:font-thin"><b class="font-base dark:font-base lg:inline-block block">[HYPERNEST]</b> GotG.World 홈페이지 개편</span>
              <span class="font-base text-sm lg:pl-4 pl-0 lg:mb-0 mb-4 lg:font-base lg:inline-block block dark:text-gray-300 text-gray-600">2022.05. - 22.07</span>              
            </li>
            <li class="py-1 lg:text-lg text-base">
              <span class="font-base dark:font-thin"><b class="font-base dark:font-base lg:inline-block block">[한국프로스포츠협회]</b> 프로스포츠 정보광장 포탈 사이트 개선 및 운영</span>
              <span class="font-base text-sm lg:pl-4 pl-0 lg:mb-0 mb-4 lg:font-base lg:inline-block block dark:text-gray-300 text-gray-600">2021.06. - 21.11</span>              
            </li>
            <li class="py-1 lg:text-lg text-base">
              <span class="font-base dark:font-thin"><b class="font-base dark:font-base lg:inline-block block">[국가대표선수촌]</b> 국가대표선수촌 개방 확대 지원 온라인 예약구축</span>
              <span class="font-base text-sm lg:pl-4 pl-0 lg:mb-0 mb-4 lg:font-base lg:inline-block block dark:text-gray-300 text-gray-600">2021.06. - 21.10</span>
            </li>
            <li class="py-1 lg:text-lg text-base">
              <span class="font-base dark:font-thin"><b class="font-base dark:font-base lg:inline-block block">[한국프로스포츠협회]</b> KPGA 투어 관리 및 운영시스템 개선사업 입찰 자문위원</span>
              <span class="font-base text-sm lg:pl-4 pl-0 lg:mb-0 mb-4 lg:font-base lg:inline-block block dark:text-gray-300 text-gray-600">2021.06.</span>
            </li>
            <li class="py-1 lg:text-lg text-base">
              <span class="font-base dark:font-thin"><b class="font-base dark:font-base lg:inline-block block">[제주유나이티드]</b> 제주유나이티드 내손안의전광판 플랫폼 운영 고도화 사업</span>
              <span class="font-base text-sm lg:pl-4 pl-0 lg:mb-0 mb-4 lg:font-base lg:inline-block block dark:text-gray-300 text-gray-600">2021.03. - 21.09</span>
            </li>
            <li class="py-1 lg:text-lg text-base">
              <span class="font-base dark:font-thin"><b class="font-base dark:font-base lg:inline-block block">[한국도핑방지위원회]</b> 보건의료인 도핑방지 인증제도 온라인 학습관리시스템(LMS) 구축</span>
              <span class="font-base text-sm lg:pl-4 pl-0 lg:mb-0 mb-4 lg:font-base lg:inline-block block dark:text-gray-300 text-gray-600">2020.08. - 20.12</span>
            </li>
            <li class="py-1 lg:text-lg text-base">
              <span class="font-base dark:font-thin"><b class="font-base dark:font-base lg:inline-block block">[한국프로스포츠협회]</b> 프로스포츠 정보광장 포탈 웹사이트 기능고도화 작업</span>
              <span class="font-base text-sm lg:pl-4 pl-0 lg:mb-0 mb-4 lg:font-base lg:inline-block block dark:text-gray-300 text-gray-600">2020.08. - 20.12</span>
            </li>
            <li class="py-1 lg:text-lg text-base">
              <span class="font-base dark:font-thin"><b class="font-base dark:font-base lg:inline-block block">[경남체육회]</b> 경남 청소년 스포츠한마당 비대면 대회 앱 개발 및 운영 사업</span>
              <span class="font-base text-sm lg:pl-4 pl-0 lg:mb-0 mb-4 lg:font-base lg:inline-block block dark:text-gray-300 text-gray-600">2020.10. - 20.11</span>
            </li>
            <li class="py-1 lg:text-lg text-base">
              <span class="font-base dark:font-thin"><b class="font-base dark:font-base lg:inline-block block">[한국도핑방지위원회]</b> 도핑검사 포털(ADTIS) 및 검사관 온라인 교육시스템 구축 사업</span>
              <span class="font-base text-sm lg:pl-4 pl-0 lg:mb-0 mb-4 lg:font-base lg:inline-block block dark:text-gray-300 text-gray-600">2020.07. - 20.11</span>
            </li>
            <li class="py-1 lg:text-lg text-base">
              <span class="font-base dark:font-thin"><b class="font-base dark:font-base lg:inline-block block">[한국프로스포츠협회]</b> 프로스포츠 협회 홈페이지 윤리교육 일정관리시스템 개발 및 관리기능개선</span>
              <span class="font-base text-sm lg:pl-4 pl-0 lg:mb-0 mb-4 lg:font-base lg:inline-block block dark:text-gray-300 text-gray-600">2020.07. - 20.08</span>
            </li>
            <li class="py-1 lg:text-lg text-base">
              <span class="font-base dark:font-thin"><b class="font-base dark:font-base lg:inline-block block">[한국프로스포츠협회]</b> 한국 프로스포츠 정보광장 포탈 웹사이트 개선 사업</span>
              <span class="font-base text-sm lg:pl-4 pl-0 lg:mb-0 mb-4 lg:font-base lg:inline-block block dark:text-gray-300 text-gray-600">2020.03. - 20.06</span>
            </li>
            <li class="py-1 lg:text-lg text-base">
              <span class="font-base dark:font-thin"><b class="font-base dark:font-base lg:inline-block block">[대한체육회]</b> 대한체육회 국가대표 선수촌 방문예약 시스템 개선사업</span>
              <span class="font-base text-sm lg:pl-4 pl-0 lg:mb-0 mb-4 lg:font-base lg:inline-block block dark:text-gray-300 text-gray-600">2019.11. - 20.04</span>
            </li>
            <li class="py-1 lg:text-lg text-base">
              <span class="font-base dark:font-thin"><b class="font-base dark:font-base lg:inline-block block">[한국프로스포츠협회]</b> 프로스포츠 암표 신고 사이트 구축</span>
              <span class="font-base text-sm lg:pl-4 pl-0 lg:mb-0 mb-4 lg:font-base lg:inline-block block dark:text-gray-300 text-gray-600">2020.02. - 20.02</span>
            </li>
            <li class="py-1 lg:text-lg text-base">
              <span class="font-base dark:font-thin"><b class="font-base dark:font-base lg:inline-block block">[대한체육회]</b> 대한체육회 100주년 기념 홈페이지 개편 사업</span>
              <span class="font-base text-sm lg:pl-4 pl-0 lg:mb-0 mb-4 lg:font-base lg:inline-block block dark:text-gray-300 text-gray-600">2019.09. - 19.12</span>
            </li>
            <li class="py-1 lg:text-lg text-base">
              <span class="font-base dark:font-thin"><b class="font-base dark:font-base lg:inline-block block">[대한체육회]</b> 한국 체육을 빛낸 100인 후보자 추천 홈페이지 구축 및 운영</span>
              <span class="font-base text-sm lg:pl-4 pl-0 lg:mb-0 mb-4 lg:font-base lg:inline-block block dark:text-gray-300 text-gray-600">2019.06. - 19.11</span>
            </li>
            <li class="py-1 lg:text-lg text-base">
              <span class="font-base dark:font-thin"><b class="font-base dark:font-base lg:inline-block block">[대한체육회]</b> 2016, 17, 18, 19, 20, 21 대한민국 스포츠영웅 선정절차 시스템 구축 및 운영</span>
              <span class="font-base text-sm lg:pl-4 pl-0 lg:mb-0 mb-4 lg:font-base lg:inline-block block dark:text-gray-300 text-gray-600">2016.07. - 21.09</span>
            </li>
            <li class="py-1 lg:text-lg text-base">
              <span class="font-base dark:font-thin"><b class="font-base dark:font-lbaseight lg:inline-block block">[K-LEAGUE]</b> K리그 심판교육사이트 운영위탁</span>
              <span class="font-base text-sm lg:pl-4 pl-0 lg:mb-0 mb-4 lg:font-base lg:inline-block block dark:text-gray-300 text-gray-600">2018.03. - 18.12</span>
            </li>
            <li class="py-1 lg:text-lg text-base">
              <span class="font-base dark:font-thin"><b class="font-base dark:font-base lg:inline-block block">[경찰청]</b> 사이버 경찰청 홈페이지 개편사업</span>
              <span class="font-base text-sm lg:pl-4 pl-0 lg:mb-0 mb-4 lg:font-base lg:inline-block block dark:text-gray-300 text-gray-600">2016.12. - 17.10</span>
            </li>
          </ul>
          <div class="mt-10">
            <button type="button" class="px-8 py-2 border font-thin dark:border-gray-600 border-gray-300 rounded-full dark:hover:border-primary hover:border-third text-gray-400 dark:hover:text-primary hover:text-third lg:w-fit w-full lg:text-xl text-base">More Projects</button>
          </div>
        </div>        
      </div>
    </div>
  </div>
</template>

<script>
import BackHome from '../components/common/BackHome.vue'
import { ref,onBeforeMount,onMounted, computed } from 'vue'

export default {
  components:{
    BackHome
  },
  // data() {
  //   return {
  //     isImageLoaded: false
  //   }
  // },
  // methods: {
  //   onImageLoad () {
  //     this.isImageLoaded = true
  //   }
  // },
  // watch: {
  //   isImageLoaded: function(newValue, oldValue) {
  //     console.log("New value is: " + newValue)
  //     console.log("Old value is: " + oldValue)
  //   }
  // },
  // created(){
  //   this.$ref.earthImg.classList.add('ss')
  // }
  // setup(){
  //   const earthImg = ref('');
  //   onMounted(()=>{
  //     earthImg.classList.add("ss");
  //     // this.$nextTick(() => {
  //     //   this.earthImg.title.classList.add("red");
  //     // });
  //   })
  //   return {earthImg}
  // }
  // setup(props) {
  //   const isLoaded = ref(false);

  //   watch(() => props.image, (image) => {
  //       isLoaded.value = false;

  //       const img = new Image();
  //       img.onload = () => isLoaded.value = true;
  //       img.src = image;
  //   }, { immediate: true });
  // }
}
</script>

<style>
/* .ss {mix-blend-mode: exclusion !important;} */
</style>