<template>
  <div class="flex h-screen mx-auto relative container">
    <div class="" id="noise"></div>
    <!--사이드섹션-->
    <div class="lg:w-1/6 w-0 lg:flex hidden py-5 justify-center h-screen items-center border-gray-200 dark:border-gray-800 text-center">
      <div class="flex flex-col text-center">
        <!--홈 로고 링크-->
        <router-link to="/">
            <i class="fab fa-twitter transition-all ease-in-out lg:text-3xl text-xl text-third dark:text-third-dark hover:text-dark mb-3"><span class="text-2xl font-light hidden lg:inline-block align-text-top" style="font-family: 'Archivo Black', sans-serif;">Motor H</span></i>
            <p class="dark:text-secondary text-secondary-dark">Fronend Developer</p>
        </router-link>
        <!--다크모드-->
        <div class="relative">
            <!-- <button type="button" class="px-2 mb-1" @click="toggleDarkMode" :class="this.$store.state.darkmode ? 'dark' : ''">
                <i class="far fa-sun transition-all ease-in-out border-2 border-gray-800 text-yellow-50 lg:px-5 px-3 py-2 dark:bg-gray-800 rounded-full lg:text-base text-base dark:hover:bg-opacity-80" :class="isDark ? 'hidden' : 'block'"> <span class="hidden lg:inline-block pl-0 lg:pl-2 text-white font-light"> 라이트모드</span></i>
                <i class="fas fa-moon transition-all ease-in-out border-2 border-blue-600  text-blue-600 lg:px-5 px-3 py-2 rounded-full lg:text-base text-base hover:bg-gray-50" :class="isDark ? 'block' : 'hidden'"> <span class="hidden lg:inline-block pl-0 lg:pl-2 font-light"> 다크모드</span></i>
            </button> -->

            <button
              class="
                p-4
              text-third 
              dark:text-primary 
              dark:bg-zinc-700 bg-zinc-300
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
    <div class="lg:w-5/6 w-full flex-1 min-h-full scroll-smooth overflow-y-auto px-16 items-center text-center">      
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { ref,onBeforeMount,onMounted, computed } from 'vue'
import { useStore, mapGetters } from 'vuex'
import router from '../router'

export default {
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

</style>