<template>
  <div>
    <!--스크롤 애니메이션 버튼-->
    <div class="flex h-20 absolute bottom-0 scrollAni lg:visible hidden">
      <div class="flex">
        <!-- <div class='icon-scroll'></div> -->
        <svg class="arrows">
          <path class="a1 dark:stroke-primary stroke-third" d="M0 0 L30 32 L60 0"></path>
          <path class="a2 dark:stroke-primary stroke-third" d="M0 20 L30 52 L60 20"></path>
          <path class="a3 dark:stroke-primary stroke-third" d="M0 40 L30 72 L60 40"></path>
        </svg>
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

<style scope>
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

.arrows {
	width: 60px;
	height: 72px;
	position: absolute;
	left: 50%;
	margin-left: -30px;
	bottom: 20px;
}

.arrows path {
	/* stroke: #2994D1; */
	fill: transparent;
	stroke-width: 1px;	
	animation: arrow 2s infinite;
	-webkit-animation: arrow 2s infinite; 
}

@keyframes arrow
{
0% {opacity:0}
40% {opacity:1}
80% {opacity:0}
100% {opacity:0}
}

@-webkit-keyframes arrow /*Safari and Chrome*/
{
0% {opacity:0}
40% {opacity:1}
80% {opacity:0}
100% {opacity:0}
}

.arrows path.a1 {
	animation-delay:-1s;
	-webkit-animation-delay:-1s; /* Safari 和 Chrome */
}

.arrows path.a2 {
	animation-delay:-0.5s;
	-webkit-animation-delay:-0.5s; /* Safari 和 Chrome */
}

.arrows path.a3 {	
	animation-delay:0s;
	-webkit-animation-delay:0s; /* Safari 和 Chrome */
}
</style>