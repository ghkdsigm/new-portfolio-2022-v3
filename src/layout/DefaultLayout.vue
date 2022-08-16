<template>
  <div class="lg:flex block lg:h-screen mx-auto relative container">
    <div class="" id="noise"></div>
    <!--사이드섹션-->
    <div class="lg:w-1/6 w-full lg:flex block py-5 justify-center lg:h-screen items-center border-gray-200 dark:border-gray-800 text-center">
      <div class="flex flex-col text-center justify-between h-full">
        <!--사이드메뉴1-->
        <div></div>
        <!--사이드메뉴2-->
        <div>
          <!--홈 로고 링크-->
          <router-link to="/">
              <i class="fab fa-twitter transition-all ease-in-out text-third dark:text-third-dark hover:text-dark mb-3"><span class="lg:text-3xl text-2xl font-light block lg:inline-block align-text-top" style="font-family: La Belle Aurore;">Motor H</span></i>
              <p class="dark:text-secondary text-secondary-dark lg:text-xl text-lg" style="font-family: 'Squada One', cursive;">Frontend Developer</p>
          </router-link>
          <!--git + 다크모드-->
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
        <!--사이드메뉴3-->
        <div class="flex lg:mb-4 mb-2 justify-center">
          <!--로그인 + 회원가입-->
          <div>
            <router-link to="/login">
              <p v-if="!stateusers" class="dark:text-secondary text-secondary-dark  lg:text-xl text-lg dark:hover:text-primary hover:text-third lg:mt-0 mt-4" @click="onLogout" style="font-family: 'Squada One', cursive;">LOGOUT</p>
              <p v-else class="dark:text-secondary text-secondary-dark  lg:text-xl text-lg dark:hover:text-primary hover:text-third lg:mt-0 mt-4" style="font-family: 'Squada One', cursive;">SIGN IN</p>
            </router-link>
          </div>
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
    <div class="rightWrap lg:w-5/6 w-full flex-1 min-h-full scroll-smooth overflow-y-auto lg:px-16 px-6 items-center text-center" ref="scrollRight">      
      <router-view v-slot="{ Component }">
        <transition name="route" mode="out-in">
          <component :is="Component" :class="router.currentRoute.value.name == 'home' ? 'homeWatch' : 'subWatch'" :scrollRight="scrollRight"></component>
        </transition>
      </router-view>
      <Loading  :loading="$store.state.LoadingStatus"></Loading>
      <!-- Top 버튼 -->
      <div
          ref="scrollTopButton"
          @click="scrollTopbt"
          class="invisible fixed bottom-0 right-0 flex justify-end pb-8 pr-8 transition duration-150 ease-out scrollTopbt"
      > 
          <div
              class="dark:bg-zinc-900 border dark:border-zinc-700 dark:hover:border-primary border-zinc-400 hover:border-third bg-zinc-200 dark:text-gray-400 text-gray-600 dark:hover:text-gray-800 hover:text-white dark:hover:bg-primary hover:bg-third transition xl:w-20 xl:h-20 md:w-16 md:h-16 rounded-full flex items-center justify-center font-medium"
          >
              <button type="button" class="lg:text-2xl text:xl" style="font-family: 'Squada One', cursive;">
                  TOP
              </button>
          </div>
      </div>
      <!-- particle -->
      <Particle class="canvasBG"></Particle>
    </div>
  </div>
</template>

<script>
import { ref,onBeforeMount,onMounted, computed, onBeforeUnmount, watchEffect, onUpdated  } from 'vue'
import { useStore, mapGetters } from 'vuex'
import router from '../router'
import { auth } from '../firebase'
import Loading from '../components/common/Loading.vue'
import Particle from '../components/common/Particle.vue'

