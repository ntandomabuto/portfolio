<template>
  <div class="container" id="home">
    <!-- <section class="row" id="landing"></section> -->
  </div>
  <div class="home">
    <HelloWorld msg="Hello I am Ntando Mabuto a Web Developer"/>
  </div>
  <about-view/>
</template>
<!-- <footer-comp>

</footer-comp> -->
<!-- <navbar-comp/>
<spinner-comp/> -->

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'


export default {
  name: 'HomeView',
  components: {
    HelloWorld,
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
  animation: fadeIn 2s ease-in-out;
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

</style>
