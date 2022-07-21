<template>
  <div class="lg:flex block lg:h-screen mx-auto relative container">
    <div class="" id="noise"></div>
    <!--사이드섹션-->
    <div class="lg:w-1/6 w-full lg:flex block py-5 justify-center lg:h-screen items-center border-gray-200 dark:border-gray-800 text-center">
      <div class="flex flex-col text-center">
        <div>
          <!--홈 로고 링크-->
          <router-link to="/">
              <i class="fab fa-twitter transition-all ease-in-out text-third dark:text-third-dark hover:text-dark mb-3"><span class="lg:text-3xl text-2xl font-light block lg:inline-block align-text-top" style="font-family: La Belle Aurore;">Motor H</span></i>
              <p class="dark:text-secondary text-secondary-dark">Fronend Developer</p>
          </router-link>
          <div class="flex justify-center">
            <!--git버튼-->
            <div class="mx-2">
              <a href="https://github.com/ghkdsigm/new-portfolio-2022-v3" class="
                    p-4
                    inline-block
                  text-third 
                  dark:text-primary 
                  dark:bg-zinc-700 dark:hover:bg-zinc-600 bg-zinc-300 hover:bg-zinc-200
                    focus-visible:ring-2 focus-visible:ring-green-400
                    rounded-full
                    mt-4
                  ">
                <svg class="h-6 w-6" data-v-be61f618="" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path data-v-be61f618="" d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"></path></svg>
              </a>
            </div>
            <!--다크모드-->
            <div class="relative mx-2">
                <!-- <button type="button" class="px-2 mb-1" @click="toggleDarkMode" :class="this.$store.state.darkmode ? 'dark' : ''">
                    <i class="far fa-sun transition-all ease-in-out border-2 border-gray-800 text-yellow-50 lg:px-5 px-3 py-2 dark:bg-gray-800 rounded-full lg:text-base text-base dark:hover:bg-opacity-80" :class="isDark ? 'hidden' : 'block'"> <span class="hidden lg:inline-block pl-0 lg:pl-2 text-white font-light"> 라이트모드</span></i>
                    <i class="fas fa-moon transition-all ease-in-out border-2 border-blue-600  text-blue-600 lg:px-5 px-3 py-2 rounded-full lg:text-base text-base hover:bg-gray-50" :class="isDark ? 'block' : 'hidden'"> <span class="hidden lg:inline-block pl-0 lg:pl-2 font-light"> 다크모드</span></i>
                </button> -->

                <button
                  class="
                    p-4
                  text-third 
                  dark:text-primary 
                  dark:bg-zinc-700 dark:hover:bg-zinc-600 bg-zinc-300 hover:bg-zinc-200
                    focus-visible:ring-2 focus-visible:ring-green-400
                    rounded-full
                    mt-4
                  "
                  @click="toggleDarkMode"
                >
                  <svg
                    v-if="dark"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <svg
                    v-else
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                    />
                  </svg>
                  
                </button>
            </div>            
          </div>
        </div>
        <!--사이드메뉴-->
        <div class="flex flex-col items-start space-y-3 lg:mt-4 lg:mb-4">
          <!-- <router-link :to="route.path" :class="`transition-all ease-in-out hover:text-primary hover:bg-blue-50 dark:hover:bg-gray-800 px-4 py-2 rounded-full  cursor-pointer dark:text-gray-300 ${router.currentRoute.value.name == route.name ? 'text-primary dark:text-primary'  : ''}`" v-for="route in routes" :key="route">
            <div v-if="route.meta.isMenu">
                <i :class="route.icon"></i> 
                <span class="ml-5 text-xl font-light hidden lg:inline-block">{{route.title}}</span>
            </div>
          </router-link>-->         
        </div>
      </div>
    </div>    
    <!--메인섹션-->
    <div class="lg:w-5/6 w-full flex-1 min-h-full scroll-smooth overflow-y-auto lg:px-16 px-6 items-center text-center">      
      <router-view v-slot="{ Component }">
        <transition name="route" mode="out-in">
          <component :is="Component"></component>
        </transition>
      </router-view>
      <Loading  :loading="$store.state.LoadingStatus"></Loading>
    </div>
  </div>
</template>

<script>
import { ref,onBeforeMount,onMounted, computed } from 'vue'
import { useStore, mapGetters } from 'vuex'
import router from '../router'
import Loading from '../components/common/Loading.vue'

export default {
  components:{
    Loading
  },
  setup(){
    const routes = ref([])

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
    });

    return {
      routes,
      router, 
      isDark,
      isShow,
      changeDark, 
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