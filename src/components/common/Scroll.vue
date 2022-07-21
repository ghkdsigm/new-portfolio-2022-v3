<template>
  <div>
    <ul>
      <li v-for="(aa, index) in 5" :key="index">
        <div style="margin:500px 0 500px">
          ddddddddddddddddddddd
        </div>
      </li>
    </ul>
    <a @click="scrollTop" v-show="visible" class="bottom-right"> Top </a>
  </div>
</template>

<script>
export default {
  data(){
    return {
      visible: false,
    }
  },
  mounted(){
    
  },

  beforeMount() {
    window.addEventListener("scroll", this.scrollListener);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.scrollListener);
  },

  methods:{
    scrollTop() {
      this.intervalId = setInterval(() => {
        if (window.pageYOffset === 0) {
          clearInterval(this.intervalId);
        }
        window.scroll(0, window.pageYOffset - 50);
      }, 2);
    },
    scrollListener(e) {
      this.visible = window.scrollY > 1000;
    },
    scrollToElement() {
      let element = document.getElementById("toEls");
      element.scrollIntoView({ behavior: "smooth", block: "end" });
    },
  }
}
</script>

<style>
.scrollIcon {
    position: absolute;
    bottom: 50px;
    left: 0;
    right: 0;
    margin: 0 auto;
    text-align: center;
    width: 50px;
    height: 80px;}
    .line {
      width: 10px;
      height: 2px;
      background: #fff;
      position: absolute;
      left: 50%;
      top: 32px;
      text-align: center;
      margin-left: -8px;
    }
    .up  span {
        position: absolute;
        top: 5px;
        left: 50%;
        width: 18px;
        height: 18px;
        margin-left: -12px;
        border-left: 1px solid #fff;
        border-bottom: 1px solid #fff;
        -webkit-transform: rotate(135deg);
        transform: rotate(135deg);
        -webkit-animation: sdb 3s infinite;
        animation: sdb 3s infinite;
        opacity: 0;
        box-sizing: border-box;      
      }

      
    .down span {
      position: absolute;
      top: 0;
      left: 50%;
      width: 18px;
      height: 18px;
      margin-left: -12px;
      border-left: 1px solid #fff;
      border-bottom: 1px solid #fff;
      -webkit-transform: rotate(-45deg);
      transform: rotate(-45deg);
      -webkit-animation: sdb 3s infinite;
      animation: sdb 3s infinite;
      opacity: 0;
      box-sizing: border-box;       
    }
.bottom-right {
  position: fixed;
  bottom: 5%;
  right: 5%;
  z-index: 9999;
  background: #000;
  color: #fff;
  padding: 20px;
  border-radius: 55%;
  align-items: center;
  font-weight: 500;
  font-size: 1.2rem;
  border: 1px solid #fff;
}
</style>