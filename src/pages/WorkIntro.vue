<template>
  <div class="dark:text-primary text-third">
    <BackHome class="relative"></BackHome>
    <div class="relative mt-4 text-left">
      <!-- <div class="lg:my-20 my-12 text-center">
        <a @click="scrollToAnchorPoint('workCategory01')" class="dark:text-white text-black dark:hover:text-primary hover:text-third inline-block lg:mx-4 mx-0 lg:my-0 my-4 lg:text-xl text-base lg:w-fit w-5/12">신규구축 및 운영</a> 
        <a @click="scrollToAnchorPoint('workCategory02')" class="dark:text-white text-black dark:hover:text-primary hover:text-third inline-block lg:mx-4 mx-0 lg:my-0 my-4 lg:text-xl text-base lg:w-fit w-5/12">관리 및 유지보수</a> 
        <a @click="scrollToAnchorPoint('workCategory03')" class="dark:text-white text-black dark:hover:text-primary hover:text-third inline-block lg:mx-4 mx-0 lg:my-0 my-4 lg:text-xl text-base lg:w-fit w-5/12">프론트엔드</a> 
        <a @click="scrollToAnchorPoint('workCategory04')" class="dark:text-white text-black dark:hover:text-primary hover:text-third inline-block lg:mx-4 mx-0 lg:my-0 my-4 lg:text-xl text-base lg:w-fit w-5/12">디자인</a>
        <a @click="scrollToAnchorPoint('workCategory05')" class="dark:text-white text-black dark:hover:text-primary hover:text-third inline-block lg:mx-4 mx-0 lg:my-0 my-4 lg:text-xl text-base lg:w-fit w-5/12">기획 및 문서</a>
      </div> -->
      <!--project01-->
      <div class="flex justify-center mt-12 mb-20">
        <div class="lg:flex block w-full">
          <div class="flex flex-1 justify-center item-start">
            <h2
              class="workTitle lg:text-[22vh] text-[12vh] dark:text-white text-black sticky top-0 h-fit leading-none lg:px-10 px-0"
            >
              01
            </h2>
          </div>
          <div class="flex-2">
            <router-link to="/works">
              <img src="../assets/images/worksThumb/pro1.jpg" alt="" />
            </router-link>
            <div
              class="my-5 border dark:border-gray-700 border-gray-300 h-0"
            ></div>
            <div class="lg:flex block items-center justify-between">
              <div>
                <h3
                  class="lg:text-[4vh] text-[3vh] dark:text-primary text-third font-bold"
                >
                  신규 구축 및 운영
                </h3>
                <p class="dark:text-white text-black">
                  LMS, NFT거래소, 기업홈페이지, 영상플랫폼, 이벤트프로모션,
                  대회운영앱 등 다양한 서비스 플랫폼 & 시스템 구축 노하우를
                  보유하고있습니다.
                </p>
              </div>
              <!-- <p class="dark:text-white text-black font-semibold lg:mt-0 mt-4">
                GO DETAIL
              </p> -->
            </div>
          </div>
        </div>
      </div>
      <!--project02-->
      <div class="flex justify-center my-20">
        <div class="lg:flex block w-full">
          <div class="flex flex-1 justify-center item-start">
            <h2
              class="workTitle lg:text-[22vh] text-[12vh] dark:text-white text-black sticky top-0 h-fit leading-none lg:px-10 px-0"
            >
              02
            </h2>
          </div>
          <div class="flex-2">
            <router-link to="/works">
              <img src="../assets/images/worksThumb/pro6.jpg" alt="" />
            </router-link>
            <div
              class="my-5 border dark:border-gray-700 border-gray-300 h-0"
            ></div>
            <div class="lg:flex block items-center justify-between">
              <div>
                <h3
                  class="lg:text-[4vh] text-[3vh] dark:text-primary text-third font-bold"
                >
                  관리 및 유지보수
                </h3>
                <p class="dark:text-white text-black">
                  자사, 고객사 요구사항 및 이용자 피드백 등 을 반영한 안정적인
                  서비스 관리 경험을 보유하고있습니다.
                </p>
              </div>
              <!-- <p class="dark:text-white text-black font-semibold lg:mt-0 mt-4">
                GO DETAIL
              </p> -->
            </div>
          </div>
        </div>
      </div>
      <!--project03-->
      <div class="flex justify-center my-20">
        <div class="lg:flex block w-full">
          <div class="flex flex-1 justify-center item-start">
            <h2
              class="workTitle lg:text-[22vh] text-[12vh] dark:text-white text-black sticky top-0 h-fit leading-none lg:px-10 px-0"
            >
              03
            </h2>
          </div>
          <div class="flex-2">
            <router-link to="/works">
              <img src="../assets/images/worksThumb/pro4.jpg" alt="" />
            </router-link>
            <div
              class="my-5 border dark:border-gray-700 border-gray-300 h-0"
            ></div>
            <div class="lg:flex block items-center justify-between">
              <div>
                <h3
                  class="lg:text-[4vh] text-[3vh] dark:text-primary text-third font-bold"
                >
                  프론트엔드 & 퍼블리싱
                </h3>
                <p class="dark:text-white text-black">
                  웹표준·접근성 기반, 사용자 접점에서의 전반적인 화면을 마크업,
                  UI/UX 개발 및 프론트엔드 개발합니다.
                </p>
              </div>
              <!-- <p class="dark:text-white text-black font-semibold lg:mt-0 mt-4">
                GO DETAIL
              </p> -->
            </div>
          </div>
        </div>
      </div>
      <!--project04-->
      <div class="flex justify-center my-20">
        <div class="lg:flex block w-full">
          <div class="flex flex-1 justify-center item-start">
            <h2
              class="workTitle lg:text-[22vh] text-[12vh] dark:text-white text-black sticky top-0 h-fit leading-none lg:px-10 px-0"
            >
              04
            </h2>
          </div>
          <div class="flex-2">
            <router-link to="/works">
              <img src="../assets/images/worksThumb/pro3.jpg" alt="" />
            </router-link>
            <div
              class="my-5 border dark:border-gray-700 border-gray-300 h-0"
            ></div>
            <div class="lg:flex block items-center justify-between">
              <div>
                <h3
                  class="lg:text-[4vh] text-[3vh] dark:text-primary text-third font-bold"
                >
                  디자인
                </h3>
                <p class="dark:text-white text-black">
                  꾸준히 변화하는 Web/Mobile 플랫폼 시장에서의 트렌디한 디자인
                  변화를 감지하고 이용자 니즈를 파악하여 제작합니다.
                </p>
              </div>
              <!-- <p class="dark:text-white text-black font-semibold lg:mt-0 mt-4">
                GO DETAIL
              </p> -->
            </div>
          </div>
        </div>
      </div>
      <!--project05-->
      <div class="flex justify-center my-20">
        <div class="lg:flex block w-full">
          <div class="flex flex-1 justify-center item-start">
            <h2
              class="workTitle lg:text-[22vh] text-[12vh] dark:text-white text-black sticky top-0 h-fit leading-none lg:px-10 px-0"
            >
              05
            </h2>
          </div>
          <div class="flex-2">
            <router-link to="/works">
              <img src="../assets/images/worksThumb/pro5.jpg" alt="" />
            </router-link>
            <div
              class="my-5 border dark:border-gray-700 border-gray-300 h-0"
            ></div>
            <div class="lg:flex block items-center justify-between">
              <div>
                <h3
                  class="lg:text-[4vh] text-[3vh] dark:text-primary text-third font-bold"
                >
                  기획 및 문서
                </h3>
                <p class="dark:text-white text-black">
                  신규 사업 기획력과 제안요청서, 제안서, 기획서, 보고서 등의
                  문서 작성 경험, 노하우를 보유하고 있습니다.
                </p>
              </div>
              <!-- <p class="dark:text-white text-black font-semibold lg:mt-0 mt-4">
                GO DETAIL
              </p> -->
            </div>
          </div>
        </div>
      </div>

      <div class="flex items-center h-[100vh]">
        <router-link
          to="/works"
          class="worksBT flex lg:text-2xl text-xl justify-center dark:text-white text-third border dark:border-gray-400 border-gray-500 w-fit m-auto px-8 py-3 rounded-sm dark:hover:text-black dark:hover:bg-primary hover:text-white hover:bg-third dark:hover:border-primary hover:border-third linkAll"
          >ALL WORKS</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import BackHome from '@/components/common/BackHome.vue';

// import Swiper core and required modules
import { onMounted } from 'vue';

export default {
  components: {
    BackHome,
  },
  setup() {
    onMounted(() => {
      // console.log(data)
    });
    return {};
  },
};
</script>

<style scoped>
.workTitle {
  font-family: 'Squada One', cursive;
}
.linkAll {
  font-family: 'Squada One', cursive;
}
.worksBT {
  position: relative;
  font-size: 1.4em;
  font-weight: 100;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
}
.worksBT:after {
  position: absolute;
  content: '';
  top: calc(50% - 50px);
  left: -50px;
  width: 20px;
  height: 100px;
  background: white;
  -webkit-transform: rotate(30deg);
  transform: rotate(30deg);
  -webkit-transition: all 1000ms cubic-bezier(0.23, 1, 0.32, 1);
  transition: all 1000ms cubic-bezier(0.23, 1, 0.32, 1);
  opacity: 0;
}
.worksBT:hover:after {
  left: calc(100% + 50px);
  opacity: 1;
}
</style>
