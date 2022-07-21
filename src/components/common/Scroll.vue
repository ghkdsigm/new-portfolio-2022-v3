<template>
  <div>
    <div id="target" @click="handleScroll">

    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      isScrollDown: false,
      scrollTop:0,
      target: null,
    }
  },
  mounted(){
    this.target = document.querySelector('#target');
    this.target.addEventListener('scroll', this.handleScroll);
  },

  beforeUnmount(){
    this.target.removeEventListener('scroll', this.handleScroll)
  },

  methods:{
    handleScroll:function(e){
      this.scrollTop = e.target.scrollTop;
      if(this.scrollTop > 400){
        this.isScrollDown = true;
      } else {
        this.isScrollDown = false;
      }
    }
  }
}
</script>

<style>

</style>