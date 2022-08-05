<template>
  <div class="lg:flex block lg:h-screen mx-auto relative container">
    <div class="" id="noise"></div>  
    <!--메인섹션-->
    <div class="rightWrap2 w-full flex-1 min-h-full scroll-smooth overflow-y-auto lg:px-16 px-6 items-center text-center" ref="scrollRight2">      
      <router-view v-slot="{ Component }">
        <transition name="route" mode="out-in">
          <component :is="Component"></component>
        </transition>
      </router-view>
      <Loading  :loading="$store.state.LoadingStatus"></Loading>
      <!-- Top 버튼 -->
      <div
          ref="scrollTopButton"
          @click="scrollTopbt"
          class="invisible fixed bottom-0 right-0 flex justify-end pb-8 pr-8 transition duration-150 ease-out"
      > 
          <div
              class="dark:bg-zinc-900 border dark:border-zinc-700 dark:hover:border-primary border-zinc-400 hover:border-third bg-zinc-300 dark:text-gray-400 text-gray-600 dark:hover:text-gray-800 hover:text-white dark:hover:bg-primary hover:bg-third transition xl:w-20 xl:h-20 md:w-16 md:h-16 rounded-full flex items-center justify-center font-medium"
          >
              <button type="button">
                  TOP
              </button>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref,onBeforeMount,onMounted, computed, onBeforeUnmount } from 'vue'
import { useStore, mapGetters } from 'vuex'
import router from '../router'
import Loading from '../components/common/Loading.vue'

export default {
  components:{
    Loading
  },
  setup(){
    const routes = ref([])
    //스크롤영역
    let scrollRight2 = ref()
    //스크롤버튼
    let scrollTopButton = ref() 
    //스크롤버튼이벤트
    let scrollTopbt = function(){
      let rightWrap2 = document.querySelector('.rightWrap2')        
      return rightWrap2.scrollTop = 0
    }  

    //다크모드
    //const isDark = ref(true)
    const store = useStore()
    let isDark = localStorage.getItem('darkMode') == 'true'
    let isShow = localStorage.getItem('darkModeShow') == 'true'
    let changeDark = localStorage.getItem('changeDark') == 'true'
    
    onBeforeMount(()=>{
      //routes.value = router.options.routes
      routes.value = router.options.routes.filter((route) => route.meta.isMenu == true)
    });

    onMounted(()=>{
      document.documentElement.style.background = '#1b1d20';
      let set = store.state.darkmode;
      if(set == true){
        localStorage.getItem('darkMode') == 'true'
      }

      if(localStorage.getItem('changeDark') == 'true'){
        document.documentElement.classList.remove('dark'); 
        document.documentElement.style.background = 'white';
      }      

      //스크롤영역 좌표
      let rightWrap2 = document.querySelector('.rightWrap2')  
      rightWrap2.addEventListener("scroll",function(){
        if (scrollRight2.value.scrollTop > 0) {
            scrollTopButton.value.classList.remove("invisible");
        } else {
            scrollTopButton.value.classList.add("invisible");
        }
      }) 
    })

    onBeforeUnmount(()=>{
      //스크롤영역 좌표
      let rightWrap2 = document.querySelector('.rightWrap2')  
      rightWrap2.removeEventListener("scroll",function(){
        if (scrollRight2.value.scrollTop > 0) {
            scrollTopButton.value.classList.remove("invisible");
        } else {
            scrollTopButton.value.classList.add("invisible");
        }
      })
    })

    return {
      routes,
      router, 
      isDark,
      isShow,
      changeDark, 
      scrollTopButton,
      scrollTopbt,
      scrollRight2
    }
  },
  methods:{
    // 다크모드
    toggleDarkMode(){
        this.isDark = !this.isDark;
        this.isShow = !this.isShow;
        this.changeDark = !this.changeDark;
        localStorage.setItem('darkMode', this.isDark);     
        localStorage.setItem('darkModeShow', this.isShow);  
        this.$store.dispatch('toggleDarkMode', this.isDark);

        if (localStorage.getItem('darkMode') == 'true') {                    
            localStorage.setItem('changeDark', this.changeDark);  
            document.documentElement.style.background = 'white';
            this.changeDark = true;
            document.documentElement.classList.remove('dark');    
        } else {
            document.documentElement.classList.add('dark');
            document.documentElement.style.background = '#1b1d20';
            localStorage.removeItem('changeDark', this.changeDark);  
        }   
    }
  },
  computed: {
      ...mapGetters(['dark'])
    },
  
}
</script>

<style>
/*컴포넌트 이동 트랜지션*/
.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}
.route-enter-active{
  transition: all 0.1s ease-out;
}
.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.route-leave-active{
  transition: all 0.1s ease-in;
}
</style>