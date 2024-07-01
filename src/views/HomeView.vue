<template>
  <div class="container" id="home">
    <section class="row" id="landing"></section>
  </div>
  <div class="home">
    <HelloWorld msg="Hello I am Ntando Mabuto an Aspiring Web Developer"/>
  </div>
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
    HelloWorld
  }
}
</script>
