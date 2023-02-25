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
          <p class="neon-text lg:text-lg text-base font-light">
            클릭하시면 다양한 WORKS를 보실 수 있습니다.
          </p>
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
.mainImg div {
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
.mainImg div p {
  position: relative;
}
.mainImg div p:before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 1px;
  background: #000;
  transform: scale(0);
  transition: all 0.5s;
}
.mainImg p:before {
  background: #01c9ca;
  transform: scale(1);
}
@keyframes flicker {
  0%,
  18%,
  22%,
  25%,
  53%,
  57%,
  100% {
    text-shadow: 0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff, 0 0 40px #0fa,
      0 0 80px #0fa, 0 0 90px #0fa, 0 0 100px #0fa, 0 0 150px #0fa;
  }

  20%,
  24%,
  55% {
    text-shadow: none;
  }
}

.neon-text {
  animation: flicker 1.5s infinite alternate;
  color: #fff;
}
</style>
