<template>
  <div class="dark:text-primary text-third">
    <BackHome class="relative"></BackHome>
    <div class="relative mt-4 text-left">
      <!-- <router-link to="/works/work01">zz</router-link>
      <router-link to="/works/work02">xx</router-link> -->
      <div class="lg:my-20 my-12 text-center" ref="scrollTap">
        <a
          @click="scrollToAnchorPoint('workCategory01')"
          class="dark:text-white text-black dark:hover:text-primary hover:text-third inline-block lg:mx-4 mx-1 lg:my-0 my-1 lg:text-xl text-base lg:w-fit w-fit"
          >신규구축 및 운영</a
        >
        <a
          @click="scrollToAnchorPoint('workCategory02')"
          class="dark:text-white text-black dark:hover:text-primary hover:text-third inline-block lg:mx-4 mx-1 lg:my-0 my-1 lg:text-xl text-base lg:w-fit w-fit"
          >관리 및 유지보수</a
        >
        <a
          @click="scrollToAnchorPoint('workCategory03')"
          class="dark:text-white text-black dark:hover:text-primary hover:text-third inline-block lg:mx-4 mx-1 lg:my-0 my-1 lg:text-xl text-base lg:w-fit w-fit"
          >프론트엔드</a
        >
        <a
          @click="scrollToAnchorPoint('workCategory04')"
          class="dark:text-white text-black dark:hover:text-primary hover:text-third inline-block lg:mx-4 mx-1 lg:my-0 my-1 lg:text-xl text-base lg:w-fit w-fit"
          >디자인</a
        >
        <a
          @click="scrollToAnchorPoint('workCategory05')"
          class="dark:text-white text-black dark:hover:text-primary hover:text-third inline-block lg:mx-4 mx-1 lg:my-0 my-1 lg:text-xl text-base lg:w-fit w-fit"
          >기획 및 문서</a
        >
      </div>
      <div
        ref="workCategory01"
        class="lg:mt-4 block dark:text-secondary text-secondary-dark mb-52"
      >
        <h2
          class="lg:text-4xl text-2xl block font-extrabold mb-4 dark:text-primary text-third"
        >
          신규구축 및 운영
        </h2>
        <div class="my-4">
          <!-- <ul class="grid 3xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8">
            <li              
              v-for="(portfolio, index) in this.$store.state.frontworks"
              :key="index"
            >
              <router-link :to="portfolio.url" class="h-full flex">
                <div class="rounded-2xl bg-bgWhite hover:bg-gray-300 dark:bg-bgDark dark:hover:bg-gray-800 p-6 flex flex-col">
                  <div class="">
                    <img :src="portfolio.image" alt="" class="rounded-2xl">
                  </div>
                  <div class="pt-6 pb-3 px-0 flex-1 flex justify-between flex-col">
                    <div class="py-3">
                      <h3 class="font-bold py-1 text-xl">{{ portfolio.title }}</h3>
                      <p class="dark:text-gray-300 text-gray-900 text-base">참여도 : {{ portfolio.party }}</p>
                      <p class="dark:text-gray-300 text-gray-900 text-base">{{ portfolio.tag }}</p>
                    </div>
                    <div class="flex justify-between items-center">
                      <span class="rounded-xl bg-white dark:bg-slate-800 py-2 px-6">View</span>
                      <a class="text-base" target="_blank" :href="`${portfolio.url}`">바로가기</a>
                    </div>
                  </div>
                </div>   
              </router-link>           
            </li>
          </ul>   -->
          <ul
            class="worksUl grid 3xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8"
          >
            <li
              v-for="(portfolio, index) in this.$store.state.infodatas"
              :key="index"
              @click="clickList01(index)"
            >
              <div
                class="rounded-2xl bg-fourth hover:bg-gray-300 dark:bg-fourth-dark dark:hover:bg-gray-800 p-6 flex flex-col h-full"
              >
                <div class="imgZbg">
                  <img :src="portfolio.image" alt="" class="rounded-2xl" />
                </div>
                <div class="pt-6 pb-3 px-0 flex-1 flex justify-center flex-col">
                  <div class="py-3">
                    <h3 class="font-bold py-1 text-xl">
                      {{ portfolio.title }}
                    </h3>
                    <p class="dark:text-gray-300 text-gray-900 text-base">
                      참여도 : {{ portfolio.party }}
                    </p>
                    <p class="dark:text-gray-300 text-gray-900 text-base">
                      {{ portfolio.tag }}
                    </p>
                  </div>
                  <!-- <div class="flex justify-between items-center">
                    <span class="rounded-xl bg-white dark:bg-slate-600 py-2 px-6">View</span>
                    <a class="text-base" target="_blank" :href="`${portfolio.url}`">바로가기</a>
                  </div> -->
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div
        ref="workCategory02"
        class="lg:mt-4 block dark:text-secondary text-secondary-dark mb-52"
      >
        <h2
          class="lg:text-4xl text-2xl block font-extrabold mb-4 dark:text-primary text-third"
        >
          관리 및 유지보수
        </h2>
        <div class="my-4">
          <ul
            class="worksUl grid 3xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8"
          >
            <li
              v-for="(portfolio, index) in this.$store.state.opeartiondata"
              :key="index"
              @click="clickList02(index)"
            >
              <div
                class="rounded-2xl bg-fourth hover:bg-gray-300 dark:bg-fourth-dark dark:hover:bg-gray-800 p-6 flex flex-col h-full"
              >
                <div class="imgZbg">
                  <img :src="portfolio.image" alt="" class="rounded-2xl" />
                </div>
                <div class="pt-6 pb-3 px-0 flex-1 flex justify-center flex-col">
                  <div class="py-3">
                    <h3 class="font-bold py-1 text-xl">
                      {{ portfolio.title }}
                    </h3>
                    <p class="dark:text-gray-300 text-gray-900 text-base">
                      참여도 : {{ portfolio.party }}
                    </p>
                    <p class="dark:text-gray-300 text-gray-900 text-base">
                      {{ portfolio.tag }}
                    </p>
                  </div>
                  <!-- <div class="flex justify-between items-center">
                    <span class="rounded-xl bg-white dark:bg-slate-600 py-2 px-6">View</span>
                    <a class="text-base" target="_blank" :href="`${portfolio.url}`">바로가기</a>
                  </div> -->
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div
        ref="workCategory03"
        class="lg:mt-4 block dark:text-secondary text-secondary-dark mb-52"
      >
        <h2
          class="lg:text-4xl text-2xl block font-extrabold mb-4 dark:text-primary text-third"
        >
          프론트엔드
        </h2>
        <div class="my-4">
          <!-- <ul class="grid 3xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8">
            <li v-for="(value, index) in this.datas.Content" :key="index">
              <div>
                <p>{{ value.title }}</p>
                <p>{{ value.context }}</p>
                <p>{{ value.created_at }}</p>
              </div>
            </li>
          </ul> -->
          <ul
            class="worksUl grid 3xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8"
          >
            <li
              v-for="(portfolio, index) in this.$store.state.frontworks"
              :key="index"
              @click="clickList03(index)"
            >
              <div
                class="rounded-2xl bg-fourth hover:bg-gray-300 dark:bg-fourth-dark dark:hover:bg-gray-800 p-6 flex flex-col h-full"
              >
                <div class="imgZbg">
                  <img :src="portfolio.image" alt="" class="rounded-2xl" />
                </div>
                <div class="pt-6 pb-3 px-0 flex-1 flex justify-center flex-col">
                  <div class="py-3">
                    <h3 class="font-bold py-1 text-xl">
                      {{ portfolio.title }}
                    </h3>
                    <p class="dark:text-gray-300 text-gray-900 text-base">
                      참여도 : {{ portfolio.party }}
                    </p>
                    <p class="dark:text-gray-300 text-gray-900 text-base">
                      {{ portfolio.tag }}
                    </p>
                  </div>
                  <!-- <div class="flex justify-between items-center">
                    <span class="rounded-xl bg-white dark:bg-slate-600 py-2 px-6">View</span>
                    <a class="text-base" target="_blank" :href="`${portfolio.url}`">바로가기</a>
                  </div> -->
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div
        ref="workCategory04"
        class="lg:mt-4 block dark:text-secondary text-secondary-dark mb-52"
      >
        <h2
          class="lg:text-4xl text-2xl block font-extrabold mb-4 dark:text-primary text-third"
        >
          디자인
        </h2>
        <div class="my-4">
          <ul
            class="worksUl grid 3xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8"
          >
            <li v-for="(value, index) in this.datas.Content" :key="index">
              <div>
                <p>{{ value.title }}</p>
                <p>{{ value.context }}</p>
                <p>{{ value.created_at }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div
        ref="workCategory05"
        class="lg:mt-4 block dark:text-secondary text-secondary-dark mb-52"
      >
        <h2
          class="lg:text-4xl text-2xl block font-extrabold mb-4 dark:text-primary text-third"
        >
          기획 및 제안
        </h2>
        <div class="my-4"></div>
      </div>
    </div>
  </div>
</template>

<script>
import BackHome from '@/components/common/BackHome.vue';
import data from '@/data';

// import Swiper core and required modules
import {
  onMounted,
  computed,
  ref,
  watchEffect,
  onBeforeUnmount,
  onUpdated,
} from 'vue';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import router from '../router';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default {
  props: ['scrollRight', 'scrollRight2'],
  components: {
    BackHome,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      datas: data,
      swiperOptions: {
        slidesPerView: 2,
        spaceBetween: 50,
        freeMode: true,
        freeModeSticky: false,
        scrollbar: '.sw-scroll1',
        scrollbarHide: true,
        scrollbarDraggable: true,
        grabCursor: true,
        loop: false,
        pagination: {
          type: 'progressbar',
          el: '.swiper-pagination',
        },
        slidesOffsetBefore: 0, // slidesOffsetBefore는 첫번째 슬라이드의 시작점에 대한 변경할 때 사용
        slidesOffsetAfter: 0, // slidesOffsetAfter는 마지막 슬라이드 시작점 + 마지막 슬라이드 너비에 해당하는 위치의 변경이 필요할 때 사용
        centerInsufficientSlides: false, // 컨텐츠의 수량에 따라 중앙정렬 여부를 결정함
        // 반응형 breakpoints
        breakpoints: {
          375: {
            slidesPerView: 1,
          },
          425: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1,
          },
          1400: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        },
      },
    };
  },
  setup(props, context) {
    const scrollTap = ref(0);
    let scrollcheckwork = ref(true);
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    const currentHome = computed(() => {
      return router.currentRoute.value.path;
    });
    const currentRight = computed(() => {
      return props.scrollRight;
    });
    const scrollFunc = () => {
      window.addEventListener('scroll', function () {
        if (window.scrollY == 0 && currentHome.value === '/works') {
          if (!scrollcheckwork.value) {
            scrollcheckwork.value = true;
            return scrollTap.value.classList.remove('scrollArea');
          }
        } else if (window.scrollY > 1 && currentHome.value === '/works') {
          if (scrollcheckwork.value) {
            scrollcheckwork.value = false;
            return scrollTap.value.classList.add('scrollArea');
          }
        }
      });
    };
    const scrollFuncPc = () => {
      if (props.scrollRight.scrollTop == 0 && currentHome.value === '/works') {
        if (!scrollcheckwork.value) {
          scrollcheckwork.value = true;
          scrollTap.value.classList.remove('scrollArea');
        }
      } else if (
        props.scrollRight.scrollTop > 1 &&
        currentHome.value === '/works'
      ) {
        if (scrollcheckwork.value) {
          scrollcheckwork.value = false;
          scrollTap.value.classList.add('scrollArea');
        }
      }
    };
    watchEffect(() => {
      // if(currentHome.value === '/works' && scrollTap.value){
      //   window.addEventListener("scroll", function(){
      //     if(window.scrollY == 0) {
      //       if(!scrollcheckwork.value){
      //         scrollcheckwork.value = true;
      //         scrollTap.value.classList.remove('scrollArea')
      //       }
      //     }
      //     else if(window.scrollY > 1){
      //       if(scrollcheckwork.value){
      //         scrollcheckwork.value = false;
      //         scrollTap.value.classList.add('scrollArea')
      //       }
      //     }
      //   })
      // } else {
      //   return
      // }
    });
    onUpdated(() => {
      props.scrollRight.addEventListener('scroll', scrollFuncPc);
    });
    onMounted(() => {
      // console.log(data)
      //console.log(props.scrollRight)

      //console.log(currentRight.value)
      document.addEventListener('scroll', scrollFunc);
      // if(props.scrollRight || props.scrollRight !== 0){
      //   props.scrollRight.addEventListener("scroll", scrollFuncPc)
      // }

      // if(currentHome.value === '/works' && scrollTap.value){
      //   // props.scrollRight.addEventListener("scroll", function(){
      //   //   if(props.scrollRight.scrollTop == 0) {
      //   //     if(!scrollcheck.value){
      //   //       scrollcheck.value = true;
      //   //       scrollTap.value.classList.remove('scrollArea')
      //   //     }
      //   //   }
      //   //   else if(props.scrollRight.scrollTop > 1){
      //   //     if(scrollcheck.value){
      //   //       scrollcheck.value = false;
      //   //       scrollTap.value.classList.add('scrollArea')
      //   //     }
      //   //   }
      //   // })
      //   window.addEventListener("scroll", function(){
      //     if(window.scrollY == 0) {
      //       if(!scrollcheckwork.value){
      //         scrollcheckwork.value = true;
      //         return scrollTap.value.classList.remove('scrollArea')
      //       }
      //     }
      //     else if(window.scrollY > 1){
      //       if(scrollcheckwork.value){
      //         scrollcheckwork.value = false;
      //         return scrollTap.value.classList.add('scrollArea')
      //       }
      //     }
      //   })
      // } else {
      //   return
      // }
    });
    onBeforeUnmount(() => {
      document.removeEventListener('scroll', scrollFunc);
      // if(props.scrollRight && props.scrollRight !== 0){
      //   props.scrollRight.removeEventListener("scroll", scrollFuncPc)
      // }
    });

    return {
      onSwiper,
      onSlideChange,
      currentHome,
      scrollTap,
      scrollcheckwork,
      scrollFunc,
      scrollFuncPc,
      currentRight,
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
  created() {
    // this.$store.dispatch("FECTH_MYFRONT");
    // this.$store.dispatch("FETCH_OPERATION");
    // this.$store.dispatch("FETCH_INFO");
    return;
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  methods: {
    // 	detail(index){
    // 		this.$route.push({
    // 			name:"Detail",
    // 			params:{ contentId: index}
    // 		})
    // 	},
    clickList01(index) {
      this.$router.push({
        name: 'worksDetailNew', //detail
        params: { contentId: index },
      });
    },
    clickList02(index) {
      this.$router.push({
        name: 'worksDetailOperation', //detail
        params: { contentId: index },
      });
    },
    clickList03(index) {
      this.$router.push({
        name: 'worksDetailFront', //detail
        params: { contentId: index },
      });
    },
    // clickAchor(){
    //   this.$router.push(
    //   {
    //       path: "/mypage",
    //       query: { section: "profile" },
    //       hash: "#ref_code"}
    //   )
    // }
    scrollToAnchorPoint(refName) {
      const el = this.$refs[refName];
      el.scrollIntoView({ behavior: 'smooth' });
    },
  },
};
</script>

<style scoped>
.worksUl li {
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.worksUl li .imgZbg {
  /* mix-blend-mode: multiply; */
  filter: grayscale(80%) contrast(1) brightness(90%);
}
.worksUl li:hover {
  transform: translateY(-7px);
  box-shadow: 0 10px 20px -15px #000000d1;
}
.worksUl li:hover > div {
  border-radius: 10px;
}
.worksUl li:hover .imgZbg {
  filter: grayscale(0%) contrast(1) brightness(100%);
}
.dark .worksUl li:hover {
  box-shadow: 0 10px 20px -15px #000000d1;
}
.scrollArea {
  position: sticky;
  z-index: 9990;
  margin: 0 auto;
  transition: all 1s ease;
  top: 10%;
}

.dark .scrollArea a {
  background-color: rgb(255 200 70 / 50%);
  color: #000;
  border-radius: 50px;
  padding: 8px 16px;
}
.dark .scrollArea a:hover {
  background-color: rgb(255, 200, 70);
}

.scrollArea a {
  background-color: rgb(17 33 107 / 50%);
  color: #fff;
  border-radius: 50px;
  padding: 8px 16px;
  font-size: 1.5vh;
  box-shadow: 2px 2px 10px 0px #0000004f;
  font-weight: 400;
}
.scrollArea a:hover {
  background-color: rgb(45, 69, 173);
  font-weight: 600;
}

/* @screen sm {
  .scrollArea {
    position: fixed;
    top: 2%;
  }
}  */

@media (max-width: 1024px) {
  .scrollArea {
    position: fixed;
    top: 4%;
  }
  .dark .scrollArea a {
    background-color: rgb(255 200 70 / 85%);
  }
  .scrollArea a {
    background-color: rgb(17 33 107 / 87%);
  }
}
</style>
