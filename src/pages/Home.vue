<template>
  <div>
    <!--스크롤 애니메이션 버튼-->
    <div
      class="flex h-20 absolute bottom-0 scrollAni lg:visible invisible"
      ref="scrollAni"
    >
      <div class="flex">
        <!-- <div class='icon-scroll'></div> -->
        <svg class="arrows">
          <path
            class="a1 dark:stroke-primary stroke-third"
            d="M0 0 L30 32 L60 0"
          ></path>
          <path
            class="a2 dark:stroke-primary stroke-third"
            d="M0 20 L30 52 L60 20"
          ></path>
          <path
            class="a3 dark:stroke-primary stroke-third"
            d="M0 40 L30 72 L60 40"
          ></path>
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
      <div
        class="max-h-[800px] overflow-hidden relative mainImg"
        @click="worksTo"
      >
        <!-- <img class="align-top" src="https://raw.githubusercontent.com/ghkdsigm/new-portfolio-2022/main/src/assets/images/worksImg.png" alt="design image" /> -->
        <img
          class="align-top"
          src="@/assets/images/worksImg.jpg"
          alt="design image"
        />
        <div>
          <div class="txtwrapper">
            <div class="focus">Works</div>
            <div class="mask">
              <div class="text">Works</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="my-20">
      <Comment></Comment>
    </div>
  </div>
</template>

<script>
import HeadLineVue from '../components/HeadLine.vue';
import Introduce from '../components/Introduce.vue';
import Pictures from '../components/Pictures.vue';
import Skills from '../components/Skills.vue';
import router from '../router';
import { useRouter } from 'vue-router';
import store from '../store';
import Comment from '../components/Comment.vue';

import { onMounted, ref, computed } from 'vue';
export default {
  props: ['scrollRight'],
  components: {
    HeadLineVue,
    Introduce,
    Pictures,
    Skills,
    Comment,
  },
  setup(props, context) {
    const route = useRouter();
    const worksTo = () => {
      route.push('/workintro');
    };

    return {
      worksTo,
    };
  },
};
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
  border-top: 25px solid #0d2438;
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

@keyframes arrow {
  0% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  80% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

@-webkit-keyframes arrow /*Safari and Chrome*/ {
  0% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  80% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

.arrows path.a1 {
  animation-delay: -1s;
  -webkit-animation-delay: -1s; /* Safari 和 Chrome */
}

.arrows path.a2 {
  animation-delay: -0.5s;
  -webkit-animation-delay: -0.5s; /* Safari 和 Chrome */
}

.arrows path.a3 {
  animation-delay: 0s;
  -webkit-animation-delay: 0s; /* Safari 和 Chrome */
}
.mainImg > div {
  position: absolute;
  top: 0;
  background: #000000c9;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: none;
}
.mainImg:hover > div {
  display: flex;
}

@-webkit-keyframes mask {
  to {
    transform: translateX(170px);
  }
}

@keyframes mask {
  to {
    transform: translateX(170px);
  }
}
@-webkit-keyframes text {
  to {
    transform: translateX(-170px);
  }
}
@keyframes text {
  to {
    transform: translateX(-170px);
  }
}

.txtwrapper {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 255px;
  height: 70px;
  white-space: nowrap;
}

.focus {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-family: Arial;
  text-transform: uppercase;
  letter-spacing: 2px;
  filter: blur(3px);
  font-size: 58px;
  opacity: 0.6;
  color: #fff;
}

.mask {
  position: absolute;
  left: -5px;
  top: -2px;
  width: 70px;
  height: 100%;
  font-family: Arial;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 58px;
  clip: rect(0px, 70px, 75px, 0px);
  background: linear-gradient(#fff, #fff 0) no-repeat,
    linear-gradient(to right, #fff, #fff 0) no-repeat,
    linear-gradient(to right, #fff, #fff 0) bottom left no-repeat,
    linear-gradient(to right, #fff, #fff 0) bottom left no-repeat,
    linear-gradient(#fff, #fff 0) bottom right no-repeat,
    linear-gradient(#fff, #fff 0) bottom right no-repeat,
    linear-gradient(#fff, #fff 0) top right no-repeat,
    linear-gradient(#fff, #fff 0) top right no-repeat;
  background-size: 10px 2px, 2px 10px, 2px 10px, 10px 2px, 2px 10px, 10px 2px,
    10px 2px, 2px 10px, 10px 2px;
  color: #fff;
  padding: 5px;
  transform: translateX(0);
  box-sizing: border-box;
  -webkit-animation: mask 2.5s ease infinite alternate;
  animation: mask 2.5s ease infinite alternate;
}

.text {
  transform: translateX(0);
  -webkit-animation: text 2.5s ease infinite alternate;
  animation: text 2.5s ease infinite alternate;
  height: 100%;
  width: 100%;
  top: -12px;
  position: relative;
}
</style>
