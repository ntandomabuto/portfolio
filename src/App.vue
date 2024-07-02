<template>
  <navbar-comp/>
  <!-- <router-view/> -->
   <home-view/>
  <about-view/>
  <resume-view/>
  <projects-view/>
  <testimonials-view/>
  <contact-view/>
  <footer-comp/>
  </template>
<script>
import NavbarComp from '@/components/NavbarComp.vue'
import FooterComp from '@/components/FooterComp.vue'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ResumeView from '@/views/ResumeView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import TestimonialsView from '@/views/TestimonialsView.vue'
import ContactView from '@/views/ContactView.vue'
export default{
  components:{
    NavbarComp,
    FooterComp,
    HomeView,
    AboutView,
    ResumeView,
    ProjectsView,
    TestimonialsView,
    ContactView
  }
}
</script>
<style>
body{
  background: rgb(116, 114, 114);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  color: white;

}

nav{
  padding: 30px;

}


nav a {
  font-weight: bold;
  color: white;
  margin: 2px;
}

.nav-item a.exact-active {
  color: #76b942;
}
/* .gif{
  position: relative;
  animation-name: gif;
  animation-duration: 4s;  
  animation-delay: 0;
  animation-fill-mode: backwards; 
} */
/* @keyframes gif{
    from {right: 0px;}
  to {right: 400px;}
} */
</style>
