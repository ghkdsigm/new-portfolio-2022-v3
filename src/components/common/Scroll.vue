<template>
  <div>
    <!-- invisible -->
    <div
        ref="scrollTopButton"
        @click="scrollTopbt"
        class="fixed bottom-0 right-0 flex justify-end pb-3 pr-5 transition duration-150 ease-out"
    > 
        <div
            class="text-gray-400 hover:text-blue-400 transition"
        >
            <button type="button">
                Scroll to top
            </button>
        </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref, onMounted, onBeforeUnmount } from 'vue'

export default {
  setup() {
    let scrollTopButton = ref()

    let scrollTopbt = function(){
      let rightWrap = document.querySelector('.rightWrap')        
      rightWrap.scrollTop = 0
    }  

    onMounted(()=>{
      window.addEventListener("scroll",function(){
        if (rightWrap.scrollY > 0) {
            console.log(rightWrap.scrollY)
            scrollTopButton.value.classList.remove("invisible");
        } else {
            scrollTopButton.value.classList.add("invisible");
        }
      })      
    })

    onBeforeUnmount(()=>{
      window.removeEventListener("scroll",function(){
        if (window.scrollY > 0) {
            console.log(1)
            scrollTopButton.value.classList.remove("invisible");
        } else {
            scrollTopButton.value.classList.add("invisible");
        }
      })
    })
    return {
      scrollTopButton,
      scrollTopbt
    }
  },
}
</script>

<style scoped>
button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}
</style>