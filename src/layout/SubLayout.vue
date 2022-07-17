<template>
  <div class="lg:flex block lg:h-screen mx-auto relative container">
    <div class="" id="noise"></div>  
    <!--메인섹션-->
    <div class="w-full flex-1 min-h-full scroll-smooth overflow-y-auto lg:px-16 px-6 items-center text-center">      
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