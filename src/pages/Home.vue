<template>
  <div>
    <!--스크롤 애니메이션 버튼-->
    <div class="flex h-20 absolute bottom-0 downarrow" ref="downarrow">
      <div class="flex">
        <div class='icon-scroll'></div>
      </div>
    </div>
    <div class="">
      <HeadLineVue></HeadLineVue>
    </div>
    <div class="">
      <Introduce></Introduce>
    </div>
    <div class="my-20">
      <Pictures></Pictures>
    </div>
    <div class="my-20">
      <Skills></Skills>
    </div>
    <div class="my-20">
      <div class="max-h-[800px] overflow-hidden">
        <img class="align-top" src="https://raw.githubusercontent.com/ghkdsigm/new-portfolio-2022/main/src/assets/images/worksImg.png" alt="design image" />
      </div>
    </div>
  </div>
</template>

<script>
import HeadLineVue from '../components/HeadLine.vue'
import Introduce from '../components/Introduce.vue'
import Pictures from '../components/Pictures.vue'
import Skills from '../components/Skills.vue'
export default {
    components:{
        HeadLineVue,
        Introduce,
        Pictures,
        Skills
    }
}
</script>

<style>
.icon-scroll,
.icon-scroll:before {
  position: absolute;
}
.icon-scroll {
  width: 40px;
  height: 70px;
  border-radius: 25px;
}
.icon-scroll:before {
  content: '';
  background: transparent;
  margin-left: -4px;
  top: 8px;
  width: 0; 
  height: 0; 
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  border-top: 25px solid #0D2438;
  border-radius: 4px;
  -webkit-animation-duration: 1.5s;
          animation-duration: 1.5s;
  -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
  -webkit-animation-name: scroll;
          animation-name: scroll;
}
.dark .icon-scroll:before {
  background: transparent;
  border-top: 25px solid #ffb300;
}
@-webkit-keyframes scroll {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(46px);
  }
}
@keyframes scroll {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(46px);
  }
}
</style>