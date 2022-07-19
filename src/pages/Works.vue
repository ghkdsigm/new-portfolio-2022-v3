<template>
  <div class="dark:text-primary text-third">
    <BackHome class="relative"></BackHome>
    <div class="relative mt-4 text-left">
      <router-link to="/works/work01">zz</router-link>
      <router-link to="/works/work02">xx</router-link>
      <div class="my-20 text-center">
        <a href="aa" class="dark:text-white text-black dark:hover:text-primary hover:text-third inline-block lg:mx-4 mx-0 lg:my-0 my-4 lg:text-xl text-base lg:w-fit w-5/12">신규구축 및 운영</a> 
        <a href="bb" class="dark:text-white text-black dark:hover:text-primary hover:text-third inline-block lg:mx-4 mx-0 lg:my-0 my-4 lg:text-xl text-base lg:w-fit w-5/12">관리 및 유지보수</a> 
        <a href="cc" class="dark:text-white text-black dark:hover:text-primary hover:text-third inline-block lg:mx-4 mx-0 lg:my-0 my-4 lg:text-xl text-base lg:w-fit w-5/12">프론트엔드</a> 
        <a href="dd" class="dark:text-white text-black dark:hover:text-primary hover:text-third inline-block lg:mx-4 mx-0 lg:my-0 my-4 lg:text-xl text-base lg:w-fit w-5/12">디자인</a>
      </div>
      <div id="#aa" class="lg:mt-4 block dark:text-secondary text-secondary-dark mb-40">
        <h2 class="lg:text-4xl text-2xl block font-extrabold mb-4">신규구축 및 운영</h2>
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
          <ul class="grid 3xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8">
            <li v-for="(portfolio, index) in this.$store.state.infodatas" :key="index" @click="clickList01(index)">
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
            </li>
          </ul>
        </div>
      </div>
      <div id="#bb" class="lg:mt-4 block dark:text-secondary text-secondary-dark mb-40">
        <h2 class="lg:text-4xl text-2xl block font-extrabold mb-4">관리 및 유지보수</h2>
        <div class="my-4">
          <ul class="grid 3xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8">
            <li v-for="(portfolio, index) in this.$store.state.opeartiondata" :key="index" @click="clickList02(index)">
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
            </li>
          </ul>
        </div>
      </div>
      <div id="#cc" class="lg:mt-4 block dark:text-secondary text-secondary-dark mb-40">
        <h2 class="lg:text-4xl text-2xl block font-extrabold mb-4">프론트엔드</h2>
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
          <ul class="grid 3xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8">
            <li v-for="(portfolio, index) in this.$store.state.frontworks" :key="index" @click="clickList03(index)">
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
            </li>
          </ul>
        </div>
      </div>
      <div id="#dd" class="lg:mt-4 block dark:text-secondary text-secondary-dark mb-40">
        <h2 class="lg:text-4xl text-2xl block font-extrabold mb-4">디자인</h2>
        <div class="my-4">
          <ul class="grid 3xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8">
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
    </div>
  </div>
</template>

<script>
import BackHome from '@/components/common/BackHome.vue'
import data from '@/data'

// import Swiper core and required modules
import { onMounted } from 'vue'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export default {
  components:{
    BackHome,
    Swiper,
    SwiperSlide,
  },
  data(){
    return {
      datas: data,
      swiperOptions: {
        slidesPerView: 2,
        spaceBetween: 50,
        freeMode: true,
        freeModeSticky: false,
        scrollbar: ".sw-scroll1",
        scrollbarHide: true,
        scrollbarDraggable: true,
        grabCursor: true,
        loop: false,
        pagination: {
          type: "progressbar",
          el: ".swiper-pagination",
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
    }
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    onMounted(()=>{
      // console.log(data)
    })
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
  created() {
    this.$store.dispatch("FECTH_MYFRONT");
    this.$store.dispatch("FETCH_OPERATION");
    this.$store.dispatch("FETCH_INFO");
    return
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  methods:{
  // 	detail(index){
  // 		this.$route.push({
  // 			name:"Detail",
  // 			params:{ contentId: index}
  // 		})
  // 	},
    clickList01(index){
    	this.$router.push({
        name:'worksDetailNew',//detail
        params:{contentId : index}
      })
    },
    clickList02(index){
    	this.$router.push({
        name:'worksDetailOperation',//detail
        params:{contentId : index}
      })
    },
    clickList03(index){
    	this.$router.push({
        name:'worksDetailFront',//detail
        params:{contentId : index}
      })
    },
  }
}
</script>

<style>

</style>