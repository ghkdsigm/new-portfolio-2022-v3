<template>
  <div class="dark:text-primary text-third">
    <div class="flex justify-between">
      <BackHome class="relative"></BackHome>
      <a
        href="#"
        ref="referdocument"
        @click="clickDocument"
        class="lg:mt-12 mt-0 dark:hover:bg-amber-400 relative xl:text-lg lg:text-base text-xs border py-2 px-4 rounded-full dark:border-gray-100 dark:hover:border-transparent border-third text-third dark:hover:text-black dark:text-gray-100 font-bold hover:bg-third hover:text-white"
        >Career-Description.pdf</a
      >
    </div>
    <div class="relative lg:mt-20 mt-4 text-left">
      <div class="lg:mt-4 block dark:text-secondary text-secondary-dark mb-20">
        <div class="xl:flex items-center lg:block block">
          <div class="earthWrap">
            <img
              src="@/assets/images/earth.gif"
              alt="earth gif"
              class="mix-blend-exclusion lg:block xl:m-0 lg:mx-auto mx-auto earth"
            />
          </div>
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
          <h4
            class="xl:text-2xl lg:text-xl md:text-lg text-base mb-10 font-light xl:leading-10 lg:leading-10 md:leading-8 sm:leading-7 careerTitle"
          >
            수많은 대국민 서비스 프로젝트에서 <br />다양한 역할로서의 업무
            수행을 통해<br />
            <b class="lg:text-2xl text-lg lg:font-semibold font-semibold"
              >성공적인 결과</b
            >를 이끌어낸 경험과 결과는<br />
            누구도 쉽게 겪어보지못할
            <b class="lg:text-2xl text-lg lg:font-semibold font-semibold"
              >소중한 경험</b
            >이라 생각하며,<br />
            그 순간들을 겪으며 얻은
            <b class="lg:text-2xl text-lg lg:font-semibold font-semibold"
              >생각</b
            >과
            <b class="lg:text-2xl text-lg lg:font-semibold font-semibold"
              >배움</b
            >을 <br />또 다른 프로젝트에서 새롭게
            <b class="lg:text-2xl text-lg lg:font-semibold font-semibold"
              >담아내고자</b
            >
            합니다.
          </h4>
        </div>
        <div class="career mb-10">
          <h5
            class="font-bold lg:text-3xl text-xl dark:text-primary text-third lg:mb-4 mb-1"
          >
            History
          </h5>
          <ul>
            <li class="py-1 lg:text-lg text-base">
              <span class="font-base"
                ><b class="font-base">(現) 아이템베이</b> 개발팀 웹 퍼블리싱 &
                프론트개발</span
              >
              <span
                class="font-base text-sm lg:pl-4 pl-0 lg:mb-0 mb-4 lg:font-base lg:inline-block block dark:text-gray-300 text-gray-600"
                >2022.11. -
              </span>
            </li>
            <li class="py-1 lg:text-lg text-base">
              <span class="font-base"
                ><b class="font-base">(前) HYPERNEST</b> 플랫폼 개발팀 기획 총괄
                및 프론트개발</span
              >
              <span
                class="font-base text-sm lg:pl-4 pl-0 lg:mb-0 mb-4 lg:font-base lg:inline-block block dark:text-gray-300 text-gray-600"
                >2022.05. - 22.11
              </span>
            </li>
            <li class="py-1 lg:text-lg text-base">
              <span class="font-base"
                ><b class="font-base">(前) UNBIZ</b> 기업부설연구소 SI 개발
                팀장</span
              >
              <span
                class="font-base text-sm lg:pl-4 pl-0 lg:mb-0 mb-4 lg:font-base lg:inline-block block dark:text-gray-300 text-gray-600"
                >2016.12. - 21.11</span
              >
            </li>
          </ul>
        </div>
        <div class="career mb-10">
          <h5
            class="font-bold lg:text-3xl text-xl dark:text-primary text-third lg:mb-4 mb-1"
          >
            Career Days
          </h5>
          <span class="py-1 lg:text-lg text-base"
            ><span class="font-base">경력 </span
            ><b class="font-lg">만 {{ careerDate }}</b
            ><span class="font-base"> 입니다.</span></span
          >
          <span
            class="font-base text-sm lg:pl-4 pl-0 lg:mb-0 mb-4 lg:font-base lg:inline-block block dark:text-gray-300 text-gray-600"
            >{{ today }} 기준
          </span>
        </div>
        <div class="career mb-22">
          <h5
            class="font-bold lg:text-3xl text-xl dark:text-primary text-third lg:mb-4 mb-1"
          >
            Representive Projects
          </h5>
          <ul>
            <li class="py-1 lg:text-lg text-base">
              <span class="font-base dark:font-thin"
                ><b class="font-base dark:font-base lg:inline-block block"
                  >[아이템베이]</b
                >
                아이템베이 게임 아이템 중개거래 플랫폼 운영 및 이벤트 프로모션
                구축</span
              >
              <span
                class="font-base text-sm lg:pl-4 pl-0 lg:mb-0 mb-4 lg:font-base lg:inline-block block dark:text-gray-300 text-gray-600"
                >2022.11. -</span
              >
            </li>
            <li class="py-1 lg:text-lg text-base">
              <span class="font-base dark:font-thin"
                ><b class="font-base dark:font-base lg:inline-block block"
                  >[아이템베이]</b
                >
                아이템베이 기업홈페이지 운영</span
              >
              <span
                class="font-base text-sm lg:pl-4 pl-0 lg:mb-0 mb-4 lg:font-base lg:inline-block block dark:text-gray-300 text-gray-600"
                >2022.11. -</span
              >
            </li>
            <li class="py-1 lg:text-lg text-base">
              <span class="font-base dark:font-thin"
                ><b class="font-base dark:font-base lg:inline-block block"
                  >[HYPERNEST]</b
                >
                GXG.Style NFT 거래소 신규 구축 및 운영</span
              >
              <span
                class="font-base text-sm lg:pl-4 pl-0 lg:mb-0 mb-4 lg:font-base lg:inline-block block dark:text-gray-300 text-gray-600"
                >2022.05. - 22.11</span
              >
            </li>
            <li class="py-1 lg:text-lg text-base">
              <span class="font-base dark:font-thin"
                ><b class="font-base dark:font-base lg:inline-block block"
                  >[HYPERNEST]</b
                >
                GotG.World 홈페이지 개편</span
              >
              <span
                class="font-base text-sm lg:pl-4 pl-0 lg:mb-0 mb-4 lg:font-base lg:inline-block block dark:text-gray-300 text-gray-600"
                >2022.05. - 22.07</span
              >
            </li>
            <li class="py-1 lg:text-lg text-base">
              <span class="font-base dark:font-thin"
                ><b class="font-base dark:font-base lg:inline-block block"
                  >[한국프로스포츠협회]</b
                >
                프로스포츠 정보광장 포탈 사이트 개선 및 운영</span
              >
              <span
                class="font-base text-sm lg:pl-4 pl-0 lg:mb-0 mb-4 lg:font-base lg:inline-block block dark:text-gray-300 text-gray-600"
                >2021.06. - 21.11</span
              >
            </li>
            <li class="py-1 lg:text-lg text-base">
              <span class="font-base dark:font-thin"
                ><b class="font-base dark:font-base lg:inline-block block"
                  >[국가대표선수촌]</b
                >
                국가대표선수촌 개방 확대 지원 온라인 예약구축</span
              >
              <span
                class="font-base text-sm lg:pl-4 pl-0 lg:mb-0 mb-4 lg:font-base lg:inline-block block dark:text-gray-300 text-gray-600"
                >2021.06. - 21.10</span
              >
            </li>
            <li class="py-1 lg:text-lg text-base">
              <span class="font-base dark:font-thin"
                ><b class="font-base dark:font-base lg:inline-block block"
                  >[한국프로스포츠협회]</b
                >
                KPGA 투어 관리 및 운영시스템 개선사업 입찰 자문위원</span
              >
              <span
                class="font-base text-sm lg:pl-4 pl-0 lg:mb-0 mb-4 lg:font-base lg:inline-block block dark:text-gray-300 text-gray-600"
                >2021.06.</span
              >
            </li>
            <li class="py-1 lg:text-lg text-base">
              <span class="font-base dark:font-thin"
                ><b class="font-base dark:font-base lg:inline-block block"
                  >[제주유나이티드]</b
                >
                제주유나이티드 내손안의전광판 플랫폼 운영 고도화 사업</span
              >
              <span
                class="font-base text-sm lg:pl-4 pl-0 lg:mb-0 mb-4 lg:font-base lg:inline-block block dark:text-gray-300 text-gray-600"
                >2021.03. - 21.09</span
              >
            </li>
            <li class="py-1 lg:text-lg text-base">
              <span class="font-base dark:font-thin"
                ><b class="font-base dark:font-base lg:inline-block block"
                  >[한국도핑방지위원회]</b
                >
                보건의료인 도핑방지 인증제도 온라인 학습관리시스템(LMS)
                구축</span
              >
              <span
                class="font-base text-sm lg:pl-4 pl-0 lg:mb-0 mb-4 lg:font-base lg:inline-block block dark:text-gray-300 text-gray-600"
                >2020.08. - 20.12</span
              >
            </li>
            <li class="py-1 lg:text-lg text-base">
              <span class="font-base dark:font-thin"
                ><b class="font-base dark:font-base lg:inline-block block"
                  >[한국프로스포츠협회]</b
                >
                프로스포츠 정보광장 포탈 웹사이트 기능고도화 작업</span
              >
              <span
                class="font-base text-sm lg:pl-4 pl-0 lg:mb-0 mb-4 lg:font-base lg:inline-block block dark:text-gray-300 text-gray-600"
                >2020.08. - 20.12</span
              >
            </li>
            <li class="py-1 lg:text-lg text-base">
              <span class="font-base dark:font-thin"
                ><b class="font-base dark:font-base lg:inline-block block"
                  >[경남체육회]</b
                >
                경남 청소년 스포츠한마당 비대면 대회 앱 개발 및 운영 사업</span
              >
              <span
                class="font-base text-sm lg:pl-4 pl-0 lg:mb-0 mb-4 lg:font-base lg:inline-block block dark:text-gray-300 text-gray-600"
                >2020.10. - 20.11</span
              >
            </li>
            <li class="py-1 lg:text-lg text-base">
              <span class="font-base dark:font-thin"
                ><b class="font-base dark:font-base lg:inline-block block"
                  >[한국도핑방지위원회]</b
                >
                도핑검사 포털(ADTIS) 및 검사관 온라인 교육시스템 구축 사업</span
              >
              <span
                class="font-base text-sm lg:pl-4 pl-0 lg:mb-0 mb-4 lg:font-base lg:inline-block block dark:text-gray-300 text-gray-600"
                >2020.07. - 20.11</span
              >
            </li>
            <li class="py-1 lg:text-lg text-base">
              <span class="font-base dark:font-thin"
                ><b class="font-base dark:font-base lg:inline-block block"
                  >[한국프로스포츠협회]</b
                >
                프로스포츠 협회 홈페이지 윤리교육 일정관리시스템 개발 및
                관리기능개선</span
              >
              <span
                class="font-base text-sm lg:pl-4 pl-0 lg:mb-0 mb-4 lg:font-base lg:inline-block block dark:text-gray-300 text-gray-600"
                >2020.07. - 20.08</span
              >
            </li>
            <li class="py-1 lg:text-lg text-base">
              <span class="font-base dark:font-thin"
                ><b class="font-base dark:font-base lg:inline-block block"
                  >[한국프로스포츠협회]</b
                >
                한국 프로스포츠 정보광장 포탈 웹사이트 개선 사업</span
              >
              <span
                class="font-base text-sm lg:pl-4 pl-0 lg:mb-0 mb-4 lg:font-base lg:inline-block block dark:text-gray-300 text-gray-600"
                >2020.03. - 20.06</span
              >
            </li>
            <li class="py-1 lg:text-lg text-base">
              <span class="font-base dark:font-thin"
                ><b class="font-base dark:font-base lg:inline-block block"
                  >[대한체육회]</b
                >
                대한체육회 국가대표 선수촌 방문예약 시스템 개선사업</span
              >
              <span
                class="font-base text-sm lg:pl-4 pl-0 lg:mb-0 mb-4 lg:font-base lg:inline-block block dark:text-gray-300 text-gray-600"
                >2019.11. - 20.04</span
              >
            </li>
            <li class="py-1 lg:text-lg text-base">
              <span class="font-base dark:font-thin"
                ><b class="font-base dark:font-base lg:inline-block block"
                  >[한국프로스포츠협회]</b
                >
                프로스포츠 암표 신고 사이트 구축</span
              >
              <span
                class="font-base text-sm lg:pl-4 pl-0 lg:mb-0 mb-4 lg:font-base lg:inline-block block dark:text-gray-300 text-gray-600"
                >2020.02. - 20.02</span
              >
            </li>
            <li class="py-1 lg:text-lg text-base">
              <span class="font-base dark:font-thin"
                ><b class="font-base dark:font-base lg:inline-block block"
                  >[대한체육회]</b
                >
                대한체육회 100주년 기념 홈페이지 개편 사업</span
              >
              <span
                class="font-base text-sm lg:pl-4 pl-0 lg:mb-0 mb-4 lg:font-base lg:inline-block block dark:text-gray-300 text-gray-600"
                >2019.09. - 19.12</span
              >
            </li>
            <li class="py-1 lg:text-lg text-base">
              <span class="font-base dark:font-thin"
                ><b class="font-base dark:font-base lg:inline-block block"
                  >[대한체육회]</b
                >
                한국 체육을 빛낸 100인 후보자 추천 홈페이지 구축 및 운영</span
              >
              <span
                class="font-base text-sm lg:pl-4 pl-0 lg:mb-0 mb-4 lg:font-base lg:inline-block block dark:text-gray-300 text-gray-600"
                >2019.06. - 19.11</span
              >
            </li>
            <li class="py-1 lg:text-lg text-base">
              <span class="font-base dark:font-thin"
                ><b class="font-base dark:font-base lg:inline-block block"
                  >[대한체육회]</b
                >
                2016, 17, 18, 19, 20, 21 대한민국 스포츠영웅 선정절차 시스템
                구축 및 운영</span
              >
              <span
                class="font-base text-sm lg:pl-4 pl-0 lg:mb-0 mb-4 lg:font-base lg:inline-block block dark:text-gray-300 text-gray-600"
                >2016.07. - 21.09</span
              >
            </li>
            <li class="py-1 lg:text-lg text-base">
              <span class="font-base dark:font-thin"
                ><b class="font-base dark:font-lbaseight lg:inline-block block"
                  >[K-LEAGUE]</b
                >
                K리그 심판교육사이트 운영위탁</span
              >
              <span
                class="font-base text-sm lg:pl-4 pl-0 lg:mb-0 mb-4 lg:font-base lg:inline-block block dark:text-gray-300 text-gray-600"
                >2018.03. - 18.12</span
              >
            </li>
            <li class="py-1 lg:text-lg text-base">
              <span class="font-base dark:font-thin"
                ><b class="font-base dark:font-base lg:inline-block block"
                  >[경찰청]</b
                >
                사이버 경찰청 홈페이지 개편사업</span
              >
              <span
                class="font-base text-sm lg:pl-4 pl-0 lg:mb-0 mb-4 lg:font-base lg:inline-block block dark:text-gray-300 text-gray-600"
                >2016.12. - 17.10</span
              >
            </li>
          </ul>
          <div class="mt-10">
            <button
              type="button"
              @click="clickToWorks"
              class="px-8 py-2 border font-thin dark:border-gray-600 border-gray-300 rounded-full dark:hover:border-primary hover:border-third text-gray-400 dark:hover:text-primary hover:text-third lg:w-fit w-full lg:text-xl text-base"
            >
              More Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BackHome from '../components/common/BackHome.vue';
