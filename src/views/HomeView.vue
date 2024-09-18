<template>
  <div class="container" id="home">
    <!-- <section class="row" id="landing"></section> -->
  </div>
  <div class="home">
    <HelloWorld msg="
    An Aspiring Web Developer"/>
    <SpinnerComp v-if="loading" />
  </div>
  <!-- <about-view/> -->
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import SpinnerComp from '@/components/SpinnerComp.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    SpinnerComp
  },
  data() {
    return {
      loading: true 
    }
  },
  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 4000)
  }
}
</script>
<style>
.home{
  text-shadow: 5px 5px 7px black;
  position: relative; 
  background-size: cover;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeIn 5s ease-in-out;
  height: 100vh; 
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity:1;
  }
}
@media screen and (max-width:780px) {
    *{
        color: white;
      }
      .container{
        display: grid;
        
    }
    .home{
      height: 60vh;
    }
    
}
</style>