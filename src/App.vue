<template>
  <navbar-comp/>
  <router-view/>
  <!-- <projects-view/> -->
  <footer-comp/>
</template>
<script>
import NavbarComp from '@/components/NavbarComp.vue'
import FooterComp from '@/components/FooterComp.vue'
// import ProjectsView from '@/views/ProjectsView.vue'
export default{
  components:{
    NavbarComp,
    FooterComp
    // ProjectsView
  }
}
</script>
<style>
/* body{
  background: rgb(116, 114, 114);
} */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  color: white;

}

nav {
  padding: 30px;

}


nav a {
  font-weight: bold;
  color: white;
  margin: 2px;
}

nav a.router-link-exact-active {
  color: #76b942;
}
.gif{
    /* width: 100px;
  height: 100px; */
  position: relative;
  animation-name: gif;
  animation-duration: 4s;  
  animation-delay: 0;
  animation-fill-mode: backwards; 
}
/* @keyframes gif{
    from {right: 0px;}
  to {right: 400px;}
} */
</style>