import { ref, onBeforeMount, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';

export default {
  components: {
    BackHome,
  },
  setup() {
    const router = useRouter();
    const referdocument = ref();
    const clickToWorks = () => {
      router.replace('/works');
    };
    const clickDocument = () => {
      swal(
        '이력서 & 경력기술서 업데이트중',
        'WORKS 페이지를 참고해주세요',
        'warning'
      );
    };
    const careerDate = ref('');
    const today = new Date().toLocaleDateString();

    onMounted(() => {
      //경력 계산
      const dateA = new Date('2016/12/19');
      const dateB = new Date('2021/10/31');
      const dateC = new Date('2022/05/09');
      const dateD = new Date('2022/11/11');
      const dateE = new Date('2022/11/14');
      const dateF = new Date();
      const diffMSec1 = dateB.getTime() - dateA.getTime();
      const diffMSec2 = dateD.getTime() - dateC.getTime();
      const diffMSec3 = dateF.getTime() - dateE.getTime();
      const diffDate =
        (diffMSec1 + diffMSec2 + diffMSec3) / (24 * 60 * 60 * 1000);

      let carrerNum = (diffDate / 365) % 1;
      const timeRes = String(carrerNum); // 문자형으로 바꾼다음에
      var newArry = timeRes.split('.'); // 점으로 구분배열
      var carrerMonth = newArry[1].substring(0, 1); // 두자리만 뽑고 (위치만 하나 뒤로)

      careerDate.value = `${Math.floor(diffDate / 365)}년 ${carrerMonth}개월 `;
    });

    return {
      clickToWorks,
      router,
      referdocument,
      clickDocument,
      careerDate,
      today,
    };
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
};
</script>

<style scoped>
@media (max-width: 1024px) {
  .dark .earthWrap {
    background: rgb(30, 32, 34);
    z-index: -5;
  }
  .earthWrap {
    background: rgb(246, 246, 246);
    z-index: -5;
  }
}
.earth {
  -webkit-filter: grayscale(100%) blur(0) contrast(100%);
  filter: grayscale(100%) blur(0) contrast(100%);
}

.careerTitle {
  position: relative;
}
.careerTitle:before {
  content: '<h2>';
  font-family: La Belle Aurore, cursive;
  color: rgb(142 142 142);
  font-size: 1.5rem;
  position: absolute;
  display: block;
  top: -40px;
}

.careerTitle:after {
  content: '</h2>';
  font-family: La Belle Aurore, cursive;
  color: rgb(142 142 142);
  font-size: 1.5rem;
  position: absolute;
  display: block;
  bottom: -50px;
}
.dark .careerTitle:before {
  color: #bababa;
}
.dark .careerTitle:after {
  color: #bababa;
}
@media (min-width: 1280px) and (max-width: 1340px) {
  .earthWrap {
    width: 40%;
  }
  .careerTitle {
    font-size: 1.3rem;
    line-height: 2rem;
  }
}
@media (max-width: 1024px) {
  .careerTitle:before {
    display: none;
  }
  .careerTitle:after {
    display: none;
  }
  .earthWrap {
    width: 100%;
  }
}
</style>