export default {
  components:{
    Loading,
    Particle
  },
  setup(){    
    let scrollcheck = ref(false);
    let canvascheck = ref(false);
    let stateusers = ref(false)
    //let canvasBg = ref(false)
    const routes = ref([])
    //스크롤영역
    let scrollRight = ref(0)
    //스크롤버튼
    let scrollTopButton = ref() 
    //스크롤버튼이벤트
    let scrollTopbt = function(){
      let rightWrap = document.querySelector('.rightWrap')        
      return rightWrap.scrollTop = 0
    }    
    //유저정보 vuex에서 가져오기
    const currentUser = computed(() => store.state.user)

    
    //다크모드
    //const isDark = ref(true)
    const store = useStore()
    let isDark = localStorage.getItem('darkMode') == 'true'
    let isShow = localStorage.getItem('darkModeShow') == 'true'
    let changeDark = localStorage.getItem('changeDark') == 'true'

    const currentHome = computed(() => {
      return router.currentRoute.value.path
    })   

    watchEffect(() => {
      // pretend you have a getData getter in store
      const datass = store.state.user;
      if(datass === null) {
        let stateuser = stateusers.value = true
        store.dispatch('toggleStateUser', stateuser)
      } else {
        let stateuser = stateusers.value = false
        store.dispatch('toggleStateUser', stateuser)
      }     

      //메인 다운 애로우 스크롤 수정
      if(scrollRight.value.scrollTop > 1 && currentHome.value == '/'){
        if(!scrollcheck.value){               
          scrollcheck.value = true;
        }
      } 
      else if(scrollRight.value.scrollTop === 0 && currentHome.value == '/') {
        if(scrollcheck.value){               
          scrollcheck.value = false;
          scrollRight.value.scrollTop = 0
        }
      }      
      

      //console.log(currentHome.value)     

      //스크롤영역 좌표 - 홈 downscroll 버튼 
      // if(currentScroll > 0){
      //   scrollAni.style.display = 'none';
      // } else if(currentScroll == 0){
      //   scrollAni.style.display = 'block';
      // }  
      
      //particle 함수
      // let currentHome = router.currentRoute._value.name
      // if(currentHome == 'home'){
      //   console.log(1)
      //   canvasBg.value = false
      // } else {          
      //   console.log(2)
      //   canvasBg.value = true
      // }   
    })

    const onLogout = async (e) => {
      e.preventDefault();
      swal({
        title: "로그아웃",
        text: "정말 로그아웃 하시겠습니까?",
        icon: "warning",
        buttons: [
          '아니요',
          '네'
        ],
        dangerMode: true,
      })
      .then(function(isConfirm) {
        if (isConfirm) {
          swal({
            title: '로그아웃!',
            text: '성공적으로 로그아웃 되었습니다.',
            icon: 'success'
          }).then(function() {
            stateusers.value = true;
            auth.signOut()
            store.commit('SET_USER', null)
            router.replace('/login')
          });
        } else {
          swal("취소", "로그아웃이 취소되었습니다.", "error");
        }
      })
      // if(confirm('로그아웃 하시겠습니다?')){
      //   stateusers.value = true
      //   store.commit('SET_USER', null)
      //   //let stateuser = stateusers.value = true
      //   //store.commit('toggleStateUser', stateuser)
      //   await auth.signOut()
      //   swal("로그 아웃", "성공적으로 로그아웃 되었습니다.", "success");    
      //   await router.replace('/login')
      // }      
    }    
    
    onBeforeMount(()=>{
      //routes.value = router.options.routes
      routes.value = router.options.routes.filter((route) => route.meta.isMenu == true)
    });

    onUpdated(()=>{
      console.log(currentHome.value)
      // let canvasBG = document.getElementsByClassName('canvasWrap')[0]
      // if(currentHome.value == '/'){
      //   canvasBG.style.opacity = '1'
      // } else {
      //   canvasBG.style.opacity = '0'
      // }

      let canvasBG = document.getElementsByClassName('canvasWrap')[0]
      if(currentHome.value == '/' && canvasBG){
        if(!canvascheck.value){
          canvascheck.value = true;
          canvasBG.style.opacity = '1'
        }
      } 
      else if(currentHome.value !== '/' && canvasBG){
        if(canvascheck.value){
          canvascheck.value = false;
          canvasBG.style.opacity = '0'
        }
      }
    })

    onMounted(()=>{            
      // let scrollAni22 = document.getElementsByClassName('scrollAni')[0]
      

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
      let rightWrap = document.querySelector('.rightWrap')          
      

      // window.addEventListener("load",function(){ 
      //   let scrollAni = document.getElementsByClassName('scrollAni')[0] 
      //   scrollAni.style.display ='none';
      // })

      //스크롤 이벤트시 이벤트한번만 되는 전역변수
      //let scrollcheck = true;

      scrollRight.value.addEventListener("scroll", function(){
        //console.log(scrollRight.value.scrollTop)
        scrollTopButton.value.style.display = 'block';
        if (scrollRight.value.scrollTop > 2000) {
            scrollTopButton.value.classList.remove("invisible");            
        }      
        else {
            scrollTopButton.value.classList.add("invisible");
        } 
        
        
        let scrollAni = document.getElementsByClassName('scrollAni')[0]        
        //console.log(scrollRight.value.scrollTop)
        
        if(scrollRight.value.scrollTop > 1 && currentHome.value == '/'){
          if(!scrollcheck.value){               
            scrollcheck.value = true;
            scrollAni.style.display ='none';
          }
        } 
        else if(scrollRight.value.scrollTop === 0 && currentHome.value == '/') {
          if(scrollcheck.value){               
            scrollcheck.value = false;
            scrollAni.style.display ='block';
            scrollRight.value.scrollTop = 0
          }
        } else if(currentHome.value == '/') {
            scrollAni.style.display ='none';
            scrollcheck.value = true;
            scrollRight.value.scrollTop = 0
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
      scrollRight,
      stateusers,
      onLogout,  
      currentHome,
      currentUser,
      scrollcheck,
      canvascheck
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
      ...mapGetters(['dark']),
    },
  
}
</script>

<style scoped>
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

/* @media (max-width: 1024px) {
  .scrollTopbt {    
    width: 100%;
    visibility: visible;
    padding: 0 15px 10px;
    margin: 0 0 30px 0;
    position: relative;
  }
  .scrollTopbt > div {
    width:100%;
    padding:10px 0;
  }
} */
</style>