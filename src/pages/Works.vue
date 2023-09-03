<template>
  <div class="dark:text-primary text-third">
    <BackHome class="relative"></BackHome>
    <div class="relative mt-4 text-left">
      <!-- <router-link to="/works/work01">zz</router-link>
      <router-link to="/works/work02">xx</router-link> -->
      <div class="lg:my-20 my-12 text-center left-0 w-full" ref="scrollTap">
        <a
          @click="scrollToAnchorPoint('workCategory01')"
          class="dark:text-white text-black dark:hover:text-primary hover:text-third inline-block lg:px-4 lg:py-2 px-3 py-2 lg:mx-4 mx-1 lg:my-0 my-1 lg:text-xl text-base lg:w-fit w-fit"
          >신규구축 및 운영</a
        >
        <a
          @click="scrollToAnchorPoint('workCategory02')"
          class="dark:text-white text-black dark:hover:text-primary hover:text-third inline-block lg:px-4 lg:py-2 px-3 py-2 lg:mx-4 mx-1 lg:my-0 my-1 lg:text-xl text-base lg:w-fit w-fit"
          >관리 및 유지보수</a
        >
        <a
          @click="scrollToAnchorPoint('workCategory03')"
          class="dark:text-white text-black dark:hover:text-primary hover:text-third inline-block lg:px-4 lg:py-2 px-3 py-2 lg:mx-4 mx-1 lg:my-0 my-1 lg:text-xl text-base lg:w-fit w-fit"
          >사이드프로젝트</a
        >
        <a
          @click="scrollToAnchorPoint('workCategory04')"
          class="dark:text-white text-black dark:hover:text-primary hover:text-third inline-block lg:px-4 lg:py-2 px-3 py-2 lg:mx-4 mx-1 lg:my-0 my-1 lg:text-xl text-base lg:w-fit w-fit"
          >디자인</a
        >
        <!-- <a @click="scrollToAnchorPoint('workCategory05')" class="dark:text-white text-black dark:hover:text-primary hover:text-third inline-block lg:mx-4 mx-1 lg:my-0 my-1 lg:text-xl text-base lg:w-fit w-fit">기획 및 문서</a> -->
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
          사이드프로젝트
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
      <!-- <div ref="workCategory04" class="lg:mt-4 block dark:text-secondary text-secondary-dark mb-52">
        <h2 class="lg:text-4xl text-2xl block font-extrabold mb-4 dark:text-primary text-third">디자인</h2>
        <div class="my-4">
          <ul class="worksUl grid 3xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8">
            <li v-for="(value, index) in this.datas.Content" :key="index">
              <div>
                <p>{{ value.title }}</p>
                <p>{{ value.context }}</p>
                <p>{{ value.created_at }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div> -->
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
          <Carousel
            :wrapAround="true"
            :settings="settings"
            :breakpoints="breakpoints"
          >
            <slide v-for="(slide, index) in design.Content" :key="index">
              <div
                class="rounded-2xl bg-fourth hover:bg-gray-300 dark:bg-fourth-dark dark:hover:bg-gray-800 p-6 flex flex-col h-full"
              >
                <div class="imgZbg">
                  <div class="carousel_item">
                    <img :src="slide.content_url" alt="" />
                  </div>
                </div>
                <div class="pt-6 pb-3 px-0 flex-1 flex justify-center flex-col">
                  <div class="py-3">
                    <h3 class="font-bold py-1 text-xl">{{ slide.title }}</h3>
                    <h3 class="py-1 text-base dark:text-primary text-third">
                      {{ slide.context }}
                    </h3>
                    <p class="dark:text-gray-300 text-gray-900 text-base">
                      참여도 : {{ slide.party }}
                    </p>
                    <p class="dark:text-gray-300 text-gray-900 text-base">
                      {{ slide.created_at }}
                    </p>
                  </div>
                </div>
              </div>
            </slide>

            <template #addons>
              <navigation />
              <pagination />
            </template>
          </Carousel>
        </div>
      </div>
      <!-- <div ref="workCategory05" class="lg:mt-4 block dark:text-secondary text-secondary-dark mb-52">
        <h2 class="lg:text-4xl text-2xl block font-extrabold mb-4 dark:text-primary text-third">기획 및 제안</h2>
        <div class="my-4">
          
        </div>
      </div> -->
    </div>
    <div class="relative mt-4 text-left">
      <video src="https://raw.githubusercontent.com/ghkdsigm/new-portfolio-2022-v3/main/src/assets/images/video/ronaldo.mp4"></video>
    </div>
  </div>
</template>

<script>
import BackHome from '@/components/common/BackHome.vue';
import apidata from '@/data';

import {
  onMounted,
  computed,
  ref,
  watchEffect,
  onBeforeUnmount,
  onUpdated,
} from 'vue';

import router from '../router';

//carousel
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

export default {
  props: ['scrollRight', 'scrollRight2'],
  components: {
    BackHome,
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data: () => ({
    // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: 'center',
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 1.5,
        snapAlign: 'center',
      },
      // 1024 and up
      1024: {
        itemsToShow: 2,
        snapAlign: 'start',
      },
      1400: {
        itemsToShow: 2,
        snapAlign: 'center',
      },
    },
  }),

  setup(props, context) {
    const design = apidata;

    const scrollTap = ref(0);
    let scrollcheckwork = ref(true);

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
        //console.log(window.scrollY);
        if (window.scrollY == 0 && currentHome.value === '/works') {
          if (!scrollcheckwork.value) {
            scrollcheckwork.value = true;
            scrollTap.value.classList.remove('scrollArea');
          }
        } else if (window.scrollY > 1 && currentHome.value === '/works') {
          if (scrollcheckwork.value) {
            scrollcheckwork.value = false;
            scrollTap.value.classList.add('scrollArea');
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
    watchEffect(() => {});
    onUpdated(() => {
      props.scrollRight.addEventListener('scroll', scrollFuncPc);
    });
    onMounted(() => {
      document.addEventListener('scroll', scrollFunc);
      if (props.scrollRight !== 0) {
        props.scrollRight.addEventListener('scroll', scrollFuncPc);
      }
    });
    onBeforeUnmount(() => {
      document.removeEventListener('scroll', scrollFunc);
      props.scrollRight.removeEventListener('scroll', scrollFuncPc);
    });

    return {
      onSlideChange,
      currentHome,
      scrollTap,
      scrollcheckwork,
      scrollFunc,
      scrollFuncPc,
      currentRight,
      design,
    };
  },
  created() {
    // this.$store.dispatch("FECTH_MYFRONT");
    // this.$store.dispatch("FETCH_OPERATION");
    // this.$store.dispatch("FETCH_INFO");
    return;
  },
  computed: {},
  methods: {
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
  filter: grayscale(20%) contrast(1) brightness(90%);
}
.dark .worksUl li .imgZbg {
  /* mix-blend-mode: multiply; */
  filter: grayscale(50%) contrast(1) brightness(90%);
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
}
.dark .scrollArea a:hover {
  background-color: rgb(255, 200, 70);
}

.scrollArea a {
  background-color: rgb(17 33 107 / 50%);
  color: #fff;
  border-radius: 50px;
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

.carousel__slide {
  scroll-snap-stop: auto;
  flex-shrink: 0;
  margin: 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  /* height: fit-content; */
}
.carousel_item {
  max-height: 400px;
  overflow-y: scroll;
  border-radius: 1rem;
}
.carousel__slide > .carousel_item {
  transform: scale(1);
  opacity: 0.5;
  transition: 0.5s;
  /* min-height: 100%; */
  width: 100%;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.carousel__slide--visible > .carousel_item {
  opacity: 1;
  transform: rotateY(0);
}
.carousel__slide--next > .carousel_item {
  transform: scale(0.9) translate(-10px);
}
.carousel__slide--prev > .carousel_item {
  transform: scale(0.9) translate(10px);
}
.carousel__slide > .carousel_item img {
  /* transform: scale(1.1); */
  max-height: 300px;
  height: 100%;
}
.carousel__slide--active > .carousel_item img {
  max-height: 600px;
  box-shadow: 6px 3px 10px 0px #727272;
  border-radius: 1rem;
}

.dark .carousel__slide--active > .carousel_item img {
  box-shadow: 6px 3px 10px 0px #000000;
}

/**button**/
.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}

.carousel__prev,
.carousel__next {
  background: red !important;
  border-radius: var(--vc-nav-width);
  width: var(--vc-nav-width);
  height: var(--vc-nav-width);
  text-align: center;
  font-size: calc(var(--vc-nav-width) * 2 / 3);
  padding: 0;
  color: var(--vc-nav-color);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  border: 0;
  cursor: pointer;
}

@media (max-width: 1400px) {
  .carousel_item {
    height: 250px;
  }
}

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
